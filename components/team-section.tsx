"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Globe } from "lucide-react"

// Dados da equipe
const teamMembers = [
  {
    name: "Carlos Mendes",
    role: "CEO & Fundador",
    bio: "Visionário com mais de 15 anos de experiência em marketing digital e tecnologia. Liderou projetos para grandes marcas antes de fundar a Decola.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Ana Oliveira",
    role: "Diretora de Estratégia",
    bio: "Especialista em planejamento estratégico com passagem por grandes agências. Na Decola desde 2016, transformando dados em estratégias vencedoras.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Juliana Santos",
    role: "Diretora de Criação",
    bio: "Designer premiada com olhar apurado para tendências visuais. Transforma conceitos em experiências visuais memoráveis desde 2017.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
]

export function TeamSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-black to-blue-950/30 relative">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Líderes</h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            Conheça as mentes brilhantes por trás da Decola Marketing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-b from-blue-950/10 to-black/60 border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all h-full">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                    />
                    <div className="absolute top-0 right-0 p-3 flex gap-2">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black/50 hover:bg-blue-900/80 p-2 rounded-full transition-all"
                        >
                          <Linkedin className="h-4 w-4 text-white" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black/50 hover:bg-blue-900/80 p-2 rounded-full transition-all"
                        >
                          <Twitter className="h-4 w-4 text-white" />
                        </a>
                      )}
                      
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-400 text-sm mb-4">{member.role}</p>
                    <p className="text-white/70 text-sm">{member.bio}</p>
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

