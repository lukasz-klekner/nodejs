export const calc = (operation, a, b) => {
  switch (operation) {
    case 'add':
      return a + b
    case 'substract':
      return a - b
    case 'multiply':
      return a * b
    case 'divide':
      return a / b

    default:
      return 'Unknown operation ' + operation
  }
}
