import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";

/**
 * Home is an asynchronous function component that renders the main page
 * of the application. It fetches a list of cars based on the search
 * parameters provided, and displays them in a catalog format. The
 * component also includes a search bar and filters for users to refine
 * their search criteria.
 *
 * Props:
 * - searchParams: An object of type HomeProps which contains the
 *   search parameters used to filter the list of cars.
 *
 * The function uses the fetchCars utility to retrieve car data and
 * conditionally renders the car catalog or an error message if no cars
 * are found. It also includes the Hero component, a search bar, and
 * custom filters for fuel type and year of production.
 */
export default async function Home({ searchParams }: HomeProps) {

  // fetch a list of cars based on the search parameters provided
  const allCars = await fetchCars({
    // manufacturer name, if any
    manufacturer: searchParams.manufacturer || "",
    // year of production, default to 2022
    year: searchParams.year || 2022,
    // fuel type, default to empty string
    fuel: searchParams.fuel || "",
    // limit of cars to return, default to 10
    limit: searchParams.limit || 10,
    // car model, default to empty string
    model: searchParams.model || "",
  });

  // check if the data is empty
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Car Catalogue </h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            {/* filter options for fuel and year of production */}
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {
          // if data is not empty, render the car catalogue
          !isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper">
                {/* render a car card for each car in the list */}
                {allCars?.map((car, index) => (
                  <CarCard key={index} car={car} />
                ))}
              </div>

              {/* render a show more button if there are more cars to show */}
              <ShowMore
                pageNumber={(searchParams.limit || 10) / 10}
                isNext={(searchParams.limit || 10) > allCars.length}
              />
            </section>
          ) : (
            // if data is empty, render an error message
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
              {/* display the error message if any */}
              {allCars?.message && <p>{allCars.message}</p>}
            </div>
          )
        }
      </div>
    </main>
  );
}
