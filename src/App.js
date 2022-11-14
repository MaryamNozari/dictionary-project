import "./App.css";
import shecodeslogo from "./shecodeslogo.png";
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <img src={shecodeslogo} className="App-logo img-fluid" alt="logo" />
        <main>
          <Dictionary defaultKeyword="sunset"/>
        </main>
        <footer className="App-footer">Coded by Maryam Nozari</footer>
      </div>
    </div>
  );
}

export default App;
