import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// Importo il json per recuperare i dati dei libri
import libri from "../jsonBooks/fantasy.json";
import { Col } from "react-bootstrap";

function AllTheBooks() {
  // Utilizzo il metodo map per iterare sui libri e creare una card per ogni libro, utilizzando i dati del json per popolare i campi della card
  return libri.map((libro) => {
    return (
      <Col xs={12} md={6} lg={4} xl={3} key={libro.asin}>
        <Card className="h-100 shadow-sm">
          <Card.Img
            variant="top"
            src={libro.img}
            style={{ height: "300px", objectFit: "cover" }}
            alt="card vetrina"
            // Inserisco una altezza fissa e objectFit cover per mantenere le immagini uniformi e ben proporzionate all'interno delle card, evitando distorsioni e garantendo una presentazione visivamente gradevole dei libri in vetrina
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title>{libro.title}</Card.Title>
            <Card.Text>Categoria : {libro.category}</Card.Text>
            <Card.Text> Prezzo: {libro.price} €</Card.Text>
            <Button variant="success" className="mt-auto">
              Maggiori Info
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });
}

export default AllTheBooks;
