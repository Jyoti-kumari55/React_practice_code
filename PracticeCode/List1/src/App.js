import './App.css';
import Product from './Product';


// 1. list is directly rendered without components

  // const numbers = [1,2,3,4,5];
  // const udatedNum = numbers.map((number)  =>{ 
  //   return <li>{number}</li>
  // });
  function App() {
    
   return (
     <div className="App">
        <Product></Product>
       
       </div>
    );
  }

  // 2. rendered the list with the use of components this.props
  
  export default App;
  
