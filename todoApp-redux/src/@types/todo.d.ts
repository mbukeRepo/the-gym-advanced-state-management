import { ITodoContext } from "./todo.d";
export interface ITodoMethods {
  addTodo?: (todo: Todo) => void;
  removeTodo: ({ id: number }) => void;
  editTodo: ({ id: number, key: string, value: string }) => void;
}
export interface ITodo {
  id: number;
  title: string;
  done: boolean;
}

export interface ITodoItem extends ITodo, ITodoMethods {}
