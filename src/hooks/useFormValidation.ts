import { useState } from 'react';

interface FormState {
  username: string;
  password: string;
}

interface ErrorState {
    emailError: string,
    passwordError: string
}

const useFormValidation = (initialState: FormState) => {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<ErrorState>({emailError: '', passwordError: ''});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });

    switch (event.target.name) {
      case 'username':
        if (!/\S+@\S+\.\S+/.test(event.target.value)) {
          setErrors({...errors, emailError : 'Invalid Email'});
        } else {
          setErrors({...errors, emailError : ''});
        }
        break;
      case 'password':
        if (event.target.value.length < 6) {
          setErrors({...errors, passwordError : 'Invalid Password' });
        } else {
          setErrors({...errors, passwordError : '' });
        }
        break;
      default:
        break;
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'username':
        if (!/\S+@\S+\.\S+/.test(event.target.value)) {
          setErrors({ ...errors, emailError: 'Invalid Email' });
        } else {
          setErrors({ ...errors, emailError: '' });
        }
        break;
      case 'password':
        if (event.target.value.length < 6) {
          setErrors({ ...errors, passwordError: 'Invalid Password' });
        } else {
          setErrors({ ...errors, passwordError: '' });
        }
        break;
      default:
        break;
    }
  };

  return { handleBlur, handleChange, values, errors };
};

export default useFormValidation;
