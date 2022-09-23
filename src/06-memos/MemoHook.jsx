import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterartionNumber = 100) => {
  for (let index = 0; index < iterartionNumber; index++) {
    console.log('ahí vamos');  
  }

  return `${iterartionNumber} iteraciones realizadas.`
};

export const MemoHook = () => {
  const {counter, increment} = useCounter(1000);
  const [show, setShow] = useState(true);
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>counter: <small>{counter}</small></h1>
      <hr />

      <h4>{memorizedValue}</h4>

      <button
        className="btn btn-primary"
        onClick={increment}>+1</button>

      <button
        className="btn btn-primary"
        onClick={() => setShow(!show)}>
        show/hide {JSON.stringify(show)}
      </button>
    </>
  )
}
