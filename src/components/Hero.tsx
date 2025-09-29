'use client';

import { useRef, useLayoutEffect } from "react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";

gsap.registerPlugin(SplitText);

export function Hero() {
  const titleRef = useRef(null);
  const bgSvgRef = useRef(null);

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
      });

      return () => {
        split.revert(); // Clean up on unmount
      };
    }
  }, []);

  useLayoutEffect(() => {
    if (bgSvgRef.current) {
      gsap.to(bgSvgRef.current, {
        scale: 1.1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <div
        ref={bgSvgRef}
        className="absolute inset-0 z-[-1] flex items-center justify-center"
      >
        <Image
          src="/ai-svgrepo-com.svg"
          alt="AI Background"
          fill
          className="opacity-10 object-cover"
        />
      </div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 ref={titleRef} className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              We Believe AI Should Empower, Not Replace.
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Since day one, our mission has to bridge businesses with AI technology that is safe, ethical, and truly impactful. With expertise in SaaS, digital marketing, and technology integration, we have been trusted by leading brands to strengthen their digital strategies and deliver measurable results.
            </p>
          </div>
          <div className="space-x-4">
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
