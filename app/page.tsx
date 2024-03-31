import { CheckCircle } from "@/components/icons";
import { Button } from "@/components/button";
import React from "react";
import { Navigation } from "@/features/pricing/Navigation";
import { Footer } from "@/features/pricing/Footer";
import { PricingCard } from "@/features/pricing/PricingCard";

export default function Page() {
  const plans = [
    {
      name: "Free",
      isBestSeller: false,
      description: "Suitable for Starter",
      price: "IDR 0",
      features: [
        "100 files",
        "100",
        "Up to 25 files",
        "2 pages per File",
        "4MB",
        <CheckCircle key="1" className="w-5 h-5 text-green-500"></CheckCircle>,
        <CheckCircle key="2" className="w-5 h-5 text-green-500"></CheckCircle>,
        <CheckCircle key="3" className="w-5 h-5 text-green-500"></CheckCircle>,
        <Button key="4" variant="solid">
          Get Started
        </Button>,
      ],
    },
    {
      name: "Basic",
      isBestSeller: false,
      description: "Suitable for Generalist",
      price: "IDR 299,000",
      features: [
        "250 files",
        "100",
        "Up to 50 files",
        "5 pages per File",
        "4MB",
        <CheckCircle key="1" className="w-5 h-5 text-green-500"></CheckCircle>,
        <CheckCircle key="2" className="w-5 h-5 text-green-500"></CheckCircle>,
        <CheckCircle key="3" className="w-5 h-5 text-green-500"></CheckCircle>,
        <Button key="4" variant="default">
          Select
        </Button>,
      ],
    },
    {
      name: "Pro",
      isBestSeller: true,
      description: "Suitable for Specialist",
      price: "IDR 590,000",
      features: [
        "500 files",
        "100",
        "Up to 100 files",
        "10 pages per File",
        "4MB",
        <CheckCircle key="1" className="w-5 h-5 text-green-500"></CheckCircle>,
        <CheckCircle key="2" className="w-5 h-5 text-green-500"></CheckCircle>,
        <CheckCircle key="3" className="w-5 h-5 text-green-500"></CheckCircle>,
        <Button key="4" variant="default">
          Select
        </Button>,
      ],
    },
    {
      name: "Premium",
      isBestSeller: false,
      description: "Suitable for Aggresive Specialist",
      price: "IDR 999,000",
      features: [
        "1000 files",
        "100",
        "Up to 150 files",
        "15 pages per File",
        "16MB",
        <CheckCircle key="1" className="w-5 h-5 text-green-500"></CheckCircle>,
        <CheckCircle key="2" className="w-5 h-5 text-green-500"></CheckCircle>,
        <CheckCircle key="3" className="w-5 h-5 text-green-500"></CheckCircle>,
        <Button key="4" variant="default">
          Select
        </Button>,
      ],
    },
  ];

  const features = [
    "Files Included",
    "Free Generations",
    "Files per Upload",
    "Pages per File",
    "File size limit",
    "High-accuracy responses",
    "Mobile-friendly interface",
    "Priority support",
  ];
  return (
    <main>
      <Navigation />
      <div className="py-20">
        <div className="text-center space-y-5  w-full">
          <div className="font-bold text-gray-800 text-3xl">
            Berrylabs Pricing
          </div>
          <div className="text-gray-700">
            Automate Without Breaking the Bank: Affordable Solutions <br></br>{" "}
            for Every Business.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 px-20">
        <div className="grid grid-rows-[150px_80px_50px_50px_50px_50px_50px_50px_50px]">
          <div className="flex items-end text-sm font-bold">Core Features</div>
          {features.map((item) => {
            return (
              <div
                key={item}
                className="flex text-sm text-gray-700 items-center "
              >
                {item}
              </div>
            );
          })}
        </div>
        {plans.map((item, index) => {
          return (
            <PricingCard
              gray={index % 2 === 0}
              key={item.name}
              data={item}
            ></PricingCard>
          );
        })}
      </div>

      <div className="py-28 flex flex-col items-center justify-center text-center space-y-8">
        <div className="font-bold text-gray-800 text-5xl">
          Haven&apos;t found which package is <br></br>right for you?
        </div>
        <div className="text-gray-700">
          We&apos;ve got you covered! Talk to our experts to find the best
          solution for you, anytime for free!
        </div>
        <div className="w-40 flex items-center bg-red-50">
          <Button variant="solid">Talk To Expert</Button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
