import Footer from "components/layout/footer";

export const metadata = {
  title: "Boka tid",
  description: "Boka en tid för rådgivning eller möte med oss.",
};

export default function BookingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 text-neutral-900 dark:text-white">
      <h1 className="text-4xl font-semibold tracking-tight">Boka tid</h1>
      <p className="mt-4 max-w-2xl text-base text-neutral-600 dark:text-neutral-300">
        Välj en tid som passar dig så återkommer vi med bekräftelse.
      </p>
      <div className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-xl font-semibold">Kontaktinformation</h2>
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
          Mejla oss eller ring för att boka tid: <strong>076-8482577</strong>.
        </p>
      </div>
      <Footer />
    </main>
  );
}
