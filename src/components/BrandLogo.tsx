import Link from "next/link";
import { SITE } from "@/lib/site";

type BrandLogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

/** Eye Level keyhole/child mark + local wordmark */
function EyeLevelMark({ className = "h-9 w-8" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 56"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.5">
        <path d="M12 26c0-10 5.5-18 12-18s12 8 12 18" stroke="#EC1C24" />
        <path d="M12 26 L8 46" stroke="#64BC48" />
        <path d="M36 26 L40 46" stroke="#FCB810" />
        <path d="M8 46 H40" stroke="#0070BC" />
      </g>
    </svg>
  );
}

export function BrandLogo({
  variant = "light",
  className = "",
}: BrandLogoProps) {
  const wordFill = variant === "dark" ? "#F8FAFC" : "#111111";
  const subFill = variant === "dark" ? "#94A3B8" : "#475569";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 rounded-md ${className}`}
      aria-label={`${SITE.name} homepage`}
    >
      <EyeLevelMark className="h-8 w-7 sm:h-9 sm:w-8" />
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
