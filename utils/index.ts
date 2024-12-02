const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "da91133d6emsh8c23cefb762ef4ep1fd891jsnf8755287ccfe",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}



async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "da91133d6emsh8c23cefb762ef4ep1fd891jsnf8755287ccfe",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com"
  };

  const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", {
    headers: headers
  });

  const result = await response.json();

  return result;
 };

export { fetchCars };