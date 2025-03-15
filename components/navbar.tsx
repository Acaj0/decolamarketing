"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    // Fechar o menu mobile se estiver aberto
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }

    // Scroll suave para o elemento
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = ["Diferencial", "Serviços", "Cases", "Galeria", "Sobre"]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-tH0bgWY495DXgopkTFaPFeN3l5eBpM.png"
            alt="Decola Logo"
            width={40}
            height={40}
            className="w-auto h-8"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/decolaletrabranca-6a4fFPqu8Z4RXeNC5n5uE6aM51902v.png"
            alt="Decola"
            width={120}
            height={30}
            className="w-auto h-6"
          />
        </Link>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              onClick={(e) => handleLinkClick(e, `#${item.toLowerCase()}`)}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a href="#contato" onClick={(e) => handleLinkClick(e, "#contato")}>
            <Button className="bg-blue-900 hover:bg-blue-800 text-white rounded-full">Fale Conosco</Button>
          </a>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-20 inset-x-0 bg-black/95 backdrop-blur-lg border-b border-white/10"
        >
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                onClick={(e) => handleLinkClick(e, `#${item.toLowerCase()}`)}
              >
                {item}
              </a>
            ))}
            <a href="#contato" onClick={(e) => handleLinkClick(e, "#contato")}>
              <Button className="bg-blue-900 hover:bg-blue-800 text-white rounded-full mt-2 w-full">
                Fale Conosco
              </Button>
            </a>
          </div>
        </motion.div>
      )}
    </header>
  )
}

