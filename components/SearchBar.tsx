'use client';

import { useState } from "react";
import { SearchManufacturer } from "./";
import Image from "next/image";


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

  const handleSearch = () => {}

  return (
    <form
      className="searchbar"
      onSubmit={handleSearch}
    >
      <div className="searchbar__item" >
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar;