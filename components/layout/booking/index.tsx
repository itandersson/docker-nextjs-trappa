"use client";

import { useState } from "react";

export function Booking() {
  const [selectedDay, setSelectedDay] = useState<number>(15);
  const [selectedTime, setSelectedTime] = useState<string>("10:00");
  const [message, setMessage] = useState<string>("");

  const weekDays = ["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"];
  const emptyDays = Array.from({ length: 3 }); // Oktober 2026 börjar på en torsdag
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  // Genererar tider mellan 07:00 och 16:00
  const timeSlots = [
    "07:00", "08:00", "09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00", "16:00"
  ];

  const formattedDate = `2026-10-${String(selectedDay).padStart(2, "0")}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Bokningsförfrågan skickad för ${formattedDate} kl. ${selectedTime}\nMeddelande: ${message}`);
  };

  return (
    <div className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Datumväljare */}
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-neutral-500">
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
            </svg>
            Välj datum
          </label>
          <div className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
            <div className="flex items-center justify-between pb-4">
              <button type="button" className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 flex items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <div className="text-sm font-medium">Oktober 2026</div>
              <button type="button" className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 flex items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-neutral-500 dark:text-neutral-400 pb-2">
              {weekDays.map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-sm">
              {emptyDays.map((_, index) => (
                <div key={`empty-${index}`} />
              ))}
              {days.map((day) => {
                const isSelected = day === selectedDay;
                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={`h-9 w-9 rounded-md flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 dark:focus:ring-neutral-300 ${
                      isSelected
                        ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold"
                        : "hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tidsväljare */}
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-neutral-500">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Välj tid
          </label>
          <div className="grid grid-cols-4 gap-2">
            {timeSlots.map((time) => {
              const isSelected = time === selectedTime;
              return (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`py-2 text-sm rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 dark:focus:ring-neutral-300 ${
                    isSelected
                      ? "bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900 dark:border-white font-semibold"
                      : "border-neutral-200 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                  }`}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>

        {/* Textarea-sektion */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium leading-none">
            Meddelande eller önskemål
          </label>
          <textarea
            id="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Skriv gärna vad mötet ska handla om..."
            className="flex min-h-[80px] w-full rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300"
          />
        </div>

        {/* Submit-knapp */}
        <button
          type="submit"
          className="w-full rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 transition-colors"
        >
          Boka den {formattedDate} kl. {selectedTime}
        </button>
      </form>
    </div>
  );
}