"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-gradient-to-b from-black to-blue-950">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={`/10.jpg`}
              alt="Sobre a Decola"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre a Decola</h2>
            <p className="text-white/70 mb-6">
              Somos uma agência de marketing digital focada em resultados. Nossa missão é fazer sua marca decolar
              através de estratégias inovadoras e um atendimento personalizado.
            </p>
            <p className="text-white/70 mb-8">
              Com anos de experiência no mercado, nossa equipe de especialistas está pronta para transformar seus
              objetivos em realidade.
            </p>
            <Button className="bg-blue-900 hover:bg-blue-800 text-white rounded-full">
              Conheça Nossa História
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

