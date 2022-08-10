import { Counter } from "../domain"

let counter = Counter()

export const getCounter = () => {
  return counter
}

export const getCounterValue = (): number => {
  return counter.value
}

export const incrementCounter = (increment: number) => {
  counter = counter.increment(increment)
}
