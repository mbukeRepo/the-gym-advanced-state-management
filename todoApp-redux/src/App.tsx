import { useRef, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import useTodos from "./hooks/useLocalStorage";

const App = () => {
  return (
    <div className="w-full flex flex-col items-center h-screen text-gray-700">
      <div className="flex flex-col mt-32 items-center w-full justify-center">
        <h3 className="text-center mb-6 text-4xl font-bold text-gray-400">
          todos
        </h3>
        <TodoInput />
      </div>
      <TodoList />
    </div>
  );
};

export default App;
