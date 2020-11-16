import React from 'react'
import Square from './Square'
import s from './Game.module.css'

export class Board extends React.Component {
  constructor() {
    super()
    this.state = {
      squares: Array(9).fill(null)
    }
  }
  renderSquare(num) {
    return <Square 
              value={this.state.squares[num]}
              handleClick={this.handleClick} 
            />
  }

  handleClick(e) {
//    document.wtite(e.target.value)
    alert('hi')
  }

  render() {
    return (
      <div className={s.game}>
        <h1>Game</h1>
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
