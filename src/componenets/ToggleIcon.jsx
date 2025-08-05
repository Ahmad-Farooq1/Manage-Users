import React from "react";

const ToggleIcon = ({ onClick, isSidebarOpen }) => {
  return (
    <div
      className={`absolute top-[66px] cursor-pointer transition-all duration-300 ${
        isSidebarOpen ? "left-[247px]" : "left-0"
      }`}
      onClick={onClick}
    >
      <div
        className={`bg-black h-[26px] w-[26px] rounded-3xl flex justify-center items-center`}
      >
        <img
          src={"/left.svg"}
          alt="Toggle"
          className={`h-[10px] w-[6px] ${
            isSidebarOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>
    </div>
  );
};

export default ToggleIcon;
