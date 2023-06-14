import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import data from '../data/data.json';
import { BiArrowBack } from "react-icons/bi";

import './country.css'


const getRealName = (borderCode) => {
  const country = data.find((c) => c.alpha3Code === borderCode);
  return country.name;
};

const CountryDetails = ({theme}) => {
  const { name } = useParams();
  const navigate = useNavigate();

  const country = data.find((country) => country.name === name);

  return (
    <div className={`country-detail-${theme === 'dark' ? 'dark' : 'light'}`}>
      <button className={`country-detail__back-button-${theme === 'dark' ? 'dark' : 'light'}`} onClick={() => navigate('/')}><BiArrowBack style={{fontSize: '20px', paddingRight: '10px'}} /> Back</button>

      <div className='country-detail__info'>
        <div className='country-detail__image'>
          <img className='country-detail__image-img' src={country.flags.svg} alt={country.name} />
        </div>


        <div className='country-detail__only-data'>
          <h1 className={`country-detail__title-${theme === 'dark' ? 'dark' : 'light'}`}>{country.name}</h1>

          <div className='country-detail__no-title'>
            <div className='country-detail__left-info'>
              <div className={`country-detail__details-${theme === 'dark' ? 'dark' : 'light'}`}><p className='country-detail__details-title'>Native Name: </p>{country.nativeName}</div>
              <div className={`country-detail__details-${theme === 'dark' ? 'dark' : 'light'}`}><p className='country-detail__details-title'>Population: </p>{country.population.toLocaleString()}</div>
              <div className={`country-detail__details-${theme === 'dark' ? 'dark' : 'light'}`}><p className='country-detail__details-title'>Region: </p>{country.region}</div>
              <div className={`country-detail__details-${theme === 'dark' ? 'dark' : 'light'}`}><p className='country-detail__details-title'>Sub Region: </p>{country.subregion}</div>
              <div className={`country-detail__details-${theme === 'dark' ? 'dark' : 'light'}`}><p className='country-detail__details-title'>Capital: </p>{country.capital}</div>
            </div>
            <div className='country-detail__right-info'>
              <div className={`country-detail__details-${theme === 'dark' ? 'dark' : 'light'}`}><p className='country-detail__details-title'>Top Level Domain: </p>{country.topLevelDomain}</div>
              <div className={`country-detail__details-${theme === 'dark' ? 'dark' : 'light'}`}><p className='country-detail__details-title'>Currencies: </p>{country.currencies[0].name}</div>
              <div className={`country-detail__details-${theme === 'dark' ? 'dark' : 'light'}`}>
                <p className='country-detail__details-title'>Languages:</p>
                {country.languages.map((language, index) => (
                  <p key={index}>{language.name + ", "}</p>
                ))}
              </div>
            </div>
          </div>
          <div className={`country-detail__details-${theme === 'dark' ? 'dark' : 'light'}`}>
            <p className='country-detail__details-title'>Border countries:</p>
            {country.borders !== undefined ? (
              country.borders.map((borderCountry, index) => (
                <Link className='country-detail__link' key={index} to={`/country/${getRealName(borderCountry)}`}>
                  <li className={`country-detail__neighbors-${theme === 'dark' ? 'dark' : 'light'}`}>{getRealName(borderCountry)}</li>
                </Link>
              ))
            ) : (
              <p>No neighboring countries</p>
            )}
          </div>            
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;

