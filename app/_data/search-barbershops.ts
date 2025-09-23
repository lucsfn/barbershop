"use server"

import { db } from "../_lib/prisma"

interface SearchBarbershopsParams {
  search?: string
  service?: string
}

export async function searchBarbershops({
  search,
  service,
}: SearchBarbershopsParams) {
  return db.barbershop.findMany({
    where: search
      ? {
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              services: {
                some: {
                  name: {
                    contains: search,
                    mode: "insensitive",
                  },
                },
              },
            },
          ],
        }
      : service
        ? {
            services: {
              some: {
                name: {
                  contains: service,
                  mode: "insensitive",
                },
              },
            },
          }
        : {},
  })
}
