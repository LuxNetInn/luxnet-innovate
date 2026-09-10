/* Base sincronizada con el sitio en vivo: conservar composición centrada sin imágenes y añadir solo movimiento verde neón a las tarjetas. */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, BarChart3, Zap, Shield, Users, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import type { CSSProperties } from "react";
import PDFModal from "@/components/PDFModal";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Home() {
  const [showBasicPDF, setShowBasicPDF] = useState(false);
  const [showProfessionalPDF, setShowProfessionalPDF] = useState(false);
  const [showCEOModal, setShowCEOModal] = useState(false);
  const [bubbles, setBubbles] = useState<Array<{id: number, x: number, y: number}>>([]);

  useEffect(() => {
    // Inicializar PayPal hosted buttons cuando el componente se monta
    if ((window as any).paypal) {
      // Renderizar botón Basic
      (window as any).paypal.HostedButtons({
        hostedButtonId: "H8CPXMZH8SA6U"
      }).render("#paypal-container-H8CPXMZH8SA6U");
      
      // Renderizar botón Professional
      (window as any).paypal.HostedButtons({
        hostedButtonId: "P6YDYJ8ESB5Y8"
      }).render("#paypal-container-P6YDYJ8ESB5Y8");
      
      // Renderizar botón Master Class
      (window as any).paypal.HostedButtons({
        hostedButtonId: "WGYF89W94W8WJ"
      }).render("#paypal-container-WGYF89W94W8WJ");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        const rect = pricingSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          if (Math.random() > 0.7) {
            const newBubble = {
              id: Date.now(),
              x: Math.random() * 100,
              y: Math.random() * 100
            };
            setBubbles(prev => [...prev, newBubble]);
            setTimeout(() => {
              setBubbles(prev => prev.filter(b => b.id !== newBubble.id));
            }, 2000);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative z-0">
      {/* Burbujas globales (efecto champán) */}
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="fixed w-3 h-3 bg-green-500 rounded-full animate-pulse pointer-events-none"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            boxShadow: '0 0 10px rgba(34, 197, 94, 0.8)',
            animation: 'float-up 2s ease-out forwards',
            zIndex: 20
          }}
        />
      ))}
      <style>{`
        @keyframes float-up {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-100px) scale(0.5);
          }
        }
      `}</style>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition z-10">
            <img src="/logo-green.png" alt="LuxNet Innovate" className="w-8 h-8" />
            <span className="text-xl font-bold font-orbitron text-green-500">LuxNet Innovate</span>
          </a>
          <div className="flex items-center gap-4 z-10 max-sm:hidden">
            <a href="#features" className="text-sm font-bold text-green-500 hover:text-black hover:bg-green-500 transition hover:shadow-[0_0_20px_rgba(34,197,94,1)] px-4 py-2 rounded-lg whitespace-nowrap">Características</a>
            <a href="#indicators" className="text-sm font-bold text-green-500 hover:text-black hover:bg-green-500 transition hover:shadow-[0_0_20px_rgba(34,197,94,1)] px-4 py-2 rounded-lg whitespace-nowrap">Indicadores</a>
            <a href="#pricing" className="text-sm font-bold text-green-500 hover:text-black hover:bg-green-500 transition hover:shadow-[0_0_20px_rgba(34,197,94,1)] px-4 py-2 rounded-lg whitespace-nowrap">Precios</a>
            <a href="#about" className="text-sm font-bold text-green-500 hover:text-black hover:bg-green-500 transition hover:shadow-[0_0_20px_rgba(34,197,94,1)] px-4 py-2 rounded-lg whitespace-nowrap">Acerca de</a>
          </div>
          <Button className="bg-green-500 text-black hover:bg-green-600" onClick={() => window.open('https://wa.me/15616905996', '_blank')}>
            Comenzar
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron leading-tight bg-green-500 text-black px-6 py-4 rounded-lg inline-block">
              Servicios de Consultoría en Análisis Técnico
            </h1>
              <p className="text-lg text-muted-foreground">
                Herramientas de análisis de mercado de nivel profesional impulsadas por indicadores técnicos puros. Toma decisiones comerciales informadas con datos reales, no algoritmos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-end">
                <Button size="lg" className="bg-green-500 text-black hover:bg-green-600" onClick={() => window.open('https://wa.me/15616905996', '_blank')}>
                  Prueba Gratuita <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 bg-green-500 text-black px-6 py-4 rounded-lg inline-block">Características Principales</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Herramientas profesionales diseñadas para traders serios que buscan análisis técnico puro
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Indicadores Avanzados", description: "Acceso a Indicador LuxNet Pro" },
              { icon: BarChart3, title: "Análisis en Tiempo Real", description: "Datos de mercado actualizados instantáneamente" },
              { icon: Zap, title: "Alertas Inteligentes", description: "Notificaciones personalizadas basadas en tus criterios" },
              { icon: Shield, title: "Seguridad Garantizada", description: "Protección de datos de nivel empresarial" },
              { icon: Users, title: "Comunidad Activa", description: "Únete a miles de traders profesionales" },
              { icon: Lightbulb, title: "Educación Continua", description: "Recursos y tutoriales para mejorar tus habilidades" }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              const { ref, isVisible } = useIntersectionObserver();
              return (
                <div key={idx} ref={ref} className={isVisible ? "animate-fade-in-up" : "opacity-0"} style={{ animationDelay: `${idx * 0.1}s` }}>
                  <Card
                    className="luxnet-feature-card p-6 bg-card/50 border border-border hover:border-2 hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all duration-300"
                    style={{ "--feature-delay": `${idx * 2}s` } as CSSProperties}
                  >
                    <Icon className="w-8 h-8 text-green-500 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Indicators + Trading Tools Section (side by side, no images) */}
      <section id="indicators" className="py-20 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Columna 1: Indicadores Técnicos Profesionales */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-orbitron bg-green-500 text-black px-6 py-4 rounded-lg inline-block">Indicadores Técnicos Profesionales</h2>
              <p className="text-muted-foreground">
                Indicadores de nivel profesional para analizar tendencias de mercado e identificar oportunidades de trading
              </p>
              <div className="space-y-4">
                {[
                  { title: "Indicadores de Momentum", items: ["RSI", "MACD", "Oscilador Estocástico", "Indicador LuxNet PRO ₿"] },
                  { title: "Indicadores de Tendencia", items: ["Medias Móviles", "Bandas de Bollinger", "Chandelier Exit"] },
                  { title: "Indicadores de Volumen", items: ["Perfil de Volumen"] }
                ].map((category, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold text-green-500 mb-2">{category.title}</h4>
                    <ul className="space-y-1">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Button className="bg-green-500 text-black hover:bg-green-600" onClick={() => window.open('https://wa.me/15616905996', '_blank')}>
                Explorar Todos los Indicadores <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Columna 2: Herramientas Avanzadas de Trading */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-orbitron bg-green-500 text-black px-6 py-4 rounded-lg inline-block">Herramientas Avanzadas de Trading</h2>
              <p className="text-muted-foreground">
                Suite completa de herramientas para análisis técnico profesional
              </p>
              <ul className="space-y-3">
                {[
                  "Gráficos interactivos con múltiples timeframes",
                  "Análisis de patrones de velas",
                  "Herramientas de dibujo avanzadas",
                  "Análisis de volumen y flujo de órdenes",
                  "Alertas personalizadas en tiempo real",
                  "Backtesting de estrategias"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="bg-green-500 text-black hover:bg-green-600" onClick={() => window.open('https://wa.me/15616905996', '_blank')}>
                Probar Herramientas <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Coverage Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 bg-green-500 text-black px-6 py-4 rounded-lg inline-block">Cobertura Global de Mercados</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Acceso a análisis técnico en múltiples mercados financieros
            </p>
          </div>
          <div className="flex justify-center gap-8 max-w-2xl mx-auto">
            {[
              { title: "Criptomonedas", description: "Bitcoin, Ethereum, Altcoins" },
              { title: "Forex", description: "Pares de divisas principales y exóticos" }
            ].map((market, idx) => (
              <Card key={idx} className="p-6 text-center bg-card/50 border-border flex-1">
                <h3 className="text-xl font-semibold text-green-500 mb-2">{market.title}</h3>
                <p className="text-sm text-muted-foreground">{market.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 border-t border-border relative overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 bg-green-500 text-black px-6 py-4 rounded-lg inline-block">Planes de Precios</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Elige el plan que se adapte a tus necesidades de trading
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "LuxNet Basic",
                price: "$249.99",
                period: "Pago Único",
                description: "Para traders principiantes",
                features: ["Indicadores básicos", "1 lista de vigilancia", "Soporte por correo", "Actualizaciones diarias del mercado", "Acceso a Folletos y Videos Explicativos"],
                isPremium: true,
                paypalButtonId: "H8CPXMZH8SA6U"
              },
              {
                name: "LuxNet Professional",
                price: "$399.99",
                period: "Pago Único",
                description: "Para traders serios",
                features: ["Todos los indicadores", "Listas de vigilancia ilimitadas", "Soporte prioritario", "Alertas en tiempo real", "Gráficos avanzados", "Entrenamiento Individual", "Análisis y Proyección Semanal"],
                highlighted: true,
                isPremium: true,
                paypalButtonId: "P6YDYJ8ESB5Y8"
              },
              {
                name: "Master Class",
                price: "$150.00",
                period: "Pago Único",
                description: "Presentación en Vivo de la Estrategia",
                features: ["Presentación en vivo de 2 horas", "Estrategia LuxNet Innovate completa", "Análisis técnico en tiempo real", "Preguntas y respuestas interactivo", "Materiales de referencia incluidos", "Acceso a grabación de la sesión", "Certificado de participación", "Soporte post-sesión"],
                highlighted: true,
                isPremium: true,
                paypalButtonId: "WGYF89W94W8WJ"
              }
            ].map((plan, idx) => {
              const { ref, isVisible } = useIntersectionObserver();
              return (
              <div ref={ref} className={isVisible ? "animate-fade-in-up" : "opacity-0"} style={{ animationDelay: `${idx * 0.1}s` }}>
              <Card 
                className={`p-8 border-2 ${plan.highlighted ? 'border-green-500 bg-card' : 'border-green-500 bg-background/50'} hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all duration-300`}
              >
                <h3 className="text-xl font-bold font-orbitron mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold font-orbitron">{plan.price}</span>
                  <span className="text-sm text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <div className="flex gap-3 mb-6">
                  {plan.isPremium ? (
                    <div id={`paypal-container-${plan.paypalButtonId}`} className="w-full"></div>
                  ) : (
                    <>
                      <Button 
                        className="flex-1 bg-green-500 text-black hover:bg-green-600"
                        onClick={() => window.open('https://wa.me/15616905996', '_blank')}
                      >
                        Comenzar
                      </Button>
                      <Button 
                        variant="outline"
                        className="flex-1 border-2 border-green-500 text-green-500 hover:bg-green-500/10 hover:border-green-400 transition-all duration-300 shadow-[0_0_10px_rgba(34,197,94,0.5)] hover:shadow-[0_0_20px_rgba(34,197,94,0.8)]"
                        onClick={() => idx === 0 ? setShowBasicPDF(true) : setShowProfessionalPDF(true)}
                      >
                        Ver Detalles
                      </Button>
                    </>
                  )}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-8 bg-green-500 text-black px-6 py-4 rounded-lg inline-block">Acerca de LuxNet Innovate</h2>
            <div className="border-2 border-green-500 rounded-lg p-8 max-w-2xl mx-auto bg-green-500/5">
              <p className="text-muted-foreground">
                LuxNet Innovate se enorgullece de ser un pilar en el mundo del análisis técnico, brindando a traders e inversores las herramientas necesarias para navegar en los complejos mercados financieros actuales. Nuestra filosofía se centra en el análisis técnico puro, confiando en la capacidad humana para interpretar datos de mercado sin la intervención de algoritmos, lo que permite una conexión más auténtica y directa con las tendencias del mercado.
              </p>
              <p className="text-muted-foreground mt-4">
                Fundada por un equipo de traders profesionales, LuxNet Innovate no solo ofrece tecnología avanzada, sino que también comparte una rica herencia de conocimientos adquiridos a lo largo de años de experiencia en el terreno. Esta combinación única de sabiduría y tecnología asegura que nuestros usuarios cuenten con recursos excepcionales para tomar decisiones informadas y estratégicas.
              </p>
              <p className="text-muted-foreground mt-4">
                En un entorno financiero que cambia constantemente, nuestra plataforma está diseñada para adaptarse y evolucionar, manteniéndote a la vanguardia de las tendencias y oportunidades del mercado. Con LuxNet Innovate, no solo estás obteniendo herramientas de análisis, sino también un socio comprometido con tu éxito en cada paso del camino.
              </p>
              <p className="text-muted-foreground mt-4">
                Únete a nosotros y descubre cómo nuestra dedicación al análisis técnico puro puede transformar tu experiencia de trading e inversión, llevándote a nuevos niveles de conocimiento y rentabilidad.
              </p>
            </div>

          </div>
          <div className="grid md:grid-cols-1 gap-8 max-w-xs mx-auto mt-12">
            {[
              { value: "2025", label: "Fundada" }
            ].map((stat, idx) => (
              <Card key={idx} className="p-6 text-center bg-card/50 border-border">
                <div className="text-3xl font-bold font-orbitron text-green-500 mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 border-t border-border">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-8 bg-green-500 text-black px-6 py-4 rounded-lg inline-block">¿Listo para Dominar el Análisis Técnico?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a miles de traders que usan LuxNet Innovate para análisis técnico profesional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] transition-all duration-300" onClick={() => window.open('https://wa.me/15616905996', '_blank')}>
              Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-green-500 transition">Características</a></li>
                <li><a href="#indicators" className="hover:text-green-500 transition">Indicadores</a></li>
                <li><a href="#pricing" className="hover:text-green-500 transition">Precios</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-green-500 transition">Acerca de</a></li>
                <li><button onClick={() => setShowCEOModal(true)} className="hover:text-green-500 transition cursor-pointer">Conoce al CEO</button></li>
                <li><a href="/privacy" className="hover:text-green-500 transition">Privacidad</a></li>
                <li><a href="/disclaimer" className="hover:text-green-500 transition">Descargo de Responsabilidad</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/terms" className="hover:text-green-500 transition">Términos</a></li>
                <li><a href="/privacy" className="hover:text-green-500 transition">Política de Privacidad</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://wa.me/15616905996" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">WhatsApp</a></li>
                <li><a href="mailto:info@luxnetinnovate.com" className="hover:text-green-500 transition">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2025 LuxNet Innovate. Todos los derechos reservados.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="https://discord.gg/wFWHNgDNG" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-green-500 transition">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.865-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.162-.385-.395-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.294.075.075 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.198.373.295a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.076.076 0 0 0-.041.107c.36.699.772 1.365 1.225 1.994a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-4.786-.838-8.95-3.549-12.676a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156 0-1.193.964-2.157 2.157-2.157 1.193 0 2.156.964 2.156 2.157 0 1.19-.963 2.156-2.156 2.156zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.964-2.157 2.157-2.157 1.193 0 2.157.964 2.157 2.157 0 1.19-.964 2.156-2.157 2.156z" />
                </svg>
                <span className="text-sm">Discord</span>
              </a>
              <a href="https://t.me/+FCTX0J-vqsIxYmFh" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-green-500 transition">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.328-.373-.115l-6.869 4.332-2.97-.924c-.644-.203-.658-.644.136-.953l11.593-4.47c.538-.196 1.006.128.832.941z" />
                </svg>
                <span className="text-sm">Telegram</span>
              </a>
              <a href="https://wa.me/15616905996" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-green-500 transition">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* PDF Modals */}
      <PDFModal
        isOpen={showBasicPDF}
        onClose={() => setShowBasicPDF(false)}
        title="Entrenamiento de Trading Básico"
        pdfUrl="/training-basic.pdf"
      />
      <PDFModal
        isOpen={showProfessionalPDF}
        onClose={() => setShowProfessionalPDF(false)}
        title="Entrenamiento de Trading Profesional"
        pdfUrl="/training-professional.pdf"
      />

      {/* CEO Modal */}
      {showCEOModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl bg-card border-border max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold font-orbitron bg-green-500 text-black px-6 py-4 rounded-lg inline-block">Conoce al CEO</h2>
                <button onClick={() => setShowCEOModal(false)} className="text-muted-foreground hover:text-foreground transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663040482601/GJWfAo3ocxGFKE3ETxcAv6/ceo_6f1c1528.png" alt="Yudiel Almarales" className="w-48 h-48 rounded-full object-cover border-4 border-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold font-orbitron mb-4">Yudiel Almarales</h3>
                  <p className="text-sm text-muted-foreground mb-4 font-semibold">Fundador y CEO de LuxNet Innovate</p>
                  <p className="text-muted-foreground mb-4">
                    Con una sólida formación médica como Cirujano Residente en Cuba, Yudiel ha demostrado ser un emprendedor versátil y visionario. Tras emigrar a los Estados Unidos, decidió expandir sus horizontes más allá de la medicina, incursionando en el mundo del trading e inversión financiera.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Con más de 4 años de experiencia en análisis técnico y trading, Yudiel ha desarrollado una profunda comprensión de los mercados financieros. Su combinación única de disciplina médica, pensamiento analítico y experiencia en trading lo posiciona como un educador excepcional.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Su objetivo es empoderar a la comunidad latina y al público en general, proporcionando herramientas, educación y mentoría de calidad para que puedan tomar decisiones financieras informadas y construir riqueza a través del trading profesional.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://t.me/LuxNet_Innovate_FreeSignals" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-600 transition font-semibold">
                      Conectar en Telegram
                    </a>
                    <a href="mailto:info@luxnetinnovate.com" className="inline-flex items-center gap-2 px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500/10 transition font-semibold">
                      Contactar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
