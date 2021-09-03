class Person {
  constructor (name, email, phone) {
    this.name = name
    this.email = email
    this.phone = phone
  }

  getName () {
    return this.name
  }

  getEmail () {
    return this.email
  }

  getPhone () {
    return this.phone
  }

  getRole () {
    return 'Person'
  }
}

module.exports = Person
