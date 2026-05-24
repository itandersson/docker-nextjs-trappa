import Footer from "components/layout/footer";

export const metadata = {
  title: "Om oss",
  description: "Läs mer om vårt team och vår vision.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 text-neutral-900 dark:text-white">
      <h1 className="text-4xl font-semibold tracking-tight">Om oss</h1>
      <p className="mt-4 max-w-2xl text-base text-neutral-600 dark:text-neutral-300">
        Vi är ett engagerat team som bygger högpresterande webbplatser och e-handelslösningar.
      </p>
      <div className="mt-10 space-y-6">
        <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
          <h2 className="text-xl font-semibold">Vår historia</h2>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            Från idé till lansering, vi hjälper dig att ta nästa steg.
          </p>
        </section>
        <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
          <h2 className="text-xl font-semibold">Vår vision</h2>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            Att skapa digitala upplevelser som känns moderna, enkla och effektiva.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
