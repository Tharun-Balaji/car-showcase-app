import { FilterProps } from "@/types";

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
  // console.log(result);
} catch (error) {
  console.error(error);
}



/**
 * fetchCars is an asynchronous function that fetches a list of cars based on
 * the filters provided in the argument. It returns a Promise that resolves to
 * an array of objects, each of which contains details of a car matching the
 * search criteria.
 *
 * @param {FilterProps} filters - An object of type FilterProps that contains
 * details of the search criteria. The properties of the object are:
 * - manufacturer: The manufacturer of the car to filter by.
 * - year: The year of the car to filter by.
 * - model: The model of the car to filter by.
 * - limit: The number of cars to return.
 * - fuel: The type of fuel the car uses to filter by.
 *
 * @return {Promise<CarProps[]>} - A Promise that resolves to an array of
 * objects, each of which contains details of a car matching the search
 * criteria.
 */
async function fetchCars(filters: FilterProps) {

  const { manufacturer, year, model, limit, fuel } = filters;

  const headers: HeadersInit = {
    "x-rapidapi-key": process.env.RAPID_API_KEY || "",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

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

/**
 * Updates the current URL's search parameters by setting the specified
 * parameter to the given value. It returns the new URL path as a string.
 *
 * @param {string} type - The type of search parameter to update.
 * @param {string} value - The new value to set for the specified search parameter.
 * @returns {string} The updated URL path as a string.
 */
 const updateSearchParams = (type: string, value: string) => {
   // Get the current URL search params
   const searchParams = new URLSearchParams(window.location.search);

   // Set the specified search parameter to the given value
   searchParams.set(type, value);

   // Set the specified search parameter to the given value
   const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

   return newPathname;
 };

export {
  fetchCars,
  calculateCarRent,
  updateSearchParams
};