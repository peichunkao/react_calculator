import React, { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const addingMethod = (addNum) => setCounter(counter + addNum);
    const counterStyle = { fontSize: "50px", padding: "15px 30px", display:"block" };

    return (
        <div className='counter'>
            {/* <button onClick={increment}>+1</button> */}
            <CounterButton addingMethod={addingMethod} addNum={1} numString={"1"}/>
            <CounterButton addingMethod={addingMethod} addNum={5} numString={"5"}/>
            <CounterButton addingMethod={addingMethod} addNum={10} numString={"10"}/>
            <span style={counterStyle}>{counter}</span>
            <button className='resetButton' onClick={()=>setCounter(0)}>Reset</button>
        </div>
    )
}

export default Counter