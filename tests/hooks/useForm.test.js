const { renderHook } = require("@testing-library/react");
const { act } = require("react-dom/test-utils");
const { useForm } = require("../../src/hooks/useForm");

describe('Testing useForm hook.', () => {
  const initialForm = {
    name: 'Rodwyn',
    email: 'rod@gmail.com'
  };

  test('should return default values.', () => {
    const {result} = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function)
    });
  });

  test('should change input name value.', () => {
    const {result} = renderHook(() => useForm(initialForm));
    const {onInputChange} = result.current;
    const newValue = 'Mateo';
    
    act(()=>{
      onInputChange({target: {
        name: 'name',
        value: newValue
      }})
    });

    expect(result.current.name).toBe(newValue);
  });

  test('should reset value.', () => {
    const {result} = renderHook(() => useForm(initialForm));
    const {onInputChange, onResetForm} = result.current;

    act(()=>{
      onInputChange({target: {
        name: 'email',
        value: 'rodwyn@gmail.com'
      }});

      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.email).toBe(initialForm.email);
  });
});