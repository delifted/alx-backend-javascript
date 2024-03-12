// /* eslint-disable no-underscore-dangle */

// export default class HolbertonCourse {
//   constructor(name, length, students) {
//     this.name = name;
//     this.length = length;
//     this.students = Array.isArray(students) ? students : [];
//   }

//   // Getter and setter for name
//   get name() {
//     return this._name;
//   }

//   set name(newName) {
//     if (typeof newName === 'string') {
//       this._name = newName;
//     } else {
//       throw new Error('Name must be a string.');
//     }
//   }

//   get length() {
//     return this._length;
//   }

//   set length(newLength) {
//     if (typeof newLength === 'number') {
//       this._length = newLength;
//     } else {
//       throw new Error('Length must be a number.');
//     }
//   }

//   get students() {
//     return this._students;
//   }

//   set students(newStudents) {
//     if (Array.isArray(newStudents)) {
//       this._students = newStudents;
//     } else {
//       throw new Error('Students must be an array.');
//     }
//   }
// }

export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._name = value;
  }

  get length() {
    // eslint-disable-next-line no-underscore-dangle
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._length = value;
  }

  get students() {
    // eslint-disable-next-line no-underscore-dangle
    return this._students;
  }

  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._students = value;
  }
}
