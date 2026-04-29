import { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    // Lo stato serve per ricordare cosa scriviamo nella barra di ricerca.
    search: "",
  };
  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={6} lg={4} xl={3}>
            <h4>Categoria : {this.props.libri[0]?.category || "Tutti"}</h4>
            <Form.Group
              controlId={`search-${this.props.libri[0]?.category || "default"}`}
            >
              <Form.Label>Cerca un libro</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il titolo del libro.."
                value={this.state.search} // Ogni volta che scriviamo qualcosa nella barra di ricerca, aggiorno lo stato con il valore attuale della ricerca.
                onChange={(e) => this.setState({ search: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-3 mt-3">
          {/* // Filtro tutti i libri: tenendo conto della ricerca che contiene solo
          // le lettere cercate. */}
          {this.props.libri
            .filter((libro) =>
              libro.title
                .toLowerCase()
                .includes(this.state.search.toLowerCase()),
            )
            // Trasformo ogni libro in una componente SingleBook, passando il libro come prop.
            .slice(0, 8)
            .map((libro) => (
              <SingleBook key={libro.asin} libro={libro} />
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
