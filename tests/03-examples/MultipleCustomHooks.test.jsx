import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Testing <MultipleCustomHooks /> component.', () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  });

  beforeEach( () => jest.clearAllMocks());

  test('should render component by default.', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText('Loading...')).toBeTruthy();
    expect(screen.getByText('Breaking Bad Quotes')).toBeTruthy();
    expect(screen.getByRole('button', {name: 'Next Quote'})).toBeTruthy();
  });

  test('should render a quote.', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Rodwyn', quote: 'Hola soy el Rod'}],
      isLoading: false,
      hasError: null
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText('Hola soy el Rod')).toBeTruthy();
    expect(screen.getByText('Rodwyn')).toBeTruthy();
  });

  test('should call increment function.', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Rodwyn', quote: 'Hola soy el Rod'}],
      isLoading: false,
      hasError: null
    });
    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole('button', { name: 'Next Quote'});
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});