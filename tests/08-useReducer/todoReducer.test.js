import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Testing todoReducer.', () => {
  const initialState = [{
    id: 1,
    description: 'demo todo',
    done: false
  }];

  test('should return initial state', () => { 
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test('should add a todo.', () => {
    const action = {
      type: 'add',
      payload: {
        id: 2,
        description: 'demo todo',
        done: false
      }
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('should delete a todo by id.', () => {
    const action = {
      type: 'delete',
      payload: 1
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test('should update a todo by id.', () => {
    const action =  {
      type: 'toggle',
      payload: 1
    };
    
    const newState = todoReducer(initialState, action);

    expect(newState[0].done).toBe(!initialState[0].done);
  });
 })