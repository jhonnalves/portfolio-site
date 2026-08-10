import type { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

const sizeClasses: Record<NonNullable<CtaButtonProps["size"]>, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm sm:text-base",
  lg: "px-8 py-4 text-base",
};

const variantClasses: Record<NonNullable<CtaButtonProps["variant"]>, string> = {
  primary:
    "bg-[linear-gradient(100deg,var(--accent)_0%,var(--accent)_42%,var(--accent-dim)_68%,var(--accent)_100%)] bg-[length:240%_100%] bg-[position:0%_0%] text-ink shadow-[0_8px_24px_-10px_rgba(232,94,44,0.45)] hover:bg-[position:100%_0%] hover:shadow-[0_14px_32px_-10px_rgba(232,94,44,0.6)]",
  ghost:
    "border border-line text-paper hover:border-paper/40 hover:bg-paper/[0.04]",
};

export function CtaButton({
  href,
  variant = "primary",
  size = "md",
  external = true,
  className = "",
  onClick,
  children,
}: CtaButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[background-position,transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-0.5 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
