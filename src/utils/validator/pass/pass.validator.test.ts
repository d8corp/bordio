import passValidator from '.'

describe('pass validator', () => {
  test('undefined', () => {
    expect(passValidator()).toBe('')
  })
  test('required', () => {
    expect(passValidator('', true)).toBe('You must enter your password')
  })
  test('valid', () => {
    expect(passValidator('password')).toBe('')
  })
  test('invalid', () => {
    expect(passValidator('123')).toBe('Password must contain at least 6 symbols')
  })
})
