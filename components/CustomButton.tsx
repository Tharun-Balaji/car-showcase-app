"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

/**
 * CustomButton is a reusable component that renders a styled button element.
 * 
 * Props:
 * - title: The text to be displayed inside the button.
 * - containerStyles: Optional additional CSS classes to apply to the button for styling.
 * - handleClick: Optional event handler function that is called when the button is clicked.
 */
function CustomButton({
  title,
  containerStyles,
  handleClick,
  btnType
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

export default CustomButton;
