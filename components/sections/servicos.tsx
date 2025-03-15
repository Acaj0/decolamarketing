"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, BarChart, Target } from "lucide-react"

// Serviços agrupados por categoria
const serviceCategories = [
  {
    title: "Marketing Digital",
    icon: <Globe className="size-10" />,
    description: "Estratégias completas para sua presença online",
    subServices: [
      {
        title: "Gestão de Mídias Sociais",
        description: "Criação de conteúdo, planejamento e análise de resultados para suas redes sociais",
      },
      {
        title: "Marketing de Conteúdo",
        description: "Produção de conteúdo relevante para atrair e engajar seu público-alvo",
      },
      {
        title: "Branding Digital",
        description: "Construção e fortalecimento da sua marca no ambiente online",
      },
    ],
  },
  {
    title: "Tráfego Pago",
    icon: <BarChart className="size-10" />,
    description: "Campanhas otimizadas para máximo ROI",
    subServices: [
      {
        title: "Google Ads",
        description: "Campanhas de busca, display e remarketing para aumentar sua visibilidade",
      },
      {
        title: "Facebook & Instagram Ads",
        description: "Anúncios segmentados nas principais redes sociais",
      },
      {
        title: "LinkedIn Ads",
        description: "Estratégias para B2B e captação de leads qualificados",
      },
    ],
  },
  {
    title: "SEO",
    icon: <Target className="size-10" />,
    description: "Otimização para mecanismos de busca",
    subServices: [
      {
        title: "SEO On-page",
        description: "Otimização de conteúdo, meta tags e estrutura do site",
      },
      {
        title: "SEO Off-page",
        description: "Construção de backlinks e autoridade de domínio",
      },
      {
        title: "SEO Técnico",
        description: "Melhorias de performance, indexação e experiência do usuário",
      },
    ],
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

        <div className="grid md:grid-cols-1 gap-12">
          {serviceCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="bg-gradient-to-b from-blue-950/10 to-black/60 border-white/10 backdrop-blur-sm hover:bg-blue-950/20 transition-all">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Cabeçalho da categoria */}
                    <div className="md:w-1/3">
                      <div className="text-blue-600 mb-4">{category.icon}</div>
                      <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                      <p className="text-white/70 mb-4">{category.description}</p>
                    </div>

                    {/* Subtópicos */}
                    <div className="md:w-2/3 grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                      {category.subServices.map((subService, j) => (
                        <div
                          key={j}
                          className="border-l-2 border-blue-600/30 pl-4 hover:border-blue-600 transition-all"
                        >
                          <h4 className="text-lg font-semibold mb-2">{subService.title}</h4>
                          <p className="text-white/70 text-sm">{subService.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

