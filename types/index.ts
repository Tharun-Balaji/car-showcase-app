import { MouseEventHandler } from "react";


/**
 * @description
 * CustomButtonProps is an interface that describes the properties passed to
 * the CustomButton component.
 *
 * @property {string} title - The text to be displayed inside the button.
 * @property {string} [containerStyles] - Optional additional CSS classes to
 * apply to the button for styling.
 * @property {MouseEventHandler<HTMLButtonElement>} [handleClick] - Optional
 * event handler function that is called when the button is clicked.
 * @property {"button" | "submit"} [btnType] - Optional value that changes the
 * button type from the default "button" to "submit". This is useful for
 * submitting forms.
 * @property {string} [textStyles] - Optional additional CSS classes to
 * apply to the button text for styling.
 * @property {string} [rightIcon] - Optional string of SVG code of an icon to
 * be rendered on the right side of the button.
 * @property {boolean} [isDisabled] - Optional boolean that disables the button.
 */
export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}


/**
 * @description
 * SearchManufacturerProps is an interface that describes the properties passed
 * to the SearchManufacturer component.
 *
 * @property {string} manufacturer - The current value of the manufacturer
 * selected by the user.
 * @property {(manufacturer: string) => void} setManufacturer - A function that
 * updates the manufacturer value.
 */
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

/**
 * CarProps is an interface that describes the properties of a car.
 *
 * @property {number} city_mpg - The number of miles per gallon that the car can get in city driving.
 * @property {string} class - The class of the car. For example, "Compact" or "SUV".
 * @property {number} combination_mpg - The number of miles per gallon that the car can get in combination city and
 * highway driving.
 * @property {number} cylinders - The number of cylinders in the car's engine.
 * @property {number} displacement - The displacement of the car's engine.
 * @property {string} drive - The type of drive the car has. For example, "Front-Wheel Drive" or "All-Wheel Drive".
 * @property {string} fuel_type - The type of fuel the car uses. For example, "Gasoline" or "Electric".
 * @property {number} highway_mpg - The number of miles per gallon that the car can get in highway driving.
 * @property {string} make - The make of the car. For example, "Toyota" or "Ford".
 * @property {string} model - The model of the car. For example, "Corolla" or "F-150".
 * @property {string} transmission - The type of transmission the car has. For example, "Automatic" or "Manual".
 * @property {number} year - The year the car was manufactured.
 */
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

/**
 * FilterProps is an interface that describes the properties that can be used to filter
 * cars.
 *
 * @property {string} [manufacturer] - The manufacturer of the car to filter by.
 * @property {number} [year] - The year of the car to filter by.
 * @property {string} [model] - The model of the car to filter by.
 * @property {number} [limit] - The number of cars to return.
 * @property {string} [fuel] - The type of fuel the car uses to filter by.
 */
export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

/**
 * OptionProps is an interface that describes the properties of an option in a filter component.
 *
 * @property {string} title - The title of the option.
 * @property {string} value - The value of the option.
 */
export interface OptionProps {
  title: string;
  value: string;
}

/**
 * CustomFilterProps is an interface that describes the properties of a custom filter component.
 *
 * @property {string} title - The title of the filter.
 * @property {OptionProps[]} options - An array of options for the filter.
 */
export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

/**
 * ShowMoreProps is an interface that describes the properties of the ShowMore component.
 *
 * @property {number} pageNumber - The current page number.
 * @property {boolean} isNext - A boolean indicating whether there are more cars to show.
 */
export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

/**
 * HomeProps is an interface that describes the properties passed to the Home component.
 *
 * @property {FilterProps} searchParams - The search parameters used to filter the list of cars.
 */
export interface HomeProps {
  searchParams: FilterProps;
}
