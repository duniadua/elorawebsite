
"use client";

import { useRef, useLayoutEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Features() {
  const cardRefs = useRef<HTMLDivElement[]>([]);
  cardRefs.current = [];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    cardRefs.current.forEach((card) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // When the top of the card is 80% from the top of the viewport
            end: "bottom top",
            toggleActions: "play none none none", // Play animation once
          },
        }
      );
    });
  }, []);

  return (
    <section id="features" className="w-full pt-12 pb-16 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              What We Offer
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our AI-powered solutions are designed to help you achieve your business goals.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Card
            className="h-full pb-8"
            ref={addToRefs}
            onMouseEnter={(e) => gsap.to(e.currentTarget, { rotationY: 180, duration: 0.6, ease: "power2.out" })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { rotationY: 0, duration: 0.6, ease: "power2.out" })}
            style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }} // Add these styles for 3D flip
          >
            <CardHeader>
              <CardTitle>AI-Powered Automation</CardTitle>
              <CardDescription>
                Automate repetitive tasks and workflows to free up your team for more strategic work.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card
            className="h-full pb-8"
            ref={addToRefs}
            onMouseEnter={(e) => gsap.to(e.currentTarget, { rotationY: 180, duration: 0.6, ease: "power2.out" })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { rotationY: 0, duration: 0.6, ease: "power2.out" })}
            style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
          >
            <CardHeader>
              <CardTitle>Data Analysis & Insights</CardTitle>
              <CardDescription>
                Gain valuable insights from your data to make better business decisions.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card
            className="h-full pb-8"
            ref={addToRefs}
            onMouseEnter={(e) => gsap.to(e.currentTarget, { rotationY: 180, duration: 0.6, ease: "power2.out" })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { rotationY: 0, duration: 0.6, ease: "power2.out" })}
            style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
          >
            <CardHeader>
              <CardTitle>Personalized Customer Experiences</CardTitle>
              <CardDescription>
                Deliver personalized experiences to your customers to increase engagement and loyalty.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
