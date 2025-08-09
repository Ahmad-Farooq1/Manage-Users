import React from "react";
import CentralPartTwo from "./CentralPartTwo";
import AddToTable from "./AddToTable";

const CentralPart = ({ onAddClick, onEditClick, documents }) => {
  return (
    <>
      <div className="w-[95vw] sm:w-[100%] h-[100%] mt-5 space-y-3 flex flex-wrap">
        <div className="relative left-[20px] h-8 flex flex-row justify-between items-center">
          <div className="flex flex-row justify-start gap-1">
            <div className="flex items-center justify-center">
              <img src="/arrow.svg" alt="" className="h-[20px] w-[23px]" />
            </div>
            <div className="flex items-center justify-center">
              <p className="font-roboto font-bold text-md leading-[100%] tracking-[0px]">
                &nbsp;XYZ Ireland Ltd
              </p>
            </div>
          </div>
          <div>
            <img
              src="/Frame.svg"
              alt=""
              className="h-[90px] w-[90px] mr-5 md:mr-7 2xl:mr-10"
            />
          </div>
        </div>

        <CentralPartTwo
          onAddClick={onAddClick}
          onEditClick={onEditClick}
          documents={documents} // Pass documents to CentralPartTwo
        />
      </div>
    </>
  );
};

export default CentralPart;