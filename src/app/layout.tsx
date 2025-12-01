import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-screen bg-slate-950 text-slate-900 flex justify-center px-3 py-6">
        <div className="relative w-full max-w-6xl rounded-3xl bg-white shadow-[0_40px_120px_rgba(15,23,42,0.75)] overflow-hidden border border-white/10">
          {/* Glow de fond */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),transparent_60%),radial-gradient(circle_at_bottom,_rgba(244,63,94,0.18),transparent_55%)] opacity-70" />

          {/* Contenu */}
          <div className="relative flex min-h-[calc(100vh-3rem)] flex-col">
            {/* HEADER */}
            <header className="border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
              <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-900 text-[0.65rem] font-semibold tracking-[0.25em]">
                    N
                  </div>
                  <span className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-slate-700">
                    NOVAIRE STUDIO
                  </span>
                </div>
                <nav className="hidden items-center gap-6 text-sm text-slate-500 sm:flex">
                  <a href="/" className="hover:text-slate-900 transition">
                    Accueil
                  </a>
                  <a
                    href="/products"
                    className="hover:text-slate-900 transition"
                  >
                    Boutique
                  </a>
                  <a href="#about" className="hover:text-slate-900 transition">
                    À propos
                  </a>
                </nav>
              </div>
            </header>

            {/* MAIN */}
            <main className="flex-1 bg-gradient-to-b from-white/90 via-white to-white/95">
              {children}
            </main>

            {/* FOOTER */}
            <footer className="border-t border-slate-200/70 bg-white/80 backdrop-blur-md">
              <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-4 text-xs text-slate-500">
                <span>© {new Date().getFullYear()} NOVAIRE. Tous droits réservés.</span>
                <span className="text-slate-400">
                  Projet portfolio — Next.js · Hygraph
                </span>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
