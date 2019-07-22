import validate from './utils/validate.js';

export default class ErrorsHandler {
  constructor() {
    this.errorBlock = document.getElementById('error');
  }

  handleError(inputs, numbers) {
    const message = inputs.reduce((res, str, index) => {
      if (validate(numbers[index])) {
        return res;
      } else {
        return `${res} ${str} is not a number. `;
      }
    }, 'Please enter two valid numbers! ');

    this.errorBlock.classList.remove('hidden');
    this.errorBlock.innerText = message;
  }

  hideErrors() {
    this.errorBlock.classList.add('hidden');
  }
}