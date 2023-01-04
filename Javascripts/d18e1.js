import fetch from "node-fetch";
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

/*Read the countries API using fetch and print the name of
country, capital, languages, population and area.*/
const url = countriesAPI
fetch(url)
  .then (response => response.json() )
  .then(data =>{
    console.log(data)
  })
  .catch(error => console.error(error))
