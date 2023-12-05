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
      <button onClick={ToggleAnim}>Toggle animation</button><br/><br/>
      Variable 1: {name}<br/>
      Variable 2: {bool ? "is True" : "is False"}<br/>
      Variable 3: {num}<br/>
    </p>
  );
}

let spin = false;

function ToggleAnim()
{
  spin = !spin;
  document.documentElement.style.setProperty("--play-state", spin ? "running" : "paused");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={cupcake} className="App-logo" alt="Cupcake"/>
      <MainContent/>
      </header>
    </div>
  );
}

export default App;
