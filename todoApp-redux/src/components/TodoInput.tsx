import { useRef } from "react";
import useTodos from "../hooks/useLocalStorage";

const TodoInput = () => {
  const { addTodo, todoList } = useTodos();
  const todoRef = useRef<any>();
  const handleClick = (event: any) => {
    event.preventDefault();
    const title = todoRef.current.value;
    if (title === "") return;
    addTodo({
      id: todoList.length ? todoList[todoList.length - 1].id + 1 : 0,
      title,
      done: false,
    });
    todoRef.current.value = "";
  };
  return (
    <form
      action=""
      className="flex w-[18.3rem] rounded-3xl items-center shadow-md py-2 px-4 bg-gray-100"
      style={{ display: "flex" }}
      onSubmit={handleClick}
    >
      <input className="outline-none bg-gray-100 text-gray-700" ref={todoRef} />
      <div>
        <button
          type="submit"
          className="bg-blue-600 rounded-full w-6 h-6 font-bold text-white text-xl grid place-content-center"
        >
          +
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
