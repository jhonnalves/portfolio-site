import type { ElementType, ReactNode } from "react";

type GlassPanelProps = {
  as?: ElementType;
  variant?: "card" | "pill";
  className?: string;
  children: ReactNode;
};

const base =
  "border border-white/10 bg-white/[0.045] backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_10px_30px_-14px_rgba(0,0,0,0.55)]";

const variantClasses: Record<NonNullable<GlassPanelProps["variant"]>, string> = {
  card: "rounded-2xl p-8 transition-[transform,background-color,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-accent/35 hover:bg-white/[0.065] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_20px_45px_-14px_rgba(232,94,44,0.35)]",
  pill: "inline-flex items-center gap-2 rounded-full px-4 py-1.5",
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
