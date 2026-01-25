import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Privacy() {
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
          <Button className="flex items-center gap-2 bg-black border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] transition-all duration-300" onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Button>
        </div>
      </nav>

      {/* Content */}
      <div className="container py-12 max-w-4xl">
        <h1 className="text-4xl font-bold font-poppins mb-8">Política de Privacidad</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introducción</h2>
            <p>
              LuxNet Innovate LLC ("nosotros", "nuestro" o "la Empresa") se compromete a proteger tu privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y salvaguardamos tu información cuando visitas nuestro sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Información que Recopilamos</h2>
            <p>Podemos recopilar información sobre ti de varias maneras, incluyendo:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Información que proporcionas voluntariamente (nombre, correo electrónico, teléfono)</li>
              <li>Información recopilada automáticamente (dirección IP, tipo de navegador, páginas visitadas)</li>
              <li>Información de cookies y tecnologías similares</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Uso de tu Información</h2>
            <p>Utilizamos la información recopilada para:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Proporcionar y mejorar nuestros servicios</li>
              <li>Procesar tus transacciones</li>
              <li>Enviarte comunicaciones de marketing (con tu consentimiento)</li>
              <li>Cumplir con obligaciones legales</li>
              <li>Proteger contra fraude y actividades ilícitas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Protección de Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Cookies</h2>
            <p>
              Nuestro sitio utiliza cookies para mejorar tu experiencia. Puedes controlar las cookies a través de la configuración de tu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Derechos del Usuario</h2>
            <p>
              Tienes derecho a acceder, corregir o eliminar tu información personal. Para ejercer estos derechos, contáctanos a través de nuestros canales de comunicación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Cambios a esta Política</h2>
            <p>
              Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos de cambios significativos publicando la nueva política en nuestro sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta Política de Privacidad, contáctanos a través de WhatsApp: +90 537 847 58 59
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
