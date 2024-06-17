import React from "react";
import { Fade, Zoom, Slide, Bounce } from "react-reveal";
import Image from "next/image";
import { BsGithub, BsGlobe } from "react-icons/bs";

const Card = ({ project, imageProps }) => {
  return (
    <div className="my-8 md:m-4 border w-screen max-w-[75vw] rounded-lg shadow-lg bg-[#1E1E1E] border-gray-800 md:w-80 md:max-w-md transform transition-transform hover:scale-105">
      <Image
        {...imageProps}
        style={{ width: "100%", height: "auto" }}
        sizes="(max-width: 800px) 100vw, 800px"
        alt={project.image.alt}
        className="rounded-t-lg"
      />
      <div className="p-5">
        <Slide top>
          <h5
            className={`tracking-tight  mb-3 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400  to-pink-600`}
          >
            {project.name}
          </h5>
        </Slide>
        <Slide bottom>
          <p className="mb-4 font-normal text-sm text-gray-400">
            {project.description}
          </p>
        </Slide>
        <Zoom>
          <div className="flex">
            {project.githuburl && (
              <a
                href={project.githuburl}
                className="text-gray-400 hover:text-gray-200 mx-2"
              >
                <BsGithub
                  size={25}
                  className="transition-colors duration-300"
                  title={`GitHub Repository for ${project.name}`}
                />
              </a>
            )}
            {project.projecturl && (
              <a
                href={project.projecturl}
                className="text-gray-400 hover:text-gray-200 ml-4"
              >
                <BsGlobe
                  size={25}
                  className="transition-colors duration-300"
                  title={`Live Website for ${project.name}`}
                />
              </a>
            )}
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Card;
