import './App.css';


// Decomposing Components
// 1. Her we are creating form using HTML...
//function App() {

                    // const App = () =>{
                    //   return (
                    //     <div>
                    //       <input type='text' placeholder='Enter your name....'/>
                    //       <br/>
                    //       <br/>
                    //       <input type='text' placeholder='Enter your email id....'/>
                    //       <br/>
                    //       <br/>
                    //       <button type='submit'> Submit </button>

                    //      </div>
                    //   );
                    // }
// 2. Here we are creating a Form usinmg Component

    // Input Component
    const Input =() => {
      return (
        <div>
          <input type='text' placeholder='Enter your name....'/>
          <br/>
          <br/>
        </div>
      );
    }

    // Button Component
    const Button = () => {
      return <button type='submit'>Submit</button>
    }

    // App Component = which 
    const App = () => {
      return (
        <div>
          <Input/>
          <Input/>
          <Button/>
        </div>
      ); 
    }

export default App;
