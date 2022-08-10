import { CounterDb } from "../services/db"

export const Counter = (value = 0) => {
  const increment = (amount: number) => {
    return Counter(value + amount)
  }

  // const save = () => {
  //   const db = CounterDb()
  //   db.persist(Counter(value))
  // }

  return {
    increment,
    value,
    // save
  }
}


// - domain code no longer function
//   - harded to test
//   - harded to unit test
//   - impossible to unit test => why?

// - creates a circular dependency
// - domain should be isolated => not depend on adapter layer
// -
// -
// - business logic depends on library
//   - is no longer isolated
//   - its coupled to an external library
