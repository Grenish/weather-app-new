import React from "react";
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import { TopButtons, Inputs, TimeAndLocation } from "./components";

const App = () => {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-500">
      <TopButtons />
      <Inputs />
      
      <TimeAndLocation />
    </div>
  );
};

export default App;
