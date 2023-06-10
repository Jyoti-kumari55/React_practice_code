
import './App.css';

function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupitor", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
  return (
    <div className="App">
      {
        // planets.map((planet, key) => {
        //   if(planet.isGasPlanet)
        //   return <h1>{planet.name}</h1>

        //we can write above code like this also
        planets.map((planet, key) => 
              !planet.isGasPlanet && <h2>{planet.name}</h2>)
        }
      
 </div>
  );
}

export default App;
