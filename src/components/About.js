import { Fade, Zoom, Bounce } from "react-reveal";
import Image from "next/image";
import { textStyle } from "@/utils/styles";

const About = () => {
  return (
    <section className="text-lg md:text-xl max-w-[85vw] w-screen" id="about">
      <h2 className={`${textStyle} text-center uppercase text-5xl mb-8 pt-20`}>
        About Me
      </h2>
      <div className="md:flex justify-around items-center">
        <Fade left>
          <div className="md:w-1/2 md:mx-8">
            <Fade left>
              <p className="my-6 mt-8">
                I'm a passionate web developer, focusing on learning and
                exploring new technologies. My expertise includes Java, HTML,
                CSS, JavaScript, React, Flask, and Tailwind CSS. I hold React
                Basics and Advanced certifications from Meta.
              </p>
            </Fade>
            <Fade left>
              <p>
                Continuously expanding my skills and staying updated with web
                development trends drives my enthusiasm. Crafting exceptional
                web experiences and bringing ideas to life excites me. Beyond
                coding, I find joy in cycling, reading, and exploring new
                concepts.
              </p>
            </Fade>
            <Bounce>
              <p className="text-xl mt-8">
                Let's build something amazing together!
              </p>
            </Bounce>
          </div>
        </Fade>
        <Zoom>
          <div className="hidden md:block bg-gradient-to-tr from-purple-500 to bg-pink-500 p-4">
            <Image
              src="/book-reading.jpeg"
              width={250}
              height={200}
              alt="Naitik reading a book"
            />
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default About;
