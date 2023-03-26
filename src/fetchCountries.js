export function fetchCountries(name) {
  console.log(name);

  fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(countries => countries.json())
    .then(data => renderCountriesList(data, name))
    .catch(error => console.log(error));
}

function renderCountriesList(countryFields, searchField) {
  console.log(countryFields);
  console.log(searchField);
  if (searchField.length <= 0) {
      searchField.reset();
      return document.querySelector('.country-info').innerHTML = '';
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
  document.querySelector('.country-info').innerHTML = renderCountryFields;
}
