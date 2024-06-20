import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import NavBar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import { useState, useEffect } from "react";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOverlay, setIsOverlay] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1470) {
        setIsCollapsed(true);
        setIsOverlay(true);
      } else {
        setIsCollapsed(false);
        setIsOverlay(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Call handleResize on component mount to set initial state
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="bg-[#090117] w-full h-full">
        <NavBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <Sidebar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          isOverlay={isOverlay}
        />
        <HomeScreen
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          isOverlay={isOverlay}
        />
      </div>
    </>
  );
}

export default App;
