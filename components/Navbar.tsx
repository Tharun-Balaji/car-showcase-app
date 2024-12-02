import Link from "next/link";
import Image from "next/image";
import {CustomButton} from "./";

/**
 * Navbar component renders the navigation bar of the website.
 * It includes a logo that links to the homepage and a sign-in button.
 */
function Navbar() {
  return (
    // Header element that contains the navigation
    <header className="w-full absolute z-10">
      {/* Navigation bar with flex layout and styling */}
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        {/* Logo linking to the homepage */}
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        {/* Sign-in button using CustomButton component */}
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
}

export default Navbar;
