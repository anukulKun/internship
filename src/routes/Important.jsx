import React from "react";
import { useSelector } from "react-redux";
import { TodoUtility } from "../components";
import TodoItem from "../components/TodoItem";

const Important = () => {
  const importantTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.important)
  );

  return (
    <>
      <div className="w-full">
        <TodoUtility />
        <div>
          <h2 className="text-xl font-semibold">Important Todos</h2>
          <div>
            {importantTodos.length > 0 ? (
              importantTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))
            ) : (
              <p>No important todos</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Important;
