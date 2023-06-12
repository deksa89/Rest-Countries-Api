import React, {useState} from 'react'
import data from '../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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

const CountriesList = ({theme}) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredCountries, setFilteredCountries] = useState(data)

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const filtered = data.filter((country) => 
            country.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        )
        setFilteredCountries(filtered);
    }

  return (
    <div className='countries-list'>
        <div>
            <form className='countries-list__form' onSubmit={handleSearchSubmit}>
                <input className={`countries-list__input-${theme === 'dark' ? 'dark' : 'light'}`} type='text' placeholder='Search for a country...' value={searchTerm} onChange={handleSearchChange} />
                <button type="submit" className={`countries-list__submit-button-${theme === 'dark' ? 'dark' : 'light'}`}>
                    <FontAwesomeIcon icon={faSearch} size='2x' />
                </button>
            </form>
        </div>
      <ul className='countries-list__list'>
        {filteredCountries.map((country) => (
            <div key={generateRandomId()} className={`countries-list__country-${theme === 'dark' ? 'dark' : 'light'}`}>
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