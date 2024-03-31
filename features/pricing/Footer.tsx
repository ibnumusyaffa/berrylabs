import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  Location,
} from "@/components/icons";
import { Logo } from "@/components/logo";

import React from "react";

export function Footer() {
  return (
    <div className="h-auto bg-gray-50 grid grid-cols-2 px-10">
      <div className=" flex flex-col px-16 py-7 space-y-5">
        <Logo></Logo>
        <div className="text-sm leading-6">
          Unlocking the power of AI precision, we revolutionize the way
          businesses operate. Our innovative solution automates repetitive
          tasks, saving valuable time and boosting productivity.{" "}
        </div>
        <div className="flex space-x-3">
          <Facebook className="size-4"></Facebook>
          <Twitter className="size-4"></Twitter>
          <Linkedin className="size-4"></Linkedin>
          <Instagram className="size-4"></Instagram>
        </div>
      </div>
      <div className="p-10 grid grid-cols-3">
        <div className="space-y-5">
          <div className="font-bold text-lg text-gray-700">Pages</div>
          <div className="space-y-5 text-sm text-gray-700">
            <div>Home</div>
            <div>Pricing</div>
            <div>Solution</div>
            <div>Demo</div>
          </div>
        </div>
        <div className="space-y-5">
          <div className="font-bold text-lg text-gray-700">Service</div>
          <div className="space-y-5 text-sm text-gray-700">
            <div>CV Screening</div>
            <div>Bank Statement</div>
            <div>Invoice Analyzer</div>
            <div>Regulatory Auditor</div>
          </div>
        </div>
        <div className="space-y-5">
          <div className="font-bold text-lg text-gray-700">Contect</div>
          <div className="space-y-5 text-sm text-gray-700">
            <div className="flex space-x-2 items-center">
              <Phone className="size-4"></Phone>
              <div>+6282126753060</div>
            </div>
            <div className="flex space-x-2 items-center">
              <Mail className="size-4"></Mail>
              <div>contact@berrytrada.com</div>
            </div>
            <div className="flex space-x-2 items-center">
              <Location className="size-4"></Location>
              <div>Bandung, Indonesia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
