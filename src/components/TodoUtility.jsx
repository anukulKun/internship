import React from "react";
import { icons } from "../data";
import { useSelector } from "react-redux";

function TodoUtility() {
  const theme = useSelector((state) => state.theme);
  return (
    <>
      <div className="flex items-center ">
        <div
          className={`${
            theme === "dark" ? "text-darkTextColor/90" : "text-lightTextColor/90"
          } text-[14px] font-medium leading-none`}
        >
          To Do
        </div>
        <span>
          <img
            src={
              theme === "dark" ? icons.caretDown.dark : icons.caretDown.light
            }
            alt=""
          />
        </span>
      </div>
    </>
  );
}

export default TodoUtility;
