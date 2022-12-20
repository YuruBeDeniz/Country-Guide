import { Link } from 'react-router-dom';

export default function CountriesList({countries}) {
  
  return (
    <div>
        {countries.map(country => (
            <div key={country._id}>
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt=''/>
              <br/>
              <Link to={`/countries/${country.alpha3Code}`} >{country.name.common}</Link>
            </div>
        ))}
    </div>
  )
}
