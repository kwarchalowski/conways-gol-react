import './css/App.css';
import Game from './Game';

function App() {
  return (
    <div>
      <div class='title'>
        <h1>
          <a href="https://en.wikipedia.org/wiki/John_Horton_Conway" target="_blank">&#8625; John H. Conway</a>'s <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank">Game of Life</a> in React
        </h1>
      </div>


      <Game />


      <div class='author'>
        Karol 'z0miren' Warchałowski
      </div>
    </div>
  );
}

export default App;
