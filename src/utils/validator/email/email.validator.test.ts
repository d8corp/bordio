import emailValidator from '.'

describe('email validator', () => {
  test('undefined', () => {
    expect(emailValidator()).toBe('')
  })
  test('required', () => {
    expect(emailValidator('', true)).toBe('You must enter your email')
  })
  test('valid', () => {
    expect(emailValidator('julia777@gmail.com')).toBe('')
  })
  test('invalid', () => {
    expect(emailValidator('55555555')).toBe('Please enter a valid email address')
  })
})
