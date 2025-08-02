"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggleButton } from "@/components/common/ThemeToggleButton";
import LanguageSwitcher from "@/components/header/LanguageSwitcher";
import { useLocale } from "@/context/LocaleContext";

const LandingHeader: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const { messages } = useLocale();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      {/* Navbar container */}
      <nav className="flex items-center justify-between px-4 py-3 lg:px-12 relative">
        {/* Mobile: Left toggle (Options) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOptionsOpen(!isOptionsOpen)}
            className="p-2 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle Options"
          >
            {isOptionsOpen ? (
              <svg width="24" height="24" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop: Left (Lang + Theme) */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggleButton />
        </div>

        {/* Center: Logo (Mobile center, Desktop right) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:translate-x-0">
          <Link href="/">
            <Image
              width={150}
              height={20}
              className="dark:hidden"
              src="/images/logo/light-theme-logo.png"
              alt="Logo"
            />
            <Image
              width={150}
              height={20}
              className="hidden dark:block"
              src="/images/logo/dark-theme-logo.png"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Mobile: Right toggle (Nav) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="p-2 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle Nav"
          >
            {isNavOpen ? (
              <svg width="24" height="24" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop: Center nav items */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 gap-6 text-gray-700 dark:text-gray-200 text-base font-medium">
          <Link href="/"> {messages["nav_home"] || "Home"}</Link>
          <Link href="/about-us"> {messages["nav_about"] || "About Us"}</Link>
          <Link href="/services">{messages["nav_services"] || "Services"}</Link>
          <Link href="/projects">{messages["nav_projects"] || "Projects"}</Link>
          <Link href="/blog">{messages["nav_blog"] || "Blog"}</Link>
          <Link href="/contact">{messages["nav_contact"] || "Call Us"}</Link>
        </div>
      </nav>
      {/* Mobile: options dropdown */}
      {isOptionsOpen && (
        <div className="lg:hidden flex items-center gap-4 px-12 pb-4">
          <LanguageSwitcher />
          <ThemeToggleButton />
        </div>
      )}
      {/* Mobile: nav items dropdown */}
      {isNavOpen && (
        <div className="lg:hidden px-12 pb-6">
          <ul className="flex flex-col gap-3 text-gray-700 dark:text-gray-200 text-base font-medium">
            <li><Link href="/" onClick={() => setIsNavOpen(false)}> {messages["nav_home"] || "Home"}</Link></li>
            <li><Link href="/about-us" onClick={() => setIsNavOpen(false)}>{messages["nav_about"] || "About Us"}</Link></li>
            <li><Link href="/services" onClick={() => setIsNavOpen(false)}>{messages["nav_services"] || "Services"}</Link></li>
            <li><Link href="/projects" onClick={() => setIsNavOpen(false)}>{messages["nav_projects"] || "Projects"}</Link></li>
            <li><Link href="/blog" onClick={() => setIsNavOpen(false)}>{messages["nav_blog"] || "Blog"}</Link></li>
            <li><Link href="/contact" onClick={() => setIsNavOpen(false)}>{messages["nav_contact"] || "Call Us"}</Link></li>
          </ul>
        </div>
      )}


    </header>
  );
};

export default LandingHeader;
