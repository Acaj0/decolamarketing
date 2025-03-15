"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const differentials = [
  {
    title: "Metodologia Exclusiva",
    description: "Processo personalizado para cada cliente",
  },
  {
    title: "Resultados Comprovados",
    description: "Cases de sucesso em diversos segmentos",
  },
  {
    title: "Equipe Especializada",
    description: "Profissionais certificados e atualizados",
  },
  {
    title: "Transparência Total",
    description: "Relatórios detalhados e comunicação clara",
  },
]

export function Diferencial() {
  return (
    <section id="diferencial" className="py-20 md:py-32 bg-gradient-to-b from-black to-blue-950">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosso Diferencial</h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            O que nos torna únicos no mercado e como podemos impulsionar seu negócio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((differential, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                <CardContent className="p-6">
                  <CheckCircle2 className="size-8 text-blue-700 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{differential.title}</h3>
                  <p className="text-white/70">{differential.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

