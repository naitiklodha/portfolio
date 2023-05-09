import { useNextSanityImage } from "next-sanity-image";
import Img from "next/image";
import Marquee from "react-fast-marquee";

export default function Skills({ skills, client,textStyle }) {
  return (
    <div className="w-screen" id="skills">
  
      <h1 className={`${textStyle} text-center text-5xl uppercase font-extrabold m-4`}>
        Skills
      </h1>
<div className="bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-500">
      <Marquee speed={120}>
        <div className="flex flex-wrap p-2">
          {skills.map((skill) => {
            const imageProps = useNextSanityImage(client, skill.image);
            return (
              <Img
                {...imageProps}
                className="w-48 h-48 m-3 z-0"
                sizes="(max-width: 800px) 10vw, 100px"
                alt={skill.image.alt}
              ></Img>
            );
          })}
        </div>
      </Marquee>
      </div>
    </div>
  );
}
