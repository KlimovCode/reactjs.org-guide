import React from 'react'
import {Board} from './Board'

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      isXnext: true
    }
  }


  handleClick(i) {
    const history = this.state.history
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    alert(history)
    if(calculateWinner(squares) || squares[i]) return
    
    squares[i] = this.state.isXnext ? 'X' : 'O'
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      isXnext: !this.state.isXnext
    })
  }

  render() {
    const history = this.state.history
    const current = history[history.length - 1]
    const winner = calculateWinner(current.squares)

    let status
    if(winner) {
      status = 'Winner is ' + winner
    } else {
      status = 'Next is ' + (this.state.isXnext ? 'X' : 'O')
    }

    return (
      <div>
        {status}
        <Board 
          squares = {current.squares}
          onClick = {(i) => this.handleClick(i)}
        />
      </div>
    )
  }
}

function calculateWinner(squares) {
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
