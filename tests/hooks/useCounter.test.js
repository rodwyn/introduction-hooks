import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks/useCounter"

describe('Testing useCounter hook.', () => {
  test('should return default value.', () => {
    const {result} = renderHook( () => useCounter() );
    const {counter, decrement, increment, reset} = result.current;

    expect(counter).toBe(0);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('should return value 100.', () => {
    const {result} = renderHook( () => useCounter(100) );
    const {counter} = result.current;
    expect(counter).toBe(100);
  });

  test('should increment counter.', () => {
    const {result} = renderHook( () => useCounter() );
    const {counter, increment} = result.current;

    act(()=>{
      increment();
    });

    expect(result.current.counter).toBe(counter+1);
  });

  test('should decrement counter.', () => {
    const {result} = renderHook( () => useCounter(1) );
    const {counter, decrement} = result.current;

    act(()=>{
      decrement();
    });

    expect(result.current.counter).toBe(counter-1);
  });

  test('should reset counter.', () => {
    const initialValue = 10;
    const {result} = renderHook( () => useCounter(initialValue) );
    const {decrement, increment, reset} = result.current;

    act(()=>{
      decrement();
      increment();
      decrement();
      reset();
    });

    expect(result.current.counter).toBe(initialValue);
  });
});