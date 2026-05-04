import { Component } from "react";
import { Spinner, Alert } from "react-bootstrap";
import CommentsList from "../components/CommentsList";
import AddComment from "../components/AddComment";

class CommentArea extends Component {
  state = {
    comments: [], // Qui salveremo la lista dei commenti che arrivano dal server.
    isLoading: false, // Diventerà true mentre aspettiamo la risposta.
    isError: false, // Diventerà true se qualcosa va storto.
  };

  // Questa funzione viene chiamata da sola appena il componente appare
  componentDidMount = () => {
    if (this.props.asin) {
      this.getComments();
    }
  };

  // Adesso attivo il componentdidupdate per ogni volta che booklist gli passa un nuovo asin
  componentDidUpdate = (prevProps) => {
    // IMPORTANTE: Devo controllare se l'ASIN è davvero diverso da quello di prima.
    // // Se non faccio questo controllo, l'app entra in un loop infinito!
    if (prevProps.asin !== this.props.asin) {
      this.getComments();
    }
  };
  getComments = async () => {
    this.setState({ isLoading: true }); // Mostriamo lo spinner mentre aspettiamo la risposta.
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzM2E2NGYwNDIwZDAwMTUxNTVhNjEiLCJpYXQiOjE3Nzc1NDc4NzYsImV4cCI6MTc3ODc1NzQ3Nn0.qQzs0E2KpWLjJyx3prcC6DD4L4xxHoGe2Pfk9ct8G6o",
          },
        },
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({ comments: data, isLoading: false, isError: false });
      } else {
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log("errore nella fetch", error);
      this.setState({ isLoading: false, isError: true });
    }
  };

  render() {
    return (
      <div className="mt-3 text-dark" onClick={(e) => e.stopPropagation()}>
        <h6>Recensioni:</h6>
        {this.state.isLoading && (
          <Spinner animation="border" variant="primary" />
        )}
        {this.state.isError && (
          <Alert variant="danger">Errore nel caricamento!</Alert>
        )}

        <CommentsList
          comments={this.state.comments}
          finishUpdate={() => this.getComments()}
        />
        <AddComment
          asin={this.props.asin}
          finishUpdate={() => this.getComments()}
        />
      </div>
    );
  }
}

export default CommentArea;
