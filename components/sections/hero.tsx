"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ceuestrelado-3D5GZuXDtcnxGAyZYotnTJwgzwW6cc.gif"
          alt="Céu Estrelado"
          fill
          className="object-cover animate-slow-move"
          priority
        />
      </div>

      <div className="container relative z-10 px-4 py-32 md:py-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Faça Sua Marca
            <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent"> Decolar</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Transformamos sua presença digital com estratégias inovadoras e resultados mensuráveis. Chegou a hora de
            elevar sua marca ao próximo nível.
          </p>
          <a href="#contato"><Button className="bg-blue-900 hover:bg-blue-800 text-white rounded-full h-14 px-8 text-lg">
            Comece Sua Jornada
            <Rocket className="ml-2 size-5" />
          </Button></a>
        </motion.div>
      </div>
    </section>
  )
}

