import { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    // Lo stato serve per ricordare cosa scriviamo nella barra di ricerca.
    search: "",
    // Nuovo pezzo di stato per tenere traccia del libro selezionato/cliccato partendo dall'Asin
    selectedAsin: null,
  };
  render() {
    return (
      <Container>
        {/* Riga per la barra di ricera */}
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

        {/* Nuova task divido in due colonne */}
        <Row className="g-3 mt-3">
          {/* // Filtro tutti i libri: tenendo conto della ricerca che contiene solo
          // le lettere cercate. */}
          {/* Colonna di sinistra per i libri */}
          <Col md={8}>
            <Row className="g-3">
              {this.props.libri
                .filter((libro) =>
                  libro.title
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase()),
                )
                // Trasformo ogni libro in una componente SingleBook, passando il libro come prop.
                .slice(0, 8)
                .map((libro) => (
                  <SingleBook
                    key={libro.asin}
                    libro={libro}
                    selectedAsin={this.state.selectedAsin}
                    changeSelectedAsin={(asin) =>
                      this.setState({ selectedAsin: asin })
                    }
                  />
                ))}
            </Row>
          </Col>

          {/* Colonna di destra per i commenti */}
          <Col
            md={4}
            className="sticky-top"
            style={{ top: "20px", height: "fit-content" }}
          >
            {/* Se c'è un asin selezionato mostro Commentarea, altrimenti un avviso */}

            {this.state.selectedAsin ? (
              <CommentArea asin={this.state.selectedAsin} />
            ) : (
              <div className="alert alert-info">
                Seleziona un libro per vederne le recensioni
              </div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
