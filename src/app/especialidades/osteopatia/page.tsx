import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle2 } from "lucide-react";

export default function OsteopatiaPage() {
    return (
        <div className="flex flex-col w-full min-h-screen pt-20">
            <section className="bg-muted/30 py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <Link href="/#especialidades" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Volver a especialidades
                    </Link>
                    <div className="max-w-3xl">
                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                            <Shield className="h-8 w-8" />
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-primary leading-tight font-outfit mb-6">
                            Osteopatía Integral
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Una visión holística de tu cuerpo. Buscamos el origen real de tus molestias analizando la relación entre el sistema musculoesquelético, visceral y craneosacral.
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
                                    "Migrañas, cefaleas y mareos",
                                    "Problemas digestivos (reflujo, estreñimiento)",
                                    "Dolores de espalda crónicos (lumbalgia, cervicalgia)",
                                    "Trastornos de la articulación temporomandibular (ATM)",
                                    "Recuperación tras accidentes de tráfico"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 p-8 bg-muted/30 rounded-3xl border border-border">
                                <h3 className="text-xl font-semibold text-primary font-outfit mb-4">El cuerpo como un todo</h3>
                                <p className="text-muted-foreground mb-4">
                                    En osteopatía no nos limitamos a la zona que duele. A través de técnicas manuales precisas y sutiles, restauramos la movilidad de los tejidos para que el propio cuerpo recupere su equilibrio y capacidad de autocuración.
                                </p>
                            </div>
                        </div>

                        <div className="bg-primary text-primary-foreground rounded-[3rem] p-10 lg:p-12 shadow-2xl flex flex-col items-center text-center">
                            <h3 className="text-3xl font-semibold font-outfit mb-4">Recupera la armonía de tu cuerpo</h3>
                            <p className="text-primary-foreground/80 mb-8 max-w-sm">
                                Déjanos ayudarte a entender por qué te duele y a darle a tu cuerpo las herramientas para sanar definitivamente.
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
