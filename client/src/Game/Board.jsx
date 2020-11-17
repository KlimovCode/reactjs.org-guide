import React from 'react'
import Square from './Square'
import s from './Game.module.css'

export class Board extends React.Component {
  constructor() {
    super()
    this.state = {
      squares: Array(9).fill(null),
      isXnext: true
    }
  }
  renderSquare(num) {
    return <Square 
              num={num}
              value={this.state.squares[num]}
              handleClick={this.handleClick.bind(this)} 
            />
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
      if (squares[a] && 
          squares[a] === squares[b] && 
          squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  handleClick(e) {
    let id = e.target.value
    let squares = this.state.squares.slice()
    squares[id] = this.state.isXnext ? 'X' : 'O'
    this.setState({
      squares,
      isXnext: !this.state.isXnext
    })
  }

  render() {
    return (
      <div className={s.game}>
        <h1>Game</h1>
        <p>
          Next player : {this.state.isXnext ? 'X' : 'O'}
        </p>
        <div className={s.row}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={s.row}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={s.row}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}
