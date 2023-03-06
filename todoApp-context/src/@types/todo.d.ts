interface ITodoMethods {
  deleteTodo: (id: number) => void;
  editTodo: (id: number, payload: { key: string; value: string }) => void;
}
export interface ITodo {
  id: number;
  title: string;
  done: boolean;
}

export interface ITodoContext extends ITodoMethods {
  todoList: Todo[];
  addTodo: (todo: Todo) => void;
}

export interface ITodoItem extends ITodo, ITodoMethods {}
