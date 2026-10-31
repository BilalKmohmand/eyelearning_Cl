import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

type BrandLogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

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
      {variant === "dark" ? (
        <Image
          src="/images/eye-level-logo.png"
          alt=""
          width={40}
          height={40}
          className="h-9 w-9 sm:h-10 sm:w-10 rounded-[10px] bg-white"
          priority
        />
      ) : (
        <Image
          src="/images/eye-level-mark.png"
          alt=""
          width={36}
          height={40}
          className="h-8 w-7 sm:h-9 sm:w-8 object-contain"
          priority
        />
      )}
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
