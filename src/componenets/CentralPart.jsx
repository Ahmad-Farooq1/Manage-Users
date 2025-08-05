import React from "react";
import CentralPartTwo from "./CentralPartTwo";

const CentralPart = () => {
  return (
    <>
      <div className="w-[95vw] sm:w-[100%] h-[100%] mt-5 space-y-3">
        <div className="relative left-[20px] h-10 flex flex-row justify-start items-center">
          <div className="flex items-center justify-center">
            <img src="/arrow.png" alt="" className="h-[16px] w-[22px]" />
          </div>
          <div>
            <p className="font-roboto font-bold text-[20px] leading-[100%] tracking-[0px]">
              &nbsp;Upload CSV File
            </p>
          </div>
        </div>

        <CentralPartTwo />
      </div>
    </>
  );
};

export default CentralPart;
