import React from 'react'
import { useState } from 'react'

function UseState() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(prevCount => prevCount+1);
    }
    const decrement = () => {
        setCount(prevCount => prevCount-1);
    }
  return (
    <div>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default UseState