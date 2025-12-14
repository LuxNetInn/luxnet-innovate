import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Disclaimer() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <img src="/logo-green.png" alt="LuxNet Innovate" className="w-8 h-8" />
            <span className="text-xl font-bold font-poppins text-green-500">LuxNet Innovate</span>
          </a>
          <Button variant="ghost" onClick={() => navigate("/")} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Button>
        </div>
      </nav>

      {/* Content */}
      <div className="container py-12 max-w-4xl">
        <h1 className="text-4xl font-bold font-poppins mb-8">Descargo de Responsabilidad</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Descargo de Responsabilidad General</h2>
            <p>
              La información proporcionada en este sitio web es solo para propósitos educativos e informativos. No constituye asesoramiento financiero, de inversión o legal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Sin Garantía de Precisión</h2>
            <p>
              Aunque nos esforzamos por proporcionar información precisa y actualizada, no garantizamos la exactitud, integridad o utilidad de cualquier información en este sitio. El uso de cualquier información es bajo tu propio riesgo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Riesgo de Inversión</h2>
            <p>
              El trading y la inversión en mercados financieros conllevan riesgos significativos. Es posible perder dinero. Nunca inviertas dinero que no puedas permitirte perder.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">No Asesoramiento Personalizado</h2>
            <p>
              La información en este sitio no es asesoramiento personalizado. Antes de tomar cualquier decisión de inversión, consulta con un asesor financiero profesional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Limitación de Responsabilidad</h2>
            <p>
              LuxNet Innovate no será responsable por ningún daño directo, indirecto, incidental, especial o consecuente resultante del uso o la imposibilidad de usar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Cumplimiento Regulatorio</h2>
            <p>
              Los usuarios son responsables de cumplir con todas las leyes y regulaciones aplicables en su jurisdicción.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Cambios sin Previo Aviso</h2>
            <p>
              Nos reservamos el derecho de cambiar, modificar o eliminar cualquier contenido en este sitio sin previo aviso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contacto</h2>
            <p>
              Si tienes preguntas sobre este Descargo de Responsabilidad, contáctanos a través de WhatsApp: +90 537 847 58 59
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
