import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const increment = () => setCounter(counter + 1);
    const counterStyle = { fontSize: "50px", padding: "15px 30px" };

    return (
        <div className='counter'>
            <button onClick={increment}>+1</button>
            <span style={counterStyle}>{counter}</span>
        </div>
    )
}

export default Counter