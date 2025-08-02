import type { Metadata } from "next";
import Home from "@/components/landing/Home";

import React from "react";


export const metadata: Metadata = {
  title: "Imaginov",
  description:
    "Solving with Imagination. Scaling with Innovation",
};

export default function landing() {
  return (
    <Home/>
  );
}
