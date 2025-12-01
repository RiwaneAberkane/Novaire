import { fetchHygraph } from "@/lib/hygraph";
import { notFound } from "next/navigation";

type Product = {
    id: string;
    name: string;
    slug: string;
    price: number;
    shortDescription?: string | null;
    image?: {
        url: string;
    } | null;
};

// ✅ On récupère tous les produits (comme sur la home) puis on filtre en JS
async function getProduct(slug: string): Promise<Product | null> {
    const query = `
    {
      products {
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

    try {
        const data = await fetchHygraph<{ products: Product[] }>(query);

        const product = data.products.find((p) => p.slug === slug);

        if (!product) {
            console.warn("Aucun produit trouvé pour le slug :", slug);
            return null;
        }

        return product;
    } catch (error) {
        console.error("Erreur Hygraph dans getProduct :", error);
        return null;
    }
}

// 💡 Note le type : params est un Promise maintenant
type PageProps = {
    params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: PageProps) {
    // ✅ On "unwrap" le Promise pour récupérer le vrai slug
    const { slug } = await params;

    const product = await getProduct(slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-10">
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-neutral-500">
                <a href="/" className="hover:text-neutral-300 transition">
                    ← Accueil
                </a>
                <span className="text-neutral-700">/</span>
                <a href="/products" className="hover:text-neutral-300 transition">
                    Boutique
                </a>
            </div>

            <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] items-start">
                {/* Image produit */}
                <div className="border border-neutral-800 rounded-3xl overflow-hidden bg-neutral-900">
                    <div className="aspect-[4/5]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={product.image?.url || ""}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Infos produit */}
                <div className="space-y-6">
                    <div className="space-y-3">
                        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                            NOVAIRE / Produit
                        </p>
                        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                            {product.name}
                        </h1>
                        {product.shortDescription && (
                            <p className="text-sm text-neutral-400 max-w-md">
                                {product.shortDescription}
                            </p>
                        )}
                    </div>

                    <div className="flex items-baseline gap-3">
                        <span className="text-2xl font-semibold">
                            {product.price.toFixed(2)} €
                        </span>
                        <span className="text-xs text-neutral-500 uppercase tracking-[0.2em]">
                            TTC
                        </span>
                    </div>

                    <div className="space-y-3">
                        <button className="w-full md:w-auto px-6 py-3 rounded-full bg-neutral-100 text-neutral-950 text-sm font-medium hover:bg-white transition">
                            Ajouter au panier
                        </button>
                        <p className="text-xs text-neutral-500">
                            (Bouton non connecté pour le moment — démo portfolio)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
