import { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";

class SingleBook extends Component {
  // Aggiungo lo stato per sapere se il libro è selezionato o no.
  state = {
    selected: false,
  };
  render() {
    return (
      <Col xs={12} md={6} lg={4} xl={3} key={this.props.libro.asin}>
        <Card
          className="h-100 shadow-sm"
          // Se il libro è selezionato, applico dello stile aggiuntivo per evidenziarlo
          style={
            this.state.selected
              ? { border: "3px solid red", boxShadow: "0 0 10px red" }
              : {}
          }
          onClick={() => this.setState({ selected: !this.state.selected })} // Al click sulla card, cambio lo stato di selected da true a false o viceversa, permettendo di selezionare o deselezionare il libro.
        >
          <Card.Img
            variant="top"
            src={this.props.libro.img}
            style={{ height: "300px", objectFit: "cover" }}
            alt="card vetrina"
            // Inserisco una altezza fissa e objectFit cover per mantenere le immagini uniformi e ben proporzionate all'interno delle card, evitando distorsioni e garantendo una presentazione visivamente gradevole dei libri in vetrina
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title>{this.props.libro.title}</Card.Title>
            <Card.Text>Categoria : {this.props.libro.category}</Card.Text>
            <Card.Text> Prezzo: {this.props.libro.price} €</Card.Text>
            <Button variant="success" className="mt-auto">
              Maggiori Info
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
