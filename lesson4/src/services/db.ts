import fs from 'fs'

import { Counter } from "../../src/domain"

export const CounterDb = () => {
  const dbFileName = "./counterDB.json"
  const persist = (counter: any) => {
    fs.writeFileSync(dbFileName, JSON.stringify(
      {
        database: {
          counterState: counter.value
        }
      }))
  }

  const load = () => {
    try {
      const data = fs.readFileSync(dbFileName, 'utf8');
      const parsedData = JSON.parse(data)
      return Counter(parsedData.database.counterState)
    } catch (err) {
      return Counter(0)
    }
  }

  return {
    persist,
    load
  }
}
