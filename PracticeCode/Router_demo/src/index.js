import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { About, Contact } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element = {<App/>}></Route>
    <Route path="/about" element = {<About/>}></Route>
    <Route path="/contact" element = {<Contact/>}></Route>
  </Routes>
    <App />
  </BrowserRouter>
);


