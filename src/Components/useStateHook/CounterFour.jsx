import React, { useState } from 'react'

const CounterFour = () => {
    const [items, setItems] = useState([]);

    const addNumberHandler = () => {
        setItems(
            [
                ...items,
                {
                    id: items.length,
                    value: Math.floor(Math.random() * 10) + 1
                }
            ]
        )
    }

    return (
        <div>
            CounterFour
            <div>
                <button
                    onClick={() => { addNumberHandler() }}>Add a number</button>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CounterFour