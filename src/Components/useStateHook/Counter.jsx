// example of useState hook


import React from 'react'
import { useState } from 'react/cjs/react.development';

const Counter = () => {

    const [count, setCount] = useState(0);

    const clickHandler = () => {
        setCount(count + 1);
        
    }

    return (
        <div>
            Counter

            <p>the count is : {count}</p>
            <button
                onClick={() => { clickHandler() }}
            >Increment Count</button>
        </div>
    )
}

export default Counter;

// the useState hook returns 2 values:
        // the first is the current value of the state
        // the second is the state setter function 