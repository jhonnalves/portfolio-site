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
  md: "px-7 py-4 text-base",
  lg: "px-8 py-4 text-base sm:px-9 sm:py-4.5 sm:text-lg",
};

const variantClasses: Record<NonNullable<CtaButtonProps["variant"]>, string> = {
  primary:
    "bg-[linear-gradient(100deg,var(--accent-warm)_0%,var(--accent)_42%,var(--accent-dim)_68%,var(--accent)_100%)] bg-[length:240%_100%] bg-[position:0%_0%] text-[#180D2A] shadow-[0_10px_30px_-10px_rgba(232,94,44,0.55)] hover:bg-[position:100%_0%] hover:shadow-[0_16px_38px_-10px_rgba(232,94,44,0.7)] active:bg-[position:100%_0%]",
  ghost:
    "border border-line-strong text-paper hover:border-accent/45 hover:bg-white/[0.05] active:bg-white/[0.05]",
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
