import React from 'react';

/**
* ! it has to match CELL_SIZE param in the Game.js
*/
const CELL_SIZE = 20;

class Cell extends React.Component {

    /**
     * ! React's render() method, must have
     *
     * @return {*} 
     */
    render() {
        const { x, y } = this.props;
        return (
            <div className="Cell" style={{
                left: `${CELL_SIZE * x + 1}px`,
                top: `${CELL_SIZE * y + 1}px`,
                width: `${CELL_SIZE - 1}px`,
                height: `${CELL_SIZE - 1}px`,
            }} />
        );
    }
}

export default Cell;