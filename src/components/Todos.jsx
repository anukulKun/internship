import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const gridType = useSelector((state) => state.gridType);

  const filteredTodos = (checked) =>
    todos.filter((todo) => todo.checked === checked);

  const completedTodos = filteredTodos(true);

  return (
    <>
      <div>
        <div className={`${gridType ? "grid grid-cols-3 gap-7" : "space-y4"}`}>
          {filteredTodos(false).map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
        <div className="mt-4">
          {completedTodos.length > 0 && (
            <h2 className="text-xl font-semibold ">Completed Todos</h2>
          )}
          <div className="py-6" >
            {completedTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;
