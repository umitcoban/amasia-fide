import { useState, useEffect } from 'react';

interface Errors {
  [key: string]: string;
}

const useFormValidation = (initialValues: any, validationRules: any) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (event: any) => {
    const { name, value } = event.target;
    const newErrors: Errors = { ...errors };
    const rules = validationRules[name];

    if (rules.required && !value) {
      newErrors[name] = 'This field is required';
    } else if (rules.minLength && value.length < rules.minLength) {
      newErrors[name] = `This field must be at least ${rules.minLength} characters long`;
    } else if (rules.maxLength && value.length > rules.maxLength) {
      newErrors[name] = `This field must be no more than ${rules.maxLength} characters long`;
    } else if (rules.pattern && !rules.pattern.test(value)) {
      newErrors[name] = 'This field is not valid';
    } else {
      delete newErrors[name];
    }

    setErrors(newErrors);
  };

  useEffect(() => {
    const newErrors: Errors = {};

    for (const field in validationRules) {
      const rules = validationRules[field];

      if (rules.required && !values[field]) {
        newErrors[field] = 'This field is required';
      } else if (rules.minLength && values[field].length < rules.minLength) {
        newErrors[field] = `This field must be at least ${rules.minLength} characters long`;
      } else if (rules.maxLength && values[field].length > rules.maxLength) {
        newErrors[field] = `This field must be no more than ${rules.maxLength} characters long`;
      } else if (rules.pattern && !rules.pattern.test(values[field])) {
        newErrors[field] = 'This field is not valid';
      }
    }

    setErrors(newErrors);
  }, [values, validationRules]);

  return { values, errors, handleChange, handleBlur };
};

export default useFormValidation;
