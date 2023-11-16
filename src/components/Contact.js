import React from "react";
import { BsPhone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import SocialLinks from "./SocialLinks";
import { useRef } from "react";
import { Fade, Slide, Zoom } from "react-reveal";
import { textStyle } from "@/utils/styles";

const Contact = () => {
  const inputStyle =
    "border bg-gray-200 dark:bg-black border-gray-900 dark:border-white border-solid bg-transparent pl-4 rounded-md py-2 m-4 w-60";
  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");

  const handleSubmit = async (e) => {
    console.log(emailRef);
    e.preventDefault();
    const url = process.env.NEXT_PUBLIC_APPSCRIPT_URI;
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      mode: "no-cors",
    };

    fetch(url, requestOptions)
      .then((response) => {
        alert("Message sent successfully!");
        nameRef.current.value = null;
        emailRef.current.value = null;
        messageRef.current.value = null;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <section className="my-8" id="contact">
      <Fade bottom>
        <h1
          className={`${textStyle} font-black text-5xl text-center uppercase mb-8`}
        >
          Contact Me
        </h1>
      </Fade>
      <div className="md:flex">
        <Fade left>
          <div className="max-w-[600px]">
            <p className="text-lg my-6 md:mr-8">
              I would love to hear from you! Whether you have a question, a
              project proposal, or just want to say hello, feel free to get in
              touch using the form.
            </p>
            <div className="mt-8 text-center">
              <Slide bottom>
                <p className="flex">
                  <MdEmail size={25} className="mr-4" />
                  <a
                    href="mailto:naitik.lodha139@nmims.edu.in"
                    className={` hover:scale-105 hover:underline  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-tr from-purple-500  to-pink-500 `}
                  >
                    naitik.lodha139@nmims.edu.in
                  </a>
                </p>
              </Slide>
              <Slide bottom>
                <p className="text-lg mt-2 flex">
                  <BsPhone size={25} className="mr-2" />
                  <a
                    href="tel:+917045503998"
                    className={` hover:scale-105 hover:underline  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-tr from-purple-500  to-pink-500 `}
                  >
                    +91 70455 03998
                  </a>
                </p>
              </Slide>
            </div>
            <SocialLinks />
          </div>
        </Fade>
        <Zoom>
          <div>
            <form
              className="flex flex-col bg-inherit items-center"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Your Name"
                ref={nameRef}
                className={inputStyle}
              />

              <input
                type="email"
                placeholder="Your Email"
                ref={emailRef}
                className={inputStyle}
              />
              <textarea
                placeholder="Your Message"
                ref={messageRef}
                className={inputStyle}
              />

              <Zoom>
                <button
                  className="bg-gradient-to-tr w-48 p-2 mx-6 rounded-md from-pink-600 to-purple-500 text-white"
                  type="submit"
                >
                  Send Message
                </button>
              </Zoom>
            </form>
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default Contact;
