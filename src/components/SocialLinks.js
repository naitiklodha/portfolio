import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaHackerrank } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex md:mt-5 justify-center md:justify-normal">
      <a
        href="https://github.com/naitik-lodha"
        className="m-4 hover:scale-110 hover:text-purple-500"
      >
        <BsGithub size={35} />
      </a>

      <a
        href="https://www.linkedin.com/in/naitik-lodha"
        className="m-4 hover:scale-110 hover:text-purple-500"
      >
        <BsLinkedin size={35} />
      </a>
      <a
        href="https://www.hackerrank.com/naitik_lodha"
        className="m-4 hover:scale-110 hover:text-purple-500"
      >
        <FaHackerrank size={35} />
      </a>
    </div>
  );
};
export default SocialLinks;
