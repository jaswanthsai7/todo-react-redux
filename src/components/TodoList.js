import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

export default function TodoList() {
  const [edit, setEdit] = useState(false);
  const [userId, setUserId] = useState(0);
  const input = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input.current.value);

    let todoData = {
      text: input.current.value,
      id: userId,
    };
    dispatch(updateTodo(todoData));
    input.current.value = "";
    setEdit(false);
  };

  const todoList = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  let content = "";
  const editTodo = (id) => {
    setUserId(id);
    setEdit(true);
    // val.current.value=currentTodo.text
  };
  if (edit) {
    content = (
      <div>
        <form onSubmit={submitHandler} className="space-x-3 mt-12">
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base  focus:outline-none outline-0 text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            id="input"
            placeholder="add Todo...."
            ref={input}
          />

          <button
            type="submit"
            className="focus:outline-none text-white border-0 py-2 px-6 rounded text-lg hover:bg-indigo-600 bg-indigo-500"
            onClick={() => setEdit(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="focus:outline-none text-white border-0 py-2 px-6 rounded text-lg hover:bg-indigo-600 bg-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1 className="py-2">Todos</h1>
      {content}
      <ul className="list-none">
        {todoList.map((item) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={item.id}
          >
            <p className="text-white">{item.text}</p>
            <ul class="flex space-x-8">
              <button
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                onClick={() => {
                  console.log(item.id);
                  editTodo(item.id);
                }}
              >
                <span className="material-symbols-outlined">edit</span>
              </button>

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
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
