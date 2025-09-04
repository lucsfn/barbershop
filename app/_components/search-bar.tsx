"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { SearchIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "./ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { Input } from "./ui/input"

const formSearchSchema = z.object({
  search: z
    .string()
    .trim()
    .min(1, "A busca não pode estar vazia. Digite algo para buscar."),
})

type SearchFormType = z.infer<typeof formSearchSchema>

export function SearchBar() {
  const form = useForm<SearchFormType>({
    resolver: zodResolver(formSearchSchema),
    defaultValues: {
      search: "",
    },
  })

  const router = useRouter()

  function handleSearchSubmit(data: SearchFormType) {
    router.push(`/barbershops?search=${data.search}`)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSearchSubmit)}
        className="flex gap-2"
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Busque uma barbearia ou serviço..."
                  {...field}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">
          <SearchIcon />
        </Button>
      </form>
    </Form>
  )
}
