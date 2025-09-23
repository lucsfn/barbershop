import { BarbershopItem } from "../_components/barbershop-item"
import { Header } from "../_components/header"
import { SearchBar } from "../_components/search-bar"
import { searchBarbershops } from "../_data/search-barbershops"

interface BarbershopsPageProps {
  searchParams: {
    search?: string
    service?: string
  }
}

export default async function BarbershopsPage({
  searchParams,
}: BarbershopsPageProps) {
  const barbershops = await searchBarbershops({
    search: searchParams.search,
    service: searchParams.service,
  })

  return (
    <div>
      <Header />
      <div className="my-6 px-5">
        <SearchBar />
      </div>
      <div className="px-5">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Resultados para &quot;{searchParams?.search || searchParams?.service}
          &quot;
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}
