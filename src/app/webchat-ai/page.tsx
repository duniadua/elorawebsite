
import { WebchatKeyBenefits } from "@/components/WebchatKeyBenefits";
import { WebchatUseCase } from "@/components/WebchatUseCase";
import { Footer } from "@/components/Footer";
import NavigationMenuDemo from "@/components/NavigationMenuDemo";
import { PlaceholdersAndVanishInputDemo } from "@/components/ui/placeholders-and-vanish-input-demo";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";



export default function WebchatAIPage() {
  const words = [
    {
      text: "Siap",
    },
    {
      text: "Tingkatkan",
    },
    {
      text: "Layanan",
    },
    {
      text: "dan",
    },
    {
      text: "Produktifitas?",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
        <NavigationMenuDemo />
      </header>
      <main className="flex-1 flex flex-col items-center">
        <PlaceholdersAndVanishInputDemo />
        <WebchatKeyBenefits />
        <WebchatUseCase />
        <div className="flex flex-col items-center justify-center h-[40rem] bg-transparent">
      <p className="text-neutral-800 text-xs sm:text-base  ">
        Mulai gunakan chatbot pintar kami dan lihat bagaimana bisnis Anda bergerak lebih efisien.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
          hubungi hello@notifme.biz.id
        </button>
      </div>
    </div>
      </main>
      <Footer />
    </div>
  );
}
