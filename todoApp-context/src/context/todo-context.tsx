import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ITodo, ITodoContext } from "../@types/todo";

const TodoContext: any = createContext<ITodoContext>({
  todoList: [],
  addTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
});

const TodoProvider = ({ children }: any) => {
  const [todoList, setTodoList] = useState<ITodo[]>(() =>
    JSON.parse(localStorage.getItem("todoList") || "[]")
  );
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = useCallback((todo: ITodo) => {
    setTodoList((prev: any) => [...prev, todo]);
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodoList((prev: ITodo[]) =>
      prev.filter((todo: ITodo) => todo.id !== id)
    );
  }, []);

  const editTodo = useCallback(
    (id: number, payload: { key: any; value: any }) => {
      setTodoList((prev: ITodo[]) =>
        prev.map((todo: ITodo) => {
          if (todo.id === id) {
            return { ...todo, [payload.key]: payload.value };
          }
          return todo;
        })
      );
    },
    []
  );
  const value = useMemo(
    () => ({ todoList, addTodo, deleteTodo, editTodo }),
    [todoList]
  );
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodos = () => {
  const value = useContext<ITodoContext>(TodoContext);
  if (!value) {
    throw new Error("useTodos must be used within TodoProvider");
  }
  return value;
};

export default TodoProvider;
