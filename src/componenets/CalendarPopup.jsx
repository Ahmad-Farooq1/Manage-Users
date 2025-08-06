import React, { useRef, useEffect, useState } from "react";

const CalendarPopup = ({ onClose, onSelectDate }) => {
  const popupRef = useRef(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState("years"); // years, months, or days
  const [selectedYear, setSelectedYear] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const years = Array.from({ length: 12 }, (_, i) => 2014 + i);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const prevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const handleYearClick = (year) => {
    setSelectedYear(year);
    setCurrentDate(new Date(year, month, 1));
    setView("months");
  };

  const handleMonthClick = (monthIndex) => {
    setCurrentDate(new Date(selectedYear, monthIndex, 1));
    setView("days");
  };

  const handleDateClick = (day) => {
    const selected = new Date(selectedYear, month, day);
    onSelectDate?.(selected.toISOString().split("T")[0]);
  };

  const handleApply = () => {
    const selected = new Date(selectedYear || year, month, 1);
    onSelectDate?.(selected.toISOString().split("T")[0]);
    onClose();
  };

  const handleClear = () => {
    onSelectDate?.("");
    onClose();
  };

  const handleBack = () => {
    if (view === "days") {
      setView("months");
    } else if (view === "months") {
      setView("years");
    }
  };

  const prevYear = () => {
    const minYear = Math.min(...years);
    if (selectedYear && selectedYear > minYear) {
      setSelectedYear(selectedYear - 1);
      setCurrentDate(new Date(selectedYear - 1, month, 1));
    }
  };

  const nextYear = () => {
    const maxYear = Math.max(...years);
    if (selectedYear && selectedYear < maxYear) {
      setSelectedYear(selectedYear + 1);
      setCurrentDate(new Date(selectedYear + 1, month, 1));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center sm:absolute sm:inset-auto sm:right-[5%] sm:top-[5%] sm:items-start sm:justify-end">
      <div
        ref={popupRef}
        className="bg-white border border-gray-300 rounded-xl shadow-xl p-3 w-64 sm:w-72 transition-transform duration-300"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-gray-800">
            Calendar
          </h2>
          <div className="flex items-center space-x-2">
            {(view === "months" || view === "days") && (
              <button
                onClick={handleBack}
                className="text-gray-600 hover:bg-gray-200 p-1 rounded-full transition-all"
              >
                <img src="/selectorright.svg" alt="Back" />
              </button>
            )}
            {view === "years" && (
              <>
                <button
                  onClick={prevYear}
                  className="text-gray-600 hover:bg-gray-200 p-1 rounded-full transition-all"
                  disabled={selectedYear && selectedYear <= Math.min(...years)}
                >
                  <img src="/selectorleft.svg" alt="Previous Year" />
                </button>
                <button
                  onClick={nextYear}
                  className="text-gray-600 hover:bg-gray-200 p-1 rounded-full transition-all"
                  disabled={selectedYear && selectedYear >= Math.max(...years)}
                >
                  <img src="/selectorright.svg" alt="Next Year" />
                </button>
              </>
            )}
            {view === "days" && (
              <button
                onClick={nextMonth}
                className="text-gray-600 hover:bg-gray-200 p-1 rounded-full transition-all"
              >
                <img src="/selectorright.svg" alt="Next Month" />
              </button>
            )}
          </div>
        </div>
        <div className="text-sm font-semibold text-gray-800 text-center mb-3">
          {view === "years" && "Select Year"}
          {view === "months" && selectedYear}
          {view === "days" &&
            currentDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
        </div>

        {/* Years View */}
        {view === "years" && (
          <div className="grid grid-cols-3 gap-1 text-center text-sm">
            {years.map((yr) => (
              <div
                key={yr}
                onClick={() => handleYearClick(yr)}
                className={`cursor-pointer py-2 rounded-lg transition-all ${
                  yr === selectedYear || (!selectedYear && yr === 2024)
                    ? "bg-[#7C7EDE] text-white"
                    : "hover:bg-[#7C7EDE] hover:text-white"
                }`}
              >
                {yr}
              </div>
            ))}
          </div>
        )}

        {/* Months View */}
        {view === "months" && (
          <div className="grid grid-cols-3 gap-1 text-center text-sm">
            {months.map((month, index) => (
              <div
                key={month}
                onClick={() => handleMonthClick(index)}
                className="cursor-pointer py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
              >
                {month.slice(0, 3)}
              </div>
            ))}
          </div>
        )}

        {/* Days View */}
        {view === "days" && (
          <>
            <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-500 mb-2">
              {weekdays.map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-y-1 text-center text-sm">
              {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => (
                <div
                  key={`day-${i + 1}`}
                  onClick={() => handleDateClick(i + 1)}
                  className="cursor-pointer text-gray-800 py-1 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </>
        )}

        {/* Buttons */}
        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={handleApply}
            className="text-sm Mainbg-color text-white px-5 py-1 rounded-lg transition-all"
          >
            Apply
          </button>
          <button
            onClick={handleClear}
            className="text-sm btn-cancel text-white px-5 py-1 rounded-lg transition-all"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarPopup;