'use client'
import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Footer } from "@/components/Footer";
import NavigationMenuDemo from "@/components/NavigationMenuDemo";
import { LogoCarouselDemo } from "@/components/ui/logo-carousel-demo";

import { Testimonials } from "@/components/ui/testimonials";

export default function ConversationAiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
        <NavigationMenuDemo />
      </header>
      <AuroraBackground className="h-screen">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center">
            Conversational AI that Understands Intent and Drives Action
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-center mt-4">
            Manage consistent, secure, and scalable dialogues across channels with seamless handover to your team.
          </p>
        </div>
      </AuroraBackground>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr] lg:gap-12 xl:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">AI Agent That Truly Understands Your Customers</h2>
            </div>
            <div className="flex items-center">
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Transform the way you connect with your audience through intelligent, human-like conversations. Our Conversational AI is designed to not only answer questions but also embody your brand’s personality, adapt to your workflows, and speak the language of your customers—wherever they are. With cutting-edge features, it empowers businesses to build stronger relationships and deliver memorable interactions at scale.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Agent Features</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 justify-items-center mx-auto">
            <div className="flex flex-col gap-2 p-6 bg-white rounded-lg shadow-md dark:bg-gray-950">
              <Image src="https://img.icons8.com/ios/100/000000/voice-recognition-scan.png" alt="Icon" width={32} height={32} className="w-8 h-8 mb-6" />
              <h3 className="text-xl font-bold text-left">Custom Voice</h3>
              <p className="text-left text-gray-500 dark:text-gray-400">
                Give your AI agent a distinctive voice that mirrors your brand identity. From warm and approachable to professional and authoritative, the customized voice ensures every conversation feels personal and engaging.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-6 bg-white rounded-lg shadow-md dark:bg-gray-950">
              <Image src="https://img.icons8.com/ios/100/000000/artificial-intelligence.png" alt="Icon" width={32} height={32} className="w-8 h-8 mb-6" />
              <h3 className="text-xl font-bold text-left">Contextual Knowledge</h3>
              <p className="text-left text-gray-500 dark:text-gray-400">
                Go beyond generic answers. With a dynamic knowledge base, your agent responds with accuracy, context, and personality. Every interaction aligns with your defined persona, making your brand voice consistent and trustworthy.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-6 bg-white rounded-lg shadow-md dark:bg-gray-950">
              <Image src="https://img.icons8.com/ios/100/1A1A1A/omnichannel.png" alt="Icon" width={32} height={32} className="w-8 h-8 mb-6" />
              <h3 className="text-xl font-bold text-left">Seamless Integration</h3>
              <p className="text-left text-gray-500 dark:text-gray-400">
                 Easily plug into your existing ecosystem—whether it’s your website, CRM, or database. Our Conversational AI integrates smoothly, enhancing your operations without disrupting your current workflows.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-6 bg-white rounded-lg shadow-md dark:bg-gray-950">
              <Image src="https://img.icons8.com/external-goofy-line-kerismaker/100/1A1A1A/external-language-education-goofy-line-kerismaker.png" alt="Icon" width={32} height={32} className="w-8 h-8 mb-6" />
              <h3 className="text-xl font-bold text-left">Multilingual Support</h3>
              <p className="text-left text-gray-500 dark:text-gray-400">
                Speak the language of your customers—literally. With multilingual capabilities, your agent breaks down barriers and delivers inclusive, localized experiences that connect with audiences worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <LogoCarouselDemo />
      <Footer />
    </div>
  );
}