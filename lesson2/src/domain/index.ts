export const Counter = (value = 0) => {
  const increment = (amount: number) => {
    return Counter(value + amount)
  }

  return {
    increment,
    value
  }
}
