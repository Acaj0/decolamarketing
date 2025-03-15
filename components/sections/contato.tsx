"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulário enviado:", formData)
    alert("Obrigado pelo contato! Em breve retornaremos.")
    setFormData({ nome: "", email: "", telefone: "", mensagem: "" })
  }

  return (
    <section id="contato" className="py-20 md:py-32 bg-black relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            Estamos prontos para impulsionar seu negócio. Fale conosco e descubra como podemos ajudar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulário de contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-b from-blue-950/10 to-black/60 border-white/10 backdrop-blur-sm h-full">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="nome" className="text-sm font-medium">
                      Nome completo
                    </label>
                    <Input
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="bg-black/30 border-white/10 focus:border-blue-600 text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="bg-black/30 border-white/10 focus:border-blue-600 text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="telefone" className="text-sm font-medium">
                      Telefone
                    </label>
                    <Input
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      className="bg-black/30 border-white/10 focus:border-blue-600 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="mensagem" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Como podemos ajudar?"
                      className="bg-black/30 border-white/10 focus:border-blue-600 text-white min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-600 text-white font-medium py-2">
                    <Send className="size-4 mr-2" />
                    Enviar mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-b from-blue-950/10 to-black/60 border-white/10 backdrop-blur-sm h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-900/20 p-3 rounded-full">
                      <Mail className="size-6 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-medium text-lg">Email</p>
                      <p className="text-white/70">contato@decola.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-900/20 p-3 rounded-full">
                      <Phone className="size-6 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-medium text-lg">Telefone</p>
                      <p className="text-white/70">(65) 99999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-900/20 p-3 rounded-full">
                      <MapPin className="size-6 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-medium text-lg">Endereço</p>
                      <p className="text-white/70">Av. General Vale 321, Salas 903 e 1206 - Cuiabá/MT</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-2">
                    <span>Segunda a Sexta</span>
                    <span className="font-medium">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sábado</span>
                    <span className="font-medium">8:00 - 12:00</span>
                  </div>
                </div>

                {/* Botão do WhatsApp */}
                <div className="mt-[59px]">
                <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-600 text-white font-medium py-2">
                    <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>Fale conosco pelo Whatsapp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

