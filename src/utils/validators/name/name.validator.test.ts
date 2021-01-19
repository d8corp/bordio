import nameValidator from '.'

describe('name validator', () => {
  test('undefined', () => {
    expect(nameValidator()).toBe(true)
  })
  test('valid name', () => {
    expect(nameValidator('Mike')).toBe(true)
  })
  test('invalid name', () => {
    expect(nameValidator('Mike123')).toBe(false)
  })
})
