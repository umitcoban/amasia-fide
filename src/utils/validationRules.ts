
export const validationRules = {
    firstName:{
      required: true
    },
    lastName:{
      required: true
    },
    citizenNumber:{
      required: true,
      maxLength: 11,
      minLength: 11,
      pattern: /^[1-9]{1}[0-9]{9}[02468]{1}$/
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
      pattern: /^(05)([0-9]{2})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/
    },
    activationCode: {
      required: true,
      min: 100000,
      max: 999999,
      pattern:  /^\d+$/
    }
  };
  