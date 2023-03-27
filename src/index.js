import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const refs = {
  inputEl: document.querySelector('#search-box'),
  listEl: document.querySelector('.country-list'),
  container: document.querySelector('.country-info'),
};

refs.inputEl.addEventListener('input', debounce(onInputType, DEBOUNCE_DELAY));

function onInputType() {
const cityName = refs.inputEl.value.trim();
refs.inputEl.value = cityName;
    
fetchCountries(cityName);
}

