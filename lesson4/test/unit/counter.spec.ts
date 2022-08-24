import { Counter } from "../../src/domain"

describe("Counter", () => {
  it("starts at 0", () => {
    const counter = Counter()
    expect(counter.value).toBe(0)
  })

  it("can be incremented", () => {
    const counter = Counter()
    const newCounter = counter.increment(1)
    expect(newCounter.value).toBe(1)
  })
})
