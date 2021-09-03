const Teacher = require('../lib/Teacher.js')

test('Can set subject with constructor', () => {
  const teacher = new Teacher('John Doe', 'johndoe@gmail.com', '(123) 456-7890', 'math')
  expect(teacher.subject).toBe('math')
})

test('Can get subject with getSubject()', () => {
  const teacher = new Teacher('John Doe', 'johndoe@gmail.com', '(123) 456-7890', 'math')
  expect(teacher.getSubject()).toBe('math')
})

test('getRole() should be "Teacher"', () => {
  const teacher = new Teacher()
  expect(teacher.getRole()).toBe('Teacher')
})
