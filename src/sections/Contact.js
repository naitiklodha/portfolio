import React from "react";
import { BsPhone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import SocialLinks from "../components/SocialLinks";
import { useRef } from "react";
import axios from "axios";
const Contact = ({ textStyle }) => {
  const inputStyle =
    "border  border-gray-900 dark:border-white border-solid bg-transparent pl-4 rounded-md py-2 m-4 w-60";
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = process.env.NEXT_PUBLIC_APPSCRIPT_URI;
    const data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      mode: "no-cors",
    };

    fetch(url, requestOptions)
      .then((response) => {
        alert("Message sent sucessfully!");
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      })

      .catch((error) => {
        console.error("Error:", error);
        // Handle any errors that occurred during the request
      });
  };
  return (
    <div className="my-8" id="contact">
      <h1
        className={`${textStyle} font-black text-5xl text-center uppercase mb-8`}
      >
        Contact Me
      </h1>
      <div className="md:flex">
        <div className="max-w-[600px]">
          <p className="text-lg my-6 md:mr-8">
            I would love to hear from you! Whether you have a question, a
            project proposal, or just want to say hello, feel free to get in
            touch using the form.
          </p>
          <div className="mt-8 text-center">
            <p className="flex">
              <MdEmail size={25} className="mr-4" />
              <a
                href="mailto:naitik.lodha139@nmims.edu.in"
                className={` hover:scale-105 hover:underline  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-tr from-purple-500  to-pink-500 `}
              >
                naitik.lodha139@nmims.edu.in
              </a>
            </p>
            <p className="text-lg mt-2 flex">
              <BsPhone size={25} className="mr-2" />
              <a
                href="tel:+917045503998"
                className={` hover:scale-105 hover:underline  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-tr from-purple-500  to-pink-500 `}
              >
                +91 70455 03998
              </a>
            </p>
          </div>
          <SocialLinks />
        </div>
        <div>
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
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
            <button
              className="bg-gradient-to-tr w-48 p-2 mx-6 rounded-md from-pink-600 to-purple-500 "
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
