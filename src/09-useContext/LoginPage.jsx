import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

    return (
      <>
        <h1>LoginPage</h1>
        <hr />
        <button
          className="btn btn-primary"
          onClick={() => setUser({ name: 'Rodwyn', id: 123, mail: 'rod@gmail.com'})}
        >
          Set User
        </button>
        <pre aria-label="json-data">
          { JSON.stringify(user)}
        </pre>
      </>
    )
  }
  