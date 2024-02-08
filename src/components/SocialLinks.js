import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaHackerrank } from "react-icons/fa";
import { Flip } from "react-reveal";

const SocialLink = ({ href, icon, title }) => {
  const iconStyle = "m-4 hover:scale-110 hover:text-purple-500";

  return (
    <Flip>
      <a href={href} className={iconStyle} title={title}>
        {icon}
      </a>
    </Flip>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex md:mt-5 justify-center md:justify-normal">
      <SocialLink
        href="https://github.com/naitiklodha"
        icon={<BsGithub size={35} />}
        title="GitHub Link of Naitik Lodha"
      />

      <SocialLink
        href="https://www.linkedin.com/in/naitiklodha"
        icon={<BsLinkedin size={35} />}
        title="LinkedIn Link of Naitik Lodha"
      />

      <SocialLink
        href="https://www.hackerrank.com/naitiklodha"
        icon={<FaHackerrank size={35} />}
        title="HackerRank Link of Naitik Lodha"
      />
    </div>
  );
};

export default SocialLinks;
