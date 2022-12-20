import './App.css';
import {Routes, Route} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [allCountries, setAllCountries] = useState([]);

  const getAllCountries = () => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
        .then(response => response.json())
        .then(data => {
            setAllCountries(data.sort((a,b) => a.name.common.localeCompare(b.name.common)));
        })
        .catch(err => console.log(err))
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<CountriesList countries={allCountries} />} />
      <Route path='/:id' element={<CountryDetails countries={allCountries} />} />
    </Routes>
    </div>
  );
}

export default App;
