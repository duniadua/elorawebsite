"use client";

import { useRef, useLayoutEffect } from "react";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const progressBarRef = useRef(null);

  useLayoutEffect(() => {
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: "body", // Trigger on the body scroll
          start: "top top", // Start when the top of the body hits the top of the viewport
          end: "bottom bottom", // End when the bottom of the body hits the bottom of the viewport
          scrub: true, // Link animation to scroll position
        },
      });
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          id="scroll-progress-bar"
          ref={progressBarRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "0%",
            height: "4px",
            backgroundColor: "#c96442",
            zIndex: 9999,
          }}
        ></div>
        {children}
      </body>
    </html>
  );
}
