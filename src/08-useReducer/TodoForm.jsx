import { useForm } from "../hooks/useForm"

export const TodoForm = ({onNewTodo}) => {
  const {description, onInputChange, onResetForm} = useForm({
    description: ''
  });

  const OnFormSubmit = event => {
    event.preventDefault();
    if (description.length <= 0) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description:description
    };

    onNewTodo(newTodo);
    onResetForm();
  }

  return (
    <form onSubmit={OnFormSubmit}>
      <input
        type="text"
        placeholder="what is there to do?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button
        type="submit"
        className="btn btn-outline-primary mt-1"  
      >
        Add
      </button>
    </form>
  )
}
