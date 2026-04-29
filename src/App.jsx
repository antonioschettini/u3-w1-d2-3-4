import "./App.css";
// inserisco l'import per bootstrap in tutto il progetto
import "bootstrap/dist/css/bootstrap.min.css";
// Inserisco l'import per utilizzare container e row di bootstrap
import { Container } from "react-bootstrap";
//Importo i componenti che ho creato
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyAlert from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";
import history from "./data/history.json";
import horror from "./data/horror.json";
import romance from "./data/romance.json";
import scifi from "./data/scifi.json";

function App() {
  return (
    // Utilizzo una struttura a flex column per avere header, main e footer in colonna e con altezza minima del 100vh per occupare tutta la pagina
    // dando al main flex-grow 1 per farlo espandere e occupare tutto lo spazio disponibile tra header e footer
    <div className="d-flex flex-column min-vh-100">
      <header>
        <MyNav />
        <MyAlert />
      </header>
      <main className="flex-grow-1">
        <Container>
          <h1 className="text-center my-3">
            Esplora la sezione libri in vetrina
          </h1>
          <h5 className="text-center mb-3">
            Puoi visionare i dettagli cliccando sul pulsante "Maggiori Info o
            cliccando direttamente sulla card"
          </h5>
          {/* Inserisco la row per ospitare il component AllTheBooks 
          <Row className="g-4 justify-content-center">
          </Row> */}
          <BookList libri={fantasy} />
          <BookList libri={history} />
          <BookList libri={horror} />
          <BookList libri={romance} />
          <BookList libri={scifi} />
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
