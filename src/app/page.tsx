import Link from "next/link";
import { fetchHygraph } from "@/lib/hygraph";

type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  shortDescription?: string | null;
  image?: { url: string } | null;
};

async function getProducts(): Promise<Product[]> {
  const query = `
    {
      products(orderBy: createdAt_DESC, first: 6) {
        id
        name
        slug
        price
        shortDescription
        image {
          url
        }
      }
    }
  `;
  const data = await fetchHygraph<{ products: Product[] }>(query);
  return data.products;
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="grid gap-10 md:grid-cols-[1.3fr,0.9fr] items-center">
        <div className="space-y-6">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
            NOVAIRE / marque concept
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
            L&apos;essentiel,
            <span className="block text-slate-500 dark:text-slate-300">
              pensé pour le quotidien digital.
            </span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            NOVAIRE est une marque fictive conçue pour démontrer un e-commerce
            moderne en architecture headless. Produits gérés dans Hygraph, pages
            dynamiques avec Next.js, et un design pensé pour un portfolio 100% ready.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/products"
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-slate-900 text-white shadow-sm hover:bg-black transition dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white"
            >
              Découvrir la boutique
            </Link>
            <a
              href="#about"
              className="px-5 py-2.5 rounded-full text-sm border border-slate-200 text-slate-600 bg-white/80 hover:border-slate-900 hover:text-slate-900 transition dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-slate-300 dark:hover:text-white"
            >
              Comprendre le projet
            </a>
          </div>
        </div>

        {/* Carte projet technique */}
        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900/80">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">
              Projet portfolio
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Démo professionnelle : Next.js (App Router), TypeScript, Tailwind,
              Hygraph pour le catalogue, pages dynamiques par slug et architecture
              prête pour un panier global et un futur checkout.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 dark:border-slate-700 dark:bg-slate-900/80">
              <p className="mb-1 text-[0.65rem] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                Stack
              </p>
              <p className="font-medium text-slate-800 dark:text-slate-100">
                Next.js · TypeScript · Tailwind
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 dark:border-slate-700 dark:bg-slate-900/80">
              <p className="mb-1 text-[0.65rem] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                CMS
              </p>
              <p className="font-medium text-slate-800 dark:text-slate-100">
                Hygraph (headless)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A PROPOS */}
      <section
        id="about"
        className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-8 md:px-8 md:py-9 space-y-6 dark:border-slate-700 dark:bg-slate-900/80"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
              À propos
            </p>
            <h2 className="mt-1 text-xl md:text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
              NOVAIRE, une marque fictive traitée comme une vraie.
            </h2>
          </div>
          <p className="max-w-sm text-xs text-slate-500 dark:text-slate-300">
            Idéal à mentionner sur ton post LinkedIn : conception de la marque,
            direction artistique, structure technique et mise en avant d&apos;un
            flux produits connecté.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 text-sm text-slate-600 dark:text-slate-300">
          <div className="space-y-2">
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
              Vision
            </p>
            <p>
              Peu de produits, mais bien présentés. Une expérience claire, focus
              sur l&apos;essentiel et le confort utilisateur.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
              UX & UI
            </p>
            <p>
              Palette claire, cartes arrondies, glow subtil et hiérarchie
              typographique pensée pour un look 2025 minimaliste.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
              Technique
            </p>
            <p>
              Données Hygraph, routes dédiées à la boutique, pages dynamiques
              par slug et base prête pour intégrer un panier et un checkout.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUITS EN AVANT */}
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-slate-50">
            Produits en avant
          </h2>
          <Link
            href="/products"
            className="text-xs uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition dark:text-slate-500 dark:hover:text-slate-100"
          >
            Voir tous les produits
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-sm hover:-translate-y-1 hover:border-slate-900 hover:shadow-lg transition dark:border-slate-700 dark:bg-slate-900/80 dark:hover:border-slate-300"
            >
              {product.image && (
                <div className="aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image.url}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-slate-900 dark:text-slate-50">
                  {product.name}
                </h3>
                {product.shortDescription && (
                  <p className="text-xs text-slate-500 line-clamp-2 dark:text-slate-300">
                    {product.shortDescription}
                  </p>
                )}
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-900 dark:text-slate-50">
                    {product.price.toFixed(2)} €
                  </span>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-[0.7rem] uppercase tracking-[0.16em] rounded-full border border-slate-300 px-3 py-1 text-slate-700 hover:border-slate-900 hover:text-slate-900 transition dark:border-slate-600 dark:text-slate-200 dark:hover:border-slate-200 dark:hover:text-slate-50"
                  >
                    Voir
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
