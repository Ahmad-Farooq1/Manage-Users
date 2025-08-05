import React, { useState } from "react";
import SideBar from "./SideBar";
import CentralPart from "./CentralPart";
import ToggleIcon from "./ToggleIcon";

const MainMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {/* <ToggleIcon onClick={handleToggle} isSidebarOpen={isSidebarOpen} /> */}

      <div className="flex flex-row ">
        {/* {isSidebarOpen && <SideBar />} */}
        <CentralPart />
      </div>
    </>
  );
};

export default MainMenu;
