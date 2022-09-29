import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Testing <TodoItem /> component.', () => {
  const todo = {
    id: 1,
    description: 'test todo',
    done: false
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(()=> jest.clearAllMocks());

  test('should render todo incompleted.', () => {
    render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);
    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
    
    const spanElement = screen.getByLabelText('todo-span');

    expect(spanElement.className).toContain('align-self-center');
  });

  test('should render todo completed.', () => {
    todo.done =  true;
    render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);
    
    const spanElement = screen.getByLabelText('todo-span');
    expect(spanElement.className).toContain('align-self-center text-decoration-line-through');
  });

  test('should toggleTodo be called.', () => {
    render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);
    const spanElement = screen.getByLabelText('todo-span');
    fireEvent.click(spanElement);
    
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test('should onDeleteTodo be called.', () => {
    render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);
    const deleteButton = screen.getByLabelText('delete-button');
    fireEvent.click(deleteButton);
    
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});