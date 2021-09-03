const Person = require('../lib/Person.js')

test('Can create instance of Person', () => {
  const person = new Person()
  expect(typeof person).toBe('object')
})

test('Can set name with constructor', () => {
  const person = new Person('John Doe')
  expect(person.name).toBe('John Doe')
})

test('Can set email with constructor', () => {
  const person = new Person('John Doe', 'johndoe@gmail.com')
  expect(person.email).toBe('johndoe@gmail.com')
})

test('Can set phone with constructor', () => {
  const person = new Person('John Doe', 'johndoe@gmail.com', '(123) 456-7890')
  expect(person.phone).toBe('(123) 456-7890')
})

test('Can get name with getName()', () => {
  const person = new Person('John Doe')
  expect(person.getName()).toBe('John Doe')
})

test('Can get email with getEmail()', () => {
  const person = new Person('John Doe', 'johndoe@gmail.com')
  expect(person.getEmail()).toBe('johndoe@gmail.com')
})

test('Can get phone with getPhone()', () => {
  const person = new Person('John Doe', 'johndoe@gmail.com', '(123) 456-7890')
  expect(person.getPhone()).toBe('(123) 456-7890')
})

test('getRole() should be "Person"', () => {
  const person = new Person()
  expect(person.getRole()).toBe('Person')
})
