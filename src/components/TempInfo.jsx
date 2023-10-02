import React from "react";
import {
  UilCloudSun,
  UilSun,
  UilThunderstormSun,
  UilSunset,
  UilTear,
  UilWind,
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
} from "@iconscout/react-unicons";

const TempInfo = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <UilCloudSun size={45} className=" text-orange-600" />
        <p className="text-5xl">34°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={20} className="text-white" />
            Feels Like:
            <span className="ml-1 font-medium">32°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={20} className="text-white" />
            Humidity:
            <span className="ml-1 font-medium">65%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={20} className="text-white" />
            Wind:
            <span className="ml-1 font-medium">11 Km/h</span>
          </div>
        </div>
      </div>

      <div className="flex space-x-2 items-center justify-center text-white py-3 text-sm">
        <UilSun size={20} className="" />
        <p>
          {" "}
          Rise:<span className="ml-1 font-medium">06:00 AM</span>{" "}
        </p>
        <p>|</p>
        <UilSunset size={20} className="" />
        <p>
          {" "}
          Set:<span className="ml-1 font-medium">07:45 PM</span>{" "}
        </p>
        <p>|</p>
        <UilArrowUp size={20} className="" />
        <p>
          {" "}
          High:<span className="ml-1 font-medium">21°</span>{" "}
        </p>
        <p>|</p>
        <UilArrowDown size={20} className="" />
        <p>
          {" "}
          Low:<span className="ml-1 font-medium">17°</span>{" "}
        </p>
      </div>

    </div>
  );
};

export default TempInfo;
