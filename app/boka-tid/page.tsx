import { Booking } from "components/layout/booking";
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

      {/* Hela formuläret hanteras nu interaktivt inuti Booking-komponenten */}
      <Booking />

      <Footer />
    </main>
  );
}