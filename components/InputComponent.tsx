"use client";

import React, { useState } from "react";
import { persianRegex } from "../util/persianRegex";
import { addTodo } from "../store/todosSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";

const InputComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!value || persianRegex.test(value)) {
      setError(null);
    } else {
      setError("لطفا فقط کلمات فارسی وارد کنید.");
    }

    setInput(value);
  };

  const handleAddTodo = () => {
    if (input.trim() === "") return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="border mt-9 sm:mt-0 border-gray-200 rounded-md pb-3 w-full">
      <div className="flex items-center  pt-2 ps-3">
        <p className="font-bold">افزودن تسک جدید</p>
        {error && <span className="ps-4 text-xs text-red-600">{error}</span>}
      </div>
      <div className="flex items-center mt-5 h-8 mx-3">
        <input
          onChange={handleInputChange}
          value={input}
          className="border border-gray-200 rounded-lg px-4 placeholder:text-sm h-full me-4 w-full "
          placeholder="امروز میخوام ..."
        />
        <button
          onClick={handleAddTodo}
          className="bg-[#3B11CC] text-white px-5 font-light h-full  text-[13px] rounded-md"
        >
          افزودن
        </button>
      </div>
    </div>
  );
};

export default InputComponent;
