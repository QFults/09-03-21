const Person = require('./Person.js')

class Student extends Person {
  constructor (name, email, phone, grade) {
    super(name, email, phone)
    this.grade = grade
  }

  getGrade () {
    return this.grade
  }

  getRole () {
    return 'Student'
  }
}

module.exports = Student
