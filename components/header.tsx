"use client";

import { useEffect, useState } from "react";
import { getWhatsappLink, siteConfig } from "@/lib/site-config";
import { Wordmark } from "@/components/wordmark";
import { CtaButton } from "@/components/cta-button";

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
      // o estado "no topo" carrega um scrim escuro em degradê: sobre o Hero
      // ele é imperceptível, mas mantém o logo branco legível caso a página
      // seja recarregada parada numa seção clara, antes da hidratação
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-[#150C26]/90 backdrop-blur-md"
          : "border-b border-transparent bg-[linear-gradient(180deg,rgba(12,5,24,0.72)_0%,rgba(12,5,24,0.35)_55%,transparent_100%)]"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a
          href="#topo"
          aria-label="Seluc.IA — ir para o topo"
          className="flex items-center text-[1.375rem] text-paper sm:text-2xl"
          onClick={() => setOpen(false)}
        >
          <Wordmark animate />
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

        <div className="hidden md:block">
          <CtaButton href={getWhatsappLink()} size="sm">
            Falar no WhatsApp
          </CtaButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative -mr-2 flex h-11 w-11 items-center justify-center md:hidden"
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
        className={`grid transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden border-t border-line bg-[#150C26]/95">
          <ul className="flex flex-col px-6 py-4 text-base font-medium">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 py-4 text-stone transition-colors last:border-b-0 hover:text-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-7">
            <CtaButton
              href={getWhatsappLink()}
              size="sm"
              onClick={() => setOpen(false)}
              className="w-full"
            >
              Falar no WhatsApp
            </CtaButton>
          </div>
        </div>
      </div>
    </header>
  );
}
