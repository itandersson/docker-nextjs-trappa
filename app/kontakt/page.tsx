import Footer from "components/layout/footer";

export const metadata = {
  title: "Kontakt",
  description: "Kontakta oss för frågor eller offertförfrågningar.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 text-neutral-900 dark:text-white">
      <h1 className="text-4xl font-semibold tracking-tight">Kontakt</h1>
      <p className="mt-4 max-w-2xl text-base text-neutral-600 dark:text-neutral-300">
        Vi finns här för att svara på frågor och hjälpa dig vidare.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
          <h2 className="text-xl font-semibold">Telefon</h2>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">076-8482577</p>
        </section>
        <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
          <h2 className="text-xl font-semibold">E-post</h2>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">info@example.com</p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
