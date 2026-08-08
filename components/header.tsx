"use client";

import { useEffect, useState } from "react";
import { getWhatsappLink, siteConfig } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-ink/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:h-20">
        <a
          href="#topo"
          className="flex items-center gap-2 font-heading text-lg font-semibold tracking-tight text-paper"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-[13px] font-bold text-ink">
            {siteConfig.brandShort}
          </span>
          {siteConfig.brand}
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium tracking-wide text-stone">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={getWhatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_var(--accent)] md:inline-block"
        >
          Falar no WhatsApp
        </a>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span
            className={`absolute h-[1.5px] w-6 bg-paper transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-[1.5px] w-6 bg-paper transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-[1.5px] w-6 bg-paper transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      <div
        className={`grid md:hidden transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden border-t border-line">
          <ul className="flex flex-col px-6 py-4 text-base font-medium">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-stone transition-colors hover:text-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-6">
            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block w-full rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-ink"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
