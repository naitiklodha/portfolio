import { useNextSanityImage } from "next-sanity-image";
import Img from "next/image";
import Marquee from "react-fast-marquee";

export default function Skills({ skills, client, textStyle }) {
  return (
    <div className="w-screen mb-8" id="skills">
      <h1
        className={`${textStyle} text-center text-5xl uppercase font-extrabold m-4 mb-8`}
      >
        Skills
      </h1>
      <div className="bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-500">
        <Marquee speed={120}>
          <div className="flex flex-wrap">
            {skills.map((skill) => {
              const imageProps = useNextSanityImage(client, skill.image);
              return (
                <Img
                  {...imageProps}
                  className="my-4 z-0 h-24 w-28 md:h-48 md:w-60 mx-4"
                  alt={skill.image.alt}
                  key={skill.name}
                ></Img>
              );
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
