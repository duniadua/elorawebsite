"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const useCases = [
    {
      title: "First-Contact Resolution",
      description:
        "Conversational AI resolves customer issues on the first interaction by combining contextual understanding, integrated data, and intelligent workflows. This reduces wait times and frees up human agents for complex cases, leading to a smoother customer experience.",
      author: null,
      avatar: null,
      badge: "customer support",
    },
    {
      title: "Lead Qualification",
      description:
        "Conversational AI intelligently filters leads based on intent, engagement, and criteria like budget or industry. Marketers receive prioritized, high-quality leads, accelerating the sales pipeline and focusing sales teams on valuable opportunities.",
      author: null,
      avatar: null,
      badge: "sales",
    },
    {
      title: "Preference Surveys",
      description:
        "Interactive, dialogue-based surveys uncover customer interests and motivations through natural, two-way interactions. Unlike traditional questionnaires, this adaptive format keeps users engaged, capturing richer, real-time data for segmentation and personalization.",
      author: null,
      avatar: null,
      badge: "data insight",
    },
    {
      title: "Dialog Campaigns",
      description:
        "Transform campaigns into engaging conversations. Marketers can launch promotions, invitations, or educational content in a conversational format. Customers actively participate, asking questions and sharing feedback, leading to stronger engagement and memorable brand interactions.",
      author: null,
      avatar: null,
      badge: "conversation",
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Use Cases Conversation AI Agent
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {useCases.map((useCase, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col">
                    <div className="flex justify-between items-center">
                      <User className="w-8 h-8 stroke-1" />
                      {useCase.badge && (
                        <span className="bg-black text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          {useCase.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight">
                          {useCase.title}
                        </h3>
                        <p className="text-muted-foreground text-base">
                          {useCase.description}
                        </p>
                      </div>
                      {useCase.author && (
                        <p className="flex flex-row gap-2 text-sm items-center">
                          <span className="text-muted-foreground">By</span>{" "}
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={useCase.avatar} />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <span>{useCase.author}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Testimonials };
