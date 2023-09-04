import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddTodo() {
  const input = useRef();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input.current.value);
    dispatch(addTodo(input.current.value));
    input.current.value = "";
  };

  return (
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
        >
          Submit
        </button>
      </form>
    </div>
  );
}
