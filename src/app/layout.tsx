import type { Metadata } from "next"
import "../styles/globals.css"
import Navbar from "@/components/layout/Navbar"

export const metadata: Metadata = {
  title: "Urbanouse",
  description: "Real estate website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}