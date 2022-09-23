import { useLayoutEffect, useRef } from "react"

export const Quote = ({quote, author}) => {
  const paragraphRef = useRef();
  useLayoutEffect(() => {
    console.log(paragraphRef.current.getBoundingClientRect());
    
  }, [quote])

  return (
    <blockquote className="blockquote text-end" style={{display: 'flex'}}>
      <p ref={paragraphRef} className="mb-2">{quote}</p>
      <footer className="blockquote-footer mt-0">{author}</footer>
    </blockquote>
  )
}
