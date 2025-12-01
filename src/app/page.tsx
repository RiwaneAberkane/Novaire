import { fetchHygraph } from "@/lib/hygraph";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  shortDescription?: string;
  image?: {
    url: string;
  };
};

async function getProducts(): Promise<Product[]> {
  const query = `
    {
      products(orderBy: createdAt_DESC, first: 8) {
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
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
      <section className="space-y-8">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          NOVAIRE / E-commerce concept
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          L&apos;élégance essentielle,
          <span className="block text-neutral-400">
            pensée pour le digital.
          </span>
        </h1>

        <p className="max-w-xl text-neutral-400 text-sm sm:text-base">
          NOVAIRE est une marque fictive conçue pour démontrer un e-commerce
          moderne basé sur un headless CMS. Développé avec Next.js, Hygraph et
          un design minimaliste, ce projet met l&apos;accent sur la performance,
          la structure technique et l&apos;expérience utilisateur.
        </p>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold">Produits en avant</h2>
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            {products.length} articles
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="border border-neutral-800 rounded-2xl overflow-hidden flex flex-col group hover:border-neutral-600 transition"
            >
              {product.image && (
                <div className="aspect-[4/5] overflow-hidden bg-neutral-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image.url}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="p-4 space-y-2 flex-1 flex flex-col">
                <h3 className="text-sm font-medium">{product.name}</h3>
                {product.shortDescription && (
                  <p className="text-xs text-neutral-500 line-clamp-2">
                    {product.shortDescription}
                  </p>
                )}
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="font-semibold">{product.price.toFixed(2)} €</span>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-xs uppercase tracking-[0.15em] border border-neutral-700 rounded-full px-3 py-1 hover:border-neutral-400 hover:text-neutral-50 transition"
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
