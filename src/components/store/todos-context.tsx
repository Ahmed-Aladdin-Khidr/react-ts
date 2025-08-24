import React, { useState } from 'react';
import Todo from '../../models/todos';

type TodosContextType = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextType>({
    items: [],
    addTodo: (text: string) => {},
    removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    }

    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
    }

    const contextValue: TodosContextType = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    }

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
};

export default TodosContextProvider;