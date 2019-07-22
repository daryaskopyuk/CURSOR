import validate from './utils/validate.js';
import parse from './utils/parse.js';

const run = (errorsHandler, inputHandler) => {
  errorsHandler.hideErrors();

  inputHandler.onClick(() => {
    errorsHandler.hideErrors();

    const inputs = inputHandler.getInputs();
    const parsedInputs = parse(...inputs);

    if (validate(...parsedInputs)) {
      const [firstNum, secondNum] = parsedInputs;

      inputHandler.setResult(firstNum + secondNum);
    } else {
      inputHandler.setResult('');
      errorsHandler.handleError(inputs, parsedInputs);
    }
  });
};

export default run;
