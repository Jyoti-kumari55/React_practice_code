 
import './App.css';

function App() {
                    //**********************CODE 1**************************//

//   const names = ["Jyoti", "Amit", "Sumit", "Praveen", "Advika"];
  
//   return (
//     <div className="App">
//      {
//       names.map((name,key) => {
//         return <li key = {key}> {name}</li>
//       })
//      }
//     </div>
//   );
// }

                //******************************CODE 2 ********************************//


          const myLists = [
            {name: "Peter", age: 34},
            {name: "Sachin", age:23},
            {name:"Kevin", age:25},
            {name:"Dhoni" , age: 67},
            {name: "Jyoti", age:45},
          ];
          return(
            <div className='App'>
              {
               myLists.map((mylist,key) => {
                return <User name = {mylist.name} age= {mylist.age}/>;
               })
              }
                  
            </div>
          )}

          const User = (props) => { //create component
            return 
            (
              <div>{props.name} {props.age}</div>
            );
            }
          

export default App;
