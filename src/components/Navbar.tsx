import Link from "next/link";
import { Stethoscope, Calendar, Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex bg-primary rounded-lg p-2 items-center justify-center">
             <Stethoscope className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-semibold tracking-tight text-xl text-primary">Kine<span className="text-secondary">Premium</span></span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="#especialidades" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Especialidades</Link>
          <Link href="#equipo" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">El Equipo</Link>
          <Link href="#testimonios" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Opiniones</Link>
          <Link href="#blog" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Blog</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#reserva" className="hidden md:flex h-10 items-center justify-center rounded-full bg-secondary px-6 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90 shadow-sm gap-2">
            <Calendar className="w-4 h-4"/>
            Pedir Cita
          </Link>
          <button className="md:hidden p-2 text-muted-foreground">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
