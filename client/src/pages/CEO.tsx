import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";
import { Link } from "wouter";

export default function CEO() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <img src="/logo-green.png" alt="LuxNet Innovate" className="w-8 h-8" />
            <span className="text-xl font-bold font-poppins text-green-500">LuxNet Innovate</span>
          </Link>
          <Link href="/" className="text-sm hover:text-green-500 transition">
            ← Volver al Inicio
          </Link>
        </div>
      </nav>

      {/* CEO Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Conoce al CEO</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Liderazgo apasionado en análisis técnico y educación financiera
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 bg-card/50 border-border">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                {/* Photo */}
                <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
                  <img 
                    src="/ceo.png" 
                    alt="Yudiel Almarales" 
                    className="w-64 h-64 rounded-full object-cover border-4 border-green-500" 
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold font-poppins mb-2 text-green-500">Yudiel Almarales</h2>
                  <p className="text-lg text-muted-foreground mb-6 font-semibold">Fundador y CEO de LuxNet Innovate</p>

                  <div className="space-y-4 text-muted-foreground mb-8">
                    <p>
                      Con una sólida formación médica como Cirujano Residente en Cuba, Yudiel ha demostrado ser un emprendedor versátil y visionario. Tras emigrar a los Estados Unidos, decidió expandir sus horizontes más allá de la medicina, incursionando en el mundo del trading e inversión financiera.
                    </p>

                    <p>
                      Con más de 4 años de experiencia en análisis técnico y trading, Yudiel ha desarrollado una profunda comprensión de los mercados financieros. Su combinación única de disciplina médica, pensamiento analítico y experiencia en trading lo posiciona como un educador excepcional.
                    </p>

                    <p>
                      Su objetivo es empoderar a la comunidad latina y al público en general, proporcionando herramientas, educación y mentoría de calidad para que puedan tomar decisiones financieras informadas y construir riqueza a través del trading profesional.
                    </p>

                    <p>
                      Fundador de LuxNet Innovate, Yudiel está comprometido con su misión de democratizar el conocimiento sobre análisis técnico. Su plataforma se ha convertido en un espacio confiable donde traders de todos los niveles pueden acceder a indicadores profesionales, análisis en tiempo real y educación continua.
                    </p>
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="https://t.me/LuxNet_Innovate_FreeSignals" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-black rounded-lg hover:bg-green-600 transition font-semibold"
                    >
                      <Send className="w-4 h-4" />
                      Conectar en Telegram
                    </a>
                    <a 
                      href="mailto:info@luxnetinnovate.com" 
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-green-500 text-green-500 rounded-lg hover:bg-green-500/10 transition font-semibold"
                    >
                      <Mail className="w-4 h-4" />
                      Enviar Email
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background/50 mt-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Producto</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#features" className="hover:text-green-500 transition">Características</a></li>
                <li><a href="/#indicators" className="hover:text-green-500 transition">Indicadores</a></li>
                <li><a href="/#pricing" className="hover:text-green-500 transition">Precios</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Comunidad</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://discord.gg/wFWHNgDNG" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">Discord</a></li>
                <li><a href="https://t.me/+FCTX0J-vqsIxYmFh" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">Telegram</a></li>
                <li><a href="https://wa.me/15616905996" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/privacy" className="hover:text-green-500 transition">Privacidad</a></li>
                <li><a href="/terms" className="hover:text-green-500 transition">Términos</a></li>
                <li><a href="/disclaimer" className="hover:text-green-500 transition">Descargo de Responsabilidad</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#about" className="hover:text-green-500 transition">Acerca de</a></li>
                <li><a href="/ceo" className="hover:text-green-500 transition">Conoce al CEO</a></li>
                <li><a href="mailto:info@luxnetinnovate.com" className="hover:text-green-500 transition">Contacto</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 LuxNet Innovate LLC. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
