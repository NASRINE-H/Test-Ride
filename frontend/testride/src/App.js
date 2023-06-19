import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
// import Header from './compenents/Header';
// import Beers from './compenents/Beers';
 import FicheResource from './pages/FicheResource';
//  import apiData from './products.json'
import './App.css';

;

function App() {
   
  return (
    <div className="App">
     
      <BrowserRouter>
     
     
      <Routes>
      <Route path = "/" element = {<Home/>} />
    <Route path="/FicheResource/:id" element={<FicheResource/>}/>
      </Routes>
     
     
      </BrowserRouter>
    </div>
  );
}

export default App;