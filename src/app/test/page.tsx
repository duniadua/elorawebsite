import NavigationMenuDemo from "@/components/NavigationMenuDemo";
import TestHero from "@/components/TestHero";
import { Footer } from "@/components/Footer";

export default function TestPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
        <NavigationMenuDemo />
      </header>
      <main className="flex-1 flex flex-col items-center">
        <TestHero />
      </main>
      <Footer />
    </div>
  );
}
