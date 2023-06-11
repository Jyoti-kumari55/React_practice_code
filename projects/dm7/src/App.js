import { useState } from 'react';
import './App.css';


function App() {
 const [count, setCount] = useState(0);
 const increaseCount = ()=>{
  setCount(count + 1)
 };
 const decreaseCount = ()=>{
  setCount(count - 1)
 };
 const setZero = () =>{
  setCount(0)
 };

  return (
    <div className="App">
    {count}
    <button onClick={increaseCount}>Increase Count</button>
    <button onClick={decreaseCount}>Decrease Count</button>
    <button onClick={setZero}>Zero</button>  
    </div>
  );
}

export default App;
