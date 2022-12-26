import React from 'react';
import { useParams, Link } from 'react-router-dom';

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
                    <h4>Capital: {country.capital}</h4>
                    <h5>Area: {country.area} km²</h5>
                    <h6>Borders:</h6>

                    {country.borders.length === 0 ? 'The country has no borders.' :
                        country.borders.map((alpha3CodeOfBorder, index) => {
                            const matchingCountry = countries.find(country => {
                                return country.alpha3Code === alpha3CodeOfBorder;
                            });
                            const borderCountry = matchingCountry.name.common;
                        return (
                            <div key={index}>
                                <Link 
                                    to={`/${alpha3CodeOfBorder}`}
                                    style={{textDecoration: 'none'}}
                                > {borderCountry}</Link>
                            </div>
                        )
                    })}

                </div>
            )
        })
    }

 
    </div>
  )
}

