import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Activity, Heart, Shield, Star, MapPin, Map } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-muted/30 pt-20 pb-32 lg:pt-32 lg:pb-48">
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 flex flex-col items-start text-left gap-6">
            <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
              <span className="flex h-2 w-2 rounded-full bg-secondary mr-2"></span>
              Clínica Especializada en Sevilla
            </div>

            <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-primary leading-tight font-outfit">
              Recupera tu <span className="text-secondary italic font-serif">bienestar</span> con precisión clínica.
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Tratamiento 100% personalizado combinando terapia manual avanzada y tecnología de vanguardia para deportistas y adultos exigentes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <Link
                href="#reserva"
                className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 shadow-xl shadow-primary/20"
              >
                Pedir cita ahora
              </Link>
              <Link
                href="#especialidades"
                className="inline-flex h-14 items-center justify-center rounded-full bg-white border border-border px-8 text-base font-medium text-foreground transition-all hover:bg-muted"
              >
                Conocer tratamientos
              </Link>
            </div>

            <div className="flex items-center gap-6 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <span>Trato exclusivo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <span>Sin esperas</span>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="flex-1 relative w-full aspect-square max-w-lg lg:max-w-none">
            {/* Decorative background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/20 rounded-full blur-3xl -z-10"></div>

            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent z-10 pointer-events-none"></div>
              <Image
                src="/images/hero.png"
                alt="Fisioterapeuta tratando a un paciente"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-border flex items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-muted border-2 border-white flex items-center justify-center text-xs text-muted-foreground">+</div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-primary">+1,200</span>
                <span className="text-xs text-muted-foreground">Pacientes recuperados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES SECTION */}
      <section id="especialidades" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl font-outfit mb-4">
              Especialidades Clínicas
            </h2>
            <p className="text-lg text-muted-foreground">
              Abordaje integral para cada etapa de tu recuperación con las técnicas más avanzadas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-xl hover:border-secondary/50">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary group-hover:scale-110 transition-transform">
                <Activity className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary font-outfit">Fisioterapia Deportiva</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Prevención, tratamiento y readaptación de lesiones deportivas para devolverte al máximo rendimiento lo antes posible.
              </p>
              <Link href="#" className="inline-flex items-center text-sm font-medium text-primary group-hover:text-secondary transition-colors">
                Ver tratamientos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="group rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-xl hover:border-secondary/50">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary group-hover:scale-110 transition-transform">
                <Heart className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary font-outfit">Suelo Pélvico</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Rehabilitación especializada para disfunciones uroginecológicas, embarazo y postparto con tecnología ecográfica.
              </p>
              <Link href="#" className="inline-flex items-center text-sm font-medium text-primary group-hover:text-secondary transition-colors">
                Ver tratamientos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="group rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-xl hover:border-secondary/50">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary group-hover:scale-110 transition-transform">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary font-outfit">Osteopatía</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Diagnóstico y tratamiento holístico buscando el origen mecánico del dolor para lograr una recuperación duradera.
              </p>
              <Link href="#" className="inline-flex items-center text-sm font-medium text-primary group-hover:text-secondary transition-colors">
                Ver tratamientos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPO SECTION */}
      <section id="equipo" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl font-outfit mb-4">
                Profesionales de confianza
              </h2>
              <p className="text-lg text-muted-foreground">
                Nuestro personal está altamente cualificado y en constante formación para ofrecerte la élite de la fisioterapia.
              </p>
            </div>
            <Link href="#reserva" className="hidden lg:inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90">
              Conocer al equipo completo
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alejandro Gómez", role: "Fisioterapeuta Deportivo", col: "Col. 1234", spec: "Readaptación", image: "/images/team1.png" },
              { name: "Lucía Martín", role: "Esp. Suelo Pélvico", col: "Col. 5678", spec: "Ecografía", image: "/images/team2.png" },
              { name: "David Ruiz", role: "Osteópata C.O.", col: "Col. 9012", spec: "Terapia Manual", image: "/images/team3.png" },
              { name: "Carmen Vega", role: "Nutricionista Clínica", col: "Col. 3456", spec: "Nutrición Deportiva", image: "/images/team4.png" }
            ].map((member, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-3xl bg-white border border-border">
                <div className="aspect-[4/5] bg-zinc-200 flex items-center justify-center overflow-hidden relative">
                  <Image src={member.image} alt={member.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-primary font-outfit">{member.name}</h3>
                  </div>
                  <p className="text-sm font-medium text-secondary mb-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground mb-4">Nº {member.col} • {member.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS SECTION */}
      <section id="testimonios" className="py-24 bg-white overflow-hidden relative">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl font-outfit mb-4">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="text-lg text-muted-foreground">
              La satisfacción y recuperación de quienes confían en nosotros es nuestro mayor logro.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Llevaba meses con un dolor crónico en el hombro que me impedía entrenar. En KinePremium dieron con el problema desde la primera sesión. ¡100% recomendables!",
                author: "Carlos M.",
                role: "Atleta Amateur",
                rating: 5
              },
              {
                text: "El trato es excepcional y las instalaciones son inmejorables. Fui por una lesión de rodilla y el seguimiento personalizado que me hicieron marcó la diferencia en mi recuperación.",
                author: "Elena R.",
                role: "Paciente de Traumatología",
                rating: 5
              },
              {
                text: "Como madre primeriza, el equipo de suelo pélvico me dio mucha tranquilidad. Su profesionalidad y el uso de ecografía me ayudaron a entender y mejorar mi situación.",
                author: "Sofía T.",
                role: "Paciente de Suelo Pélvico",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-muted/30 p-8 rounded-3xl border border-border relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.author}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO Y RESERVA SECTION */}
      <section id="reserva" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <svg className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/4 opacity-10" width="800" height="800" fill="none" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-white text-foreground rounded-[3rem] p-8 lg:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-12">

              {/* Info y Mapa (Placeholder) */}
              <div className="flex flex-col">
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-primary font-outfit mb-6">
                  Ven a conocernos
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Estamos ubicados en el corazón de Sevilla. Pide tu cita hoy mismo y da el primer paso hacia una vida sin dolor.
                </p>

                <div className="flex flex-col gap-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Dirección</h4>
                      <p className="text-muted-foreground">Av. de la Constitución 15, 1ºA, 41004 Sevilla</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-secondary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Teléfono</h4>
                      <p className="text-muted-foreground">+34 954 123 456</p>
                    </div>
                  </div>
                </div>

                {/* Mapa Placeholder */}
                <div className="mt-auto aspect-video w-full rounded-2xl bg-zinc-200 border-2 border-border flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Seville,Spain&zoom=14&size=600x300&maptype=roadmap&sensor=false')] bg-cover bg-center opacity-30 grayscale mix-blend-multiply"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <Map className="h-10 w-10 text-muted-foreground mb-2" />
                    <span className="text-muted-foreground text-sm font-medium">Mapa Interactivo</span>
                  </div>
                </div>
              </div>

              {/* Formulario */}
              <div className="bg-muted/30 p-8 lg:p-10 rounded-3xl border border-border">
                <h3 className="text-2xl font-semibold text-primary font-outfit mb-6">Solicita tu evaluación</h3>
                <form className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="nombre" className="text-sm font-medium text-primary">Nombre y Apellidos</label>
                      <input type="text" id="nombre" className="h-12 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" placeholder="Juan Pérez" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="telefono" className="text-sm font-medium text-primary">Teléfono</label>
                      <input type="tel" id="telefono" className="h-12 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" placeholder="+34 600..." />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="especialidad" className="text-sm font-medium text-primary">Motivo de consulta</label>
                    <select id="especialidad" className="h-12 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all">
                      <option value="">Selecciona especialidad...</option>
                      <option value="deportiva">Fisioterapia Deportiva</option>
                      <option value="suelo">Suelo Pélvico</option>
                      <option value="osteopatia">Osteopatía</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="mensaje" className="text-sm font-medium text-primary">Breve descripción de tu caso</label>
                    <textarea id="mensaje" rows={4} className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none" placeholder="Llevo un par de semanas con un dolor en..."></textarea>
                  </div>

                  <div className="flex items-center gap-3 mt-2">
                    <input type="checkbox" id="privacidad" className="h-4 w-4 rounded border-input text-secondary focus:ring-secondary" />
                    <label htmlFor="privacidad" className="text-xs text-muted-foreground">
                      Acepto la <Link href="#" className="underline hover:text-primary">política de privacidad</Link> y el tratamiento de mis datos.
                    </label>
                  </div>

                  <button type="submit" className="h-14 mt-4 w-full rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90 hover:scale-[1.02] transition-all shadow-lg shadow-secondary/20">
                    Enviar Solicitud
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
