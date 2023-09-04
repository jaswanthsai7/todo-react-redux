import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export default function TodoList() {
  const todoList = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <h1 className="py-2">Todos</h1>
      <ul className="list-none">
        {todoList.map((item) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={item.id}
          >
            <p className="text-white">{item.text}</p>
            <button
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              onClick={() => {
                deleteTodo(item.id);
              }}
            >
              <span className="material-symbols-outlined px-0 py-1">
                delete
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
