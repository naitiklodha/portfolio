import React from "react";
import { Fade } from "react-reveal";
import { useNextSanityImage } from "next-sanity-image";
import Card from "./Card";
import { textStyle } from "@/utils/styles";
import client from "@/utils/sanity";

const Projects = ({ projects }) => {
  console.log(projects);
  return (
    <div className="m-4 pt-20" id="projects">
      <Fade>
        <h1
          className={`tracking-tight text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-400  to-pink-600 text-5xl uppercase text-center mb-8`}
        >
          Projects
        </h1>
      </Fade>

      <div className="md:flex flex-row-reverse flex-wrap justify-center mt-4">
        {projects.map((project) => {
          const imageProps = useNextSanityImage(client, project.image);

          return (
            <div key={project.name}>
              <Fade>
                <Card project={project} imageProps={imageProps} />
              </Fade>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
