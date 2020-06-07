import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export class Square extends React.Component {
    render() {
        return (
            <button
                className="square"
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}

export class Board extends React.Component {
    renderSquare(i) {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }


}

export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            stepNumber: 0,
            xIsNext: true
        }
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    jumpTo(step) {
        this.setState({
            ...this.state,
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    handleClick(i) {
        const newState = JSON.parse(JSON.stringify(this.state))
        const history = newState.history.slice(0, newState.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = newState.xIsNext ? 'X' : 'O';
        newState.history = [...history, { squares: squares }];
        newState.stepNumber = history.length;
        newState.xIsNext = !newState.xIsNext;
        this.setState(newState);
    }

    render() {
        const { history } = this.state;
        const current = history[this.state.stepNumber];
        const winner = this.calculateWinner(current.squares);
        const nextPlayer = this.state.xIsNext ? 'X' : 'O';
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = `Next player: ${nextPlayer}`;
        }

        const moves = history.map((element, index) => {
            const desc = index ?
                'Go to move #' + index :
                'Go to game start';
            return (
                <li key={index}>
                    <button onClick={() => this.jumpTo(index)}>{desc}</button>
                </li>
            );
        });

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
