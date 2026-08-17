"use client";

import { getWhatsappLink } from "@/lib/site-config";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="group fixed right-5 z-50 flex items-center gap-3"
      style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
    >
      {/* fundo sólido escuro: o botão flutua sobre seções claras e escuras */}
      <span className="pointer-events-none hidden translate-x-2 rounded-full border border-white/10 bg-[#1b1030] px-3 py-1.5 text-sm font-medium text-paper opacity-0 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.7)] transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Fale comigo
      </span>

      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-60 motion-reduce:hidden" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_-8px_rgba(0,0,0,0.6)] transition-transform duration-200 group-hover:scale-105">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-7 w-7 fill-white"
          >
            <path d="M12 2a10 10 0 00-8.62 15.03L2 22l5.11-1.34A10 10 0 1012 2z" />
            <path
              d="M8.7 7.35c.2-.44.4-.45.6-.46.16 0 .34 0 .49 0 .16 0 .38-.06.59.45.22.53.75 1.83.81 1.97.07.14.11.3.02.48-.09.18-.14.29-.27.44-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.89 1.05.93 1.93 1.22 2.21 1.36.28.14.44.12.6-.07.17-.2.71-.83.9-1.11.19-.28.38-.24.63-.14.26.1 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.16 1.34-.23.66-1.34 1.28-1.87 1.36-.48.08-1.08.11-1.75-.11-.4-.13-.92-.3-1.58-.59-2.78-1.2-4.6-4.01-4.74-4.2-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.02.96-2.3z"
              fill="#25D366"
            />
          </svg>
        </span>
      </span>
    </a>
  );
}
