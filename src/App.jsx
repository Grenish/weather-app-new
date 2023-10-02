import React from "react";
import { TopButtons, Inputs, TimeAndLocation, TempInfo, Forecast } from "./components";
import getFormattedWeatherData from "./services/weatherService";

const App = () => {

  const feathWeather = async () => {
    const data = await getFormattedWeatherData( {q: "London"});
    console.log(data)
  }

  feathWeather()

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-500">
      <TopButtons />
      <Inputs />
      
      <TimeAndLocation />
      <TempInfo />
      <Forecast title="horly forecast" />
      <Forecast title="daily forecast" />
    </div>
  );
};

export default App;
