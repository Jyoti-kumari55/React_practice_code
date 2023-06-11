
import { useState } from 'react';
import './App.css';

function App() {
      // const [inputValue, setInputValue] = useState("Jyoti");

      // const handleInputChange = (event) => {
      //   setInputValue(event.target.value)
      // };
      // return (
      //   <div className="App">
      //     <input type='text' onChange={handleInputChange}></input>
      //     {inputValue}
      //   </div>

      const [textColor, setTextColor] = useState("Black");

      return (
        <div className='App'>
        <button onClick={() => {
          setTextColor(textColor === "black" ? "red" : "black") ;
        }}
        >
           Show/Hide</button>
        <h1 style={{color: textColor }}>Hi, My name is JYOTI !!</h1>
          
        </div>
      );
  
}

export default App;
