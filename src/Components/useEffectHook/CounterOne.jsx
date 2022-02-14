import React, { useState, useEffect } from "react";

const CounterOne = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        document.title = `clicked ${count} times`;
        console.log("useEffect Hook was executed");
    }, [count]);

    const countClickHandler = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>CounterOne using useEffect Hook</p>
            <br />
            <input type="text" value={name} onChange={(event) => {
                setName(event.target.value);
            }
            } />

            <button
                onClick={() => {
                    countClickHandler();
                }}
            >{`clicked ${count} times`}</button>
        </div>
    );
};

export default CounterOne;

// useEffect hook handles the tasks which are handled by componentDidMount, componentDidUpdate and componentWillUnmount
// useEffect is executed every time react renders the component.
