import { fetchHygraph } from "@/lib/hygraph";

async function getProducts() {
    const query = `
    {
      products(orderBy: createdAt_DESC) {
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
    const data = await fetchHygraph<{ products: any[] }>(query);
    return data.products;
}

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-12">
            <h1 className="text-3xl font-semibold tracking-tight">Tous les produits</h1>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {products.map((p) => (
                    <a
                        key={p.id}
                        href={`/products/${p.slug}`}
                        className="border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition group"
                    >
                        <div className="aspect-[4/5] bg-neutral-900 overflow-hidden">
                            <img
                                src={p.image?.url}
                                alt={p.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                            />
                        </div>

                        <div className="p-4 space-y-1">
                            <h2 className="text-sm font-medium">{p.name}</h2>
                            <p className="text-xs text-neutral-500 line-clamp-2">
                                {p.shortDescription}
                            </p>
                            <p className="text-sm font-semibold mt-2">{p.price} €</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
