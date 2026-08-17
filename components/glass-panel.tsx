import type { ElementType, ReactNode } from "react";

type GlassPanelProps = {
  as?: ElementType;
  variant?: "card" | "pill";
  className?: string;
  children: ReactNode;
};

const base =
  "border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07),0_14px_36px_-18px_rgba(0,0,0,0.7)]";

const variantClasses: Record<NonNullable<GlassPanelProps["variant"]>, string> = {
  // hover no desktop, active (tap) no mobile — mesma leitura em ambos
  card: "rounded-2xl p-6 sm:p-8 transition-[transform,background-color,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-accent/35 hover:bg-white/[0.07] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.09),0_22px_48px_-16px_rgba(232,94,44,0.35)] active:border-accent/35 active:bg-white/[0.07]",
  pill: "inline-flex items-center gap-2 rounded-full px-4 py-2",
};

export function GlassPanel({
  as: Tag = "div",
  variant = "card",
  className = "",
  children,
}: GlassPanelProps) {
  return (
    <Tag className={`${base} ${variantClasses[variant]} ${className}`}>
      {children}
    </Tag>
  );
}
