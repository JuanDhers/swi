import React from "react";
import logo from "../assets/icons/Spanish_with_Ines_icon.png";
const WorkInProgress: React.FC = () => {
  return (
    <section className="flex-col items-center justify-center justify-items-center content-center mx-auto p-10  rounded flex text-center bg-gradient-to-b from-amber-50 to-white">
        <img src={logo} alt="" className="text-4xl md:text-6xl mb-8 text-stone-700 font-title tracking-wides font-bold text-center" />
        <h2 className="text-4xl md:text-6xl mb-8 text-stone-700 font-title tracking-wides font-bold text-center">Work in progress</h2>
      <ul className="pl-5 space-y-2 text-gray-700">

      </ul>
    </section>
  );
};

export default WorkInProgress;