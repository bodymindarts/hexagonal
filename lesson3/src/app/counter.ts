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
  // ORM mongoose
  // newCounter.save()
}
