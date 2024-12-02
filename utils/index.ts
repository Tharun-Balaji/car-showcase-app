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
 

/**
 * Calculates the daily rental rate of a car based on its city fuel efficiency (in mpg)
 * and its year of manufacture.
 *
 * The rental rate is calculated as the base rate plus an additional rate based on
 * the mileage and the age of the vehicle. The mileage rate is 0.1 per mile per day,
 * and the age rate is 0.05 per year of vehicle age.
 *
 * @param {number} city_mpg - The city fuel efficiency of the car in miles per gallon.
 * @param {number} year - The year of manufacture of the car.
 * @returns {string} The daily rental rate as a string, rounded to the nearest whole number.
 */
const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export {
  fetchCars,
  calculateCarRent
};