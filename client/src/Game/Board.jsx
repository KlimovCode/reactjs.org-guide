import React from 'react'
import {Square} from './Square'

export class Board extends React.Component {
  const n = 0
  renderRow(num) {
    return (
      <div className="row">
        <Square value={num} />    
      </div>
    )
  }
  renderBoard() {
    let result = []
    for(let i=0; i<3; i++) {
      result.push(this.renderRow(i))
    }
    return result
  }

  render() {
    return (
      <div>
        {this.renderBoard()}  
      </div>
    )
  }
}
