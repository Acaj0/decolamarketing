"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Timeline } from "@/components/timeline"
import { PhotoGallery } from "@/components/photo-gallery"
import { TeamSection } from "@/components/team-section"

export default function NossaHistoria() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity, scale }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0,transparent_70%)] z-0"></div>
        <div className="absolute inset-0 -z-10 bg-black bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="container px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500">
              Nossa História
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
              Uma jornada de inovação, desafios e conquistas que transformaram o marketing digital no Brasil
            </p>
            <Link href="/">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 mr-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Home
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          onClick={scrollToContent}
        >
          <ChevronDown className="h-8 w-8 text-white/70" />
        </motion.div>
      </motion.section>

      <main className="flex-1">
        {/* Introdução */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-black to-blue-950/30 relative">
          <div className="container px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">De onde viemos</h2>
                <p className="text-white/80 text-lg mb-6">
                  A Decola Marketing nasceu da visão de empreendedores apaixonados por tecnologia e marketing, que
                  identificaram uma lacuna no mercado: a necessidade de estratégias digitais verdadeiramente eficazes e
                  mensuráveis para empresas brasileiras.
                </p>
                <p className="text-white/80 text-lg mb-6">
                  Fundada em 2015, começamos como uma pequena consultoria em Cuiabá, com apenas 3 colaboradores e uma
                  missão ambiciosa: revolucionar a forma como as empresas se conectam com seus clientes no ambiente
                  digital.
                </p>
                <p className="text-white/80 text-lg">
                  Hoje, somos referência em marketing digital, com uma equipe multidisciplinar de mais de 30
                  profissionais e centenas de cases de sucesso em diversos segmentos.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-video rounded-xl overflow-hidden"
              >
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Fundadores da Decola Marketing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <p className="text-sm text-white/90">Os fundadores da Decola Marketing em 2015</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <Timeline />

        {/* Galeria de Fotos */}
        <PhotoGallery />

        {/* Equipe */}
        <TeamSection />

        {/* Valores e Missão */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-blue-950/30 to-black relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_70%)] z-0"></div>

          <div className="container px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Valores</h2>
              <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
                Os princípios que guiam nossas decisões e definem quem somos
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Inovação",
                  description:
                    "Buscamos constantemente novas soluções e abordagens para os desafios dos nossos clientes.",
                },
                {
                  title: "Transparência",
                  description:
                    "Acreditamos em relacionamentos baseados em honestidade e clareza em todos os processos.",
                },
                {
                  title: "Resultados",
                  description: "Focamos em estratégias que geram impacto mensurável e retorno sobre o investimento.",
                },
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all"
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{value.title}</h3>
                  <p className="text-white/80">{value.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-20 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa Missão</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto italic">
                "Transformar a presença digital das empresas em resultados concretos, através de estratégias inovadoras
                e personalizadas que conectam marcas e pessoas de forma autêntica e mensurável."
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

