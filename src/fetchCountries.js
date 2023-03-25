export function fetchCountries(name){

    console.log(name);

    fetch(
      `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags.svg,languages`
    )
      .then(countries => countries.json())
      .then(results => {});
};