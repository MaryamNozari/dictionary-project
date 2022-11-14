import "./App.css";
import shecodeslogo from "./shecodeslogo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <img src={shecodeslogo} className="App-logo img-fluid" alt="logo" />
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          Coded by Maryam Nozari and it is open-sourced on{" "}
          <a
            href="https://github.com/MaryamNozari/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Githun Repository{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://curious-cannoli-4de874.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
