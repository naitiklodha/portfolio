import { FiDownload } from "react-icons/fi";
const ResumeDownload = () => {
  return (
    <>
      {" "}

      <button className="bg-gradient-to-tr p-2 text-white my-2 px-4 rounded-md from-pink-600 to-purple-500">
        <a
          className="flex gap-2 items-center"
          href="NAITIK LODHA.pdf"
          title=""
          download
        >
          Resume
          <FiDownload size={18} color="white" />
        </a>
      </button>
    </>
  );
};
export default ResumeDownload;
