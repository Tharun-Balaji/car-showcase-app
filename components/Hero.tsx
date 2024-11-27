/**
 * The Hero component is the main component of the landing page. It contains a title, subtitle, and a call-to-action button.
 * The component also includes a background image with an overlay.
 * The component is a "client" component, meaning it is rendered on the client-side.
 * The component is exported as the default export from the module.
 */
"use client";

/**
 * Import the Image component from Next.js, which is used to display the background image.
 */
import Image from "next/image";

/**
 * Import the CustomButton component, which is used as the call-to-action button.
 */
import CustomButton from "./CustomButton";

/**
 * The Hero component function.
 */
function Hero() {
  /**
   * The handleScroll function is called when the call-to-action button is clicked.
   * The function is currently empty, but it could be used to scroll to a certain section of the page.
   */
  const handleScroll = () => {};

  /**
   * The JSX returned by the component.
   */
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car - quickly and easily!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
}

/**
 * Export the Hero component as the default export from the module.
 */
export default Hero;
