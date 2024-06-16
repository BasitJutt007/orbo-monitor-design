import React from "react";
import { User, Settings, Logo } from "../assets/images";

const Navbar = () => {
  return (
    <nav className="bg-[#090117] p-3 fixed top-0 w-full z-10">
      <div className="flex items-center justify-between">
        {/* Start Section */}
        <div className="flex items-start ml-5">
          <img src={Logo} alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-white text-lg font-semibold">Orbo</span>
          <div className="ml-28 bg-slate-700 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </div>
          <div className="text-gray-400 text-md font-light ml-20 mt-1">
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
