import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const handleNewTodo = todo => {
    const action = {
      type: 'add',
      payload: todo
    };

    dispatch(action);
  };

  const handleDelete = id => {
    dispatch({
      type: 'delete',
      payload: id
    });
  };

  const handleToggle = id => {
    dispatch({
      type: 'toggle',
      payload: id
    });
  }

  return {
    todos,
    todosCount: todos.length,
    todosPendingCount: todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDelete,
    handleToggle
  }
}
