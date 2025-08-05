import React from "react";

const OtherSideBarHover = ({
  image,
  textf,
  extraicon,
  isActive,
  onClick,
  users,
}) => {
  const imgClass = `h-[24px] w-[24px] ${
    users ? (isActive ? "" : "invert") : isActive ? "invert" : ""
  }`;

  return (
    <div
      className={`h-[52px] w-[226px] flex flex-row justify-start items-center cursor-pointer ${
        isActive ? "Mainbg-color rounded-lg text-white" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row justify-start items-center pl-2">
          <div className="flex flex-col justify-center items-center">
            <img src={image} alt="" className={imgClass} />
          </div>
          <div className="px-2">
            <p className="font-sans font-semibold text-sm">{textf}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherSideBarHover;
