import React, { useState, useEffect, useRef } from "react";
import OtherSideBarHover from "./OtherSideBarHover";
import SideBarlast from "./SideBarlast";

const SideBar = ({ isSidebarOpen, onClick }) => {
  const [activeItem, setActiveItem] = useState("Manage Companies");
  const [isMobile, setIsMobile] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobile &&
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        onClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, isSidebarOpen, onClick]);

  return (
    <div className="relative">
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-[99]"
          onClick={onClick}
        />
      )}

      <div
        ref={sidebarRef}
        className={`z-[100] ${
          isMobile
            ? `fixed top-0 left-0 h-screen bg-white transition-transform duration-300 ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`
            : `relative ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full !flex-[0]"
              }`
        }`}
      >
        <div
          className={`flex flex-col overflow-hidden ${
            isSidebarOpen ? "w-[210px]" : "w-0"
          }`}
        >
          <div className="flex items-center Mainbg-color justify-start w-[260px] relative">
            <div className="w-[18px] h-[62.5px]"></div>
            <div className="flex justify-between items-center w-[190px]">
              <img src="/logo.svg" alt="logo" className="w-[50px] h-[50px]"/>
              <div className="bg-white w-[0.5px] h-[62.5px]" />
            </div>

            {isMobile && (
              <button
                onClick={onClick}
                className="absolute right-4 top-4 text-white text-xl"
              >
                &#x2715;
              </button>
            )}
          </div>

          <div className="h-[88vh] sm:h-[150vw] md:h-[120vw] lg:h-[130vw] xl:h-[150vh]  max-w-[208px] side-barbg relative">
            <div className="my-5 mx-4">
              <OtherSideBarHover
                textf="Dashboard"
                image="/dash.svg"
                isActive={activeItem === "Dashboard"}
                onClick={() => setActiveItem("Dashboard")}
              />
              <OtherSideBarHover
                textf="Manage Companies"
                image="/companies.svg"
                isActive={activeItem === "Manage Companies"}
                onClick={() => setActiveItem("Manage Companies")}
              />
              <OtherSideBarHover
                textf="Manage Users"
                image="/manage.svg"
                users={true}
                isActive={activeItem === "Manage Users"}
                onClick={() => setActiveItem("Manage Users")}
              />
              <SideBarlast
                textf="Settings"
                image="/setting.svg"
                extraicon="down.svg"
                isActive={activeItem === "Settings"}
                onClick={() => setActiveItem("Settings")}
              />
            </div>

            <div className="absolute top-[350px] sm:top-[500px] left-4 right-4">
              <OtherSideBarHover
                textf="Logout"
                image="/logout.svg"
                isActive={activeItem === "Logout"}
                onClick={() => setActiveItem("Logout")}
              />
              <div className="flex flex-col font-inter table-font-color text-[10px] justify-center text-center">
                <div className="py-3 sm:py-3 sm:mt-15">
                  <p>Version: 2.0.1</p>
                </div>
                <div>
                  <p style={{ lineHeight: "20px" }}>
                    {" "}
                    Copyright© 2024 NUMBERDOX All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {!isMobile && (
          <div
            className={`absolute top-[53px] cursor-pointer  ${
            isSidebarOpen ? "-right-2" : "-right-4"
          }`}
            onClick={onClick}
          >
            <div className="hidden sm:flex bg-black h-[20px] w-[20px] rounded-3xl justify-center items-center">
              <img
                src={"/left.svg"}
                alt="Toggle"
                className={`h-[8px] w-[6px] ${
                  isSidebarOpen ? "rotate-0" : "rotate-180"
                }`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
