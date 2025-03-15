"use client"

import { useEffect } from "react"
import { Hero } from "@/components/sections/hero"
import { Diferencial } from "@/components/sections/diferencial"
import { Servicos } from "@/components/sections/servicos"
import { Cases } from "@/components/sections/cases"
import { Galeria } from "@/components/sections/galeria"
import { Sobre } from "@/components/sections/sobre"
import { Footer } from "@/components/sections/footer"
import { Contato } from "@/components/sections/contato"
import { Navbar } from "@/components/navbar"


export default function LandingPage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  return (
    <div className="flex min-h-[100dvh] flex-col bg-black text-white">
      <Navbar />

      <main className="flex-1 overflow-x-clip">
        <Hero />
        <Diferencial />
        <Servicos />
        <Cases />
        <Galeria />
        <Sobre />
        <Contato />
      </main>

      <Footer />
    </div>
  )
}

