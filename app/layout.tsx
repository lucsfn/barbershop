import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Footer } from "./_components/footer"
import { Toaster } from "./_components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FSW Barbershop",
  description: "SAAS for barbershop",
  icons: {
    icon: "icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
