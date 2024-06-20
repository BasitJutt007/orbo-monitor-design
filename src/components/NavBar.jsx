import React from "react";
import { User, Settings, Logo } from "../assets/images";

const Navbar = () => {
  return (
    <nav className="bg-[#090117] fixed z-10  top-0 w-full  p-4 h-16 ">
      <div className="flex items-center justify-between">
        {/* Start Section */}

        <div className="flex items-start ml-5">
          <div className="text-gray-400 text-md font-light  mt-1 ml-72">
            Monitor Dashboard
          </div>
        </div>

        <div className="flex">
          {/* Add your additional elements here */}
          <button className="flex flex-row mr-10 text-md font-normal">
            <img src={Settings} alt="Settings" className="h-6 w-6 mr-2" />
            <p className="text-gray-500">Manage Subscription</p>
          </button>
          |
          <button className="flex flex-row mr-10 text-md">
            <img src={User} alt="User" className="h-6 w-6 mr-2" />
            <p className="text-gray-500">Seekdiscomfort</p>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
