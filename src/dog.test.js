import Dog from './dog'

test('Dog.bark', () => {
  const testdog = new Dog('Test')
  expect(testdog.bark()).toBe('woof, ima Test')
})
