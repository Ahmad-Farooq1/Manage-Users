import React from "react";

const SideBarlast = ({ image, textf, extraicon, isActive, onClick }) => {
  return (
    <div
      className={`h-[40px] w-full flex flex-row justify-start items-center cursor-pointer ${
        isActive
          ? "Mainbg-color rounded-lg text-white  font-normal"
          : "table-font-color font-medium "
      }`}
      onClick={onClick}
    >
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row justify-start items-center pl-2">
          <div className="flex flex-col justify-center items-center">
            <img
              src={image}
              alt=""
              className={`h-[19px] w-[19px] ${isActive ? "invert" : ""}`}
            />
          </div>
          <div className="px-2">
            <p className="font-sans font-medium text-xs">{textf}</p>
          </div>
          <div className="flex flex-col justify-center items-center ml-16 pr-3">
            <img
              src={extraicon}
              className={`h-[19px] w-[19px] ${isActive ? "invert" : ""}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarlast;
