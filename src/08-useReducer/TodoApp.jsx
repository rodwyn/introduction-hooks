import { useTodo } from "../hooks/useTodo";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  const {todos, todosCount, todosPendingCount, handleNewTodo, handleDelete, handleToggle } = useTodo();

  return (
    <>
      <h1>TodoApp:{todosCount} <small>Pending: {todosPendingCount}</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDelete} onToggleTodo={handleToggle} />
        </div>
        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />
          <TodoForm onNewTodo={handleNewTodo} />
        </div>
      </div>

    </>
  )
}
