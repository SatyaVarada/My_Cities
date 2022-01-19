var dataset = require("../data/cities.json");

const getSearchResults = (searchString) => {
  const response = dataset.cities
    .filter((city) => dynamicSearch(city, searchString))
    .map(({ name, country }) => ({ name, country }));
  return response;
};

const dynamicSearch = (city, searchString) => {
  for (var key in city) {
    if (
      city[key].toString().toLowerCase().includes(searchString.toLowerCase())
    ) {
      return true;
    }
  }
  return false;
};

const getCityDetails = (cityName) => {
  const response = dataset.cities.filter((city) => city.name === cityName)[0];
  return response;
};
module.exports = { getSearchResults, getCityDetails };
