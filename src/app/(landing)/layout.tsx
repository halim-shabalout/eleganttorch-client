"use client";

import React from "react";
import LandingHeader from "@/layout/LandingHeader";

import { useLocale } from "@/context/LocaleContext";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale } = useLocale();
  const isRtl = locale === "ar";



  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      lang={locale}
      className="min-h-screen xl:flex"
    >
      {/* Header + Content */}
      <div className={`flex-1 transition-all duration-300 ease-in-out`}>
        <LandingHeader />
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">{children}</div>
      </div>
    </div>
  );
}
