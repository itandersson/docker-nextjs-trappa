import ContactForm from "components/contact-form";
import Footer from "components/layout/footer";

export const metadata = {
  title: "Om oss",
  description: "Läs mer om vårt team och vår vision.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 text-neutral-900 dark:text-white">
      <h1 className="text-4xl font-semibold tracking-tight mb-10">Om oss</h1>

<p>Vi är ett nystartat, lokalt enmansföretag som specialiserar sig 
  på <b>professionell och noggrann trappstädning</b> för fastighetsbolag 
  och bostadsrättsföreningar. Med fokus på kvalitet, trygghet och pålitlighet 
  ser vi till att trapphus och gemensamma utrymmen alltid är rena, välkomnande 
  och trivsamma.
</p>
<br />
<br />
<br />


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Vänster kolumn */}
        <div className="space-y-8">
          <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
            <h2 className="text-xl font-semibold">Vår historia</h2>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
              Verksamheten startade med en enkel idé: att erbjuda fastighetsägare
              en <b>stabil och personlig städtjänst</b> där varje uppdrag utförs med omsorg.
              Steg för steg bygger vi upp ett företag där hantverket, noggrannheten
              och kundkontakten står i centrum.
            </p>
          </section>

          <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
            <h2 className="text-xl font-semibold">Vår vision</h2>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
              Vi vill göra det <b>enkelt och smidigt</b> för våra kunder att boka
              och hantera trappstädning. Därför satsar vi på moderna digitala
              lösningar via webben och telefon, så att du snabbt kan få den hjälp
              du behöver — utan krångel.
            </p>
          </section>
        </div>

        {/* Höger kolumn – Kontaktformulär med kontrastbakgrund */}
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
          <ContactForm />
        </div>
      </div>

      <Footer />
    </main>
  );
}
