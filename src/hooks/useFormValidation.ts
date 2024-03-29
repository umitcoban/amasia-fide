import { useState, useEffect } from 'react';

interface Errors {
  [key: string]: string;
}

const useFormValidation = (initialValues: any, validationRules: any) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });

    // Değişiklik olduğunda, bu alan için touched olarak işaretle
    const newTouched = {
      ...touched,
      [name]: true,
    };
    setTouched(newTouched);
    // Hemen doğrulama yap
    validateField(name, value, newTouched);
  };

  const handleBlur = (event: any) => {
    const { name, value } = event.target;

    const newTouched = {
      ...touched,
      [name]: true,
    };

    setTouched(newTouched);
    
    validateField(name, value, newTouched);
  }; // Eğer blur üzerinde özel bir işlem yapmak istemiyorsanız

  const validateField = async (name: string, value: string, currentTouched: { [key: string]: boolean }) => {
    if (!currentTouched[name]) return; // Eğer alan üzerine tıklanmadıysa, bu alanı geç
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
    } else if (rules.min && value < rules.min) {
      newErrors[name] = 'This field is not valid';
    } else if (rules.max && value > rules.max) {
      newErrors[name] = 'This field is not valid';
    } else {
      delete newErrors[name];
    }

    setErrors(newErrors);
  };

  return { values, errors, handleChange, handleBlur };
};

export default useFormValidation;
