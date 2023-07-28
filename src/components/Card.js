import Image from "next/image";
import { BsGithub, BsGlobe } from "react-icons/bs";
const Card = ({ project, imageProps, textStyle }) => {
  return (
    <div className=" my-8 md:m-4  border w-screen max-w-[75vw]  rounded-lg shadow  bg-black  border-gray-700 md:w-80 md:max-w-md hover:scale-110">
      <Image
        {...imageProps}
        style={{ width: "100%", height: "auto" }}
        sizes="(max-width: 800px) 100vw, 800px"
        alt={project.image.alt}
      ></Image>
      <div className="p-5">
        <h5
          className={`tracking-tight ${textStyle} mb-3 text-3xl font-extrabold `}
        >
          {project.name}
        </h5>
        <p className="mb-4 font-normal text-sm  text-gray-400">
          {project.description}
        </p>
        <div className="flex">
          {project.githuburl && (
            <a href={project.githuburl}>
              <BsGithub
                size={25}
                className="hover:text-pink-500 mx-2"
                title={`GitHub Repository for ${project.name}`}
              ></BsGithub>
            </a>
          )}
          {project.projecturl && (
            <a href={project.projecturl}>
              <BsGlobe
                size={25}
                className="hover:text-pink-500  ml-4"
                title={`Live Website for ${project.name}`}
              ></BsGlobe>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
