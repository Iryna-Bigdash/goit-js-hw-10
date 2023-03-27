export function fetchCountries(name) {
return  fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(countries => countries.json())
    .then(data => data)
    .catch(error => console.log(error));
}
