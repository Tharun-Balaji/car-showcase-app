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

export interface CarProps {
  /**
   * The number of miles per gallon that the car can get in city driving.
   */
  city_mpg: number;
  /**
   * The class of the car. For example, "Compact" or "SUV".
   */
  class: string;
  /**
   * The number of miles per gallon that the car can get in combination city and
   * highway driving.
   */
  combination_mpg: number;
  /**
   * The number of cylinders in the car's engine.
   */
  cylinders: number;
  /**
   * The displacement of the car's engine.
   */
  displacement: number;
  /**
   * The type of drive the car has. For example, "Front-Wheel Drive" or "All-Wheel Drive".
   */
  drive: string;
  /**
   * The type of fuel the car uses. For example, "Gasoline" or "Electric".
   */
  fuel_type: string;
  /**
   * The number of miles per gallon that the car can get in highway driving.
   */
  highway_mpg: number;
  /**
   * The make of the car. For example, "Toyota" or "Ford".
   */
  make: string;
  /**
   * The model of the car. For example, "Corolla" or "F-150".
   */
  model: string;
  /**
   * The type of transmission the car has. For example, "Automatic" or "Manual".
   */
  transmission: string;
  /**
   * The year the car was manufactured.
   */
  year: number;
}
