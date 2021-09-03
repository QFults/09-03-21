const Faculty = require('../lib/Faculty.js')

test('Can set position with constructor', () => {
  const faculty = new Faculty('John Doe', 'johndoe@gmail.com', '(123) 456-7890', 'admin')
  expect(faculty.position).toBe('admin')
})

test('Can get position with getPosition()', () => {
  const faculty = new Faculty('John Doe', 'johndoe@gmail.com', '(123) 456-7890', 'admin')
  expect(faculty.getPosition()).toBe('admin')
})

test('getRole() should be "Faculty"', () => {
  const faculty = new Faculty()
  expect(faculty.getRole()).toBe('Faculty')
})
