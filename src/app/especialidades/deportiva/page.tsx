import Link from "next/link";
import { ArrowLeft, Activity, CheckCircle2 } from "lucide-react";

export default function DeportivaPage() {
    return (
        <div className="flex flex-col w-full min-h-screen pt-20">
            <section className="bg-muted/30 py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <Link href="/#especialidades" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Volver a especialidades
                    </Link>
                    <div className="max-w-3xl">
                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                            <Activity className="h-8 w-8" />
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-primary leading-tight font-outfit mb-6">
                            Fisioterapia Deportiva Avanzada
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Tratamientos especializados para atletas de todos los niveles. Aceleramos tu recuperación, prevenimos futuras lesiones y optimizamos tu rendimiento con técnicas apoyadas en la última evidencia científica.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="flex flex-col gap-8">
                            <h2 className="text-2xl font-semibold text-primary font-outfit">¿Qué tratamos?</h2>
                            <ul className="space-y-4">
                                {[
                                    "Esguinces y roturas musculares",
                                    "Tendinopatías (Aquiles, rotuliana, etc.)",
                                    "Sobrecargas articulares",
                                    "Recuperación post-quirúrgica deportiva",
                                    "Fascitis plantar"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 p-8 bg-muted/30 rounded-3xl border border-border">
                                <h3 className="text-xl font-semibold text-primary font-outfit mb-4">Metodología de trabajo</h3>
                                <p className="text-muted-foreground mb-4">
                                    No nos limitamos a tratar el dolor. Evaluamos tu biomecánica completa para encontrar la raíz del problema, aplicando terapia manual, electrólisis, neuromodulación y prescripción de ejercicio terapéutico específico para tu deporte.
                                </p>
                            </div>
                        </div>

                        <div className="bg-primary text-primary-foreground rounded-[3rem] p-10 lg:p-12 shadow-2xl flex flex-col items-center text-center">
                            <h3 className="text-3xl font-semibold font-outfit mb-4">¿Listo para volver a tu mejor nivel?</h3>
                            <p className="text-primary-foreground/80 mb-8 max-w-sm">
                                Reserva tu evaluación inicial. Estudiaremos tu caso de forma individualizada para que vuelvas a competir con seguridad.
                            </p>
                            <Link
                                href="/#reserva"
                                className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full bg-secondary px-8 text-base font-medium text-secondary-foreground transition-all hover:bg-secondary/90 hover:scale-105 shadow-xl shadow-secondary/20"
                            >
                                Pedir cita ahora
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
