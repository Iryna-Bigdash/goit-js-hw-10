import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const refs = {
  inputEl: document.querySelector('#search-box'),
  listEl: document.querySelector('.country-list'),
  container: document.querySelector('.country-info'),
};

refs.inputEl.addEventListener('input', debounce(onInputType, DEBOUNCE_DELAY));

function onInputType(e) {
  e.preventDefault();

  const countryName = e.target.value.trim();
  // refs.inputEl.value = countryName;

  if (!countryName) {
    clearCountryCard();
    clearCountryList();
    return;
  }

  fetchCountries(countryName).then(renderCountries).catch(onFetchError);
}

function renderCountries(countries) {
  if (countries.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  }

  if (countries.length > 1 && countries.length <= 10) {
    const renderCountryList = countries
      .map(({ name, flags }) => {
        return ` 
     <li>
    <img src="${flags.svg}" alt="${flags.alt}" width='70px' />
    ${name.official}
      <li />`;
      })
      .join('');

    refs.listEl.innerHTML = renderCountryList;
  }

  if (countries.length === 1) {
    clearCountryList();
    const renderCountryCard = countries
      .map(({ name, capital, flags, languages, population }) => {
        let coutryLanguages = Object.values(languages);
        return `
<img src="${flags.svg}" alt="${name.official}" width='100px'>
<h1>${name.official}<h1>
  <h2>Capital: ${capital}</h2>
  <p>Population: ${population}</p>
  <p>Languages: ${coutryLanguages}</p>
      `;
      })
      .join('');
    refs.container.innerHTML = renderCountryCard;
  }
}

function onFetchError(error) {
  console.log('Catch');
  Notiflix.Notify.failure('Oops, there is no country with that name');
}

function clearCountryCard() {
  refs.container.innerHTML = '';
}

function clearCountryList() {
  refs.listEl.innerHTML = '';
}
