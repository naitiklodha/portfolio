import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ResumeDownload from "./ResumeDownload";
import { FiX } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { textStyle } from "@/utils/styles";
const links = [
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Skills",
    href: "/#skills",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];

const Header = ( ) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();

  return (
    <header className="max-w-[100%] mt-8 text-gray-400 w-screen overflow-hidden  sticky top-0 z-50">
      <Head>
        <title>Naitik Lodha</title>
        <meta property="og:title" content="Naitik Lodha" />
        <meta
          property="og:description"
          content="Naitik Lodha - Web Developer | React, TailwindCSS, Next.js, Flask. Explore my diverse range of projects highlighting expertise and creativity in web development. Discover how I bring ideas to life with seamless functionality and engaging user interfaces"
        />
        <meta charSet="UTF-8" />
               <meta property="title" content="Naitik Lodha" />
        <meta
          name="description"
          content="Naitik Lodha - Web Developer | React, TailwindCSS, Next.js, Flask. Explore my diverse range of projects highlighting expertise and creativity in web development. Discover how I bring ideas to life with seamless functionality and engaging user interfaces"
        />
        <meta name="robots" content="follow" />

        <meta
          name="keywords"
          content="HTML, CSS, JavaScript,React.js,React,TailwindCSS,Next,Next.js,Flask,Naitik Lodha"
        />
        <meta name="author" content="Naitik Lodha" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="google-site-verification"
          content="dlkM9uq8vriBaZ1483qLaZ-6rRmAPY3FI6wD_XBMAkY"
        />
        <meta property="og:image" content="image.png" />
      </Head>
      <div className=" mx-auto py-4 px-6 sticky top-0 bg-black flex justify-between items-center">
        <div className="flex items-center">
          <Link href="#">
            <h1 className="font-extrabold  ml-2 text-transparent text-3xl bg-clip-text bg-gradient-to-bl from-pink-500 to-purple-500 ">
              {"< Naitik />"}
            </h1>
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {links.map((link, index) => (
              <li
                key={index}
                className={` text-xl my-4 ${
                  router.asPath === link.href ? `${textStyle} text-3xl` : ""
                } hover:scale-125  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-tr from-purple-500  to-pink-500`}
              >
                <Link href={link.href} scroll={true}>
                  {link.title}
                </Link>
              </li>
            ))}

            <li>
              <ResumeDownload className="my-4" />
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <ResumeDownload />
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center  justify-center p-2 rounded-md text-white hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <FiX size={24} /> : <RxHamburgerMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="block  md:hidden" id="mobile-menu">
          <nav>
            <ul className="flex flex-col h-screen text-3xl justify-center bg-black items-center space-y-4">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`text-lg hover:scale-125 mt-4 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-tr from-purple-500  to-pink-500 mx-6`}
                    scroll={true}
                    onClick={toggleMenu}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
export default Header;
