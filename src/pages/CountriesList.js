import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Search from '../components/Search';

export default function CountriesList({countries}) {
    const [search, setSearch ] = useState('');
    const [countriesList, setCountriesList] = useState([])


    const getAllCountries = () => {
        fetch('https://ih-countries-api.herokuapp.com/countries')
        .then(response => response.json())
        .then(data => {
            setCountriesList(data.sort((a,b) => a.name.common.localeCompare(b.name.common)));
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllCountries();
    }, [search]);

    const filteredCountries = countriesList.slice().filter(country => {
        if(country.name.common.toLowerCase().includes(search.toLowerCase())){
            return true;
        }
    });

  return (
    <div>
    <div className="row">
    <div className="col-md-1"><Search setSearch={setSearch}/></div>
    </div>

      
      <div className="row">
      {filteredCountries.map(country => (
          <div className="col-md-8" key={country._id}>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt=''/>
            <br/>
            <Link to={`/${country.alpha3Code}`} >{country.name.common}</Link>
          </div>
      ))}
      </div>
    </div>
  )
}
