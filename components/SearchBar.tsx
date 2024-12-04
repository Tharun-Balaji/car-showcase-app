"use client";

import React, { useState } from "react";
import { SearchManufacturer } from "./";
import Image from "next/image";
import { useRouter } from "next/navigation";

/**
 * The SearchButton component is a button that is used to submit the search form
 * in the SearchBar component. The button contains a magnifying glass icon.
 *
 * @param {{ otherClasses: string }} props
 * @prop {string} otherClasses - Additional CSS classes to apply to the button
 * @returns {JSX.Element} A button element with the magnifying glass icon
 */
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();

  /**
   * Handles the search form submission event. Prevents the default form
   * submission behavior, checks if the input fields are empty, and if so,
   * alerts the user to provide some input. Otherwise, calls the
   * `updateSearchParams` function with the lowercased input values.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event
   */
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer.trim() === "" && model.trim() === "") {
      return alert("Please provide some input");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  /**
   * Updates the search parameters in the current URL by setting the 'model'
   * and 'manufacturer' search parameters to the provided values. If either
   * value is an empty string, the corresponding search parameter is deleted.
   * Finally, it generates a new pathname with the updated search parameters
   * and pushes the new URL using the 'router' object from 'next/router'.
   *
   * @param {string} model - The value to set for the 'model' search parameter
   * @param {string} manufacturer - The value to set for the 'manufacturer' search parameter
   */
  const updateSearchParams = (model: string, manufacturer: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
}

export default SearchBar;
