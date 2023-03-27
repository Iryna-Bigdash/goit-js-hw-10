import Notiflix from 'notiflix';

export function fetchCountries(name) {
  console.log(name);

  fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(countries => countries.json())
    .then(data => renderCountriesList(data, name))
    .catch(onFetchError);
}
const container = document.querySelector('.country-info');

function renderCountriesList(countryFields, searchField) {
  console.log('hi - countryFields', countryFields);
  console.log(' hi - searchField', searchField);
    if (searchField.length <= 0) {
    container.style.display = 'none';
    return;
  }

  const renderCountryFields = countryFields
    .map(({ name, capital, flags, languages, population }) => {
      let coutryLang = Object.values(languages);
      return `
<img src="${flags.png}" alt="${name.official}">
<p>${name.official}<p>
  <h2>Capital: ${capital}</h2>
  <p>Population: ${population}</p>
  <p>Languages: ${coutryLang}</p>
      `;
    })
    .join('');
  container.innerHTML = renderCountryFields;
}

function onFetchError(error) {
    container.style.display = 'none';
    Notiflix.Notify.failure('Oops, there is no country with that name');
}
