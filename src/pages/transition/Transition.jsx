import React from "react";
import InfroDeliver from "./components/InfroDeliver";
import PayProduct from "./components/PayProduct";

const Transition = () => {
  return (
    <div className="bg-LightBlue min-h-[100vh]">
      <div className="w-[1240px] mx-auto flex justify-center gap-8 pt-2x pb-4x">
        <InfroDeliver />
        <PayProduct />
      </div>
    </div>
  );
};

export default Transition;
