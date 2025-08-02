import AboutUsPage from "@/components/landing/AboutUs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Imaginov",
  description:
    "Solving with Imagination. Scaling with Innovation",
};

export default function Users() {
  return (
      <>
        <AboutUsPage/>
      </>
  );
}
