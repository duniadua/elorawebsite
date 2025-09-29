'use client';

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

import { Infinity as InfinityIcon, MessagesSquare, Zap, ZoomIn } from "lucide-react";

const feature = [
  {
    title: "Growing Demands",
    description: "Customers today expect instant, accurate information—anytime, anywhere, without breaks. With AI, your business delivers fast, consistent support 24/7.",
    icon: <ZoomIn className="size-6" />,
  },
  {
    title: "Inefficient Processes",
    description: "Repetitive tasks slow teams down. Automation boosts productivity up to 8x, allowing focus on what drives growth.",
    icon: <Zap className="size-6" />,
  },
  {
    title: "Low Engagement",
    description: "Generic messages fail to connect. AI enables personalized, context-aware interactions that keep customers engaged and loyal.",
    icon: <MessagesSquare className="size-6" />,
  },
  {
    title: "Inconsistent Quality",
    description: "Service quality often varies across teams and shifts. AI ensures accurate, consistent responses anytime, giving customers a reliable experience.",
    icon: <InfinityIcon className="size-6" />,
  },
];

const Feature15 = () => {
  const uniqueRef = useRef(null);
  const industryRef = useRef(null);
  const featureRefs = useRef<HTMLDivElement[]>([]);
  featureRefs.current = [];

  const addToFeatureRefs = (el: HTMLDivElement | null) => {
    if (el && !featureRefs.current.includes(el)) {
      featureRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    if (uniqueRef.current) {
      const splitUnique = new SplitText(uniqueRef.current, { type: "words" });
      gsap.from(splitUnique.words, {
        opacity: 0,
        y: 20,
        rotationX: 90,
        stagger: 0.05,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: uniqueRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
      return () => {
        splitUnique.revert();
      };
    }
  }, []);

  useLayoutEffect(() => {
    if (industryRef.current) {
      const splitIndustry = new SplitText(industryRef.current, { type: "words" });
      gsap.from(splitIndustry.words, {
        opacity: 0,
        y: 20,
        rotationX: 90,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: industryRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      return () => {
        splitIndustry.revert();
      };
    }
  }, []);

  useLayoutEffect(() => {
    featureRefs.current.forEach((el, index) => {
      if (index === 0 || index === 1) { // Target "Growing Demands" and "Inefficient Processes"
        gsap.fromTo(el,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%", // When the top of the element is 80% from the top of the viewport
              toggleActions: "play none none none",
            },
          }
        );
      } else if (index === 2 || index === 3) { // Target "Low Engagement" and "Inconsistent Quality"
        gsap.fromTo(el,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="py-32">
      <div className="container">
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
            <p ref={uniqueRef} className="text-sm text-muted-foreground">SOLUTION DRIVEN BY</p>
            <h2 ref={industryRef} className="text-3xl font-medium md:text-5xl">
              Turn Challenges Into Opportunities with AI-Driven Growth
            </h2>

            <p className="text-muted-foreground md:max-w-2xl">
              Businesses today face rising demands, lower engagement, and operational inefficiencies. Our AI solutions are designed to unlock performance at scale—helping teams respond faster, engage better, and achieve results up to 8x stronger than before.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-2">
          {feature.map((feature, idx) => (
            <div
              className="flex flex-col justify-between rounded-lg bg-accent p-6 md:min-h-[300px] md:p-8"
              key={idx}
              ref={addToFeatureRefs} // Add ref here
              style={feature.title === 'Growing Demands' ? { backgroundImage: 'linear-gradient(to left top, #c96442, #dc7b39, #e8962d, #edb21e, #ebd112)' } : feature.title === 'Inefficient Processes' ? { backgroundImage: 'linear-gradient(to right top, #c96442, #dc7b39, #e8962d, #edb21e, #ebd112)' } : feature.title === 'Low Engagement' ? { backgroundImage: 'linear-gradient(to left bottom, #c96442, #dc7b39, #e8962d, #edb21e, #ebd112)' } : feature.title === 'Inconsistent Quality' ? { backgroundImage: 'linear-gradient(to right bottom, #c96442, #dc7b39, #e8962d, #edb21e, #ebd112)' } : {}}
            >
              <span className="mb-6 flex size-11 items-center justify-center rounded-full bg-background">
                {feature.icon}
              </span>
              <div>
                <h3 className="text-lg font-medium md:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature15 };
