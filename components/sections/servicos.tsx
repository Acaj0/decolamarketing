"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, BarChart, Users, Target, Zap, Rocket } from "lucide-react"

const services = [
  {
    icon: <Globe className="size-8" />,
    title: "Marketing Digital",
    description: "Estratégias completas para sua presença online",
  },
  {
    icon: <BarChart className="size-8" />,
    title: "Tráfego Pago",
    description: "Campanhas otimizadas para máximo ROI",
  },
  {
    icon: <Users className="size-8" />,
    title: "Gestão de Redes Sociais",
    description: "Engajamento e crescimento orgânico",
  },
  {
    icon: <Target className="size-8" />,
    title: "SEO",
    description: "Otimização para mecanismos de busca",
  },
  {
    icon: <Zap className="size-8" />,
    title: "Email Marketing",
    description: "Automação e nutrição de leads",
  },
  {
    icon: <Rocket className="size-8" />,
    title: "Consultoria Estratégica",
    description: "Planejamento e direcionamento",
  },
]

export function Servicos() {
  return (
    <section id="serviços" className="py-20 md:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bgblack z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_70%)] z-0"></div>
      <div className="absolute inset-0 -z-10 bg-black bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            Soluções completas para impulsionar sua presença digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="bg-gradient-to-b from-blue-950/10 to-black/60 border-white/10 backdrop-blur-sm hover:bg-blue-950/20 transition-all">
                <CardContent className="p-6">
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/70">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

