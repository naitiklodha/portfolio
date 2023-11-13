import { Fade, Zoom, Bounce } from "react-reveal";
import Image from "next/image";
import { textStyle } from "@/utils/styles";

const About = () => {
  return (
    <section className="text-lg md:text-xl max-w-[85vw] w-[85vw]" id="about">
      <h2 className={`${textStyle} text-center uppercase text-5xl mb-8 pt-20`}>
        About Me
      </h2>
      <div className="md:flex justify-around items-center">
        <Fade left>
          <div className="md:w-1/2 md:mx-8">
            <Fade left cascade>
              <p className="my-6 mt-8">
                I am a passionate web developer with a focus on learning and
                exploring new technologies. I have experience in Java, HTML, CSS,
                JS, React, Flask, and Tailwind CSS. I hold React Basics and
                Advanced certifications from Meta.
              </p>
            </Fade>
            <Fade left cascade>
              <p>
                I enjoy continuously expanding my skills and staying updated
                with web development trends. I'm enthusiastic about crafting
                exceptional web experiences and love to bring ideas to life.
                Beyond coding, I find joy in cycling, reading, and exploring
                new ideas.
              </p>
            </Fade>
            <Bounce>
              <p className="text-xl mt-8">Let's build something amazing together!</p>
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
