import { MenuIcon } from "lucide-react"
import Image from "next/image"

import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

export function Header() {
  return (
    <Card className="rounded-t-none">
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}
