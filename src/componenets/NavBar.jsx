import React from "react";

const NavBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-[62.5px] w-[100%] Mainbg-color flex flex-row z-[99]">
      <div className="flex items-center justify-start h-full w-full">
        <div className="w-[20px] h-[62.5px]"></div>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 text-sm text-white rounded-lg sm:hidden hover:Mainbg-color focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={toggleSidebar}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <div className="sm:hidden w-[20px] h-[80px]"></div>
        <div className="flex justify-between w-full">
          <p className="font-roboto font-semibold text-[20px] sm:font-bold sm:text-[22px] text-white">
            Manage Users
          </p>
          <div className="flex justify-end">
            <div className="flex items-center px-5">
              <img
                src="/notification.svg"
                alt=""
                className="h-[24px] w-[24px]"
              />
            </div>
            <div className="flex items-center">
              <p className="font-inter font-base text-sm text-white">
                james@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="w-[20px] h-[80px]"></div>
      </div>
    </div>
  );
};

export default NavBar;