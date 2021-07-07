import React from 'react'; import './Game.css';

const CELL_SIZE = 10;
const WIDTH = 1000;
const HEIGHT = 750;

class Game extends React.Component {
    render() {
        return (
            <div>
                <div className="Board" style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px` }}></div>
            </div>
        );
    }
}


export default Game;