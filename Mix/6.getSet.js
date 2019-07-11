class Book {
  constructor(title, isCompleted) {
    this.title = title;
    this._isCompleted = isCompleted
  }

  get isCompleted() {
    if (this._isCompleted) {
      return `Ура! Книга '${this.title}' уже прочитана`;
    }

    return `Книга '${this.title}' еще не прочитана`;
  }

  set isCompleted(val) {
    if (typeof val === 'boolean') {
      this._isCompleted = val;
    } else {
      console.error('Completed value must be boolean');
    }
  }

  complete() {
    this._isCompleted = true;
  }
}

const book = new Book('You don\'t know JS', false);


