import React from "react";
import Typewriter from "typewriter-effect";
import SocialLinks from "./SocialLinks";
import Image from "next/image";
import ResumeDownload from "./ResumeDownload";
import { Fade, Slide, Zoom } from "react-reveal";
import { textStyle } from "@/utils/styles";

const Hero = () => {
  return (
    <section className="md:flex mt-12" id="top">
      <Fade left>
        <div className="md:w-1/2 m-0">
          <Image src="/profile.png" alt="Naitik" width={600} height={300} priority />
        </div>
      </Fade>
      <Slide right>
        <div className="md:w-1/2 md:mt-12 mx-4 ml-8 text-center md:text-left">
          <h1 className="text-2xl my-4">
            Hello, my name is,{" "}
            <div className={`${textStyle} font-black text-5xl`}>Naitik Lodha</div>
          </h1>
          <div className="text-xl md:flex md:text-3xl">
            I am a 17-year-old&nbsp;
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
