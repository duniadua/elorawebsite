'use client';
import Image from "next/image";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function WebchatKeyBenefits() {
  return (
    <section id="key-benefits" className="w-full pt-12 pb-16 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Manfaat Utama
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl w-[60%] mx-auto">
              Nilai Lebih untuk Pertumbuhan Perusahaan Anda
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Experience the power of AI to revolutionize your customer interactions and business operations.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Card className="h-full pb-8">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <Image src="/icons8-scalable-64.png" alt="Skalabel Icon" width={24} height={24} />
                <CardTitle>Skalabel</CardTitle>
              </div>
              <CardDescription>
                Solusi yang berkembang seiring dengan pertumbuhan bisnis Anda.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="h-full pb-8">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <Image src="/icons8-pattern-64.png" alt="Efisien Icon" width={24} height={24} />
                <CardTitle>Efisien</CardTitle>
              </div>
              <CardDescription>
                Kurangi beban kerja manual dan hemat biaya operasional.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="h-full pb-8">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <Image src="/icons8-lightbulb-64.png" alt="Mudah Icon" width={24} height={24} />
                <CardTitle>Mudah</CardTitle>
              </div>
              <CardDescription>
                Integrasi cepat dengan sistem dan tools yang sudah Anda gunakan.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
