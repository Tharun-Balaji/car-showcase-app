'use client';

import { Fragment, useState } from 'react';
import Image from 'next/image';
import { } from 'next/navigation';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';
import { CustomFilterProps } from '@/types';
import { updateSearchParams } from '@/utils';
import { useRouter } from "next/navigation";


/**
 * CustomFilter is a reusable component that renders a filter input field
 * with a dropdown list of options. The component accepts two props: title
 * and options. The title prop is the title of the filter, and the options
 * prop is an array of objects, each with a title and value property. The
 * component displays the selected option and allows the user to select a
 * different option from the dropdown list. When the user selects a new
 * option, the component updates the URL search parameters based on the
 * selected filter option and navigates to the new URL.
 *
 * @prop {string} title - The title of the filter.
 * @prop {Object[]} options - An array of objects, each with a title and
 * value property.
 * @returns {JSX.Element} A JSX element that renders a filter input field
 * with a dropdown list of options.
 */
function CustomFilter({ title, options }: CustomFilterProps) {

   const router = useRouter();
  const [selected, setSelected] = useState(options[0]); // State for storing the selected option

/**
 * Updates the URL search parameters based on the selected filter option
 * and navigates to the new URL.
 *
 * @param {Object} e - The selected option object.
 * @param {string} e.title - The title of the selected option.
 * @param {string} e.value - The value of the selected option.
 */
  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName);
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e); // Update the selected option in state
          handleUpdateParams(e); // Update the URL search parameters and navigate to the new URL
        }}
      >
        <div className="relative w-fit z-10">
          {/* Button for the listbox */}
          <ListboxButton className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron_up-down"
            />
          </ListboxButton>

          {/* Transition for displaying the options */}

          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="custom-filter__options">
              {/* Map over the options and display them as listbox options */}
              {options.map((option) => (
                <ListboxOption
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.title}
                      </span>
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default CustomFilter;