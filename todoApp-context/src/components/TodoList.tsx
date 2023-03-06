import { FC } from "react";
import { ITodoItem } from "../@types/todo";
import { useTodos } from "../context/todo-context";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const { todoList, deleteTodo, editTodo } = useTodos();
  return (
    <ul className="mt-10 flex flex-col gap-3">
      {todoList.map(({ title, done, id }: any, index: any) => (
        <TodoItem
          title={title}
          done={done}
          id={id}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          key={index}
        />
      ))}
    </ul>
  );
};
export default TodoList;
