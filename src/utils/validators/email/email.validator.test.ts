import emailValidator from '.'

describe('email validator', () => {
  test('undefined', () => {
    expect(emailValidator()).toBe(true)
  })
  test('valid email', () => {
    expect(emailValidator('d8corp@mail.ru')).toBe(true)
  })
  test('invalid email', () => {
    expect(emailValidator('d8corp@mail.r')).toBe(false)
  })
})
