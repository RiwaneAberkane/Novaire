import type { Metadata } from "next";
import "./globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";

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

            <nav className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-300">
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
          </div>
        </header>

        {/* MAIN */}
        <main className="bg-gradient-to-b from-white via-slate-50 to-slate-100 px-4 py-10 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
          <div className="mx-auto max-w-6xl">{children}</div>
        </main>

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
