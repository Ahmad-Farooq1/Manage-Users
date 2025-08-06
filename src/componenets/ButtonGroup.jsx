import React, { useState } from "react";
import ButtonTable from "./ButtonTable";
import UserTable from "./UserTable";
import TableTwo from "./TableTwo";
import TableThree from "./TableThree";
import TableFour from "./TableFour";
import TableFive from "./TableFive";
import TableSix from "./TableSix";
import TableSeven from "./TableSeven";
import CalendarPopup from "./CalendarPopup";

const ButtonGroup = () => {
  const [activeButton, setActiveButton] = useState("tax");
  const [showCalendar, setShowCalendar] = useState(false);

  const buttons = [
    { id: "anl", label: "Annual Report" },
    { id: "tax", label: "Tax Returns" },
    { id: "bdgt", label: "Budget Forecast" },
    { id: "bm", label: "Board Minutes" },
    { id: "cmp", label: "Compilance" },
    { id: "sox", label: "SOX" },
    { id: "ud", label: "User Defined" },
  ];

  return (
    <>
      <div>
        <div className="relative z-0 -mb-2">
          <div className="flex flex-row justify-between flex-wrap items-center">
            <div className="flex flex-wrap mt-3 mb-0">
              {buttons.map((btn) => (
                <ButtonTable
                  key={btn.id}
                  id={btn.id}
                  label={btn.label}
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
                />
              ))}
            </div>
            <div className="flex flex-row justify-between">
              <div
                onClick={() => setShowCalendar(true)}
                className="absolute md:-top-1 -top-7 bg-gray-100 rounded-lg mr-3 right-18 z-50 font-sans text-xs font-normal text-white h-[24px] w-[30px]  cursor-pointer flex flex-row justify-center items-center gap-1"
              >
                <img src="/calendar.svg" alt="Calendar Icon" />
              </div>
              <button className="absolute md:-top-1 -top-7 right-5 z-50 Mainbg-color font-sans text-xs font-normal text-white h-[24px] w-[55px] rounded-md cursor-pointer flex flex-row justify-center items-center gap-1">
                + Add
              </button>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          {activeButton === "anl" && <UserTable />}
          {activeButton === "tax" && <TableTwo />}
          {activeButton === "bdgt" && <TableThree />}
          {activeButton === "bm" && <TableFour />}
          {activeButton === "cmp" && <TableFive />}
          {activeButton === "sox" && <TableSix />}
          {activeButton === "ud" && <TableSeven />}
        </div>
      </div>

     
      {showCalendar && <CalendarPopup onClose={() => setShowCalendar(false)} />}
    </>
  );
};

export default ButtonGroup;
