'use client';

import { manufacturers } from "@/constants";
import { SearchManufacturerProps } from "@/types";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react';
import Image from "next/image";
import { useState, Fragment } from "react";


/**
 * The SearchManufacturer component is a reusable component that renders a
 * search input field to filter manufacturer names. The component accepts two
 * props: manufacturer and setManufacturer. The manufacturer prop is the
 * current value of the manufacturer selected by the user, and the setManufacturer
 * prop is a function that updates the manufacturer value.
 *
 * The component renders a Combobox component from the @headlessui/react library.
 * The Combobox component displays a list of manufacturer names that match the
 * query string. The query string is obtained from the user's input in the
 * ComboboxInput component. The ComboboxOptions component displays the list of
 * filtered manufacturers. The ComboboxOption component displays each
 * manufacturer name, and shows an active blue background color if the option is
 * selected.
 *
 * The component also includes a Transition component to animate the
 * ComboboxOptions component when the user selects an option or clears the
 * input field.
 *
 * @param {string} manufacturer - The current value of the manufacturer
 * selected by the user.
 * @param {(manufacturer: string) => void} setManufacturer - A function that
 * updates the manufacturer value.
 * @returns {JSX.Element} A JSX element that renders a search input field to
 * filter manufacturer names.
 */
function SearchManufacturer({
  manufacturer,
  setManufacturer
}: SearchManufacturerProps) {

  const [query, setQuery] = useState('');

   // Filter manufacturers based on the query
   // If the query is an empty string, return all manufacturers
   // Otherwise, filter manufacturers that include the query string (case-insensitive and ignoring spaces)
   const filteredManufacturers = manufacturers.filter((item) => {
     const normalizedItem = item.toLowerCase().replace(/\s+/g, "");
     const normalizedQuery = query.toLowerCase().replace(/\s+/g, "");
     return normalizedItem.includes(normalizedQuery) || query === "";
   });

  return (
    <div className="search-manufacturer">
      {/* 
        The Combobox component from @headlessui/react is used to render a search input field to filter manufacturer names.
        The component accepts a value and an onChange function as props. The value is the current value of the manufacturer selected by the user, and the onChange function is called when the user selects a new option.
      */}
      <Combobox value={manufacturer} onChange={setManufacturer} >
        <div className="relative w-full">
          {/* 
            The ComboboxButton component is used to render a button element that is positioned absolutely on the left side of the input field.
            The button element contains an image of a car logo, which is used as a placeholder for the search input field.
          */}
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src={"/car-logo.svg"}
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </ComboboxButton>

          {/* 
            The ComboboxInput component is used to render a text input field that accepts user input.
            The component accepts a placeholder, a display value, and an onChange function as props.
            The display value is the current value of the manufacturer selected by the user, and the onChange function is called when the user types a new value in the input field.
          */}
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* 
            The Transition component is used to animate the ComboboxOptions component when the user selects an option or clears the input field.
            The Transition component is rendered as a Fragment element, which is a special type of React component that can be used to group multiple elements together without adding extra DOM nodes.
            The leave prop is used to specify the animation that is played when the user selects an option or clears the input field.
            The afterLeave prop is used to specify a function that is called after the animation has finished playing.
          */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            {/* 
              The ComboboxOptions component is used to render a list of manufacturer names that match the query string.
              The component accepts a list of options as a prop, and renders each option as a ComboboxOption component.
            */}
            <ComboboxOptions>
              {filteredManufacturers.map((item) => (
                <ComboboxOption
                  key={item}
                  value={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected, active }) => (
                    <>
                      {/* 
                        The ComboboxOption component renders a span element with the manufacturer name as its children.
                        The span element is given a class name that is determined by whether the option is selected or not.
                      */}
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>

                      {/* 
                        If the option is selected, the ComboboxOption component renders a span element with an active blue background color.
                      */}
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-teal-600"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );

}

export default SearchManufacturer;