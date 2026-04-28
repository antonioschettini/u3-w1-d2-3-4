import Alert from "react-bootstrap/Alert";

function MyAlert() {
  return (
    <Alert variant="success">
      <Alert.Heading className="text-center mb-3">
        Siamo felici di vederti!, Benvenuto nella Libreria Epicode!
      </Alert.Heading>
      <p>
        È un piacere averti qui nella nostra libreria. Abbiamo preparato per te
        una selezione dei migliori libri. Prenditi tutto il tempo che ti serve
        per esplorare i nostri scaffali digitali e trovare la tua prossima
        lettura.
      </p>
      <hr />
      <p className="mb-0">
        Se non sai da dove iniziare, prova a guardare i nostri titoli più
        popolari!
      </p>
    </Alert>
  );
}

export default MyAlert;
