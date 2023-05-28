import Image from "next/image";
const About = ({ textStyle }) => {
  return (
    <section className="text-lg md:text-xl max-w-[85vw]  w-screen" id="about">
      <h2 className={`${textStyle} text-center uppercase text-5xl mb-8 pt-20`}>
        About Me
      </h2>
      <div className="md:flex">
        <div>
          {" "}
          <p className="my-6
           mt-8 md:mx-12">
            I am a passionate web developer with a focus on learning and
            exploring new technologies. I have experience in Java, HTML, CSS,
            JS, React, Flask, and Tailwind CSS. I hold React Basics and Advanced
            certifications from Meta.
          </p>
          <p className="md:mx-12">
            I enjoy continuously expanding my skills and staying updated with
            web development trends. I'm enthusiastic about crafting exceptional
            web experiences and love to bring ideas to life. Beyond coding, I
            find joy in cycling, reading, and exploring new ideas.
          </p>
        </div>
        <div className="hidden md:block bg-gradient-to-tr from-purple-500 to bg-pink-500 p-4">
          <Image
            src="/book-reading.jpeg"
            width={650}
            height={700}
            alt="Naitik reading book"
          />
        </div>
      </div>
    </section>
  );
};
export default About;
