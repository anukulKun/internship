import React from "react";
import { icons } from "../data";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleTodo,
  selectTodo,
  toggleImportant,
} from "../features/todo/todoReducer";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const gridType = useSelector((state) => state.gridType);
  const theme = useSelector((state) => state.theme);

  const handleCheckboxClick = (e) => {
  };

  const handleTodoStatus = (e) => {
    e.stopPropagation();
    dispatch(toggleTodo(props?.todo?.id));
  };

  const handleTodoDescription = () => {
    dispatch(selectTodo(props?.todo?.id));
    const todoDescription = document.querySelector(".todoDescription");
    todoDescription.classList.toggle("hidden");
  };

  const handleToggleImportant = () => {
    dispatch(toggleImportant(props?.todo?.id));
  };

  return (
    <div
      className={`flex justify-between items-center gap-x-5 py-3 pr-8 ${
        gridType
          ? "border border-[1.5px] border-lightSideBarBg dark:border-darkGreenColor/75"
          : "border-t border-t-[1.5px] border-t-lightSideBarBg dark:border-t-darkGreenColor/75"
      }`}
    >
      <div
        onClick={handleTodoDescription}
        className="flex w-full cursor-pointer items-center"
      >
        <input
          className="m-4 appearance-none checked:bg-darkCheckboxFill checked:border-none h-3.5 w-3.5 border border-lightTextColor dark:border-darkTextColor rounded-sm cursor-pointer"
          type="checkbox"
          name="todoStatus"
          id={`todoStatus-${props?.todo?.id}`}
          checked={props?.todo?.checked}
          onChange={handleTodoStatus}
          onClick={handleCheckboxClick}
        />

        <label
          htmlFor={`todoStatus-${props.todo.id}`}
          className={`text-lightTextColor dark:text-darkTextColor ${
            props?.todo?.checked ? "line-through" : ""
          }`}
        >
          {props?.todo?.title}
        </label>
      </div>
      <div className="mr-8" onClick={handleToggleImportant}>
        <img
          src={
            props?.todo?.important
              ? theme === "dark"
                ? icons.star.filled.dark
                : icons.star.filled.light
              : theme === "dark"
              ? icons.star.outline.dark
              : icons.star.outline.light
          }
          alt="priority"
        />
      </div>
    </div>
  );
};

export default TodoItem;
