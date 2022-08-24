import { Counter } from "../../src/domain"
import { CounterDb } from "../../src/services/db"

describe("Counters", () => {
  it("can store and retrieve a counter", async () => {
    const counter = Counter(5)
    const db = CounterDb()

    db.persist(counter)

    const loadedCounter = db.load()
    expect(loadedCounter.value).toBe(5)

    const nextCounter = loadedCounter.increment(3)

    db.persist(nextCounter)

    const loadedNextCounter = db.load()

    expect(loadedNextCounter.value).toBe(8)
  })
})
