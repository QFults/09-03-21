const Person = require('./Person.js')

class Faculty extends Person {
  constructor(name, email, phone, position) {
    super(name, email, phone)
    this.position = position
  }

  getPosition () {
    return this.position
  }

  getRole () {
    return 'Faculty'
  }
}

module.exports = Faculty
