import React from 'react'
import './CounterButton.css'
import PropTypes from 'prop-types'
const CounterButton = ({ addingMethod, addNum, numString }) => {
    // const counterStyle = { fontSize: "50px", padding: "15px 30px" };
    return (
        <div>
            <button onClick={() => addingMethod(addNum)}>+{numString}</button>
            <button onClick={() => addingMethod(-addNum)}>-{numString}</button>
        </div>

    )
}
CounterButton.prototype = {
    by: PropTypes.string
}

CounterButton.defaultProps = {
    by: 4
}


export default CounterButton