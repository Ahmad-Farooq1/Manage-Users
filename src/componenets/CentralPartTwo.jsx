import React from "react";
import DragNDrop from "./DragNDrop";
import ButtonTable from "./ButtonTable";
import ButtonGroup from "./ButtonGroup";
import AddToTable from "./AddToTable";

const CentralPartTwo = ({ onAddClick, onEditClick, documents ,setDocuments}) => {
  return (
    <>
      <div className="bg-userTable2 w-[97%] mx-5 rounded-lg">
        <div className="flex flex-col justify-between h-full px-5 py-4">
          <div className="flex flex-row justify-between h-[34px]">
            <p className="font-bold font-roboto text-sm font-heading">
              Company Details
            </p>
            <div className=" flex flex-row justify-end">
              <div className="pr-4">
                <button className="Mainbg-color mb-6 font-sans text-xs font-normal text-white h-[24px] w-[62px] rounded-md cursor-pointer flex felx-row justify-center items-center ">
                  <img src="/edit.svg" className="w-3.5 h-3.5" />
                  Edit
                </button>
              </div>
              <div className="">
                <button className="btn-delete mb-6 font-sans text-xs font-normal text-white h-[24px] w-[62px] rounded-md cursor-pointer flex felx-row justify-center items-center ">
                  <img src="/delete.svg" className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mt-3 -mb-3 justify-between text-xs">
            <div className="flex flex-row justify-between w-full sm:w-1/5 mb-2">
              <p className="mr-5 table-font-color font-semibold font-sans">
                Company Name
              </p>
              <p className="ml-2 font-cancel font-sans">XYZ Ireland Ltd</p>
            </div>
            <div className="flex flex-row justify-between w-full sm:w-1/6 mb-2">
              <p className="mr-2 table-font-color font-semibold font-sans">
                Alias
              </p>
              <p className="ml-2 font-cancel font-sans">QuickDrop</p>
            </div>
            <div className="flex flex-row justify-between w-full sm:w-1/6 mb-2">
              <p className="mr-2 table-font-color font-semibold font-sans">
                Status
              </p>
              <p className="ml-2 font-cancel font-sans">Active</p>
            </div>
            <div className="flex flex-row justify-between w-full sm:w-1/5 mb-2">
              <p className="mr-2 table-font-color font-semibold font-sans">
                Company no.
              </p>
              <p className="ml-5 font-cancel font-sans">9348fjr73</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[97%] pb-15 sm:pb-0 h-[90%] top-[26px] left-[20px] bg-white ">
     <ButtonGroup
  onAddClick={onAddClick}
  onEditClick={onEditClick}
  documents={documents}
  setDocuments={setDocuments}
/>
      </div>
    </>
  );
};

export default CentralPartTwo;