import { ChevronDown } from "@/components/icons";
import { Logo } from "@/components/logo";
import { Button } from "@/components/button";
import React from "react";

function Menu({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="leading-none  rounded cursor-pointer font-medium text-gray-800">
        {children}
      </div>
      <ChevronDown className="size-4"></ChevronDown>
    </div>
  );
}

export function Navigation() {
  return (
    <div className="flex  h-20 items-center px-20 ">
      <Logo className="w-40 -mt-1" />
      <div className="flex flex-1 px-5 space-x-10 pl-16">
        <Menu>Product</Menu>
        <Menu>Solution</Menu>
        <Menu>Pricing</Menu>
      </div>
      <div className="bg-green-100">
        <Button variant="solid">Get Started</Button>
      </div>
    </div>
  );
}
