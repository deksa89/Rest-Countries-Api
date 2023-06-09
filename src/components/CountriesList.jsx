import React from 'react'
import data from '../data/data.json'

import './countries.css'

const generateRandomId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const idLength = 8;
    let randomId = '';
  
    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters[randomIndex];
    }
  
    return randomId;
  }

const CountriesList = () => {
    
  return (
    <div>
      <ul className='countries-list__list'>
        {data.map((country) => (
            <div key={generateRandomId()} className='countries-list__country'>
                <img className='countries-list__img' src={country.flag} alt={country.name} />
                <div className='countries-list_country-info'>
                    <li className='countries-list__name'>{country.name}</li>
                    <li className='countries-list__data'>Population: {country.population}</li>
                    <li className='countries-list__data'>Region: {country.region}</li>
                    <li className='countries-list__data'>Capital: {country.capital}</li>
                </div>
            </div>
        ))}
      </ul>
    </div>
  )
}

export default CountriesList