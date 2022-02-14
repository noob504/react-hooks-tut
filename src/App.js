import React from 'react'

import './App.css';

// useState Hook imports
// import Counter from './Components/useStateHook/Counter.jsx';
// import CounterTwo from './Components/useStateHook/CounterTwo.jsx';
// import CounterThree from './Components/useStateHook/CounterThree.jsx';
// import CounterFour from './Components/useStateHook/CounterFour.jsx';

// ----------------------------------------------------------------------------- //

// useEffect Hook imports
// import CounterOne from './Components/useEffectHook/CounterOne.jsx';
// import MousePointer from './Components/useEffectHook/MousePointer';
// import MouseContainer from './Components/useEffectHook/MouseContainer';
import IntervalCounter from './Components/useEffectHook/IntervalCounter';

const App = () => {
  return (
    <div className="App">
      App

      {/* useState Hook */}

      {/* <Counter />
      <CounterTwo />
      <CounterThree />
      <CounterFour /> */}

      {/* --------------------------------------- */}

      {/* useEffect Hook */}
      {/* <CounterOne /> */}
      {/* <MousePointer /> */}
      {/* <MouseContainer /> */}
      <IntervalCounter />
    </div>
  )
}

export default App;