"use client";

import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
import HalfCircleProgressBar from "./graph/HalfCircleProgressBar";

const ReportGraph = () => {
  const { todos } = useSelector((state: RootState) => state.todos);

  const allTodosLength = todos.length;
  const doneTodos = todos.filter((todo) => todo.completed === true).length;
  const remainingTodos = allTodosLength - doneTodos;

  return (
    <div className="border border-gray-200 rounded-md w-full max-w-[300px] mx-auto lg:ms-[36px]">
      <p className="mt-2 ms-3 text-sm font-semibold">گزارش موفقیت</p>
      <div className="flex my-3">
        <div className="flex mx-4">
          <HalfCircleProgressBar done={doneTodos} remaining={remainingTodos} />
        </div>
        <div>
          <p className="font-bold text-md mt-4">
            <span>{doneTodos.toLocaleString("fa")}</span>
            <span className="mx-1">از</span>
            <span>{allTodosLength.toLocaleString("fa")}</span>
          </p>
          <p className="text-sm font-light">تسک انجام شده است</p>
        </div>
      </div>
    </div>
  );
};

export default ReportGraph;
