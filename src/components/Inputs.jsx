import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const Inputs = () => {
  const [isCelcius, setIsCelcius] = useState(true);

  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center my-6 border border-gray-300 rounded-2xl p-3.5 hover:backdrop-blur-sm hover:bg-[#ffffff2f] transition ease-in-out ">
      <div className="flex flex-row items-center justify-between md:w-1/2 mb-4 md:mb-0 space-x-1">
        <input
          type="text"
          className=" font-light p-3 w-full md:w-3/4 outline-none bg-transparent border-2 rounded-l-xl text-white"
          placeholder="Search for cities..."
          role="search"
          aria-label="Search for cities"
        />
        <div className="border-2 flex p-3.5 rounded-r-xl justify-center items-center gap-2">
          <UilSearch
            className="text-white cursor-pointer transition ease-in-out hover:scale-125 "
            size={20}
            aria-hidden="true"
          />
          <UilLocationPoint
            className="text-white cursor-pointer transition ease-in-out hover:scale-125 "
            size={20}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="flex items-center justify-center md:w-1/4 border-2 p-3 rounded-xl">
        <label
          htmlFor="tempSwitch"
          className="flex items-center cursor-pointer"
        >
          <div className="relative">
            <input
              type="checkbox"
              id="tempSwitch"
              className="hidden"
              onChange={() => setIsCelcius(!isCelcius)}
            />
            <div className="toggle__line w-8 h-4 bg-gray-400 rounded-full shadow-inner"></div>
            <div className="toggle__dot absolute w-4 h-4 bg-white rounded-full shadow inset-y-0 left-0"></div>
          </div>
          <div className="ml-3 text-gray-100 font-medium">
            {isCelcius ? "°C" : "°F"}
          </div>
        </label>
      </div>
    </div>
  );
};

export default Inputs;
