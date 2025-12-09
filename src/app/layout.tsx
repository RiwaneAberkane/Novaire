import type { Metadata } from "next";
import "./globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileMenu } from "@/components/MobileMenu";


export const metadata: Metadata = {
  title: "NOVAIRE — Boutique headless",
  description:
    "NOVAIRE, concept e-commerce headless développé avec Next.js & Hygraph.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50">

        {/* HEADER */}
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur-md transition-colors dark:border-slate-800 dark:bg-slate-950/80">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-900 text-[0.65rem] font-semibold tracking-[0.25em] dark:border-slate-100">
                N
              </div>
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-slate-700 dark:text-slate-200">
                NOVAIRE STUDIO
              </span>
            </div>

            {/* NAV desktop */}
            <nav className="hidden items-center gap-6 text-sm text-slate-500 dark:text-slate-300 sm:flex">
              <a
                href="/"
                className="hover:text-slate-900 transition dark:hover:text-white"
              >
                Accueil
              </a>
              <a
                href="/products"
                className="hover:text-slate-900 transition dark:hover:text-white"
              >
                Boutique
              </a>
              <a
                href="#about"
                className="hover:text-slate-900 transition dark:hover:text-white"
              >
                À propos
              </a>

              <ThemeToggle />
            </nav>

            {/* Bouton burger uniquement mobile */}
            <MobileMenu />
          </div>
        </header>


        {/* MAIN */}
        <main className="bg-gradient-to-b from-white via-slate-50 to-slate-100 px-4 py-10 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
          <div className="mx-auto max-w-6xl">{children}</div>
        </main>

        {/* SECTION COLLECTION */}
        <section className="relative overflow-hidden px-6 py-16 md:px-12 md:py-24 bg-white dark:bg-slate-950 transition-colors">

          {/* Glow de fond */}
          <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.18),transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.32),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.22),transparent_55%)] transition-colors" />

          <div className="relative mx-auto max-w-6xl grid gap-14 md:grid-cols-[1.1fr,0.9fr] items-center">

            <div className="space-y-6">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Nouvelle drop · Essentials
              </p>

              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                NOVAIRE Essential<br />
                <span className="text-slate-500 dark:text-slate-400">
                  la base de ta rotation.
                </span>
              </h2>

              <p className="text-sm text-slate-700 dark:text-slate-300 max-w-md leading-relaxed">
                Une capsule minimaliste pensée pour le quotidien : coupes nettes,
                palettes sobres, matières confortables. Le genre de pièces que tu peux
                porter tous les jours, sans te poser de questions.
              </p>

              <a
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-5 py-2.5 shadow-sm hover:bg-black transition dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-white"
              >
                Voir la collection
              </a>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 bg-sky-400/10 dark:bg-sky-400/20 blur-3xl transition-colors" />
              <div className="relative overflow-hidden shadow-xl">
                <img
                  src="/novaire-essential-hero.jpg"
                  alt="NOVAIRE Essential collection"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>


        {/* FOOTER */}
        <footer className="border-t border-slate-200 bg-white/90 py-4 text-xs text-slate-500 transition-colors dark:border-slate-800 dark:bg-slate-950/90 dark:text-slate-400">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4">
            <span>© {new Date().getFullYear()} NOVAIRE. Tous droits réservés.</span>
            <span className="text-slate-400">
              Projet portfolio — Next.js · Hygraph
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
