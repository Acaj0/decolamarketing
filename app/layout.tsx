import type React from "react"
import "@/styles/globals.css"
import { Montserrat } from "next/font/google"
import type { Metadata } from "next"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Decola Marketing Digital - Elevando Sua Marca",
  description:
    "Agência de marketing digital especializada em fazer sua marca decolar com estratégias inovadoras e resultados comprovados.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${montserrat.variable} font-sans bg-black`}>{children}</body>
    </html>
  )
}



import './globals.css'