import PropTypes from 'prop-types';

export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        role="button"
        className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
        onClick={() => onToggleTodo(todo.id)}
        aria-label="todo-span"
      >
        {todo.description}
      </span>
      <button
        onClick={() => onDeleteTodo(todo.id)}
        className="btn"
        aria-label="delete-button"
      >
        <i className="fa fa-trash"></i>
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired
};
