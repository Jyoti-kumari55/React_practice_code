import './App.css';

//function App() {

  // *************8 Composing Components *********************//

  // Navbar component
    const Navbar = () =>
    {
      return <h1> This is Navbar.</h1>
    }

    // Sidebar Component
    const Sidebar = () => {
      return <h1> This is Sidebar.</h1>
    }

    //Article List Component
    const ArticleList = () => {
      return <h1> This is Article List.</h1>
    }

    // App Component => App component compose all the component into one.
    const App = () =>{ 
    return (
      <div >
        <Navbar/>
            <Sidebar/>
            <ArticleList/>
        
      </div>
    );
  }


export default App;
