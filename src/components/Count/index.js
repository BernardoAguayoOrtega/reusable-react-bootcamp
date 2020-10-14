import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export const Count = () => {
  const [count, setCount] = useState(0)
  
  const add = () => {
    setCount(count + 1)
  }
  
  const subtract = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  
  return (
    <center>
      <h2>Counter: The Most Novel Example I Could Come Up With</h2>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <input
            type="text"
            aria-label="count"
            value={count}
            onChange={(event) => {
              setCount(event.target.value)
            }}
        />
        <button onClick={add}>+</button>
      </div>
    </center>
  )
}
