import React from 'react'

export class Square extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  render() {
    return (
      <button 
        className="square"
        onClick={ () => this.setState({value: 'X'}) }
      >
        {this.state.value}
      </button>
    );
  }
}
