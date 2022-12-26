import './App.css'; 
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './pages/CountriesList';
import CountryDetails from './pages/CountryDetails';
import axios from 'axios';

function App() {
  const [allCountries, setAllCountries] = useState([]);

  const getAllCountries = () => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
        .then(response => {
            console.log(response.data)
            setAllCountries(response.data);
        })
        .catch(err => console.log(err));
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<CountriesList />} />
      <Route path='/:id' element={<CountryDetails countries={allCountries} />} />
    </Routes>
    </div>
  );
}

export default App;
