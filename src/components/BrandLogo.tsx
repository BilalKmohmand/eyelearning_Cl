import Link from "next/link";
import { SITE } from "@/lib/site";

type BrandLogoProps = {
  variant?: "light" | "dark";
  className?: string;
  priority?: boolean;
};

export function BrandLogo({
  variant = "light",
  className = "",
}: BrandLogoProps) {
  const wordFill = variant === "dark" ? "#F8FAFC" : "#0F2137";
  const subFill = variant === "dark" ? "#94A3B8" : "#475569";
  const badgeFill = variant === "dark" ? "#16324F" : "#0F2137";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 rounded-md ${className}`}
      aria-label={`${SITE.name} homepage`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 56 56"
        className="h-8 w-8 sm:h-9 sm:w-9"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="56" height="56" rx="12" fill={badgeFill} />
        <circle
          cx="28"
          cy="24"
          r="10"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="2.5"
        />
        <circle cx="28" cy="24" r="4" fill="#F59E0B" />
        <path
          d="M18 40h20"
          stroke="#F8FAFC"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M22 40v6M34 40v6"
          stroke="#F8FAFC"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-tight">
        <span
          className="text-sm sm:text-base font-extrabold tracking-tight"
          style={{ color: wordFill }}
        >
          Eye Level
        </span>
        <span
          className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.08em]"
          style={{ color: subFill }}
        >
          Hicksville
        </span>
      </span>
      <span className="sr-only">{SITE.name}</span>
    </Link>
  );
}
