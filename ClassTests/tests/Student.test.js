const Student = require('../lib/Student.js')

test('Can set grade with constructor', () => {
  const student = new Student('John Doe', 'johndoe@gmail.com', '(123) 456-7890', 12)
  expect(student.grade).toBe(12)
})

test('Can get grade with getGrade()', () => {
  const student = new Student('John Doe', 'johndoe@gmail.com', '(123) 456-7890', 12)
  expect(student.getGrade()).toBe(12)
})

test('getRole() should be "Student"', () => {
  const student = new Student()
  expect(student.getRole()).toBe('Student')
})
