import cupcake from './cupcake.jpg';
import './App.css';

const name = "Namn Namnsson";
const bool = true;
const num = 234;

function MainContent()
{
  return (
    <p>
      <h1>Testing React</h1>
      Name: {name}<br/>
      Bool: {bool ? "It's true!" : "It's false"}<br/>
      Number: {num}<br/>
    </p>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cupcake} className="App-logo" alt="Cupcake" />
        <MainContent/>
      </header>
    </div>
  );
}

export default App;
