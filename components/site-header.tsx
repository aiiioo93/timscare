"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 md:h-24 md:px-8">
          {/* Logo */}
          <Link href="/" className="relative block h-12 w-32 md:h-16 md:w-40">
            <Image
              src="/brand/logo-main.jpeg"
              alt="Timscare Institut"
              fill
              priority
              className="object-contain"
            />
          </Link>

          {/* Navigation ordinateur */}
          <nav className="hidden items-center gap-8 text-sm font-medium text-timscare-brown lg:flex">
            <Link href="/" className="transition-opacity hover:opacity-60">
              Accueil
            </Link>

            <Link
              href="#prestations"
              className="transition-opacity hover:opacity-60"
            >
              Prestations
            </Link>

            <Link
              href="#timscare"
              className="transition-opacity hover:opacity-60"
            >
              Timscare
            </Link>

            <Link
              href="#contact"
              className="transition-opacity hover:opacity-60"
            >
              Contact
            </Link>
          </nav>

          {/* CTA ordinateur */}
          <Link
            href="#prestations"
            className="
              hidden rounded-full bg-timscare-terracotta
              px-5 py-3 text-sm font-medium text-timscare-cream
              transition hover:opacity-90
              lg:inline-flex
            "
          >
            Prendre rendez-vous
          </Link>

          {/* Burger smartphone + tablette */}
          <button
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="
              flex h-12 w-12 items-center justify-center
              rounded-full border border-timscare-brown/15
              bg-timscare-cream/80 backdrop-blur-sm
              lg:hidden
            "
          >
            <span className="flex w-5 flex-col gap-[5px]">
              <span className="h-[1.5px] w-full bg-timscare-brown" />
              <span className="h-[1.5px] w-full bg-timscare-brown" />
              <span className="h-[1.5px] w-full bg-timscare-brown" />
            </span>
          </button>
        </div>
      </header>

      {/* Fond derrière le menu */}
      <button
        type="button"
        aria-label="Fermer le menu"
        onClick={closeMenu}
        className={`menuOpen
  ? "translate-x-0"
  : "-translate-x-full"
          fixed inset-0 z-[80] bg-black/35
          transition-opacity duration-500
          lg:hidden
          ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* Menu latéral */}
      <aside
        className={`
            fixed bottom-0 right-0 top-0 z-[90]
            flex w-[86%] max-w-[390px] flex-col
            bg-timscare-brown px-7 py-6
            text-timscare-cream
            shadow-2xl
            transition-transform duration-500 ease-out
            lg:hidden
            ${
            menuOpen
                ? "translate-x-0"
                : "translate-x-full"
          }
        `}
      >
        {/* Haut du menu */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-medium tracking-[0.16em]">
              TIMSCARE
            </p>

            <p className="mt-1 text-[9px] uppercase tracking-[0.4em] text-timscare-beige/70">
              Institut
            </p>
          </div>

          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={closeMenu}
            className="
              relative flex h-11 w-11 items-center justify-center
              rounded-full border border-timscare-cream/20
            "
          >
            <span className="absolute h-px w-5 rotate-45 bg-timscare-cream" />
            <span className="absolute h-px w-5 -rotate-45 bg-timscare-cream" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-16 flex flex-col">
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-5 border-b border-timscare-cream/15 py-5"
          >
            <span className="text-[10px] text-timscare-beige/50">
              01
            </span>

            <span className="text-3xl font-medium">
              Accueil
            </span>
          </Link>

          <Link
            href="#prestations"
            onClick={closeMenu}
            className="group flex items-center gap-5 border-b border-timscare-cream/15 py-5"
          >
            <span className="text-[10px] text-timscare-beige/50">
              02
            </span>

            <span className="text-3xl font-medium">
              Prestations
            </span>
          </Link>

          <Link
            href="#timscare"
            onClick={closeMenu}
            className="group flex items-center gap-5 border-b border-timscare-cream/15 py-5"
          >
            <span className="text-[10px] text-timscare-beige/50">
              03
            </span>

            <span className="text-3xl font-medium">
              Timscare
            </span>
          </Link>

          <Link
            href="#contact"
            onClick={closeMenu}
            className="group flex items-center gap-5 border-b border-timscare-cream/15 py-5"
          >
            <span className="text-[10px] text-timscare-beige/50">
              04
            </span>

            <span className="text-3xl font-medium">
              Contact
            </span>
          </Link>
        </nav>

        {/* Bas du menu */}
        <div className="mt-auto">
          <Link
            href="#prestations"
            onClick={closeMenu}
            className="
              flex min-h-14 w-full items-center justify-center
              rounded-full bg-timscare-terracotta
              px-6 text-sm font-medium text-timscare-cream
            "
          >
            Prendre rendez-vous
          </Link>

          <p className="mt-6 text-center text-[10px] uppercase tracking-[0.25em] text-timscare-beige/50">
            Timscare Institut · Bagnolet
          </p>
        </div>
      </aside>
    </>
  );
}