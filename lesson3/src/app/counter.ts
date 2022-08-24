// use cases

import { Counter } from "../domain"
import { CounterDb } from "../services/db"

export const getCounterValue = (): number => {
  const db = CounterDb()
  const counter = db.load()

  return counter.value
}

export const incrementCounter = (increment: number) => {
  const db = CounterDb()
  const counter = db.load()

  const newCounter = counter.increment(increment)

  db.persist(newCounter)
}

// primitive type (number)
// Domain type Counter
// persistence reperentation
//


// IO representation
// domain representation
// persistence representation


// interface centric modeling
// behaviour centric modeling
// persistence / data / schema centric modeling


// continuous modeling
// requirement
// design interface
// hypothesis (of implementation)
// try implementation
// => fail
// => notice its not trivial?
//  => domain centric modeling => new hypothesis
// => works but bad interface
//   => model interface and try again

