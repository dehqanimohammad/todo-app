"use client";

import React, { useState } from "react";

import { FaRegTrashCan } from "react-icons/fa6";
import { GrRedo } from "react-icons/gr";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import {
  toggleTodo,
  deleteTodo,
  undoDelete,
  clearRecentlyDeleted,
} from "../store/todosSlice";
import { Todo } from "@/types/types";

const InProgressTasks = () => {
  const { todos, recentlyDeleted } = useSelector(
    (state: RootState) => state.todos
  );
  const dispatch = useDispatch<AppDispatch>();
  const [undoTimeout, setUndoTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));

    const timeout = setTimeout(() => {
      dispatch(clearRecentlyDeleted());
    }, 10000);

    setUndoTimeout(timeout);
  };

  const handleUndoDelete = () => {
    dispatch(undoDelete());

    if (undoTimeout) {
      clearTimeout(undoTimeout);
      setUndoTimeout(null);
    }
  };

  return (
    <div className="border border-gray-200 mt-9 rounded-md">
      <p className="font-bold pt-2 ps-3">در حال انجام</p>
      <ul className="mt-2 pb-3 pt-1 mx-5 flex flex-col divide-y">
        {todos
          .filter((todo) => todo.completed === false)
          .map((todo: Todo) => (
            <li
              key={todo.id}
              className=" p-2 rounded-md cursor-pointer hover:bg-gray-200 transition duration-300"
              onClick={() => handleToggleTodo(todo.id)}
            >
              <div className="justify-between flex items-center">
                <span className="ps-2">{todo.text}</span>
                <span
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="hover:bg-red-400 ease-in-out transition-all duration-200 p-1 rounded-md border border-gray-200"
                >
                  <FaRegTrashCan />
                </span>
              </div>
            </li>
          ))}
        {recentlyDeleted && (
          <li
            onClick={() => handleUndoDelete()}
            className="bg-gray-300 hover:bg-green-300 justify-between group transition-all ease-in-out duration-200 flex mt-3 p-2 rounded-md cursor-pointer"
          >
            <span>۱۰ ثانیه برای بازگرداندن فرصت دارید </span>
            <span className="bg-gray-400 rounded-md p-1 group-hover:bg-green-400 transition-all ease-in-out duration-200">
              <GrRedo />
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default InProgressTasks;
