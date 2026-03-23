import type { Metadata } from "next"
import "../styles/globals.css"
import Navbar from "@/components/layout/Navbar"
import { Manrope } from "next/font/google";

export const metadata: Metadata = {
  title: "Urbanouse",
  description: "Real estate website",
}

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className={`${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}