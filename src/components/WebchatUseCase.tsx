
'use client';

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function WebchatUseCase() {
  return (
    <section id="use-cases" className="w-full pt-12 pb-16 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Use Cases
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Where Can Webchat AI Help You?
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our Webchat AI is versatile and can be applied across various industries and business functions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Card className="h-full pb-8">
            <CardHeader>
              <CardTitle>Customer Support</CardTitle>
              <CardDescription>
                Automate FAQs, troubleshoot common issues, and escalate complex queries to human agents seamlessly.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="h-full pb-8">
            <CardHeader>
              <CardTitle>Sales & Marketing</CardTitle>
              <CardDescription>
                Qualify leads, provide product information, and guide potential customers through the purchasing process.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="h-full pb-8">
            <CardHeader>
              <CardTitle>HR & Internal Communications</CardTitle>
              <CardDescription>
                Answer employee questions about policies, benefits, and internal processes, freeing up HR staff.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
