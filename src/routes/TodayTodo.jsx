import React from "react";
import { Todos, TodoUtility, TodayTodoNav } from "../components";

const TodayTodo = () => {
  return (
    <>
      <div className="w-full">
        <TodoUtility />
        <TodayTodoNav />
        <Todos />
      </div>
    </>
  );
};

export default TodayTodo;
