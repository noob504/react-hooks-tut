import React, { useState, useEffect } from 'react';

const IntervalCounter = () => {

    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(count + 1);
        console.log(`count increased by one`);
    };

    useEffect(() => {
        const interval = setInterval(tick, 1000);
    
        return () => {
            clearInterval(interval);
            console.log(`count destroyed`);
        }
    }, [count]);
    
    
    return (
        <div>
            IntervalCounter

            <div className="counter">
                <p>the count is: {count}</p>
            </div>
        </div>
    );
};

export default IntervalCounter;