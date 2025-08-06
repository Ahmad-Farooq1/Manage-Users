import React from "react";

const OtherSideBarHover = ({
  image,
  textf,
  extraicon,
  isActive,
  onClick,
  users,
}) => {
  const imgClass = `h-[19px] w-[19px] ${
    users ? (isActive ? "" : "invert") : isActive ? "invert" : ""
  }`;

  return (
    <div
      className={`h-[40px] my-3 w-full flex flex-row justify-start items-center cursor-pointer ${
        isActive
          ? "Mainbg-color rounded-lg text-white  font-normal"
          : "table-font-color font-medium "
      }`}
      onClick={onClick}
    >
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row justify-start items-center pl-2">
          <div className="flex flex-col justify-center items-center">
            <img src={image} alt="" className={imgClass} />
          </div>
          <div className="px-2">
            <p className="font-sans" style={{fontSize:"12px"}}>{textf}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherSideBarHover;
