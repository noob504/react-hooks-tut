// example of useState hook with previous state

import React, { useState } from 'react';

const CounterTwo = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementClickHandler = () => {
        setCount(count + 1);
    };

    const increment5ClickHandler = () => {
        setCount(count + 5);
    };

    const decrementClickHandler = () => {
        setCount(count - 1);
    };

    const resetClickHandler = () => {
        setCount(initialCount);
    };


    return (

        <div>
            CounterTwo
            <p>the count is: {count}</p>
            <button
                onClick={() => { incrementClickHandler() }}
            >
                Increment
            </button>
            
            <button
                onClick={() => { increment5ClickHandler() }}
            >
                Increment by 5
            </button>
            
            <button
                onClick={() => { decrementClickHandler() }}
            >
                Decrement
            </button>

            <button
                onClick={() => { resetClickHandler() }}
            >
                Reset
            </button>

        </div>
    )
}

export default CounterTwo