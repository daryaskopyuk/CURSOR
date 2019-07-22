import run from './app/run.js';

import InputHandler from './app/InputHandler.js';
import ErrorsHandler from './app/ErrorsHandler.js';

import './main.css';

const inputHandler = new InputHandler();
const errorsHandler = new ErrorsHandler();

run(errorsHandler, inputHandler);