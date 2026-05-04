import { Component } from "react";
import { Col, Card } from "react-bootstrap";

class SingleBook extends Component {
  // // // Aggiungo lo stato per sapere se il libro è selezionato o no.
  // // state = {
  // //   selected: false,
  // }; // Ho commentato o stato interno poichè elevato a Booklist
  render() {
    return (
      <Col xs={12} md={6} lg={4} xl={3} key={this.props.libro.asin}>
        <Card
          className="h-100 shadow-sm"
          // Se il libro è selezionato, applico dello stile aggiuntivo per evidenziarlo
          style={{
            // Confronto il MIO asin con quello selezionato nel genitore
            border:
              this.props.selectedAsin === this.props.libro.asin
                ? "3px solid red"
                : "1px solid gray",
          }}
          // Quando clicco, chiamo la funzione che mi ha passato BookList
          onClick={() => this.props.changeSelectedAsin(this.props.libro.asin)}
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
            <Card.Text className="mt-auto"> Prezzo: {this.props.libro.price} €</Card.Text>
            {/* <Button variant="success" className="mb-auto">
              Maggiori Info
            </Button> */}
            {/* se selected è vero, mostra CommentArea */}
            {/* {this.state.selected && (
              <CommentArea asin={this.props.libro.asin} />
            )} */}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
