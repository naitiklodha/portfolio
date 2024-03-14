import React from "react";
import Typewriter from "typewriter-effect";
import SocialLinks from "./SocialLinks";
import Image from "next/image";
import ResumeDownload from "./ResumeDownload";
import { Fade, Slide, Zoom } from "react-reveal";
import { textStyle } from "@/utils/styles";

const Hero = () => {
  return (

    <section
      className="md:flex items-center mt-8 justify-around h-[70vh] "
      id="top"
    >
      <div className="md:w-[50vw] m-0 md:ml-8">

          src="/profile.png"
          alt="Naitik"
          width={600}
          height={300}
          priority
        />
      </div>

      <Slide right>
        <div className="md:w-[50vw] md:mt-12 mx-4 ml-8 text-center md:text-left">
          <p className="text-2xl my-4">Hello, my name is, </p>
          <h1 className={`${textStyle} font-black text-5xl`}>Naitik Lodha</h1>

          <div className="text-xl md:flex md:text-3xl">
            I am a 18-year-old&nbsp;
            <div className={textStyle}>
              <Typewriter
                options={{
                  strings: ["Student", "Web Developer", "AI/ML enthusiast"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <SocialLinks />
          <Zoom>
            <div className="mt-4">
              <ResumeDownload />
            </div>
          </Zoom>
        </div>
      </Slide>
    </section>
  );
};

export default Hero;
