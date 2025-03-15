"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  TrendingUp,
  Target,
  Users,
  CheckCircle2,
  X,
} from "lucide-react";

// Case study data
const caseStudies = [
  {
    id: 1,
    name: "Brasido Restaurante",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brasido-1wYJokkJslTtQ7sAA6gBGd8GFxOjfl.png",
    description: "Restaurante premium especializado em carnes nobres",
    overview:
      "O Brasido buscava aumentar sua presença digital e atrair mais clientes para o restaurante.",
    strategies: [
      "Gestão completa das redes sociais",
      "Campanhas segmentadas no Instagram e Facebook",
      "Marketing de influência com foodlovers",
      "Produção de conteúdo especializado",
    ],
    results: [
      "Aumento de 150% no engajamento nas redes sociais",
      "Crescimento de 80% nas reservas online",
      "200% mais seguidores no Instagram",
      "Aumento de 90% no faturamento mensal",
    ],
  },
  {
    id: 2,
    name: "Tio Lino Alimentos",
    logo: "/tiolino.png",
    description:
      "Indústria de alimentos especializada em produtos de qualidade",
    overview:
      "A Tio Lino precisava fortalecer sua marca e expandir sua presença no mercado digital.",
    strategies: [
      "Rebranding completo da marca",
      "Estratégia de marketing digital",
      "Campanhas de mídia paga",
      "Gestão de mídias sociais",
    ],
    results: [
      "Aumento de 200% nas vendas online",
      "Expansão para 3 novos estados",
      "300% mais seguidores nas redes sociais",
      "Crescimento de 120% no reconhecimento da marca",
    ],
  },
  {
    id: 3,
    name: "Fábula de Doces",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO_FABULA-UNy1te74VPlW1SExqMdW46WC1gocOm.png",
    description: "Confeitaria artesanal especializada em doces gourmet",
    overview:
      "A Fábula buscava se posicionar no mercado premium de doces e aumentar suas vendas online.",
    strategies: [
      "Desenvolvimento de identidade visual",
      "Marketing de conteúdo especializado",
      "Campanhas sazonais",
      "Estratégia de mídia social",
    ],
    results: [
      "Aumento de 180% nas encomendas online",
      "Crescimento de 250% na base de clientes",
      "400% mais alcance nas redes sociais",
      "Expansão para eventos corporativos",
    ],
  },
];

export function Cases() {
  const [selectedCase, setSelectedCase] = useState<
    (typeof caseStudies)[0] | null
  >(null);

  return (
    <section
      id="cases"
      className="py-20 md:py-32 bg-gradient-to-b from-blue-950 to-black"
    >
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cases de Sucesso
          </h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            Resultados reais que transformaram negócios
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, i) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedCase(caseStudy)}
            >
              <div className="aspect-video relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm">
                <div className="absolute inset-0 p-8 flex items-center justify-center z-10 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="relative w-full h-32">
                    <Image
                      src={caseStudy.logo || "/placeholder.svg"}
                      alt={caseStudy.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="absolute inset-0 bg-black p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold mb-3">{caseStudy.name}</h3>
                  <p className="text-white/70 mb-4">{caseStudy.description}</p>
                  <Badge variant="secondary" className="w-fit">
                    Ver case completo <ArrowRight className="w-4 h-4 ml-2" />
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedCase && (
          <Dialog
            open={selectedCase !== null}
            onOpenChange={() => setSelectedCase(null)}
          >
            <DialogContent className="max-w-3xl bg-gradient-to-b from-blue-950 to-black border-white/10 p-0">
              <DialogTitle className="sr-only">
                {selectedCase.name} - Case de Sucesso
              </DialogTitle>

              <div className="p-6 pt-12 md:p-8">
                <div className="relative h-32 mb-8">
                  <Image
                    src={selectedCase.logo || "/placeholder.svg"}
                    alt={selectedCase.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                      <Target className="w-6 h-6" />
                      Objetivo
                    </h3>
                    <p className="text-white/70">{selectedCase.overview}</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                      <Users className="w-6 h-6" />
                      Estratégias
                    </h3>
                    <ul className="grid gap-2">
                      {selectedCase.strategies.map((strategy, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-white/70"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          {strategy}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                      <TrendingUp className="w-6 h-6" />
                      Resultados
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {selectedCase.results.map((result, index) => (
                        <div
                          key={index}
                          className="bg-white/5 rounded-lg p-4 backdrop-blur-sm"
                        >
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
}
