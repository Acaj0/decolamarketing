import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-tH0bgWY495DXgopkTFaPFeN3l5eBpM.png"
              alt="Decola Logo"
              width={40}
              height={40}
              className="w-auto h-8"
            />
            <p className="text-white/70 text-sm">Transformando ideias em resultados digitais extraordinários.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {["Diferencial", "Serviços", "Cases", "Galeria", "Sobre"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>contato@decola.com.br</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "LinkedIn"].map((social) => (
                <Link key={social} href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} Decola Marketing Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

