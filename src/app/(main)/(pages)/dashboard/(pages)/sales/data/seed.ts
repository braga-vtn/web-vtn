import fs from "fs"
import path from "path"
import { faker } from "@faker-js/faker"
import { codeTracking, status, tracking } from "./data"

const tasks = Array.from({ length: 100 }, () => ({
  order: `${faker.number.int({ min: 1000, max: 9999 })}`,
  status: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  link: faker.helpers.arrayElement(status).value,
  tracking: faker.helpers.arrayElement(tracking).value,
  codeTracking: faker.helpers.arrayElement(codeTracking).value,
}))

fs.writeFileSync(
  path.join(__dirname, "tasks.json"),
  JSON.stringify(tasks, null, 2)
)
