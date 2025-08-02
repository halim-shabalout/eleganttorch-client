"use client";
import React from "react";
import { useLocale } from "@/context/LocaleContext";

export default function Home () {
  const { messages } = useLocale();
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          {messages["nav_home"] || "Home"}
    </div>
  );
};
