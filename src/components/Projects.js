import React from "react";
import { Fade } from "react-reveal";
import { useNextSanityImage } from "next-sanity-image";
import Card from "./Card";
import { textStyle } from "@/utils/styles";
import client from "@/utils/sanity";

const Projects = ({ projects }) => {
  return (
    <div className="m-4 pt-20" id="projects">
      <Fade>
        <h1 className={`${textStyle} text-5xl uppercase text-center mb-8`}>
          Projects
        </h1>
      </Fade>

      <div className="md:flex mt-4">
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
