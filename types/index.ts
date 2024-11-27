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
 */
export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: "button" | "submit";
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
