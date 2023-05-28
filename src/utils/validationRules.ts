
export const validationRules = {
    firstName:{
      required: true
    },
    lastName:{
      required: true
    },
    citizenNumber:{
      required: true
    },
    username: {
      required: true,
      pattern: /\S+@\S+\.\S+/,
    },
    email: {
      required: true,
      pattern: /\S+@\S+\.\S+/,
    },
    password: {
      required: true,
      minLength: 8,
    },
    phone: {
      required: true,
      minLength: 10,
      pattern: /^\d{3}\d{3}\d{2}\d{2}$/
    }
  };
  