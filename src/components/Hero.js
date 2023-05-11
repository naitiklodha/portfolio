import Typewriter from "typewriter-effect";
import SocialLinks from "./SocialLinks";

const Hero = ({ textStyle }) => {
  return (
    <div className="md:flex">
      <img src="profile.png" alt="Naitik"></img>
      <div className=" md:mt-12 mx-4 text-center md:text-left">
        <h1 className="text-2xl my-4">
          Hello my name is,
          <div className={`${textStyle} font-black text-5xl`}>Naitik Lodha</div>
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
        <SocialLinks />
      </div>
    </div>
  );
};
export default Hero;
