import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ResumeDownload from "./ResumeDownload";
import { FiX } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-opacity-60 bg-[#1e1e1e] text-white">
      <Head>
        <title>Naitik Lodha</title>
        <meta property="og:title" content="Naitik Lodha" />
        <meta
          property="og:description"
          content="Naitik Lodha - Web Developer | React, TailwindCSS, Next.js, Flask. Explore my diverse range of projects highlighting expertise and creativity in web development. Discover how I bring ideas to life with seamless functionality and engaging user interfaces"
        />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Naitik Lodha - Web Developer | React, TailwindCSS, Next.js, Flask. Explore my diverse range of projects highlighting expertise and creativity in web development. Discover how I bring ideas to life with seamless functionality and engaging user interfaces"
        />
        <meta name="robots" content="follow" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React.js, React, TailwindCSS, Next, Next.js, Flask, Naitik Lodha"
        />
        <meta name="author" content="Naitik Lodha" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="dlkM9uq8vriBaZ1483qLaZ-6rRmAPY3FI6wD_XBMAkY"
        />
        <meta property="og:image" content="image.png" />
      </Head>

      <div className="max-w-screen-xl mx-auto py-4 px-6 flex justify-between items-center">
        <Link href="#">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400  to-pink-600 cursor-pointer hover:opacity-80 transition-opacity">
            {"< Naitik />"}
          </h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <p
                className={`text-lg hover:text-gray-300 ${
                  router.asPath === link.href
                    ? " text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-pink-600"
                    : ""
                } transition-colors`}
              >
                {link.title}
              </p>
            </Link>
          ))}
          <ResumeDownload />
        </nav>

        <div className="md:hidden flex items-center">
          <ResumeDownload />
          <button
            onClick={toggleMenu}
            className="ml-4 p-2 rounded-md text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
          >
            {isOpen ? <FiX size={24} /> : <RxHamburgerMenu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute inset-x-0 top-16 bg-[#121212] text-white py-4">
          <nav className="flex flex-col items-center space-y-4">
            {links.map((link, index) => (
              <Link key={index} href={link.href}>
                <p className="text-lg hover:text-gray-300" onClick={toggleMenu}>
                  {link.title}
                </p>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
