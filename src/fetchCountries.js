export function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error in request: ${response.status}`);
      }
      return response.json();
    })
    .then(data => data)
    .catch(error => console.log(error));
}
