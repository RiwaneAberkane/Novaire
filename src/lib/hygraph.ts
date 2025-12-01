const endpoint = process.env.HYGRAPH_ENDPOINT!;
const token = process.env.HYGRAPH_TOKEN!;

export async function fetchHygraph<T>(query: string, variables?: Record<string, any>): Promise<T> {
    const res = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query, variables }),
        // Next.js 13+ caching options
        cache: "no-store",
    });

    if (!res.ok) {
        console.error("Hygraph error:", await res.text());
        throw new Error("Erreur lors de la requête Hygraph");
    }

    const json = await res.json();
    return json.data;
}
