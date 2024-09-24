import React, { useState, useMemo, useCallback } from "react";
import { icons } from "../data";
import { useSelector } from "react-redux";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const theme = useSelector((state) => state.theme);

  const calendarData = useMemo(() => {
    const currentMonth = selectedDate.getMonth();
    const currentYear = selectedDate.getFullYear();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const weekStart = firstDay === 0 ? 6 : firstDay - 1;

    const calendar = [];
    let day = 1;
    for (let row = 0; row < 6; row++) {
      calendar.push([]);
      for (let col = 0; col < 7; col++) {
        if (row === 0 && col < weekStart) {
          calendar[row].push(null);
        } else if (day > daysInMonth) {
          calendar[row].push(null);
        } else {
          calendar[row].push(day++);
        }
      }
    }
    return calendar;
  }, [selectedDate]);

  const handlePreviousMonth = useCallback(() => {
    setSelectedDate((prevDate) => {
      const newMonth = prevDate.getMonth() === 0 ? 11 : prevDate.getMonth() - 1;
      const newYear =
        newMonth === 11 ? prevDate.getFullYear() - 1 : prevDate.getFullYear();
      return new Date(newYear, newMonth);
    });
  }, []);

  const handleNextMonth = useCallback(() => {
    setSelectedDate((prevDate) => {
      const newMonth = prevDate.getMonth() === 11 ? 0 : prevDate.getMonth() + 1;
      const newYear =
        newMonth === 0 ? prevDate.getFullYear() + 1 : prevDate.getFullYear();
      return new Date(newYear, newMonth);
    });
  }, []);

  const handleDateClick = useCallback(
    (day) => {
      if (day !== null) {
        setSelectedDate(
          new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day)
        );
      }
    },
    [selectedDate]
  );
  const formattedDate = selectedDate.toLocaleString("default", {
    weekday: "short",
    month: "long",
    day: "2-digit",
  });

  const formattedDate2 = selectedDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const daysOfWeek = [
    { name: "S", id: 1 },
    { name: "M", id: 2 },
    { name: "T", id: 3 },
    { name: "W", id: 4 },
    { name: "T", id: 5 },
    { name: "F", id: 6 },
    { name: "S", id: 7 },
  ];

  return (
    <div className="bg-lightSidebarChild dark:bg-darkBgSecondary rounded-xl p-4">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xs font-semibold">Select date</h2>
        </div>
        <div className="flex justify-start items-center mb-2">
          <span className="text-2xl font-medium">{formattedDate}</span>
        </div>
      </div>
      <hr className="w-full" />
      <div className="flex items-center justify-between">
        <div className="text-[12px]">{formattedDate2}</div>
        <div className="flex gap-7 py-2">
          <button onClick={handlePreviousMonth}>{"<"}</button>
          <button onClick={handleNextMonth}>{">"}</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map((day) => (
          <div
            key={day.id}
            className="text-gray-500 dark:text-darkTextColor h-5 w-5 m-px text-center font-bold"
          >
            {day.name}
          </div>
        ))}
        {calendarData.map((week, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {week.map((day, colIndex) => (
              <div
                key={colIndex}
                className={`text-center p-[3px] rounded-full ${
                  day === null
                    ? "dark:text-darkTextColor"
                    : day === selectedDate.getDate()
                    ? "border border-lightTextColor dark:border-darkTextColor"
                    : "hover:bg-darkBgSecondary hover:dark:bg-darkTextColor hover:text-darkTextColor hover:dark:text-lightTextColor"
                }`}
                onClick={() => handleDateClick(day)}
              >
                {day}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="flex text-[13px] justify-between items-center mt-4 text-xs">
        <button>Clear</button>
        <div className="flex gap-6">
          <button>Cancel</button>
          <button>OK</button>
        </div>
      </div>
    </div>
  );
}
