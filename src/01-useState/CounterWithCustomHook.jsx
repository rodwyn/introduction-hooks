import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
  const {counter, decrement, increment, reset} = useCounter();

  return (
    <>
        <h1>Counter with hook: {counter}</h1>
        <hr />
        <button onClick={decrement} className="btn btn-primary">-</button>
        <button onClick={reset} className="btn btn-primary">reset</button>
        <button onClick={increment} className="btn btn-primary">+</button>
    </>
  )
}
