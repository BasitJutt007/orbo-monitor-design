import React from "react";
import SplineChart from "../components/SplineChart";
import {
  Bull,
  Copy,
  Search,
  Pill,
  Octo,
  Globe,
  Telegram,
  Twitter,
  purpleBlob,
  Filter,
} from "../assets/images";
import {
  CheckIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const HomeScreen = () => {
  const data = [
    {
      id: 1,
      name: "Ahmed",
      tokenAddress: "Token Address",
      devBuy: "Dev Buy",
      sol: "1 SOL",
      mcap: "$4,119.478",
      condingCurve: "75%",
      timeAgo: "2 Sec Ago",
    },
    {
      id: 2,
      name: "Ahmed",
      tokenAddress: "Token Address",
      devBuy: "Dev Buy",
      sol: "1 SOL",
      mcap: "$4,119.478",
      condingCurve: "75%",
      timeAgo: "2 Sec Ago",
    },
    {
      id: 3,
      name: "Ahmed",
      tokenAddress: "Token Address",
      devBuy: "Dev Buy",
      sol: "1 SOL",
      mcap: "$4,119.478",
      condingCurve: "75%",
      timeAgo: "2 Sec Ago",
    },
    {
      id: 4,
      name: "Ahmed",
      tokenAddress: "Token Address",
      devBuy: "Dev Buy",
      sol: "1 SOL",
      mcap: "$4,119.478",
      condingCurve: "75%",
      timeAgo: "2 Sec Ago",
    },
    {
      id: 5,
      name: "Ahmed",
      tokenAddress: "Token Address",
      devBuy: "Dev Buy",
      sol: "1 SOL",
      mcap: "$4,119.478",
      condingCurve: "75%",
      timeAgo: "2 Sec Ago",
    },
    {
      id: 6,
      name: "Ahmed",
      tokenAddress: "Token Address",
      devBuy: "Dev Buy",
      sol: "1 SOL",
      mcap: "$4,119.478",
      condingCurve: "75%",
      timeAgo: "2 Sec Ago",
    },
    {
      id: 7,
      name: "Ahmed",
      tokenAddress: "Token Address",
      devBuy: "Dev Buy",
      sol: "1 SOL",
      mcap: "$4,119.478",
      condingCurve: "75%",
      timeAgo: "2 Sec Ago",
    },
    {
      id: 8,
      name: "Ahmed",
      tokenAddress: "Token Address",
      devBuy: "Dev Buy",
      sol: "1 SOL",
      mcap: "$4,119.478",
      condingCurve: "75%",
      timeAgo: "2 Sec Ago",
    },
    {
      id: 9,
      name: "Ahmed",
      tokenAddress: "Token Address",
      devBuy: "Dev Buy",
      sol: "1 SOL",
      mcap: "$4,119.478",
      condingCurve: "75%",
      timeAgo: "2 Sec Ago",
    },
    {
      id: 10,
      name: "Ahmed",
      tokenAddress: "Token Address",
      devBuy: "Dev Buy",
      sol: "1 SOL",
      mcap: "$4,119.478",
      condingCurve: "75%",
      timeAgo: "2 Sec Ago",
    },
  ];

  return (
    // ml-72 mt-20
    <>
      <section className="ml-72 mt-14  bg-gradient-to-r from-purple-700 to-purple-950">
        <div className="flex flex-row justify-between pt-7 px-20">
          <h1 className="text-xl font-bold text-white">
            Welcome Back, 👋 Jack
          </h1>
          <div className="flex flex-row bg-[#090117]  rounded-full text-white px-3 ">
            <div className="text-end">
              <div className="inline-flex bg-dark rounded-full p-2">
                <div className="inline-block">
                  <input
                    type="radio"
                    name="duration"
                    id="oneDay"
                    value={"1-day"}
                    defaultChecked
                    className="peer hidden"
                  />
                  <label
                    htmlFor="oneDay"
                    className="text-zinc-200 text-sm rounded-full peer-checked:bg-[#9F01FF] px-4 py-1"
                  >
                    1D
                  </label>
                </div>
                <div className="inline-block">
                  <input
                    type="radio"
                    name="duration"
                    id="oneWeek"
                    value={"1-week"}
                    className="peer hidden"
                  />
                  <label
                    htmlFor="oneWeek"
                    className="text-zinc-200 text-sm rounded-full peer-checked:bg-[#9F01FF] px-4 py-1"
                  >
                    1W
                  </label>
                </div>
                <div className="inline-block">
                  <input
                    type="radio"
                    name="duration"
                    id="oneMonth"
                    value={"1-month"}
                    className="peer hidden"
                  />
                  <label
                    htmlFor="oneMonth"
                    className="text-zinc-200 text-sm rounded-full peer-checked:bg-[#9F01FF] px-4 py-1"
                  >
                    1M
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="px-20 text-stone-300 text-sm">
          Explore Orbo's monitors today
        </p>
        {/* Search Bar */}
        <div className=" w-1/3 ml-20 my-5 pb-10 ">
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-white ml-1 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-3 ps-10 text-sm text-gray-900  rounded-xl   placeholder-white bg-slate-700 isolate  bg-white/20    "
              placeholder="Search Monitors"
              required
            />
          </div>
        </div>
        {/* Cards */}
        <div class="flex absolute right-20 max-md:right-5 b-point:right-2 top-44 space-x-6">
          <div class="h-36 w-64 b-point:h-34 b-point:w-60 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur-md">
            <p className="text-sm pl-5 mt-5 text-white">Amount of Tokens</p>
            <div className="flex flex-row">
              <p className=" text-3xl ml-5 mt-2  text-white">1.2k</p>
              <p className=" text-sm ml-3 mt-2  text-[#42EBAE]">^ 2.2%</p>
            </div>

            <div className=" absolute top-0">
              <SplineChart />
            </div>
          </div>
          <div class="h-36 w-64 b-point:h-34 b-point:w-60 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur-md">
            <p className="text-sm pl-5 mt-5 text-white">Relay Speed</p>
            <div className="flex flex-row">
              <p className=" text-3xl ml-5 mt-2  text-white">0.9 Sec</p>
              <p className=" text-sm ml-3 mt-2  text-[#42EBAE]">^ 2.2%</p>
            </div>

            <div className=" absolute top-0">
              <SplineChart />
            </div>
          </div>
        </div>
      </section>
      {/* Table Section  */}
      <section className="ml-72 mt-14 text-white ">
        <div className="flex flex-row items-center">
          <h1 className="text-xl ml-20">Pump-Fun Monitors</h1>
          {/* Red Dot */}
          <div className="h-6 w-6 rounded-full bg-red-700 bg-opacity-30 ml-4 relative">
            <div className="h-3 w-3 rounded-full bg-red-500 absolute p-1 top-1.5 left-1.5 ">
              {" "}
            </div>
          </div>
        </div>
        <p className="ml-20 text-sm text-gray-500 mt-2">Newest</p>

        <div className="bg-[#090117] flex flex-row w-[100%]">
          <div className="relative">
            <div className=" mt-5 pb-2 ">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="flex relative flex-row items-center  ml-20 border border-gray-800 py-4 rounded-2xl text-xs mb-4"
                >
                  <img
                    src={purpleBlob}
                    alt="Logo"
                    className="h-4 w-4 ml-4 mr-2 "
                  />
                  <span className="text-[11px]">{item.name}</span>
                  <img src={Copy} alt="Logo" className="h-4 w-4 ml-4" />
                  <span className="text-gray-500 mr-1 pl-1 text-[11px]">
                    {item.tokenAddress}
                  </span>
                  <span className="text-gray-500 mr-1 pl-1 text-[11px]">
                    {item.devBuy}
                  </span>
                  <span className="text-[#6366F1] text-[11px]">{item.sol}</span>
                  <span className="text-gray-500 ml-5 mr-1 pl-1 text-[11px]">
                    MCap
                  </span>
                  <span className="text-[#6366F1]">{item.mcap}</span>
                  <span className="text-gray-500 mr-1 ml-5 pl-1 text-[11px]">
                    Bonding Curve
                  </span>
                  <span className="text-[#6366F1]">{item.condingCurve}</span>
                  <img
                    src={Bull}
                    alt="Bull"
                    className="h-5 w-5 mr-1 ml-4 cursor-pointer"
                  />
                  <img
                    src={Search}
                    alt="Search"
                    className="h-4 w-4 mr-1 cursor-pointer"
                  />
                  <img
                    src={Pill}
                    alt="Pill"
                    className="h-4 w-4 mr-1  cursor-pointer"
                  />
                  <img
                    src={Octo}
                    alt="Octo"
                    className="h-4 w-4 mr-1 cursor-pointer"
                  />
                  <img
                    src={Globe}
                    alt="Globe"
                    className="h-4 w-4 mr-1 cursor-pointer"
                  />
                  <img
                    src={Telegram}
                    alt="Telegram"
                    className="h-4 w-4 mr-1 cursor-pointer"
                  />
                  <img
                    src={Twitter}
                    alt="Twitter"
                    className="h-4 w-4 mr-1 cursor-pointer"
                  />
                  <span className="text-xs font-light text-gray-500 ml-5 mr-5 ">
                    {item.timeAgo}
                  </span>
                  <div className="absolute top-[95%] left-3 h-[3px] rounded-full w-[70%] bg-gradient-to-r from-fuchsia-600 to-blue-700"></div>
                </div>
              ))}
            </div>
            <div className="absolute w-full h-full left-0 top-0 bg-gradient-to-t from-gray-950 from-10% pointer-events-none"></div>
          </div>
          <div className=" ml-7 w-72">
            <div className="basis-72">
              <div className=" rounded-lg bg-[#130C21] p-6">
                <div className="flex items-center gap-2">
                  <img src={Filter} alt="Filter" className="h-4 w-4 mr-1" />
                  <h4 className="text-zinc-100 font-semibold">Filters</h4>
                </div>

                <div className="py-3 border-b border-b-zinc-700">
                  <h6 className="text-sm text-zinc-500">Bonding Curve</h6>
                  <div className="py-3">
                    <input
                      type="range"
                      name="slider"
                      id="slider"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="py-3 border-b border-b-zinc-700">
                  <h6 className="text-sm text-zinc-500">Contains Metadata</h6>
                  <div className="py-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <input
                          type="checkbox"
                          name="metadata"
                          id="twitter"
                          className="hidden"
                        />

                        <label htmlFor="twitter" className="block">
                          <div className="flex items-center gap-2">
                            <span className="custom-checkbox relative inline-block w-4 h-4 rounded bg-white/10">
                              <CheckIcon className="check-icon text-white w-3 h-3 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 hidden" />
                            </span>
                            <span className="text-sm text-zinc-500">
                              Twitter
                            </span>
                          </div>
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          name="metadata"
                          id="website"
                          value="website"
                          className="hidden"
                        />

                        <label htmlFor="website" className="block">
                          <div className="flex items-center gap-2">
                            <span className="custom-checkbox relative inline-block w-4 h-4 rounded bg-white/10">
                              <CheckIcon className="check-icon text-white w-3 h-3 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 hidden" />
                            </span>
                            <span className="text-sm text-zinc-500">
                              Website
                            </span>
                          </div>
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          name="metadata"
                          id="telegram"
                          value="telegram"
                          className="hidden"
                        />

                        <label htmlFor="telegram" className="block">
                          <div className="flex items-center gap-2">
                            <span className="custom-checkbox relative inline-block w-4 h-4 rounded bg-white/10">
                              <CheckIcon className="check-icon text-white w-3 h-3 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 hidden" />
                            </span>
                            <span className="text-sm text-zinc-500">
                              Telegram
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-3 border-b border-b-zinc-700">
                  <h6 className="text-sm text-zinc-500">Dev Buy Amount</h6>
                  <div className="py-3">
                    <input
                      type="text"
                      name="amount"
                      id="amount"
                      placeholder="Dev Buy Amount"
                      className="w-full bg-white/10 px-4  py-2.5 rounded-lg focus:outline-none border-0 text-zinc-200 placeholder:text-zinc-500 text-sm"
                    />
                  </div>
                </div>

                <div className="py-3  border-b-zinc-700">
                  <h6 className="text-sm text-zinc-500">Created Time</h6>
                  <div className="py-3">
                    <input
                      type="text"
                      name="start-time"
                      id="startTime"
                      placeholder="Start Time"
                      className="w-full bg-white/10 px-4  py-2.5 rounded-lg focus:outline-none border-0 text-zinc-200 placeholder:text-zinc-500 text-sm"
                    />
                  </div>
                  <div className="pb-6">
                    <input
                      type="text"
                      name="end-time"
                      id="endTime"
                      placeholder="End Time"
                      className="w-full bg-white/10 px-4  py-2.5 rounded-lg focus:outline-none border-0 text-zinc-200 placeholder:text-zinc-500 text-sm"
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-zinc-100 font-medium"
                  >
                    Save Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
