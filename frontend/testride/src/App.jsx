import React , {useState,useEffect}from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
// import Header from './components/Header';
// import Beers from './components/Beers';
 import FicheResource from './pages/FicheResource';
 import NotFound from './pages/NotFound'
 import Header from './components/Header';


//  import apiData from './products.json'
import './App.css';

;

function App() {

  const [beers, setBeers] = useState([]);

    useEffect(() => {
     // Effectuer la requête pour récupérer les données des bières
  fetch('https://api.punkapi.com/v2/beers')
     .then(response => response.json())
       .then(data => setBeers(data))
       .catch(error => console.error(error));
   }, [beers]);



  return (
    <div className="App">

      <BrowserRouter>

     <Header/>
      <Routes>
      <Route path = "/" element = {<Home/>} />
    <Route path="/FicheResource/:id" element={<FicheResource/>}/>
    <Route path="/notfound" element={<NotFound/>} />
   
      </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;