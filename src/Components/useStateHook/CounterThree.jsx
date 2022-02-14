// example of useState hook with objects


import React, { useState } from 'react'

const CounterThree = () => {
    const [name, setName] = useState({
        firstName: "",
        lastName: "",
    })
    return (
        <div>
            CounterThree

            <div>
                <form>
                    {/* initially there is a problem here, uncomment the code and see for yourself */}
                    {/* <input type="text" value={name.firstName} onChange={(event) => { setName({ firstName: event.target.value }) }} />
                  <br />
                  <input type="text" value={name.lastName} onChange={(event)=>{setName({lastName: event.target.value})} }/>
                  <p>Your first name is: {name.firstName}</p>
                  <p>Your last name is: {name.lastName}</p>
                  <p>{JSON.stringify(name)}</p> */}

                    {/* the weird behavior is because, useState doesn't automatically merges and updates the object */}
                    {/* this can be overcome by using the spread operator */}


                    <input
                        type="text"
                        value={name.firstName}
                        onChange={(event) => {
                            setName({ ...name, firstName: event.target.value })
                        }} />
                    <br />
                    <input
                        type="text"
                        value={name.lastName}
                        onChange={(event) => {
                            setName({ ...name, lastName: event.target.value })
                        }} />
                    <p>Your first name is: {name.firstName}</p>
                    <p>Your last name is: {name.lastName}</p>

                </form>
            </div>
        </div>
    )
}

export default CounterThree


// a state variable can be a string, a number, a boolean , an object and an array.