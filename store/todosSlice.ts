"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodosState, Todo } from "../types/types";

const loadTodosFromLocalStorage = (): Todo[] => {
  const serializedTodos = localStorage.getItem("todos");
  if (serializedTodos === null) return [];
  return JSON.parse(serializedTodos);
};

const saveTodosToLocalStorage = (todos: Todo[]) => {
  const serializedTodos = JSON.stringify(todos);
  localStorage.setItem("todos", serializedTodos);
};

const initialState: TodosState = {
  todos: loadTodosFromLocalStorage(),
  recentlyDeleted: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
      saveTodosToLocalStorage(state.todos);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveTodosToLocalStorage(state.todos);
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const todoToDelete = state.todos.find(
        (todo) => todo.id === action.payload
      );
      state.recentlyDeleted = todoToDelete || null; // Store the deleted todo temporarily
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveTodosToLocalStorage(state.todos);
    },
    undoDelete: (state) => {
      if (state.recentlyDeleted) {
        state.todos.push(state.recentlyDeleted);
        state.recentlyDeleted = null;
        saveTodosToLocalStorage(state.todos);
      }
    },
    clearRecentlyDeleted: (state) => {
      state.recentlyDeleted = null;
    },
    clearTodos: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
      saveTodosToLocalStorage(state.todos);
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  undoDelete,
  clearRecentlyDeleted,
  clearTodos,
} = todosSlice.actions;

export default todosSlice.reducer;
