import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outlinePrimary"
  | "outlineEmerald"
  | "outlineSlate"
  | "navIcon"
  | "saccPrimary"
  | "saccOutline"
  | "ghostSacc";

export type ButtonSize =
  | "hero"
  | "section"
  | "footer"
  | "nav"
  | "drawer"
  | "icon"
  | "saccHero"
  | "faq";

const BASE_BUTTON_CLASS =
  "inline-flex items-center justify-center font-headline uppercase tracking-widest transition-all";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:brightness-110",
  secondary:
    "bg-secondary text-on-secondary hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,255,163,0.4)]",
  outlinePrimary:
    "border border-primary/40 text-primary hover:border-primary hover:bg-primary/10",
  outlineEmerald:
    "border border-emerald-400/40 text-emerald-300 hover:border-emerald-300 hover:bg-emerald-400/10",
  outlineSlate:
    "border border-slate-700 text-slate-300 hover:border-primary/50 hover:text-primary",
  navIcon:
    "rounded border border-cyan-900/60 text-cyan-300 transition-colors hover:border-primary/50 hover:text-primary",
  saccPrimary:
    "bg-[#00F0FF] font-sacc-mono text-[#0A0B0E] shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-[filter,box-shadow] hover:brightness-110 hover:shadow-[0_0_25px_rgba(0,240,255,0.6)]",
  saccOutline:
    "border border-[#00F0FF]/40 font-sacc-mono text-[#00F0FF] hover:border-[#00F0FF] hover:bg-[#00F0FF]/10",
  ghostSacc: "text-left transition-colors hover:text-[#00F0FF]",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  hero:
    "min-h-12 w-full px-8 py-4 text-base font-bold active:scale-[0.98] sm:min-h-0 sm:px-10 sm:py-5 sm:text-lg md:w-auto",
  section:
    "touch-manipulation min-h-12 w-full px-10 py-4 text-base font-bold sm:min-h-0 sm:w-auto sm:px-12 sm:py-5 sm:text-lg",
  footer: "px-4 py-2 text-[11px]",
  nav: "hidden h-8 px-4 text-[11px] font-bold md:inline-flex",
  drawer: "mt-4 touch-manipulation min-h-12 px-4 py-3 text-sm font-bold",
  icon: "touch-manipulation flex h-11 w-11 md:hidden",
  saccHero:
    "touch-manipulation min-h-12 w-full max-w-sm gap-3 px-6 py-4 text-base font-bold sm:min-h-0 sm:w-auto sm:max-w-none sm:px-8 sm:text-lg",
  faq:
    "touch-manipulation flex min-h-12 w-full items-center justify-between gap-4 py-4 text-left sm:min-h-0 sm:py-5",
};

export function buttonClassName({
  className,
  size,
  variant,
}: {
  className?: string;
  size: ButtonSize;
  variant: ButtonVariant;
}) {
  return cn(BASE_BUTTON_CLASS, VARIANT_CLASSES[variant], SIZE_CLASSES[size], className);
}

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  size: ButtonSize;
  variant: ButtonVariant;
};

type ButtonProps = SharedButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button({ children, className, size, variant, ...props }: ButtonProps) {
  return (
    <button className={buttonClassName({ className, size, variant })} {...props}>
      {children}
    </button>
  );
}

type LinkButtonProps = SharedButtonProps & {
  href: string;
};

export function LinkButton({
  children,
  className,
  href,
  size,
  variant,
}: LinkButtonProps) {
  return (
    <Link href={href} className={buttonClassName({ className, size, variant })}>
      {children}
    </Link>
  );
}

type ExternalButtonProps = SharedButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href"> & {
    href: string;
  };

export function ExternalButton({
  children,
  className,
  href,
  size,
  variant,
  ...props
}: ExternalButtonProps) {
  return (
    <a
      href={href}
      className={buttonClassName({ className, size, variant })}
      {...props}
    >
      {children}
    </a>
  );
}
