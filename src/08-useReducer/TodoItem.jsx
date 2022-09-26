export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        role="button"
        className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button onClick={() => onDeleteTodo(todo.id)} className="btn"><i className="fa fa-trash"></i></button>
    </li>
  )
}
