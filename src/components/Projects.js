import { useNextSanityImage } from "next-sanity-image";
import Card from "./Card";

export default function Projects({ projects, client, textStyle }) {
  return (
    <div className="m-4 pt-20" id="projects">
      <h1 className={`${textStyle} text-5xl uppercase text-center mb-8`}>
        Projects
      </h1>

      <div className="md:flex mt-4">
        {projects.map((project) => {
          const imageProps = useNextSanityImage(client, project.image);

          return (
            <div key={project.name}>
              <Card
                project={project}
                imageProps={imageProps}
                textStyle={textStyle}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
