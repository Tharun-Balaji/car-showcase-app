'use client';

import { CustomButtonProps } from "@/types";
import Image from "next/image";


/**
 * CustomButton is a reusable component that renders a styled button element.
 * 
 * Props:
 * - title: The text to be displayed inside the button.
 * - containerStyles: Optional additional CSS classes to apply to the button for styling.
 * - handleClick: Optional event handler function that is called when the button is clicked.
 * - btnType: Optional value that changes the button type from the default "button" to "submit". This is useful for submitting forms.
 * - textStyles: Optional additional CSS classes to apply to the button text for styling.
 * - rightIcon: Optional string of SVG code of an icon to be rendered on the right side of the button.
 */
function CustomButton({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right_icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}

export default CustomButton;

