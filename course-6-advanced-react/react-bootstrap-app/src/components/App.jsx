import "../styles/App.css";
import { Food } from "./Food";
import { CommentForm } from "./CommentForm";
import { ScoreForm } from "./ScoreForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Food />
        <CommentForm />
        <ScoreForm />
      </header>
    </div>
  );
}

export default App;
