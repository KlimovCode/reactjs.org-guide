import React from 'react'

const Square = (props) => {
  return (
    <button 
      className="square"
      onClick={ props.handleClick }
      value={props.num}
    >
      {props.value}
    </button>
  );
}

export default Square
