import React from "react";

const ButtonTable = ({ id, label, activeButton, setActiveButton }) => {
  const isActive = activeButton === id;

  const handleClick = () => {
    setActiveButton(id);
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        isActive ? "bg-[#f7f9fb]" : "bg-white btn-bordergray"
      } px-3 py-1 mr-1  rounded-md sm:rounded-t-md flex items-start justify-center transition-all duration-200 font-sans text-xs font-semibold cursor-pointer overflow-visible outline-none focus:outline-none focus:ring-0 active:outline-none`}
      style={{
        height: "32px",
      }}
    >
      {label}
    </button>
  );
};

export default ButtonTable;
