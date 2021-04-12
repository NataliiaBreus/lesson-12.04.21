
'use strict';
class Figure {
  constructor (name) {
    this.name = name;
  }
  _validateSide(newValue) {
    if (typeof newValue !== 'number') {
      throw new TypeError();
    }
    if (newValue <= 0) {
      throw new RangeError();
    }
  }
  getArea() {}
}

class Triangle extends Figure {
  constructor (a, b, angle) {
    super ('Triangle');
    this. a = a;
    this. b = b;
    this. angle = angle;
  }
  get a() {
    return this._a;
  }
  set a(newValue) {
    this._validateSide(newValue);
    this._a = newValue;
  }
  get b() {
    return this._b;
  }
  set b (newValue) {
    this._validateSide(newValue);
    this._b = newValue;
  }
  get angle () {
    return this._angle;
  }
  set angle (newValue) {
    this._validateSide(newValue);
    this._angle = newValue;
  }
  getArea () {
    return this. a * this. b * Math.sin(this.angle / 180 * Math.PI)
  }
}

class Square extends Figure {
  constructor (a) {
    super ('Square');
    this. a = a;
  }
  get a() {
    return this._a;
  }
  set a (newValue) {
    this._validateSide(newValue);
    this._a = newValue;
  }
  getArea () {
    return this.a * this.a;
  }
}
class Circle extends Figure {
  constructor (r) {
    super ('Circle');
    this.r = r;
  }
  get r () {
    return this._r;
  }
  set r (newVAlue) {
    this._validateSide(newValue);
    this._r = newValue;
  }
  getArea () {
    return Math.PI * this.r * this.r;
  }
}

const tr = new Triangle (5, 6, 30);
const sq = new Square(5);
const cr = new Circle(3);