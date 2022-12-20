import React from 'react';
import { useParams } from 'react-router-dom';

export default function CountryDetails({countries}) {
    const { id } = useParams();
    
  return (
    <div>
    {countries
        .filter(country => country.alpha3Code === id)
        .map(country => {
            return (
                <div key={country._id}>
                    <h1>{country.name.common}</h1>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt=''/>
                </div>
            )
        })
    }
    </div>
  )
}
