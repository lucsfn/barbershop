import { Card, CardContent } from "./ui/card"

export function Footer() {
  return (
    <footer>
      <Card className="rounded-none">
        <CardContent className="flex flex-row justify-between px-5 py-6">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Copyright{" "}
            <span className="font-bold">FSW Barber</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}
