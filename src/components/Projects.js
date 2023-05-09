import { useNextSanityImage } from "next-sanity-image";
import Card from "./Card";

export default function Projects({ projects,client,textStyle }) {
  return (
    <div className="m-4" id="projects">
      <h1 class={`${textStyle} text-5xl uppercase text-center`}>
        Projects
      </h1>

      <div className="md:flex mt-4">
        {projects.map((project) => {
          const imageProps = useNextSanityImage(client, project.image);

          return <Card project={project} imageProps={imageProps} />;
        })}
      </div>
    </div>
  );
}
