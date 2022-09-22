import { useCounter, useFetch } from "../hooks";
import { Loader } from "./Loader";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
  const {counter, increment} = useCounter(1);
  const {data,hasError, isLoading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const {author, quote} = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
        isLoading
        ?(
          <Loader />
        )
        :(
          <Quote author={author} quote={quote} />
        )
      }

      <button className="btn btn-primary" onClick={increment}>Next Quote</button>
    </>
  )
}
