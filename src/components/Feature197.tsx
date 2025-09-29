"use client";

import { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface Feature197Props {
  features?: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
  {
    id: 1,
    title: "Context-Aware Conversations",
    image: "/technology.png",
    description:
      "AI that understands intent and provides accurate, human-like responses.",
  },
  {
    id: 2,
    title: "Data-Driven Insights",
    image: "/monitor.png",
    description:
      "Real-time analytics to track customer interactions, optimize engagement, and increase ROI.",
  },
  {
    id: 3,
    title: "Scalable Automation",
    image: "/analysis.png",
    description:
      "Reduce operational costs by automating repetitive tasks, while freeing your team to focus on growth.",
  },
  {
    id: 4,
    title: "CRM & Tools Integration",
    image: "/pentagon.png",
    description:
      "Connect seamlessly with your existing CRM and third-party tools to centralize data, automate workflows, and unlock a single customer view for smarter decision-making."
  }
];

const Feature197 = ({ features = defaultFeatures }: Feature197Props) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeImage, setActiveImage] = useState(features[0].image);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    if (titleRef.current) {
      const split = new SplitText(titleRef.current, { type: "words" });

      gsap.from(split.words, {
        opacity: 0,
        y: 20,
        rotationX: 90,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%", // When the top of the title hits 80% of the viewport
          toggleActions: "play none none none", // Play animation once
        },
      });

      return () => {
        split.revert(); // Clean up on unmount
      };
    }
  }, []);

  return (
    <section className="py-29">
      <div className="container mx-auto px-4 md:px-6">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-center mb-8 w-3/5 mx-auto">
          Turn Complex Customer Interactions Into Seamless AI-Powered Experiences.
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-12">
          Managing customer conversations across multiple channels is time-consuming, expensive, and often inconsistent. Traditional chatbots fail to understand context, leaving customers frustrated and businesses losing opportunities.
        </p>
        <div className="mb-12 flex w-full items-start justify-between gap-12">
          <div className="w-full md:w-1/2">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {features.map((tab) => (
                <AccordionItem key={tab.id} value={`item-${tab.id}`}>
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.image);
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer py-5 no-underline! transition"
                  >
                    <h6
                      className={`text-xl font-semibold ${tab.id === activeTabId ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      {tab.title}
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-3 text-muted-foreground">
                      {tab.description}
                    </p>
                    <div className="mt-4 md:hidden bg-white rounded-xl">
                      <Image
                        src={tab.image}
                        alt={tab.title}
                        width={500}
                        height={500}
                        className="h-full max-h-80 w-full rounded-md object-contain"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative m-auto hidden w-1/2 overflow-hidden rounded-xl bg-muted md:block">
            <Image
              src={activeImage}
              alt="Feature preview"
              width={500}
              height={500}
              className="aspect-4/3 rounded-md object-contain pl-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature197 };