import React from "react";

const Forecast = ({title}) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6 ">
        <p className="text-white font-medium uppercase text-xl">
          {title}
        </p>
      </div>
      <hr className="my-2" />

      <div className="flex items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center text-white">
            <p className="text-sm">12:00 AM</p>
            <div className="flex items-center justify-center">
                <img
                src="https://www.weatherbit.io/static/img/icons/r01d.png"
                alt="weather icon"
                className="w-12 h-12"
                />
            </div>
            <p className="text-sm">21°</p>
        </div>
        <div className="flex flex-col items-center justify-center text-white">
            <p className="text-sm">12:00 AM</p>
            <div className="flex items-center justify-center">
                <img
                src="https://www.weatherbit.io/static/img/icons/r01d.png"
                alt="weather icon"
                className="w-12 h-12"
                />
            </div>
            <p className="text-sm">21°</p>
        </div>
        <div className="flex flex-col items-center justify-center text-white">
            <p className="text-sm">12:00 AM</p>
            <div className="flex items-center justify-center">
                <img
                src="https://www.weatherbit.io/static/img/icons/r01d.png"
                alt="weather icon"
                className="w-12 h-12"
                />
            </div>
            <p className="text-sm">21°</p>
        </div>
        <div className="flex flex-col items-center justify-center text-white">
            <p className="text-sm">12:00 AM</p>
            <div className="flex items-center justify-center">
                <img
                src="https://www.weatherbit.io/static/img/icons/r01d.png"
                alt="weather icon"
                className="w-12 h-12"
                />
            </div>
            <p className="text-sm">21°</p>
        </div>
        <div className="flex flex-col items-center justify-center text-white">
            <p className="text-sm">12:00 AM</p>
            <div className="flex items-center justify-center">
                <img
                src="https://www.weatherbit.io/static/img/icons/r01d.png"
                alt="weather icon"
                className="w-12 h-12"
                />
            </div>
            <p className="text-sm">21°</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
