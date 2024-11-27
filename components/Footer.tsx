/**
 * Footer component is used to display the footer section of the website
 * It displays the Carhub logo, copyright information and links to various pages
 * The links are grouped into three categories: About, Company and Socials
 */
import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

/**
 * The Footer component
 * @returns The Footer component
 */
function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      {/* The footer section contains the Carhub logo, copyright information and links to various pages */}
      {/* The links are grouped into three categories: About, Company and Socials */}

      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          {/* The Carhub logo and copyright information */}
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {/* The links to various pages */}
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-start items-start flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        {/* The copyright information and links to privacy policy and terms of use */}
        <p>@{new Date().getFullYear()} CarHub. All rights reserved</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );

}

export default Footer;
