// Create the Dog class here

class Dog {
  _currentDog = 0;

  constructor(details) {
    Object.assign(this, details);
  }

  bark() {
    console.log(this);
  }

  get currentDog() {
    return this._currentDog;
  }

  set currentDog(_dog) {
    this._currentDog = _dog;
  }
}

export default Dog;
