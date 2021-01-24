import fieldValidator from '.'

describe('fieldValidator', () => {
  test('simple', () => {
    expect(fieldValidator(undefined, {
      name: 'name',
    })).toBe('')

    expect(fieldValidator('test', {
      name: 'name',
    })).toBe('')
  })

  test('required', () => {
    expect(fieldValidator(undefined, {
      name: 'name',
      required: true
    })).toBe('You must enter the name')

    expect(fieldValidator('test', {
      name: 'name',
      required: true
    })).toBe('')
  })

  test('requiredError', () => {
    expect(fieldValidator(undefined, {
      name: 'name',
      required: true,
      requiredError: 'Test',
    })).toBe('Test')

    expect(fieldValidator('test', {
      name: 'name',
      required: true,
      requiredError: 'Test',
    })).toBe('')
  })

  test('pattern', () => {
    expect(fieldValidator('test', {
      name: 'name',
      pattern: '^[0-9]+$',
    })).toBe('Please enter a valid name')

    expect(fieldValidator('123', {
      name: 'name',
      pattern: '^[0-9]+$',
    })).toBe('')
  })

  test('patternError', () => {
    expect(fieldValidator('test', {
      name: 'name',
      pattern: '^[0-9]+$',
      patternError: 'Test',
    })).toBe('Test')

    expect(fieldValidator('123', {
      name: 'name',
      pattern: '^[0-9]+$',
      patternError: 'Test',
    })).toBe('')
  })

  test('values', () => {
    expect(fieldValidator('test', {
      name: 'name',
      values: ['test1', 'test2'],
    })).toBe('You must select from test1, test2')

    expect(fieldValidator('test1', {
      name: 'name',
      values: ['test1', 'test2'],
    })).toBe('')
  })

  test('boolean', () => {
    expect(fieldValidator(false, {
      name: 'policies',
      required: true,
      requiredError: 'You must accept the policies',
    })).toBe('You must accept the policies')

    expect(fieldValidator(true, {
      name: 'policies',
      required: true,
      requiredError: 'You must accept the policies',
    })).toBe('')
  })
})
