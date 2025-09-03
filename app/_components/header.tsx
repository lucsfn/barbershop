import { MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { SidebarSheet } from "./sidebar-sheet"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export function Header() {
  return (
    <Card className="rounded-none">
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/">
          <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SidebarSheet />
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}
