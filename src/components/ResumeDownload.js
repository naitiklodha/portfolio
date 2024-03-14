import { FiDownload } from "react-icons/fi";
const ResumeDownload = () => {
  return (
    <>
      {" "}

      <button className="bg-gradient-to-tr p-2 text-white top-0 px-4 rounded-md from-pink-600 to-purple-500">
        <a className="flex items-center gap-1" href="NAITIK_LODHA.pdf" title="" download>

          Resume
          <FiDownload size={18} color="white" />
        </a>
      </button>
    </>
  );
};
export default ResumeDownload;
