'use strict';
/*
class Figure {
  constructor(name) {
    this.name = name;
  }
  validateSide(newValue) {
    if (typeof newValue !== 'number') {
      throw new TypeError();
    }
  }
  getArea() { }
}

class Triangle extends Figure {
  constructor(a, b, angle) {
    super('Triangle');
    this.a = a;
    this.b = b;
    this.angle = angle;
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
  set b(newValue) {
    this._validateSide(newValue);
    this._b = newValue;
  }
  get angle() {
    return this._angle;
  }

  set angle(newAngle){
    this._validateSide(newAngle);
    this._angle = newAngle;
  }
  getArea() {

    return this.a * this.b * Math.sin(this.angle / 180 * Math.PI);
  }
}

class Circle extends Figure {
  constructor(r) {
    super ('Circle');
    this.r = r;
  }
  get r(){
    return this._r;
  }
  set r(newValue) {
    this._validateSide (newValue);
    this._r = newValue;
  }
  getArea() {
    return Math.PI * this.r * this.r;
  }
}

function getFigureArea (figure) {
  if (figure instanceof Figure) {
    return figure.getArea();
  }
  throw new TypeError();
}


class MyArray {
  constructor(){
    this.length = 0;
    for (let i = 0; i < arguments.length; i ++){
      this.push(arguments[i]);
    }

  }
}
*/

// create Symbole

const mySymbol = Symbol('Symbol.Inportant');
const Symbol2 = Symbol ('Просто метка');

console.log(mySymbol);
console.log(Symbol2);
const obj = {
    login: 'testLogin',
    test: 'something',
    mySymbol: 100,
    [5]: 50,
    ['some text']: 'some value',
    [mySymbol]: 10,
}
console.log (obj[5]);
console.log(obj['some text']);
console.log(obj[mySymbol]);

const arr = [1, 2, 3,4, 5];
for (const number of arr) {
    console.log (number);
}

const arr2 = [3, 45, 56, 78, 'text'];
for (const number of arr2) {
    console.log(number);
}

str = 'hello world';
const arr3 = [1,2,3,4,5];
iterator = arr3[Symbol.iterator]();


// Функция конструктор для итератора

class MyArrayIterator {
    constructor (array) {
        this.array = array;
        this.currentIndex = 0;
    }
    next() {
        return {
            done: this.currentIndex >= this.array.length,
            value: this.array[this.currentIndex++],
        }
    }
}

class MyArray {
    constructor(){
        this.length = 0;
        for (let i = 0; i < arguments.length; i++) {
            this.push (arguments[i]);
        }
    }
}

[Symbol.iterator] (){
    return new MyArrayIterator(this);
}   

static isMyArray (arr) {
    return arr instanceof MyArray;
}

const myArr = new MyArray (1,2,3,4,5);




