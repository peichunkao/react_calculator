import React from 'react'
import './CounterButton.css'

const CounterButton = ({ addingMethod, addNum, numString }) => {
    // const counterStyle = { fontSize: "50px", padding: "15px 30px" };
    return (
        <div>
            <button onClick={() => addingMethod(addNum)}>+{numString}</button>
            <button onClick={() => addingMethod(-addNum)}>-{numString}</button>
        </div>

    )
}
export default CounterButton