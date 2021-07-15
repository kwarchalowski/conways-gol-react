import './css/App.css';
import Game from './Game';

function App() {
  return (
    <div>
      <div class='title'>
        <h1>
          <a href="https://en.wikipedia.org/wiki/John_Horton_Conway" target="_blank">&#8625; John H. Conway</a>'s <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank">Game of Life</a> in React
        </h1>
        <div class='author'>
        <a href="http://warchalowski.pl/kontakt.html">Karol Warchałowski</a> &copy;2021
      </div>
      </div>


      <Game />


      
    </div>
  );
}

export default App;
