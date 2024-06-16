import React from "react";
import { Pill, Goal, Moon, Frame, Discord } from "../assets/images/index";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-[100vh] w-72 bg-[#090117]  flex flex-col justify-between border-r border-gray-800">
      {/* Upper Part */}
      <div>
        <div className=" flex flex-row items-baseline cursor-pointer mt-24 mx-4">
          {" "}
          <p className="text-[#4A4356] text-xs mb-4 ml-5 ">ORBO MONITORS</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="gray"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-down ml-3"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
        <div className="flex flex-row bg-slate-900 py-2   pr-3 pl-9 cursor-pointer">
          <img src={Pill} alt="Logo" className="h-4 w-4 " />
          <p className="text-sm text-white pl-4  ">Pump-Fun</p>
        </div>
        <div className="flex flex-row  py-2   pr-3 pl-9 cursor-pointer">
          <img src={Goal} alt="Logo" className="h-4 w-4 " />
          <p className="text-sm text-[#4A4356] pl-4  ">Pending Snipes</p>
        </div>
        <div className="flex flex-row  py-2   pr-3 pl-9 cursor-pointer">
          <img src={Moon} alt="Logo" className="h-4 w-4 " />
          <p className="text-sm text-[#4A4356] pl-4  ">Raydium</p>
        </div>
        <div className="flex flex-row  py-2 mb-4  pr-3 pl-9 cursor-pointer">
          <img src={Frame} alt="Logo" className="h-4 w-4 " />
          <p className="text-sm text-[#4A4356] pl-4  ">LMNFT</p>
        </div>
      </div>

      {/* Lower Part */}
      <div className="flex flex-col items-center space-y-6">
        {/* Add your additional elements here */}
        <div className="mx-8 rounded-lg bg-gradient-to-tl from-[#6366F1] to-[#999BF1]  cursor-pointer">
          <p className="text-white pt-5  px-3 mx-5">Need Support?</p>
          <p className="text-white text-xs font-light py-3 px-3 mx-5 pb-6">
            Lorem ipsum dolor set amet consectetur Lorem ipsum dolor{" "}
          </p>
        </div>
        <div>
          <div className="flex flex-row items-center mb-5 bg-gray-800 px-14 rounded-md py-2 cursor-pointer ">
            <img src={Discord} alt="Discord" className="h-6 w-5 mx-2" />
            <p className="text-white text-sm">Join Discord</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
