import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import ArticleList from './pages/ArticleList';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className='body' id='page-body'>
      <Routes>
          <Route path='/' element= {<Home />}  />
          <Route path='/about' element= {<About />}/>
          <Route path='/articles' element= {<ArticleList />}  />
          <Route path='/articles/:articleId' element= {<Article />} />
          <Route path='*' element={<NotFoundPage />} />
      </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
