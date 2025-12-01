import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOVAIRE — Boutique en ligne",
  description: "E-commerce fictif NOVAIRE, développé avec Next.js & Hygraph.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-neutral-950 text-neutral-50">
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-neutral-800">
            <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-full border border-neutral-600 flex items-center justify-center text-xs tracking-[0.2em]">
                  N
                </div>
                <span className="font-semibold tracking-[0.25em] text-xs uppercase">
                  NOVAIRE
                </span>
              </div>
              <nav className="hidden sm:flex gap-6 text-sm text-neutral-400">
                <a href="#" className="hover:text-neutral-100 transition">
                  Boutique
                </a>
                <a href="#" className="hover:text-neutral-100 transition">
                  À propos
                </a>
                <a href="#" className="hover:text-neutral-100 transition">
                  Contact
                </a>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-neutral-800">
            <div className="max-w-5xl mx-auto px-4 py-6 text-xs text-neutral-500 flex justify-between gap-4 flex-wrap">
              <span>© {new Date().getFullYear()} NOVAIRE. Tous droits réservés.</span>
              <span className="text-neutral-600">
                Projet portfolio — Next.js & Hygraph
              </span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
