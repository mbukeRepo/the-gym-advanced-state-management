import { createSlice } from "@reduxjs/toolkit";

const todoReducer = createSlice<any, any>({
  name: "todo",
  initialState: {
    todoList: JSON.parse(localStorage.getItem("todos") || "[]"),
  },
  reducers: {
    addTodo(state: any, action: any) {
      state.todoList.push(action.payload);
    },
    removeTodo(state: any, action: any) {
      console.log(action, state.todoList);
      state.todoList = state.todoList.filter(
        (todo: any) => todo.id !== action.payload.id
      );
    },
    editTodo(state: any, action: any) {
      console.log(action);
      state.todoList = state.todoList.map((todo: any) => {
        if (todo.id === action.payload.id) {
          todo.done = !todo.done;
        }
        return todo;
      });
    },
  },
});

export const actions = todoReducer.actions;
export default todoReducer.reducer;
