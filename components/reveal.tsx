"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** atraso em ms, útil para escalonar itens de uma lista */
  delay?: number;
};

/**
 * Revela o conteúdo com uma leve animação de fade + translate quando
 * o elemento entra na viewport. Usa IntersectionObserver diretamente
 * (sem libs) e respeita prefers-reduced-motion via CSS.
 *
 * Falha aberto: se o IntersectionObserver não existir, não conseguir ser
 * criado, ou simplesmente nunca disparar (observado em alguns navegadores
 * mobile reais), o conteúdo é revelado de qualquer forma após um tempo —
 * nunca fica preso em opacidade zero.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let observer: IntersectionObserver | undefined;

    if (typeof IntersectionObserver !== "undefined") {
      try {
        observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisible(true);
              window.clearTimeout(fallback);
              observer?.disconnect();
            }
          },
          { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
        );
        observer.observe(node);
      } catch {
        observer = undefined;
      }
    }

    // rede de segurança: se o observer não existe, não pôde ser criado ou
    // simplesmente nunca dispara, o conteúdo é revelado de qualquer forma
    const fallback = window.setTimeout(
      () => setVisible(true),
      observer ? 1500 : 0,
    );

    return () => {
      observer?.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      data-reveal={visible ? "visible" : "hidden"}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
