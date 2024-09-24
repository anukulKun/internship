import React, { useState } from "react";
import { icons } from "../data";
import TodoItem from "./TodoItem";
import Calendar from "./Calendar";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoReducer";

const TodoItemFeature = ({ feature }) => {
  const theme = useSelector((state) => state.theme);
  const [openCalender, setOpenCalender] = useState(false);

  return (
    <>
      <div
        className="flex items-center gap-x-5 py-4 pr-8 border-t border-t-darkGreenColor/35 dark:border-t-darkSidebarItemActiveText cursor-pointer"
        onClick={() => {
          if (feature.title === "Add Due Date") {
            setOpenCalender(!openCalender);
          }
        }}
      >
        <img
          src={theme === "dark" ? feature.iconUrl.dark : feature.iconUrl.light}
          alt={feature.title}
        />
        <h1>{feature.title}</h1>
      </div>
      {openCalender && (
        <div className="my-5 px-6">
          <Calendar />
        </div>
      )}
    </>
  );
};

export default function TodoItemDescription() {
  const theme = useSelector((state) => state.theme);
  const selectedTodo = useSelector((state) => state.selectedTodo);
  const dispatch = useDispatch();

  const todoDescriptionItems = [
    { id: 1, iconUrl: icons.sum, title: "Add Step" },
    { id: 2, iconUrl: icons.bell, title: "Set Reminder" },
    { id: 3, iconUrl: icons.calendar, title: "Add Due Date" },
    { id: 4, iconUrl: icons.repeat, title: "Repeat" },
  ];

  if (!selectedTodo) return null;

  return (
    <div className="md:relative  md:visible flex flex-col gap-[10px] md:gap-[360px] text-lightTextColor dark:text-darkTextColor">
      <div className="ml-12">
        <TodoItem todo={selectedTodo} />
        <div>
          {todoDescriptionItems.map((feature) => (
            <TodoItemFeature key={feature.id} feature={feature} />
          ))}
        </div>
        <textarea
          placeholder="Add Notes"
          className="resize-none pl-10 py-4 w-full outline-none bg-transparent border-t border-t-darkGreenColor/35 dark:border-t-darkSidebarItemActiveText"
          rows="2"
        />
      </div>
      <div className="py-4 w-full flex justify-between items-center px-5 border-t border-t-darkGreenColor/35 dark:border-t-darkSidebarItemActiveText text-lightTextColor/50">
        <img
          alt="close"
          className="cursor-pointer"
          onClick={() =>
            document
              .querySelector(".todoDescription")
              .classList.toggle("hidden")
          }
          src={theme === "dark" ? icons.cross.dark : icons.cross.light}
        />
        <h3
          className={`${
            theme === "dark" ? "text-darkTextColor" : "text-lightTextColor"
          }`}
        >
          {"Created Today"}
        </h3>
        <img
          alt="delete"
          className="cursor-pointer"
          src={theme === "dark" ? icons.delete.dark : icons.delete.light}
          onClick={() => {
            selectedTodo && dispatch(removeTodo(selectedTodo.id));
            document.querySelector(".todoDescription").classList.add("hidden");
          }}
        />
      </div>
    </div>
  );
}
