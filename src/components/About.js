import { Fade, Zoom, Bounce } from "react-reveal";
import Image from "next/image";
import { textStyle } from "@/utils/styles";

const About = () => {
  return (
    <section
      className="text-lg md:text-xl max-w-[85vw] w-screen mx-auto text-gray-100"
      id="about"
    >
      <h2
        className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600 text-center uppercase text-5xl mb-8 pt-20 font-semibold`}
      >
        About Me
      </h2>
      <div className="md:flex justify-around items-center space-y-8 md:space-y-0">
        <Fade left>
          <div className="md:w-1/2 md:mx-8 px-4 text-justify">
            <p className={` my-6 mt-8 leading-relaxed`}>
              I'm a passionate web developer, focusing on learning and exploring
              new technologies. My expertise includes Java, HTML, CSS,
              JavaScript, React, Flask, and Tailwind CSS. I hold React Basics
              and Advanced certifications from Meta.
            </p>
            <p className={` leading-relaxed`}>
              Continuously expanding my skills and staying updated with web
              development trends drives my enthusiasm. Crafting exceptional web
              experiences and bringing ideas to life excites me. Beyond coding,
              I find joy in cycling, reading, and exploring new concepts.
            </p>
            <Bounce>
              <p className={` text-xl mt-8 font-medium`}>
                Let's build something amazing together!
              </p>
            </Bounce>
          </div>
        </Fade>
        <Zoom>
          <div className="md:w-1/2 hidden md:flex justify-center">
            <div className="bg-gradient-to-tr from-gray-700 to-gray-800 p-1 rounded-md shadow-lg">
              <Image
                src="/book-reading.jpeg"
                width={300}
                height={300}
                alt="Naitik reading a book"
                className="rounded-md"
              />
            </div>
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default About;
