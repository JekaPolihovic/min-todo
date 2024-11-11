import React, { createContext, useEffect, useReducer } from "react";
import { ContextProps, TypeContextState, TodoType } from "./types";
import { todosReducer } from "./reducer";

const initialValuesContext: TypeContextState = {
  todos: [],
  dispatch: () => "",
};

const TodoContext = createContext<TypeContextState>(initialValuesContext);

const TodoContextProvider = ({ children }: ContextProps) => {
  const [todos, dispatch] = useReducer(
    todosReducer,
    [],
    (initState: TodoType[]) => {
      const localData: string | null = localStorage.getItem("todos");
      return localData ? JSON.parse(localData) : initState;
    }
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContextProvider, TodoContext };
