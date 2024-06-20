import { Pill, Goal, Moon, Frame, Discord, Logo } from "../assets/images/index";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Sidebar = ({ isCollapsed, setIsCollapsed, isOverlay }) => {
  const handleToggle = () => {
    if (isOverlay) {
      setIsCollapsed(!isCollapsed);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <div
      className={`fixed left-0 top-0 h-[100vh] z-20 ${
        isCollapsed ? "w-20" : "w-72"
      } ${
        isOverlay && "bg-[#090117]"
      } flex flex-col justify-between border-r border-gray-900 transition-width duration-300`}
    >
      {/* Upper Part */}
      <div>
        <div className="flex items-center ml-5 mt-4">
          <img
            src={Logo}
            alt="Logo"
            className={`h-8 w-8 mr-2 ${isCollapsed ? "hidden" : ""}`}
          />
          <span
            className={`text-white text-lg font-semibold ${
              isCollapsed ? "hidden" : ""
            }`}
          >
            Orbo
          </span>
          <div
            className={`ml-auto bg-slate-700 p-2 ${
              isCollapsed ? "mr-10" : "mr-2"
            } rounded-full cursor-pointer`}
            onClick={handleToggle}
          >
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
              className={`lucide ${
                isCollapsed ? "lucide-chevron-right" : "lucide-chevron-left"
              }`}
            >
              <path d={isCollapsed ? "M9 18L15 12L9 6" : "M15 18L9 12L15 6"} />
            </svg>
          </div>
        </div>
        {!isCollapsed && (
          <div className="text-gray-400 text-md font-light ml-5 mt-10">
            Monitor Dashboard
          </div>
        )}
        <div>
          <div
            className={`flex items-baseline cursor-pointer mt-6 ${
              isCollapsed ? "justify-center" : "mx-4"
            }`}
          >
            <p
              className={`text-[#4A4356] text-xs mb-4 ${
                isCollapsed ? "hidden" : "ml-5"
              }`}
            >
              ORBO MONITORS
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`lucide lucide-chevron-down ${
                isCollapsed ? "hidden" : "ml-3"
              }`}
            >
              <path d="M6 9L12 15L18 9" />
            </svg>
          </div>

          <div
            className={`flex items-center py-2 pr-3 pl-9 cursor-pointer ${
              isCollapsed ? "justify-center" : "bg-slate-900"
            }`}
          >
            <img
              src={Pill}
              alt="Logo"
              className={` ${isCollapsed ? "h-5 w-5 mr-7" : "h-4 w-4"}`}
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Pump Fun"
            />
            <p
              className={`text-sm text-white pl-4 ${
                isCollapsed ? "hidden" : ""
              }`}
            >
              Pump-Fun
            </p>
          </div>
          <div
            className={`flex items-center py-2 pr-3 pl-9 cursor-pointer ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <img
              src={Goal}
              alt="Logo"
              className={` ${isCollapsed ? "h-5 w-5 mr-7 mt-2" : "h-4 w-4"}`}
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Pending Snipes"
            />
            <p
              className={`text-sm text-[#4A4356] pl-4 ${
                isCollapsed ? "hidden" : ""
              }`}
            >
              Pending Snipes
            </p>
          </div>
          <div
            className={`flex items-center py-2 pr-3 pl-9 cursor-pointer ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <img
              src={Moon}
              alt="Logo"
              className={` ${isCollapsed ? "h-5 w-5 mr-7 mt-2" : "h-4 w-4"}`}
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Raydium"
            />
            <p
              className={`text-sm text-[#4A4356] pl-4 ${
                isCollapsed ? "hidden" : ""
              }`}
            >
              Raydium
            </p>
          </div>
          <div
            className={`flex items-center py-2 mb-4 pr-3 pl-9 cursor-pointer ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <img
              src={Frame}
              alt="Logo"
              className={` ${isCollapsed ? "h-5 w-5 mr-7 mt-2" : "h-4 w-4"}`}
              data-tooltip-id="my-tooltip"
              data-tooltip-content="LMNFT"
            />
            <p
              className={`text-sm text-[#4A4356] pl-4 ${
                isCollapsed ? "hidden" : ""
              }`}
            >
              LMNFT
            </p>
          </div>
        </div>
      </div>
      {/* Lower Part */}
      <div className="flex flex-col items-center space-y-6">
        {!isCollapsed && (
          <div className="mx-8 rounded-lg bg-gradient-to-tl from-[#6366F1] to-[#999BF1] cursor-pointer">
            <p className="text-white pt-5 px-3 mx-5">Need Support?</p>
            <p className="text-white text-xs font-light py-3 px-3 mx-5 pb-6">
              Lorem ipsum dolor set amet consectetur Lorem ipsum dolor
            </p>
          </div>
        )}
        <div className="flex flex-col items-center">
          {isCollapsed && (
            <div
              className="flex items-center mb-5 bg-gradient-to-tl from-[#6366F1] to-[#999BF1] p-2 rounded-md cursor-pointer"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Need Support?"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-help"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
            </div>
          )}
          <div
            className={`flex items-center mb-5 bg-gray-800 ${
              isCollapsed ? "px-2" : "px-14"
            } rounded-md py-2 cursor-pointer`}
          >
            <img
              src={Discord}
              alt="Discord"
              className="h-7 w-6"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Join Discord"
            />
            <p
              className={`text-white text-sm ${
                isCollapsed ? "hidden" : "ml-2 "
              }`}
            >
              Join Discord
            </p>
          </div>
        </div>
      </div>
      <Tooltip place="right" type="dark" effect="solid" id="my-tooltip" />
    </div>
  );
};

export default Sidebar;
