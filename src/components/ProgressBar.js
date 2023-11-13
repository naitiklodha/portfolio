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
      <div className="flex overflow-hidden h-3 mb-4 text-xs  rounded  bg-gray-200 w-full">
        <div
          style={{ width: `${percentage}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center  bg-gradient-to-r from-pink-500 to-purple-500 "
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
