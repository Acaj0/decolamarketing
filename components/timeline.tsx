"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Dados da linha do tempo
const timelineEvents = [
  {
    year: 2015,
    title: "Fundação da Decola",
    description: "Início das operações em Cuiabá com foco em consultoria de marketing digital para pequenas empresas.",
    highlight: "Primeiro escritório com apenas 3 colaboradores.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    year: 2016,
    title: "Expansão de Serviços",
    description:
      "Ampliação do portfólio com a inclusão de serviços de gestão de mídias sociais e campanhas de tráfego pago.",
    highlight: "Crescimento para 10 colaboradores e mudança para um escritório maior.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    year: 2018,
    title: "Primeiro Grande Cliente",
    description:
      "Conquista do primeiro cliente de grande porte, uma rede de varejo com atuação em todo o Centro-Oeste.",
    highlight: "Case premiado com aumento de 300% em vendas online.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    year: 2020,
    title: "Adaptação na Pandemia",
    description: "Transformação digital acelerada e desenvolvimento de soluções para empresas afetadas pela pandemia.",
    highlight: "Crescimento de 70% no faturamento em meio à crise global.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    year: 2022,
    title: "Expansão Nacional",
    description: "Abertura de escritório em São Paulo e início de operações com clientes de todo o Brasil.",
    highlight: "Equipe ampliada para mais de 30 profissionais.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    year: 2023,
    title: "Reconhecimento do Mercado",
    description: "Premiação como uma das agências de marketing digital mais inovadoras do Brasil.",
    highlight: "Mais de 100 clientes ativos e expansão internacional.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function Timeline() {
  return (
    <section className="py-20 md:py-32 bg-blue-950/20 relative">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Trajetória</h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            Os marcos importantes que construíram nossa história de sucesso
          </p>
        </motion.div>

        <div className="relative">
          {/* Linha central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-blue-900 rounded-full hidden md:block"></div>

          <div className="space-y-24 relative">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              >
                {/* Conteúdo */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <Badge className="bg-blue-600 hover:bg-blue-700 mb-4 text-lg py-1 px-3">{event.year}</Badge>
                  <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                  <p className="text-white/80 mb-4">{event.description}</p>
                  <p className="text-blue-400 font-medium">{event.highlight}</p>
                </div>

                {/* Ponto na linha do tempo (visível apenas em desktop) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-blue-900 z-10"></div>

                {/* Imagem */}
                <div className="md:w-1/2">
                  <Card className="overflow-hidden bg-black/40 border-white/10">
                    <CardContent className="p-0">
                      <div className="relative aspect-video">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

