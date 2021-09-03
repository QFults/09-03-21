const users = ['John Doe', 'Jane Doe', 'Jack Doe', 'James Doe', 'Jenny Doe']

const findUser = user => {
  if (typeof user !== 'string') {
    throw new Error('Invalid input')
  }

  const location = users.indexOf(user)

  if (location === -1) {
    return null
  } else {
    return location
  }
}

test('returns location of valid user', () => {
  expect(findUser('Jack Doe')).toBe(2)
})

test('return null for non-existing users', () => {
  expect(findUser('Jared Doe')).toBeNull()
})

test('throw error for non-string values', () => {
  expect(() => findUser(5)).toThrow('Invalid input')
})
