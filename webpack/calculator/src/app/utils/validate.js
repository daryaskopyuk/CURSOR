const validate = (...inputs) => {
  return inputs.every(val => typeof val === 'number' && !isNaN(val));
};

export function d() {
  console.log(444);
}

export default validate;
