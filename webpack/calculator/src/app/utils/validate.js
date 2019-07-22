const validate = (...inputs) => {
  return inputs.every(val => typeof val === 'number' && !isNaN(val));
};

export default validate;
