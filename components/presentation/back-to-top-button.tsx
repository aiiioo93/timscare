"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.2;

      setVisible(window.scrollY > threshold);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleBackToTop}
      aria-label="Revenir en haut de la page"
      title="Revenir en haut"
      className={`
        fixed
        bottom-5 right-4
        z-[70]

        flex h-12 w-12
        items-center justify-center

        rounded-full

        border
        border-timscare-cream/20

        bg-timscare-brown
        text-timscare-cream

        shadow-[0_15px_40px_rgba(72,36,18,0.25)]

        transition-all
        duration-500
        ease-[cubic-bezier(0.16,1,0.3,1)]

        hover:-translate-y-1
        hover:bg-timscare-terracotta

        active:scale-90

        sm:bottom-6
        sm:right-6
        sm:h-14
        sm:w-14

        lg:bottom-8
        lg:right-8

        ${
          visible
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-6 scale-75 opacity-0"
        }
      `}
    >
      <span
        className="
          pointer-events-none
          absolute inset-[5px]
          rounded-full
          border
          border-timscare-cream/10
        "
      />

      <ArrowUp
        size={18}
        strokeWidth={1.6}
        className="relative"
      />
    </button>
  );
}