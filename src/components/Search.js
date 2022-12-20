import React from 'react';

export default function Search({setSearch}) {
  

  return (
    <div className='search-field'>
        <input
          type='search'
          onChange={e => setSearch(e.target.value)}
          placeholder='search for a country..' />
    </div>
  )
}
