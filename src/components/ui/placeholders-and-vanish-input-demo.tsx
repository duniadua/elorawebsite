"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Skalabel – Tumbuh seiring perkembangan bisnis Anda.",
    "Efisien – Hemat waktu dan biaya dengan otomatisasi cerdas.",
    "Mudah Digunakan – Integrasi cepat tanpa kerumitan teknis.",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="relative flex h-[40rem] flex-col justify-center items-center px-4">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 absolute",
        )}
      />
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black w-[60%] mx-auto z-10">
        AI Chatbot untuk Perusahaan yang Siap Tumbuh Lebih Cepat
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}