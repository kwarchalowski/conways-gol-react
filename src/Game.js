import React from 'react';
import Cell from './Cell';
import './css/Game.css';
import './css/Cell.css';

const CELL_SIZE = 20;
const WIDTH = 1080;
const HEIGHT = 680;
let isMoore = true;
let iterationNumber = 0;


class Game extends React.Component {

    constructor() {
        super();
        this.rows = HEIGHT / CELL_SIZE;
        this.cols = WIDTH / CELL_SIZE;
        this.board = this.makeTheBoardEmpty();
    }


    /**
     * ! Gamestate, very important thing
     *
     */
    state = {
        cells: [],
        isRunning: false,
        interval: 250,
    }


    /**
     * Calculates current element offset from the top-left corner of viewpage
     *
     * @return {*} 
     */
    getElementOffset() {
        const rect = this.boardRef.getBoundingClientRect();
        const doc = document.documentElement;
        return {

            /*
            ! broken, it keeps absolute size, we need NOT to add window.pageXOffset or window.scrollX etc.~
            x: (rect.left + window.pageXOffset) - doc.clientLeft,
            y: (rect.top + window.pageYOffset) - doc.clientTop, */
            
            x: (rect.left) - doc.clientLeft,
            y: (rect.top) - doc.clientTop,
        };
    }


    /**
     * Populate cell list with entire board of dead or alive cells (so it's basically flattened gameboard)
     *
     * @return {*} 
     */
    updateCellsList() {
        let cells = [];
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                if (this.board[y][x]) {
                    cells.push({ x, y });
                }
            }
        }

        return cells;
    }

    /**
     * Make an entire gameboard 'dead' (basically kill every single alive cell and leave the gameboard 'empty')
     *
     * @return {*} 
     */
    makeTheBoardEmpty() {
        let board = [];
        for (let y = 0; y < this.rows; y++) {
            board[y] = [];
            for (let x = 0; x < this.cols; x++) {
                board[y][x] = false;
            }
        }

        return board;
    }

    /**
     * Runs the next iteration of the Game with set interval: calculate neighbors count for every single cell and determine if this cell is dead or alive in the next iteration
     *
     */
    nextIteration() {
        let newBoard = this.makeTheBoardEmpty();
        iterationNumber++;

        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                let neighbors = this.calculateNeighbors(this.board, x, y);
                if (this.board[y][x]) {
                    if (neighbors === 2 || neighbors === 3) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                } else {
                    if (!this.board[y][x] && neighbors === 3) {
                        newBoard[y][x] = true;
                    }
                }
            }
        }

        this.board = newBoard;
        this.setState({ cells: this.updateCellsList() });

        this.timeoutHandler = window.setTimeout(() => {
            this.nextIteration();
        }, this.state.interval);
    }

    /**
     * Starts the game and run next iteration
     *
     */
    runGame = () => {
        this.setState({ isRunning: true });
        this.nextIteration();
    }

    /**
     * Stops the game and change the gamestate
     *
     */
    stopGame = () => {
        this.setState({ isRunning: false });
        if (this.timeoutHandler) {
            window.clearTimeout(this.timeoutHandler);
            this.timeoutHandler = null;
        }
    }

    /**
     * Calculate number of neighbours at point x,y on the board (for one explicit cell)
     *
     * @param {*} board
     * @param {*} x
     * @param {*} y
     * @return {*} 
     */
    calculateNeighbors(board, x, y) {
        let neighbors = 0;
        let dirs = [[]];
        if (isMoore) {
            dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
        } else if (!isMoore) {
            dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];
        }
        for (let i = 0; i < dirs.length; i++) {
            const dir = dirs[i];
            let y1 = y + dir[0];
            let x1 = x + dir[1];

            if (x1 >= 0 && x1 < this.cols && y1 >= 0 && y1 < this.rows && board[y1][x1]) {
                neighbors++;
            }
        }

        return neighbors;
    }
    
    /**
     *  Determine if user clicked on the specific cell on gameboard. Change the state (dead/alive) of clicked cell. Do nothing if clicked outside the board
     *
     * @param {*} event
     */
     actionClick = (event) => {

        const elemOffset = this.getElementOffset();
        const offsetX = event.clientX - elemOffset.x;
        const offsetY = event.clientY - elemOffset.y;

        const x = Math.floor(offsetX / CELL_SIZE);
        const y = Math.floor(offsetY / CELL_SIZE);

        if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
            this.board[y][x] = !this.board[y][x];
        }

        this.setState({ cells: this.updateCellsList() });
    }

    /**
     * Determine if user changed the interval value and update it in the gamestate
     *
     * @param {*} event
     */
    actionChangeInterval = (event) => {
        this.setState({ interval: event.target.value });
    }

    /**
     * Determine if user clicked on the 'Clear' button and handle this action
     *
     */
    actionClearButton = () => {
        iterationNumber = 0;
        this.board = this.makeTheBoardEmpty();
        this.setState({ cells: this.updateCellsList() });
    }

    /**
     * Determine if user change the neighborhood mode (Moore/von Neumann) and handle this action
     *
     */
    actionModeButton = () => {
        this.stopGame();
        isMoore = !isMoore;
    }

    /**
     * Randomizes entire gameboard with alive/dead cells with desired (default: 0.6) random ratio
     *
     */
    actionRandomButton = () => {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                this.board[y][x] = (Math.random() >= 0.6);
            }
        }

        this.setState({ cells: this.updateCellsList() });
    }



    /**
     * ! React's render() method, must have
     *
     * @return {*} 
     */
    render() {
        const { cells, interval, isRunning } = this.state;
        return (
            <div>
                <div className="Board"
                    style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px` }}
                    onClick={this.actionClick}
                    ref={(n) => { this.boardRef = n; }}>

                    {cells.map(cell => (
                        <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`} />
                    ))}
                </div>

                <div className="controls">
                    Step interval: <input id="interval" value={this.state.interval} onChange={this.actionChangeInterval} /> ms, iterations: <input id="iterations" value={iterationNumber} type="text" disabled />  <p />
                    {isRunning ?
                        <button className="button" id="btnStop" onClick={this.stopGame}>Stop</button> :
                        <button className="button" id="btnRun" onClick={this.runGame}>Run</button>
                    }

                    {isMoore ?
                        <button className="button" onClick={this.actionModeButton}>Moore</button> :
                        <button className="button" onClick={this.actionModeButton}>Neumann</button>
                    }

                    <button className="button" onClick={this.actionRandomButton}>Random</button>
                    <button className="button" id="btnClear" onClick={this.actionClearButton}>Clear</button>
                </div>
            </div>
        );
    }

}


export default Game;