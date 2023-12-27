import { FiDownload } from "react-icons/fi";
const ResumeDownload = () => {
  return (
    <>
      {" "}
      <button className="bg-gradient-to-tr p-2 text-white top-0 px-4 rounded-md from-pink-600 to-purple-500">
        <a className="flex" href="NAITIK_LODHA.pdf" title="" download>
          Resume
          <FiDownload size={20} color="white" />
        </a>
      </button>
    </>
  );
};
export default ResumeDownload;
