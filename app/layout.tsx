import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Footer } from "./_components/footer"
import { Toaster } from "./_components/ui/sonner"
import { AuthProvider } from "./_providers/auth"

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
    <html lang="pt-BR" className="dark">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
