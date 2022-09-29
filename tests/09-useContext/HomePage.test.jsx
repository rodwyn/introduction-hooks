import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe('Testing <HomePage /> component.', () => {
  test('should render without user.', () => {
    
    render(
      <UserContext.Provider value={{user: null}}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTAg = screen.getByLabelText('json-data');
    expect(preTAg.innerHTML).toBe('null');
  });

  test('should render with user.', () => {
    const user = {name:'Rodwyn','id':123,'mail':'rod@gmail.com'};
    render(
      <UserContext.Provider value={{user}}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTAg = screen.getByLabelText('json-data');
   
    expect(JSON.parse(preTAg.innerHTML)).toEqual(user);
  });
});