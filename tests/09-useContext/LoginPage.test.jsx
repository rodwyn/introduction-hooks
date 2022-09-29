import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Testing <LoginPage /> component.', () => {
  test('should render component without prop.', () => {
    render(
      <UserContext.Provider value={{user: null}}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTAg = screen.getByLabelText('json-data');
    expect(preTAg.innerHTML).toBe('null');
  });

  test('should setUser function be called.', () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{user: null, setUser: setUserMock}}>
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect( setUserMock).toHaveBeenCalledWith({"id": 123, "mail": "rod@gmail.com", "name": "Rodwyn"});
  });
});