import React from 'react'
import {Square} from './Square'
import s from './Game.module.css'

export class Board extends React.Component {
  renderSquare(num) {
    return <Square value={num} />
  }

  render() {
    return (
      <div className={s.game}>
        <h1>Game</h1>
        <div className={s.row}>
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className={s.row}>
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
        <div className={s.row}>
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
      </div>
    )
  }
}
