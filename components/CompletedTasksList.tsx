"use client";

import React from "react";

import { FaCheckCircle } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { toggleTodo, clearTodos } from "../store/todosSlice";
import { Todo } from "@/types/types";

const CompletedTasksList = () => {
  const { todos } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch<AppDispatch>();

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleClearTodos = () => {
    dispatch(clearTodos());
  };

  return (
    <div className="border border-gray-200 mt-9 rounded-md">
      <div className="flex justify-between pt-2 mx-3">
        <p className="font-bold"> انجام شده </p>
        <button
          onClick={handleClearTodos}
          className="hover:bg-red-400 ease-in-out transition-all duration-200 p-2 rounded-md border border-gray-200"
        >
          <FaRegTrashCan />
        </button>
      </div>
      <ul className="mt-2 pb-3 pt-1 mx-5 flex flex-col divide-y">
        {todos
          .filter((todo) => todo.completed === true)
          .map((todo: Todo) => (
            <li
              key={todo.id}
              className=" p-2 rounded-md cursor-pointer hover:bg-gray-200 transition duration-300"
              onClick={() => handleToggleTodo(todo.id)}
            >
              <div className="flex items-center">
                <span className="p-2 scale-90">
                  <FaCheckCircle />
                </span>
                <span className="ps-2 skewed-line">{todo.text}</span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CompletedTasksList;
