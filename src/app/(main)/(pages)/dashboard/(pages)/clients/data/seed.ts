import fs from "fs"
import path from "path"
import { faker } from "@faker-js/faker"
import { status, action } from "./data"

const tasks = Array.from({ length: 100 }, () => ({
  action: `${faker.number.int({ min: 1000, max: 9999 })}`,
  nameClient: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  status: faker.helpers.arrayElement(status).value,
  phoneClient: faker.helpers.arrayElement(action).value,
  dateSend: faker.helpers.arrayElement(action).value,
}))

fs.writeFileSync(
  path.join(__dirname, "tasks.json"),
  JSON.stringify(tasks, null, 2)
)
