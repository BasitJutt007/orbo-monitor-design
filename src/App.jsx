import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import NavBar from "./components/NavBar";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <>
      {" "}
      <div className="bg-[#090117] h-[100vh]">
        <NavBar />
        <Sidebar />
        <HomeScreen />
      </div>
    </>
  );
}

export default App;
