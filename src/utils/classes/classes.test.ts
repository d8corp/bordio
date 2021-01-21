import classes from '.'

describe('classes', () => {
  test('simple', () => {
    expect(classes('test')).toBe('test')
  })
  test('combine', () => {
    expect(classes('test1', 'test2')).toBe('test1 test2')
  })
  test('exclude non-string', () => {
    expect(classes('test1', false, true, null, 1, {}, [], 'test2')).toBe('test1 test2')
  })
})
