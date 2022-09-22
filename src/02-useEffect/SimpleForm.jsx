import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'rodes',
    email: 'rodwyn@gmail.com'
  });

  const {email, username} = formState;

  const onInputChange = ({target}) => {
    const {name, value} = target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  useEffect(() => {
    // console.log('useEffect called');
  }, []);

  useEffect(() => {
    // console.log('formState called');
  }, [formState]);

  useEffect(() => {
    // console.log('email called');
  }, [email]);

  return (
  <>
    <h1>SimpleForm</h1>
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
    {
      (username === 'rodes2') && <Message />
    }
  
  </>
    
  )
}
