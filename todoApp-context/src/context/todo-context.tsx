import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

interface ITodoContext {
  todoList: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, payload: { key: string; value: string }) => void;
}

const TodoContext: any = createContext({
  todoList: [],
  addTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
});

const TodoProvider = ({ children }: any) => {
  const [todoList, setTodoList] = useState<any>(() =>
    JSON.parse(localStorage.getItem("todoList") || "[]")
  );
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = useCallback((todo: any) => {
    setTodoList((prev: any) => [...prev, todo]);
  }, []);

  const deleteTodo = useCallback((id: any) => {
    setTodoList((prev: any) => prev.filter((todo: any) => todo.id !== id));
  }, []);

  const editTodo = useCallback(
    (id: number, payload: { key: any; value: any }) => {
      setTodoList((prev: any) =>
        prev.map((todo: any) => {
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
  const value = useContext(TodoContext);
  if (!value) {
    throw new Error("useTodos must be used within TodoProvider");
  }
  return value;
};

export default TodoProvider;
