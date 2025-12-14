import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Terms() {
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
        <h1 className="text-4xl font-bold font-poppins mb-8">Términos y Condiciones</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Aceptación de Términos</h2>
            <p>
              Al acceder y utilizar este sitio web, aceptas estar vinculado por estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Uso Permitido</h2>
            <p>
              Te comprometes a utilizar este sitio solo para propósitos legales y de una manera que no infrinja los derechos de otros o restrinja su uso y disfrute del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Contenido del Usuario</h2>
            <p>
              Cualquier contenido que proporciones debe ser preciso, no infringir derechos de terceros y no contener material ofensivo o ilegal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Limitación de Responsabilidad</h2>
            <p>
              LuxNet Innovate no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos resultantes del uso o la imposibilidad de usar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Descargo de Responsabilidad de Servicios</h2>
            <p>
              Nuestro sitio y servicios se proporcionan "tal cual" sin garantías de ningún tipo. No garantizamos la precisión, integridad o utilidad de cualquier información proporcionada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Modificación de Términos</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Ley Aplicable</h2>
            <p>
              Estos Términos y Condiciones se rigen por las leyes de Florida, Estados Unidos, sin considerar sus disposiciones sobre conflictos de leyes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Contacto</h2>
            <p>
              Para cualquier pregunta sobre estos Términos y Condiciones, contáctanos a través de WhatsApp: +90 537 847 58 59
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
