import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodayTodoNavIcons } from "../data";
import { addTodo } from "../features/todo/todoReducer";

const TodayTodoNav = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <div className="h-[178px] w-full border-t border-[#496e4a]/20 border-t-[1.75px] py-4 bg-gradient-to-t from-[#357937]/10 to-[#d0ffd2]/40 dark:bg-darkBgPrimary">
        <form
          onSubmit={handleAddTodo}
          className="px-5 w-full pt-[42px] flex-col justify-center items-start gap-12 inline-flex"
        >
          <input
            type="text"
            value={input}
            name="todo"
            id="todo"
            placeholder="ToDo"
            onChange={(e) => setInput(e.target.value)}
            className="text-[#1a271b]/70 text-[15px] font-normal leading-tight w-full bg-transparent outline-none w-full"
          />
          <div className="w-full flex justify-between">
            <div className="flex gap-6">
              {TodayTodoNavIcons.map((icon, index) => (
                <button key={index} type="button">
                  <img
                    src={theme === "dark" ? icon.dark : icon.light}
                    className="h-6 w-6"
                  />
                </button>
              ))}
            </div>
            <button
              type="submit"
              disabled={!input}
              className={`px-4 py-2 bg-[#347837]/30 dark:bg-darkGreenColor rounded-lg justify-start items-center gap-4 inline-flex 
                ${
                  !input && "disabled:cursor-not-allowed disabled:opacity-50"
                } `}
            >
              <span className="text-darkCheckboxFill dark:text-darkTextColor text-[15px] font-medium leading-tight">
                ADD TASK
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TodayTodoNav;
