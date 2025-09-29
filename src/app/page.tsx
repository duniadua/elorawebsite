
import NavigationMenuDemo from "@/components/NavigationMenuDemo";
import { Hero } from "@/components/Hero";

import { Feature15 } from "@/components/feature15";
import { Feature197 } from "@/components/Feature197";
import { Cta10 } from "@/components/Cta10";

import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
        <NavigationMenuDemo />
        
      </header>
      <main className="flex-1 flex flex-col items-center">
        <Hero />
        <Feature197 />
        
        <Feature15 />
        <Cta10
          heading="Interested in trying?"
          description="Contact us at hello@notifme.biz.id for more information."
          buttons={{
            primary: {
              text: "Contact Us",
              url: "mailto:hello@notifme.biz.id",
            },
          }}
        />
        
      </main>
      <Footer />
    </div>
  );
}