import React, { useEffect, useState } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/reducers/todoReducer";

const useTodos = () => {
  const todos = useSelector((state: { todoList: any }) => state.todoList);
  const dispatch = useDispatch();
  const { addTodo, removeTodo, editTodo } = bindActionCreators<any, any>(
    actions,
    dispatch
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos.todoList));
  }, [todos]);

  return { todoList: todos.todoList, addTodo, removeTodo, editTodo };
};

export default useTodos;
