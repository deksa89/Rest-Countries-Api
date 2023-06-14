import React, {useState} from 'react'
import data from '../data/data.json'
import { Link } from 'react-router-dom'
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
    const [filteredRegion, setFilteredRegion] = useState('Filter by region')

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

    const handleFilterChange = (e) => {
        const selectedRegion = e.target.value;
        setFilteredRegion(selectedRegion);

        if (selectedRegion === 'filter-by-region') {
            setFilteredCountries(data)
        } else {
            const filteredCountries = data.filter((country) => country.region === selectedRegion);
            setFilteredCountries(filteredCountries)
        }
    }


  return (
    <div className='countries-list'>
        <div className='countries-list__search-filter'>
            <form className='countries-list__form' onSubmit={handleSearchSubmit}>
                <input className={`countries-list__input-${theme === 'dark' ? 'dark' : 'light'}`} type='text' placeholder='Search for a country...' value={searchTerm} onChange={handleSearchChange} />
                <button type="submit" className={`countries-list__submit-button-${theme === 'dark' ? 'dark' : 'light'}`}>
                    <FontAwesomeIcon icon={faSearch} size='2x' />
                </button>
            </form>
            <select 
                name="regions" 
                id="regions"
                onChange={handleFilterChange}
                value={filteredRegion}
                className={`countries-list__select-${theme === 'dark' ? 'dark' : 'light'}`}
                >
                    <option value='filter-by-region'>Filter by region</option>
                    <option value='Africa'>Africa</option>
                    <option value='Americas'>Americas</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='Oceania'>Oceania</option>
            </select>
        </div>

      <ul className='countries-list__list'>
        {filteredCountries.map((country) => (
            <Link to={`/country/${country.name}`} key={generateRandomId()} className={`countries-list__country-${theme === 'dark' ? 'dark' : 'light'}`}>
                <img className='countries-list__img' src={country.flag} alt={country.name} />
                <div className='countries-list_country-info'>
                    <li className='countries-list__name'>{country.name}</li>
                    <li className='countries-list__data'>Population: <p className={`countries-list__data-results-${theme === 'dark' ? 'dark' : 'light'}`}>{country.population.toLocaleString()}</p></li>
                    <li className='countries-list__data'>Region: <p className={`countries-list__data-results-${theme === 'dark' ? 'dark' : 'light'}`}>{country.region}</p></li>
                    <li className='countries-list__data'>Capital: <p className={`countries-list__data-results-${theme === 'dark' ? 'dark' : 'light'}`}>{country.capital}</p></li>
                </div>
            </Link>
        ))}
      </ul>
    </div>
  )
}

export default CountriesList