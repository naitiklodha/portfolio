import Head from "next/head";
import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
const links = [
  {
    title: "About",
    href: "#",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Contact",
    href: "#",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black shadow text-white mt-8 sticky top-0 z-50">
      <Head>
        <title>Naitik Lodha</title>
      </Head>
      <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="font-extrabold  ml-2 uppercase text-transparent text-3xl bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500">
            NL
          </h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {links.map((link, index) => (
              <li key={index} className="hover:scale-125">
                <Link href={link.href} scroll={true}>
                  {link.title}
                </Link>
              </li>
            ))}
            <button className="bg-gradient-to-tr p-2 top-0 px-4 rounded-md from-pink-600 to-purple-500 animate-bounce">
              <a className="flex" href="NAITIK LODHA.pdf" title="" download>
                Resume
                <FiDownload size={20} color="white" />
              </a>
            </button>
          </ul>
        </nav>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="block md:hidden" id="mobile-menu">
          <nav>
            <ul className="flex flex-col space-y-4">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-indigo-500 font-medium"
                    scroll={true}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <button className="bg-gradient-to-tr max-w-xs p-2  rounded-md from-pink-600 to-purple-500 animate-bounce">
                <a className="flex" href="NAITIK LODHA.pdf" title="" download>
                  Resume
                  <FiDownload size={20} color="white" />
                </a>
              </button>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
export default Header;
