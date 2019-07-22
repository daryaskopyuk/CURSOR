export default class InputHandler {
  constructor() {
    this.firstNum = document.getElementById('firstNum');
    this.secondNum = document.getElementById('secondNum');
    this.addBtn = document.getElementById('addBtn');
    this.resBlock = document.getElementById('res');
  }

  getInputs() {
    return [this.firstNum.value, this.secondNum.value];
  }

  setResult(str) {
    this.resBlock.innerText = str;
  }

  onClick(cb) {
    this.addBtn.addEventListener('click', cb);
  }
};
