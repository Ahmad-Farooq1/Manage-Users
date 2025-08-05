import React from "react";
import DragNDrop from "./DragNDrop";
import UserTable from "./UserTable";

const CentralPartTwo = () => {
  return (
    <>
      <div className="relative  w-[97%] h-[90%] top-[6px] left-[20px] side-barbg">
        <div className="h-8 flex items-center justify-start">
          <div className="px-5 pt-2 font-roboto table-font-color">
            <p>Upload Note</p>
          </div>
        </div>
        <DragNDrop />
        <div className="h-8 flex items-center justify-start">
          <div className="px-5.5 pt-4 font-roboto">
            <p className="font-bold table-font-color">Companies Details</p>
          </div>
        </div>
        <UserTable />
        <div className="mt-4 mb-7 px-5 flex flex-row justify-end">
          <div className="pr-4">
            <button className="Mainbg-color mb-6 font-sans text-base font-semibold text-white h-[50px] w-[134px] rounded-lg cursor-pointer">
              Approve
            </button>
          </div>
          <div className="2xl:pr-2 sm:p4-1 pr-1">
            <button className="btn-cancel font-sans text-base font-semibold text-white h-[50px] w-[134px] rounded-lg cursor-pointer">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CentralPartTwo;
