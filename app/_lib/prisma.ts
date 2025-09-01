import { withAccelerate } from "@prisma/extension-accelerate"

import { PrismaClient } from "../generated/prisma"

declare global {
  // eslint-disable-next-line no-var, no-unused-vars
  var cachedPrisma: ReturnType<typeof createPrismaClient> | undefined
}

function createPrismaClient() {
  return new PrismaClient().$extends(withAccelerate())
}

let prisma: ReturnType<typeof createPrismaClient>

if (process.env.NODE_ENV === "production") {
  prisma = createPrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = createPrismaClient()
  }
  prisma = global.cachedPrisma
}

export const db = prisma
