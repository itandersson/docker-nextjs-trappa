"use client";

import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";
import { Textarea } from "components/ui/textarea";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Något gick fel");

      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section>
  <h2 className="text-2xl font-semibold">Kontakta oss</h2>
  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
    Fyll i formuläret så återkommer vi så snart som möjligt.
  </p>

  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
    <div className="space-y-2">
      <Label htmlFor="name">Namn</Label>
      <Input id="name" name="name" placeholder="Ditt namn" required />
    </div>

    <div className="space-y-2">
      <Label htmlFor="email">E-post</Label>
      <Input id="email" name="email" type="email" placeholder="namn@exempel.se" required />
    </div>

    <div className="space-y-2">
      <Label htmlFor="telefon">Telefon</Label>
      <Input id="telefon" name="telefon" placeholder="Ditt telefonnummer" />
    </div>

    <div className="space-y-2">
      <Label htmlFor="message">Meddelande</Label>
      <Textarea
        id="message"
        name="message"
        placeholder="Meddelande"
        rows={8}
        required
      />
    </div>

    <Button type="submit" disabled={status === "loading"} className="w-full">
      {status === "loading" ? "Skickar..." : "Skicka förfrågan"}
    </Button>

    {status === "success" && (
      <p className="text-sm text-green-600 dark:text-green-400">
        Tack! Vi hör av oss inom kort.
      </p>
    )}
    {status === "error" && (
      <p className="text-sm text-red-600 dark:text-red-400">
        Något gick fel. Försök igen eller maila oss direkt.
      </p>
    )}
  </form>
</section>

  );
}