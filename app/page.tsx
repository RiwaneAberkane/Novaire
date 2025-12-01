export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
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

        <div className="flex flex-wrap gap-3">
          <button className="px-5 py-2.5 rounded-full text-sm font-medium bg-neutral-100 text-neutral-950 hover:bg-white transition">
            Découvrir la future boutique
          </button>
          <button className="px-5 py-2.5 rounded-full text-sm border border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-white transition">
            Voir la documentation technique
          </button>
        </div>
      </section>

      <section className="mt-16 grid gap-6 sm:grid-cols-3 text-sm">
        <div className="border border-neutral-800 rounded-2xl p-4">
          <p className="text-xs text-neutral-500 mb-2 uppercase tracking-[0.2em]">
            Stack
          </p>
          <p className="font-medium">Next.js  / Hygraph / Tailwind CSS</p>
        </div>
        <div className="border border-neutral-800 rounded-2xl p-4">
          <p className="text-xs text-neutral-500 mb-2 uppercase tracking-[0.2em]">
            Concept
          </p>
          <p className="font-medium">E-commerce headless, catalogue connecté</p>
        </div>
        <div className="border border-neutral-800 rounded-2xl p-4">
          <p className="text-xs text-neutral-500 mb-2 uppercase tracking-[0.2em]">
            Objectif
          </p>
          <p className="font-medium">
            Projet vitrine pour portfolio & post LinkedIn
          </p>
        </div>
      </section>
    </div>
  );
}
