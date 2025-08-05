import { useState, useEffect } from "react";
import "./App.css";
import MainMenu from "./componenets/MainMenu";
import NavBar from "./componenets/NavBar";
import SideBar from "./componenets/SideBar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 850px)");

    const handleMediaChange = (e) => {
      if (e.matches) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-full min-h-screen overflow-hidden">
        <SideBar isSidebarOpen={isSidebarOpen} onClick={handleToggle} />
        <div className="flex flex-col flex-1">
          <NavBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          <MainMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
