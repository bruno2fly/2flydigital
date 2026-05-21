import Link from "next/link";

type LogoProps = {
  href?: string;
  className?: string;
};

function TwoGlyph() {
  return (
    <span className="relative inline-block text-accent">
      2
      <span
        aria-hidden
        className="absolute left-[0.16em] top-[0.18em] h-[0.18em] w-[0.26em] rounded-sm bg-bg"
      />
    </span>
  );
}

export default function Logo({ href = "/", className = "" }: LogoProps) {
  return (
    <Link href={href} className={`inline-flex items-baseline font-black tracking-tight text-text ${className}`} aria-label="2FLY home">
      <TwoGlyph />
      <span>FLY.</span>
    </Link>
  );
}
