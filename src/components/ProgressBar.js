const ProgressBar = ({ percentage }) => {
  return (
    <div className="relative pt-1 ml-4 w-64 md:w-80">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ">
            {percentage}%
          </span>
        </div>
      </div>
      <div className="flex overflow-hidden h-3 mb-4 text-xs rounded-full bg-gray-500   w-full">
        <div
          style={{ width: `${percentage}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center rounded-full h-full bg-gradient-to-r from-[#ff1b6b] to-[#45caff] "
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
