import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaHackerrank } from "react-icons/fa";

const SocialLinks = () => {
  const iconStyle="m-4 hover:scale-110 hover:text-purple-500 ";
  return (
    <div className="flex md:mt-5 justify-center md:justify-normal">
      <a
        href="https://github.com/naitik-lodha"
        className={iconStyle}
      >
        <BsGithub size={35} title="GitHub Link of Naitik Lodha"/>
      </a>

      <a
        href="https://www.linkedin.com/in/naitik-lodha"
        className={iconStyle}
      >
        <BsLinkedin size={35} title="LinkedIn Link of Naitik Lodha"/>
      </a>
      <a
        href="https://www.hackerrank.com/naitik_lodha"
        className={iconStyle}
      >
        <FaHackerrank size={35} title="HackerRank Link of Naitik Lodha"/>
      </a>
    </div>
  );
};
export default SocialLinks;
