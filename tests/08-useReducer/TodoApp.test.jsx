import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock('../../src/hooks/useTodo');

describe('Testing <TodoApp /> component.', () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, description: 'todo 1', done: false },
      { id: 2, description: 'todo 2', done: true }
    ] ,
    todosCount: 2,
    todosPendingCount: 1,
    handleNewTodo: jest.fn(),
    handleDelete: jest.fn(),
    handleToggle: jest.fn()
  });

  test('should render component correctly.', () => {
    render(<TodoApp />);
    expect(screen.getAllByRole('listitem').length).toBe(2);
  });
});