const Person = require('./Person.js')

class Teacher extends Person {
  constructor(name, email, phone, subject) {
    super(name, email, phone)
    this.subject = subject
  }

  getSubject () {
    return this.subject
  }

  getRole () {
    return 'Teacher'
  }
}

module.exports = Teacher
