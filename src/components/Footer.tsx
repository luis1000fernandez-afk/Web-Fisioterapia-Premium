import Link from "next/link";
import { Stethoscope, Facebook, Twitter, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground border-t border-primary/20">
            <div className="container mx-auto px-6 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand */}
                    <div className="flex flex-col gap-6 text-primary-foreground/80">
                        <Link href="/" className="flex items-center gap-2 text-white">
                            <div className="flex bg-white/10 rounded-lg p-2 items-center justify-center">
                                <Stethoscope className="h-6 w-6 text-white" />
                            </div>
                            <span className="font-semibold tracking-tight text-xl">
                                Kine<span className="text-secondary">Premium</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Tu clínica de fisioterapia avanzada en Sevilla. Combinamos terapia manual, tecnología de vanguardia y un trato 100% personalizado para tu bienestar.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-secondary transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-secondary transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-secondary transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                    </div>

                    {/* Enlaces */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-lg text-white font-outfit mb-2">Enlaces Rápidos</h4>
                        <Link href="#inicio" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors w-fit">Inicio</Link>
                        <Link href="#especialidades" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors w-fit">Especialidades</Link>
                        <Link href="#equipo" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors w-fit">Nuestro Equipo</Link>
                        <Link href="#testimonios" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors w-fit">Opiniones</Link>
                        <Link href="#reserva" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors w-fit">Pedir Cita</Link>
                    </div>

                    {/* Horario */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-lg text-white font-outfit mb-2">Horario</h4>
                        <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
                            <div className="flex items-start gap-3">
                                <Clock className="h-5 w-5 shrink-0 text-secondary" />
                                <div>
                                    <p className="font-medium text-white mb-1">Lunes a Viernes</p>
                                    <p>08:00 - 21:00 (Ininterrumpido)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 mt-2">
                                <Clock className="h-5 w-5 shrink-0 text-secondary" />
                                <div>
                                    <p className="font-medium text-white mb-1">Sábados</p>
                                    <p>09:00 - 14:00 (Urgencias)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contacto */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-lg text-white font-outfit mb-2">Contacto</h4>
                        <div className="flex flex-col gap-4 text-sm text-primary-foreground/70">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 shrink-0 text-secondary" />
                                <span>Av. de la Constitución 15, 1ºA<br />41004 Sevilla</span>
                            </div>
                            <a href="tel:+34954123456" className="flex items-center gap-3 hover:text-secondary transition-colors">
                                <Phone className="h-5 w-5 shrink-0 text-secondary" />
                                <span>+34 954 123 456</span>
                            </a>
                            <a href="email:info@kinepremium.es" className="flex items-center gap-3 hover:text-secondary transition-colors">
                                <Mail className="h-5 w-5 shrink-0 text-secondary" />
                                <span>info@kinepremium.es</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
                    <p>© {new Date().getFullYear()} KinePremium Clínicas. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link>
                        <Link href="#" className="hover:text-white transition-colors">Aviso Legal</Link>
                        <Link href="#" className="hover:text-white transition-colors">Política de Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
