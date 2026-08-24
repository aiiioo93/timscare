"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  {
    number: "01",
    label: "Accueil",
    href: "/",
  },
  {
    number: "02",
    label: "Prestations",
    href: "/prestations",
  },
  {
    number: "03",
    label: "Timscare",
    href: "/timscare",
  },
  {
    number: "04",
    label: "Contact",
    href: "/contact",
  },
];

export function SiteHeader() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      {/* =====================================================
          HEADER NORMAL
          ===================================================== */}

      <header className="absolute inset-x-0 top-0 z-50">
        <div
          className="
            mx-auto flex h-20 max-w-7xl
            items-center justify-between
            px-5

            sm:px-6

            md:h-24
            md:px-8
          "
        >
          {/* =================================================
              LOGO
              ================================================= */}

          <Link
            href="/"
            aria-label="Accueil Timscare Institut"
            className="relative z-10 flex items-center"
          >
            {/* MOBILE */}
            <div
              className="
                relative h-32 w-32
                translate-y-[14%]

                md:hidden
              "
            >
              <Image
                src="/brand/logo-mobile.png"
                alt="Timscare Institut"
                fill
                priority
                sizes="128px"
                className="object-contain"
              />
            </div>

            {/* TABLETTE */}
            <div
              className="
                relative hidden h-20 w-56

                md:block
                lg:hidden
              "
            >
              <Image
                src="/brand/logo.png"
                alt="Timscare Institut"
                fill
                priority
                sizes="224px"
                className="object-contain object-left"
              />
            </div>

            {/* DESKTOP */}
            <div
              className="
                relative hidden h-20 w-40
                origin-left scale-[3]

                lg:block
              "
            >
              <Image
                src="/brand/logo.png"
                alt="Timscare Institut"
                fill
                priority
                sizes="480px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* =================================================
              NAVIGATION DESKTOP
              ================================================= */}

          <nav
            aria-label="Navigation principale"
            className="
              relative z-20 hidden
              items-center gap-8
              text-sm font-medium
              text-timscare-brown

              lg:flex
            "
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  transition-opacity
                  hover:opacity-60
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* =================================================
              CTA DESKTOP
              ================================================= */}

          <Link
            href="/contact"
            className="
              relative z-20
              hidden rounded-full
              bg-timscare-terracotta
              px-5 py-3
              text-sm font-medium
              text-timscare-cream
              transition

              hover:opacity-90

              lg:inline-flex
            "
          >
            Prendre rendez-vous
          </Link>

          {/* =================================================
              BURGER MOBILE / TABLETTE
              ================================================= */}

          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="
              relative z-20
              flex h-12 w-12
              shrink-0
              items-center justify-center
              overflow-hidden
              rounded-full

              border
              border-timscare-brown/15

              bg-timscare-cream/85

              backdrop-blur-md

              shadow-[0_8px_30px_rgba(72,36,18,0.06)]

              transition
              duration-300

              active:scale-90

              lg:hidden
            "
          >
            <span className="flex w-5 flex-col gap-[5px]">
              <span className="h-[1.5px] w-full bg-timscare-brown" />

              <span className="h-[1.5px] w-[70%] self-end bg-timscare-brown" />

              <span className="h-[1.5px] w-full bg-timscare-brown" />
            </span>
          </button>
        </div>
      </header>

      {/* =====================================================
          BLOOM REVEAL
          MENU PLEIN ÉCRAN MOBILE / TABLETTE
          ===================================================== */}

      <div
        aria-hidden={!menuOpen}
        className={`
          fixed inset-0
          z-[100]
          overflow-hidden

          lg:hidden

          ${
            menuOpen
              ? "pointer-events-auto"
              : "pointer-events-none"
          }
        `}
        style={{
          clipPath: menuOpen
            ? "circle(160vmax at calc(100% - 44px) 44px)"
            : "circle(0px at calc(100% - 44px) 44px)",

          opacity: menuOpen ? 1 : 0,

          visibility: menuOpen
            ? "visible"
            : "hidden",

          transitionProperty:
            "clip-path, opacity, visibility",

          transitionDuration: menuOpen
            ? "820ms, 180ms, 0ms"
            : "650ms, 200ms, 0ms",

          transitionTimingFunction:
            "cubic-bezier(0.16, 1, 0.3, 1)",

          transitionDelay: menuOpen
            ? "0ms, 0ms, 0ms"
            : "0ms, 420ms, 650ms",
        }}
      >
        {/* ===================================================
            1. PREMIÈRE COUCHE : TERRACOTTA
            C'est elle qu'on aperçoit en premier.
            =================================================== */}

        <div className="absolute inset-0 bg-timscare-terracotta" />

        {/* ===================================================
            2. COUCHE BRUNE
            Elle fleurit juste après le terracotta.
            =================================================== */}

        <div
          className="
            absolute inset-0
            bg-timscare-brown
          "
          style={{
            clipPath: menuOpen
              ? "circle(160vmax at calc(100% - 44px) 44px)"
              : "circle(0px at calc(100% - 44px) 44px)",

            transition:
              "clip-path 900ms cubic-bezier(0.16, 1, 0.3, 1)",

            transitionDelay: menuOpen
              ? "90ms"
              : "0ms",
          }}
        />

        {/* ===================================================
            PÉTALE GÉANT GAUCHE
            =================================================== */}

        <div
          aria-hidden="true"
          className={`
            absolute
            -left-[65%]
            top-[8%]

            h-[78%]
            w-[105%]

            rounded-[50%]

            border
            border-timscare-beige/10

            bg-gradient-to-r
            from-timscare-beige/[0.055]
            via-transparent
            to-transparent

            transition-all
            duration-[1300ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]

            ${
              menuOpen
                ? "translate-x-0 rotate-[-6deg] opacity-100"
                : "-translate-x-20 rotate-[-16deg] opacity-0"
            }
          `}
          style={{
            transitionDelay: menuOpen
              ? "230ms"
              : "0ms",
          }}
        />

        {/* ===================================================
            PÉTALE BAS
            =================================================== */}

        <div
          aria-hidden="true"
          className={`
            absolute
            -bottom-[35%]
            right-[-20%]

            h-[70%]
            w-[90%]

            rounded-[50%]

            border
            border-timscare-terracotta/25

            bg-timscare-terracotta/[0.035]

            transition-all
            duration-[1400ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]

            ${
              menuOpen
                ? "scale-100 opacity-100"
                : "scale-75 opacity-0"
            }
          `}
          style={{
            transitionDelay: menuOpen
              ? "330ms"
              : "0ms",
          }}
        />

        {/* ===================================================
            HALO BEAUTÉ / LUMIÈRE
            =================================================== */}

        <div
          aria-hidden="true"
          className={`
            absolute
            -right-28
            top-[20%]

            h-80 w-80

            rounded-full
            bg-timscare-terracotta/15

            blur-[80px]

            transition-all
            duration-[1200ms]

            ${
              menuOpen
                ? "scale-100 opacity-100"
                : "scale-50 opacity-0"
            }
          `}
          style={{
            transitionDelay: menuOpen
              ? "320ms"
              : "0ms",
          }}
        />

        {/* ===================================================
            CONTENU
            =================================================== */}

        <div
          className="
            relative z-20
            flex h-[100dvh]
            flex-col

            px-6
            pb-6
            pt-6

            sm:px-8
            sm:pb-8
            sm:pt-7
          "
        >
          {/* ===============================================
              HAUT
              =============================================== */}

          <div className="flex items-center justify-between">
            {/* BRAND */}
            <div
              className={`
                transition-all
                duration-700
                ease-[cubic-bezier(0.16,1,0.3,1)]

                ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-4 opacity-0"
                }
              `}
              style={{
                transitionDelay: menuOpen
                  ? "300ms"
                  : "0ms",
              }}
            >
              <p
                className="
                  text-[1.05rem]
                  font-medium
                  tracking-[0.19em]
                  text-timscare-cream
                "
              >
                TIMSCARE
              </p>

              <div className="mt-2 flex items-center gap-2">
                <span
                  className="
                    h-px w-7
                    bg-timscare-terracotta
                  "
                />

                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.38em]
                    text-timscare-beige/55
                  "
                >
                  Institut
                </p>
              </div>
            </div>

            {/* CLOSE */}
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Fermer le menu"
              className={`
                relative
                flex h-12 w-12
                items-center justify-center

                rounded-full

                border
                border-timscare-cream/20

                bg-timscare-cream/[0.05]

                backdrop-blur-md

                transition-all
                duration-700

                active:scale-90

                ${
                  menuOpen
                    ? "rotate-0 scale-100 opacity-100"
                    : "rotate-[135deg] scale-50 opacity-0"
                }
              `}
              style={{
                transitionDelay: menuOpen
                  ? "340ms"
                  : "0ms",
              }}
            >
              <span
                className="
                  absolute
                  h-px w-[19px]
                  rotate-45
                  bg-timscare-cream
                "
              />

              <span
                className="
                  absolute
                  h-px w-[19px]
                  -rotate-45
                  bg-timscare-cream
                "
              />
            </button>
          </div>

          {/* ===============================================
              MICRO-TITRE
              =============================================== */}

          <div
            className={`
              mt-[clamp(1.4rem,5vh,3rem)]

              transition-all
              duration-700

              ${
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-5 opacity-0"
              }
            `}
            style={{
              transitionDelay: menuOpen
                ? "380ms"
                : "0ms",
            }}
          >
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.38em]
                text-timscare-beige/40
              "
            >
              Soin · Beauté · Bien-être
            </p>
          </div>

          {/* ===============================================
              NAVIGATION
              =============================================== */}

          <nav
            aria-label="Navigation mobile"
            className="
              mt-[clamp(1rem,3vh,2rem)]
              flex flex-col
            "
          >
            {navItems.map((item, index) => {
              const active = isActive(item.href);

              const delay = 430 + index * 85;

              return (
                <div
                  key={item.href}
                  className="
                    overflow-hidden
                    border-b
                    border-timscare-cream/10
                  "
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`
                      group
                      flex min-h-[68px]
                      items-center
                      justify-between
                      gap-4

                      py-[clamp(0.65rem,1.8vh,1rem)]

                      transition-transform
                      duration-[850ms]
                      ease-[cubic-bezier(0.16,1,0.3,1)]

                      ${
                        menuOpen
                          ? "translate-y-0"
                          : "translate-y-[115%]"
                      }
                    `}
                    style={{
                      transitionDelay: menuOpen
                        ? `${delay}ms`
                        : "0ms",
                    }}
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <span
                        className={`
                          w-5 shrink-0
                          text-[9px]
                          tracking-[0.2em]

                          ${
                            active
                              ? "text-timscare-terracotta"
                              : "text-timscare-beige/35"
                          }
                        `}
                      >
                        {item.number}
                      </span>

                      <span
                        className={`
                          truncate

                          text-[clamp(2.25rem,11vw,4rem)]

                          font-medium
                          leading-none
                          tracking-[-0.045em]

                          transition-colors
                          duration-300

                          ${
                            active
                              ? "text-timscare-terracotta"
                              : "text-timscare-cream"
                          }
                        `}
                      >
                        {item.label}
                      </span>
                    </div>

                    {/* INDICATEUR */}
                    <span
                      className={`
                        relative
                        h-8 w-8
                        shrink-0

                        transition
                        duration-300

                        ${
                          active
                            ? "opacity-100"
                            : "opacity-25"
                        }
                      `}
                    >
                      <span
                        className="
                          absolute
                          left-1/2 top-1/2

                          h-px w-5

                          -translate-x-1/2
                          -translate-y-1/2

                          bg-timscare-terracotta
                        "
                      />

                      <span
                        className="
                          absolute
                          right-[6px] top-1/2

                          h-[7px] w-[7px]

                          -translate-y-1/2
                          rotate-45

                          border-r
                          border-t
                          border-timscare-terracotta
                        "
                      />
                    </span>
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* ===============================================
              BAS
              =============================================== */}

          <div className="mt-auto">
            {/* CTA */}
            <div className="overflow-hidden">
              <div
                className={`
                  transition-transform
                  duration-[900ms]
                  ease-[cubic-bezier(0.16,1,0.3,1)]

                  ${
                    menuOpen
                      ? "translate-y-0"
                      : "translate-y-[120%]"
                  }
                `}
                style={{
                  transitionDelay: menuOpen
                    ? "800ms"
                    : "0ms",
                }}
              >
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="
                    group
                    relative
                    flex min-h-14
                    w-full
                    items-center
                    justify-between

                    overflow-hidden

                    rounded-full

                    bg-timscare-terracotta

                    px-6

                    text-sm
                    font-medium
                    text-timscare-cream

                    shadow-[0_18px_45px_rgba(0,0,0,0.12)]

                    transition-transform

                    active:scale-[0.98]
                  "
                >
                  <span>Prendre rendez-vous</span>

                  <span
                    className="
                      relative
                      flex h-8 w-8
                      items-center
                      justify-center

                      rounded-full

                      bg-timscare-cream/10
                    "
                  >
                    <span
                      className="
                        absolute
                        h-px w-3.5
                        bg-timscare-cream
                      "
                    />

                    <span
                      className="
                        absolute
                        right-[8px]

                        h-[6px] w-[6px]

                        rotate-45

                        border-r
                        border-t
                        border-timscare-cream
                      "
                    />
                  </span>
                </Link>
              </div>
            </div>

            {/* FOOT */}
            <div
              className={`
                mt-5
                flex items-center
                justify-between

                transition-all
                duration-700

                ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }
              `}
              style={{
                transitionDelay: menuOpen
                  ? "880ms"
                  : "0ms",
              }}
            >
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.27em]
                  text-timscare-beige/35
                "
              >
                Bagnolet · France
              </p>

              <div className="flex items-center gap-2">
                <span
                  className="
                    h-1.5 w-1.5
                    rounded-full
                    bg-timscare-terracotta
                  "
                />

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.22em]
                    text-timscare-beige/35
                  "
                >
                  Timscare
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}