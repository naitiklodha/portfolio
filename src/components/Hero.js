import React from "react";
import Typewriter from "typewriter-effect";
import SocialLinks from "./SocialLinks";
import Image from "next/image";
import ResumeDownload from "./ResumeDownload";
import {  Zoom } from "react-reveal";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-12 mx-4 text-center h-[70vh]  text-white p-8">
      <Zoom>
        <Image
          src={"/Group 1.png"}
          height={200}
          width={200}
          alt="Profile Picture"
        />
      </Zoom>

      <p className="text-xl leading-tight mt-4">I am an 18 year old</p>
      <div className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-400 to-red-600 m-4 font-bold">
        <Typewriter
          options={{
            strings: ["Student", "Web Developer", "AI/ML Enthusiast"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="flex space-x-4">
        <SocialLinks />
      </div>

      <div className="flex space-x-4 mt-8">
        <ResumeDownload />
        <Link href="/#contact">
          {" "}
          <button className="bg-gray-500 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition-transform transform hover:scale-105">
            Contact Me
          </button>
        </Link>
      </div>

      <div className="mt-14 md:mt-16">
        <div className="animate-bounce">
          <svg
            className="w-12 h-12 mx-auto text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
