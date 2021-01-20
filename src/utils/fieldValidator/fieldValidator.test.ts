import fieldValidator from '.'

describe('fieldValidator', () => {
  test('simple', () => {
    expect(fieldValidator({
      name: 'name',
    })).toBe('')

    expect(fieldValidator({
      name: 'name',
      value: 'test',
    })).toBe('')
  })

  test('required', () => {
    expect(fieldValidator({
      name: 'name',
      required: true
    })).toBe('You must enter your name')

    expect(fieldValidator({
      name: 'name',
      value: 'test',
      required: true
    })).toBe('')
  })

  test('requiredError', () => {
    expect(fieldValidator({
      name: 'name',
      required: true,
      requiredError: 'Test',
    })).toBe('Test')

    expect(fieldValidator({
      name: 'name',
      required: true,
      value: 'test',
      requiredError: 'Test',
    })).toBe('')
  })

  test('pattern', () => {
    expect(fieldValidator({
      name: 'name',
      pattern: '^[0-9]+$',
      value: 'test',
    })).toBe('Please enter a valid name')

    expect(fieldValidator({
      name: 'name',
      pattern: '^[0-9]+$',
      value: '123',
    })).toBe('')
  })

  test('patternError', () => {
    expect(fieldValidator({
      name: 'name',
      pattern: '^[0-9]+$',
      value: 'test',
      patternError: 'Test',
    })).toBe('Test')

    expect(fieldValidator({
      name: 'name',
      pattern: '^[0-9]+$',
      value: '123',
      patternError: 'Test',
    })).toBe('')
  })

  test('values', () => {
    expect(fieldValidator({
      name: 'name',
      value: 'test',
      values: ['test1', 'test2'],
    })).toBe('You must select from test1, test2')

    expect(fieldValidator({
      name: 'name',
      value: 'test1',
      values: ['test1', 'test2'],
    })).toBe('')
  })

  test('boolean', () => {
    expect(fieldValidator({
      name: 'policies',
      value: false,
      required: true,
      requiredError: 'You must accept the policies',
    })).toBe('You must accept the policies')

    expect(fieldValidator({
      name: 'policies',
      value: true,
      required: true,
      requiredError: 'You must accept the policies',
    })).toBe('')
  })
})
