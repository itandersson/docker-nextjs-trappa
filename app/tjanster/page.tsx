import Footer from "components/layout/footer";

export const metadata = {
  title: "Tjänster",
  description: "Lär dig mer om våra tjänster och hur vi kan hjälpa dig.",
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 text-neutral-900 dark:text-white">
      <h1 className="text-4xl font-semibold tracking-tight">Tjänster</h1>
      <p className="mt-4 max-w-2xl text-base text-neutral-600 dark:text-neutral-300">
        Vi erbjuder ett komplett utbud av tjänster för att hjälpa dig med din verksamhet.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
          <h2 className="text-xl font-semibold">Rådgivning</h2>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            Personlig rådgivning för att hitta rätt lösningar för ditt företag.
          </p>
        </section>
        <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
          <h2 className="text-xl font-semibold">Design & utveckling</h2>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            Modern webbutveckling, design och e-handelslösningar.
          </p>
        </section>
        <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
          <h2 className="text-xl font-semibold">Support</h2>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            Snabb support och hjälp när du behöver det som mest.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
