import passValidator from '.'

describe('pass validator', () => {
  test('undefined', () => {
    expect(passValidator()).toBe(true)
  })
  test('valid password', () => {
    expect(passValidator('password')).toBe(true)
  })
  test('invalid password', () => {
    expect(passValidator('123')).toBe(false)
  })
})
