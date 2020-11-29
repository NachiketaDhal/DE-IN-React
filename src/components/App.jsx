import React, {useState} from "react";

function App() {
 var [count, setCount] = useState(0);   // count=0, setCount=function()
//  console.log(state[0]);  state[0]=0

function increase(){
  // count += 1;
  setCount(count + 1);
}

function decrease(){
  setCount(count - 1);
}

  return (
    <div className="container">
    {/* <h1>{state[0]}</h1> */}
    <h1>{count}</h1>
    <button onClick={decrease}>-</button>
    <button onClick={increase}>+</button>
  </div>
  );
}

export default App;
