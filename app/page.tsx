import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import { Metadata } from "next";

// Define a more precise type for page props
export interface PageProps {
  params?: Promise<any>;
  searchParams?: Promise<any>;
}


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
export default async function Home({ params, searchParams  }: PageProps) {
  // Helper function to handle potential string or string array
  // Helper function to safely extract first string value

  // Safely extract search parameters
 const getSearchParam = (
   param: string | string[] | undefined
 ): string | undefined => {
   return Array.isArray(param) ? param[0] : param;
 };

  const resolvedSearchParams = searchParams ? await searchParams : {};
  
  // Convert parameters with type safety
 const manufacturer = getSearchParam(resolvedSearchParams.manufacturer);
 const year = getSearchParam(resolvedSearchParams.year);
 const fuel = getSearchParam(resolvedSearchParams.fuel);
 const limit = getSearchParam(resolvedSearchParams.limit);
 const model = getSearchParam(resolvedSearchParams.model);

  // Fetch cars with robust parameter handling
  const allCars = await fetchCars({
    manufacturer: manufacturer || "",
    year: Number(year) || 2022,
    fuel: fuel || "",
    limit: Number(limit) || 10,
    model: model || "",
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
                pageNumber={Number(limit) / 10}
                isNext={Number(limit) > allCars.length}
              />
            </section>
          ) : (
            // if data is empty, render an error message
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            </div>
          )
        }
      </div>
    </main>
  );
}

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  return {
    title: "Car Showcase",
    description: "Explore amazing cars",
  };
}