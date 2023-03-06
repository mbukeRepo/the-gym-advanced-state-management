import useTodos from "../hooks/useLocalStorage";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todoList, editTodo, removeTodo } = useTodos();

  return (
    <ul className="mt-10 flex flex-col gap-3">
      {todoList.map(({ title, done, id }: any, index: any) => (
        <TodoItem
          key={index}
          title={title}
          done={done}
          id={id}
          editTodo={editTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};
export default TodoList;
