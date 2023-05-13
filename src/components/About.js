const About = ({textStyle}) => {
  return (
    <div className="mb-8 text-lg max-w-[85vw] md:max-w-[75vw]" id="about">
      <h2 className={`${textStyle} text-center uppercase text-5xl mb-8`}>About Me</h2>
      <p className="my-4 md:mx-8">
        I am a passionate web developer with a focus on learning
        and exploring new technologies. I have experience in Java, HTML, CSS,
        JS, React, Flask, and Tailwind CSS. I hold React Basics and Advanced
        certifications from Meta.
      </p>
      <p className="md:mx-8">
        I enjoy continuously expanding my skills and staying updated with web
        development trends. I'm enthusiastic about crafting exceptional web
        experiences and love to bring ideas to life. Beyond coding, I find joy
        in cycling, reading, and exploring new ideas.
      </p>
    </div>
  );
};
export default About;