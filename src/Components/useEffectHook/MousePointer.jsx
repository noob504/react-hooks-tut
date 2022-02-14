import React, { useState, useEffect } from 'react';

const MousePointer = () => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (event) => {
        console.log("Mouse moved");
        setX(event.clientX);
        setY(event.clientY);
    }

    // useEffect(() => {
    //     console.log("useEffect executed");
    //     window.addEventListener("mousemove", logMousePosition);
    // }, [])

    // adding useEffect along with cleanup functionality

    useEffect(() => {
        console.log("useEffect executed, and component is mounted");
        window.addEventListener("mousemove", logMousePosition);

        // this return function is in itself the cleanup part
        return () => {
            console.log("component is unmounted");
            window.removeEventListener("mousemove", logMousePosition);
        }
    }, []);

    return (
        <div>
            Mouse Pointer Co-ordinates
            X - {x}
            Y - {y}
        </div>
    )
}

export default MousePointer