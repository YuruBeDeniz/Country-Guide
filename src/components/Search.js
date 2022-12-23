import React from 'react';

export default function Search({setSearch}) {
  

  return (
    <div className=''>
        <input
          type='search'
          onChange={e => setSearch(e.target.value)}
          placeholder='search for a country..'
          style={{marginLeft: '15px', marginBottom:'15px'}} />
    </div>
  )
}

