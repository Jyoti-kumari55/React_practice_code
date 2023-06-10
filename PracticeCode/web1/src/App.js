import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState("");

  const handleChange = (event) => {
    setNewData(event.target.value);
  };

  const addTask = () =>{
    const newList = [...data, newData];
    
    setData(newList);
  };

  // const deleteTask = (id) => {
  //   setData(data.filter((task) => task.id !== id));
  // }
  
  return (
    <div className="App">
    <div className='addTask'>
      <input onChange={handleChange}/>
      <button onClick={addTask}>Add Task</button>
    </div>
    <div className='list'>
      {data.map((task) => {
        return (
         
          <h1>{task}</h1>
         
        );
      })}
    </div>
  </div>
  );
}

export default App;
