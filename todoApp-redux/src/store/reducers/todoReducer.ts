import { createSlice } from "@reduxjs/toolkit";
import { ITodoMethods, ITodo } from "../../@types/todo";

interface ITodoInitial {
  todoList: ITodo[];
}

const initialState: ITodoInitial = {
  todoList: JSON.parse(localStorage.getItem("todos") || "[]"),
};

const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state: ITodoInitial, action: { payload: ITodo }) {
      state.todoList.push(action.payload);
    },
    removeTodo(state: ITodoInitial, action: { payload: { id: number } }) {
      console.log(action, state.todoList);
      state.todoList = state.todoList.filter(
        (todo: any) => todo.id !== action.payload.id
      );
    },
    editTodo(
      state: ITodoInitial,
      action: { payload: { id: number; key: string; value: string } }
    ) {
      const { id, key, value } = action.payload;
      state.todoList = state.todoList.map((todo: any) => {
        if (todo.id === id) {
          todo[key] = value;
        }
        return todo;
      });
    },
  },
});

export const actions = todoReducer.actions;
export default todoReducer.reducer;
