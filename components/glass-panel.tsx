import type { ElementType, ReactNode } from "react";

type GlassPanelProps = {
  as?: ElementType;
  variant?: "card" | "pill";
  /** "dark" = vidro escuro sobre roxo, "light" = vidro branco sobre fundo claro */
  tone?: "dark" | "light";
  className?: string;
  children: ReactNode;
};

const toneBase = {
  dark: "border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07),0_14px_36px_-18px_rgba(0,0,0,0.7)]",
  light:
    "border border-white/80 bg-white/90 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),0_18px_44px_-18px_rgba(20,8,40,0.55)]",
} as const;

// hover no desktop, active (tap) no mobile — mesma leitura em ambos
const toneCard = {
  dark: "hover:-translate-y-1.5 hover:border-accent/35 hover:bg-white/[0.07] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.09),0_22px_48px_-16px_rgba(232,94,44,0.35)] active:border-accent/35 active:bg-white/[0.07]",
  light:
    "hover:-translate-y-1.5 hover:border-accent/40 hover:bg-white hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),0_24px_50px_-18px_rgba(232,94,44,0.4)] active:border-accent/40 active:bg-white",
} as const;

export function GlassPanel({
  as: Tag = "div",
  variant = "card",
  tone = "dark",
  className = "",
  children,
}: GlassPanelProps) {
  const variantClasses =
    variant === "pill"
      ? "inline-flex items-center gap-2 rounded-full px-4 py-2"
      : `rounded-2xl p-6 sm:p-8 transition-[transform,background-color,border-color,box-shadow] duration-300 ${toneCard[tone]}`;

  return (
    <Tag className={`${toneBase[tone]} ${variantClasses} ${className}`}>
      {children}
    </Tag>
  );
}
