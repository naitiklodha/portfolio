import { BsGithub, BsLinkedin } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import { FaHackerrank } from "react-icons/fa";

const Hero = ({textStyle}) => {
  return (
    <div className="md:flex">
      <img src="profile.png" alt="Naitik"></img>
      <div className=" md:mt-12 mx-4 text-center md:text-left">
        <h1 className="text-2xl my-4">
          Hello my name is,
          <div className={`${textStyle} font-black text-5xl`}>
            Naitik Lodha
          </div>
        </h1>
        <div className="text-xl  md:flex  md:text-3xl">
          I am a 17 year old &nbsp;
          <div className={textStyle}>
            <Typewriter
              options={{
                strings: ["Student", "Web Developer", "AI/ML enthusiast"],
                autoStart: true,
                loop: true,
              }}
            ></Typewriter>
          </div>
        </div>
        <div className="flex md:mt-5">
          <a
            href="https://github.com/naitik-lodha"
            className={`m-4 hover:text-pink-500`}
          >
            <BsGithub size={35} />
          </a>
          <a
            href="https://www.linkedin.com/in/naitik-lodha"
            className="m-4 hover:text-pink-500"
          >
            <BsLinkedin size={35} />
          </a>
          <a
            href="https://www.hackerrank.com/naitik_lodha"
            className="m-4 hover:text-pink-500"
          >
            <FaHackerrank size={35} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
