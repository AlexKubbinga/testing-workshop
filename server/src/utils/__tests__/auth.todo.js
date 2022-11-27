import {isPasswordAllowed, userToJSON} from '../auth'
test('isPasswordAllowed only allows some passwords', () => {
  expect(isPasswordAllowed('')).toBe(false)
  expect(isPasswordAllowed('AAAAAAAAA')).toBe(false)
  expect(isPasswordAllowed('9999999999')).toBe(false)
  expect(isPasswordAllowed('sakjdfkl21398')).toBe(true)
})

test('userToJSON excludes secure properties', () => {
  const validUser = {
    id: 'some-id',
    username: 'sarah',
  }
  const invalidUser = {
    ...validUser,
    exp: new Date(),
    iat: new Date(),
    hash: 'some really long string',
    salt: 'some shorter string',
  }

  expect(userToJSON(invalidUser)).toEqual(validUser)
  expect(userToJSON(validUser)).toEqual(validUser)
  // Here you'll need to create a test user object
  // pass that to the userToJSON function
  // and then assert that the test user object
  // doesn't have any of the properties it's not
  // supposed to.
  // Here's an example of a user object:
  // const user = {
  //   id: 'some-id',
  //   username: 'sarah',
})
