// /* eslint-disable no-underscore-dangle */

// export default class Currency {
//   constructor(code, name) {
//     this.code = code;
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     this._name = value;
//   }

//   get code() {
//     return this._code;
//   }

//   set code(value) {
//     this._code = value;
//   }

//   displayFullCurrency() {
//     return (`${this.name} + (${this.code})`);
//   }
// }

export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    // eslint-disable-next-line no-underscore-dangle
    return this._code;
  }

  set code(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._code = value;
  }

  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set name(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._name = value;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}