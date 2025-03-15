"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

// Dados da galeria
const galleryPhotos = [
  {
    id: 1,
    title: "Primeiro escritório (2015)",
    description: "Nossa primeira sede em Cuiabá, onde tudo começou.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Escritórios",
  },
  {
    id: 2,
    title: "Equipe original (2015)",
    description: "Os três fundadores e primeiros colaboradores da Decola.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Equipe",
  },
  {
    id: 3,
    title: "Primeiro evento (2016)",
    description: "Workshop de marketing digital para empreendedores locais.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Eventos",
  },
  {
    id: 4,
    title: "Expansão do time (2018)",
    description: "Celebração da chegada do 10º membro da equipe.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Equipe",
  },
  {
    id: 5,
    title: "Novo escritório (2020)",
    description: "Inauguração da sede ampliada em Cuiabá.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Escritórios",
  },
  {
    id: 6,
    title: "Premiação (2022)",
    description: "Recebimento do prêmio de agência mais inovadora do Centro-Oeste.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Conquistas",
  },
  {
    id: 7,
    title: "Escritório São Paulo (2022)",
    description: "Inauguração da unidade na capital paulista.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Escritórios",
  },
  {
    id: 8,
    title: "Confraternização (2023)",
    description: "Celebração de fim de ano com toda a equipe.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Eventos",
  },
]

// Categorias únicas para filtro
const categories = ["Todos", ...new Set(galleryPhotos.map((photo) => photo.category))]

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedPhoto, setSelectedPhoto] = useState<{
    id: number
    title: string
    description: string
    image: string
    category: string
  } | null>(null)

  // Filtrar fotos por categoria
  const filteredPhotos =
    selectedCategory === "Todos" ? galleryPhotos : galleryPhotos.filter((photo) => photo.category === selectedCategory)

  return (
    <section className="py-20 md:py-32 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_70%)] z-0"></div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galeria de Memórias</h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">Momentos especiais que marcaram nossa trajetória</p>
        </motion.div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category ? "bg-blue-600 text-white" : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de fotos */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredPhotos.map((photo, index) => (
            <Dialog key={photo.id}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="cursor-pointer group"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <Card className="overflow-hidden bg-black/40 border-white/10 h-full transition-all duration-300 group-hover:border-blue-500/50">
                    <CardContent className="p-0 h-full">
                      <div className="relative aspect-square">
                        <img
                          src={photo.image || "/placeholder.svg"}
                          alt={photo.title}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                          <h3 className="text-lg font-bold">{photo.title}</h3>
                          <p className="text-sm text-white/80">{photo.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] bg-black/95 border-white/10">
                <div className="relative">
                  <img
                    src={photo.image || "/placeholder.svg"}
                    alt={photo.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  <div className="mt-4">
                    <h3 className="text-xl font-bold">{photo.title}</h3>
                    <p className="text-white/80">{photo.description}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

