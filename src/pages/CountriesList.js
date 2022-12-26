import { useEffect, useState } from 'react';
import Search from '../components/Search';

export default function CountriesList() {
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
      <Search setSearch={setSearch}/>

      {filteredCountries.map(country => (

        <div key={country._id} className="card mb-3 col-4 mx-auto" style={{maxWidth: '540px'}}>
          <div className="row g-0">
           <div className="col-md-4">
            <img className="img-fluid rounded-start" style={{marginTop: '20px'}} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='' />
           </div>
           <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{country.name.common}</h5>
              <p className="card-text">In order to see the country details, click the button below 👇</p>  
              <a href={`/${country.alpha3Code}`} className="btn btn-primary">Go</a>
            </div>
           </div>
          </div>
        </div>
      ))}
      
    </div>  

  )
}

    
