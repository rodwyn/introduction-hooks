import { useEffect } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const {username, email, password, onInputChange, onResetForm} = useForm(
    {
      username: '',
      email: '',
      password: ''
    }
  );

  return (
  <>
    <h1>Form With Custom Hook</h1>
    <hr />

    <input
      type="text"
      className="form-control"
      placeholder="username"
      name="username"
      value={username}
      onChange={onInputChange}/>
    <input
      type="email"
      className="form-control mt-2"
      placeholder="user@mail.com"
      name="email"
      value={email}
      onChange={onInputChange}/>
    <input
      type="password"
      className="form-control mt-2"
      placeholder="********"
      name="password"
      value={password}
      onChange={onInputChange}/>
    <button
      onClick={ onResetForm }
      className="btn btn-primary mt-2">Clear</button>
  </>    
  )
}
