import nameValidator from '.'

describe('name validator', () => {
  test('undefined', () => {
    expect(nameValidator()).toBe('')
  })
  test('required', () => {
    expect(nameValidator('', true)).toBe('You must enter your name')
  })
  test('valid', () => {
    expect(nameValidator('Julian')).toBe('')
  })
  test('invalid', () => {
    expect(nameValidator('Ju1455^$#')).toBe('Please enter a valid name')
  })
})
