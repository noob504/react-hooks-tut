import React from 'react'

import './App.css';
import Counter from './Components/Counter/Counter.jsx';
import CounterTwo from './Components/CounterTwo/CounterTwo.jsx';
// import CounterThree from './Components/CounterThree/CounterThree.jsx';
import CounterFour from './Components/CounterFour/CounterFour.jsx';

const App = () => {
  return (
    <div className="App">
      App
      {/* <Counter /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      <CounterFour />
    </div>
  )
}

export default App