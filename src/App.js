import './App.css';
import Game from './Game';

function App() {
  return (
    <div>
      <div class='title'>
        <h1>Conway's basic Game of Life in React</h1>
      </div>


      <Game />


      <div class='author'>
        Karol 'z0miren' Warchałowski
      </div>
    </div>
  );
}

export default App;
