import Link from "next/link";

const navItems = [
  { href: "/#categories", label: "Categories" },
  { href: "/#featured", label: "Featured" },
  { href: "/#library", label: "Library" },
  { href: "/contribute", label: "Contribute" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-5 pt-4 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 rounded-full border border-line bg-[rgba(255,251,245,0.82)] px-4 py-3 shadow-[0_12px_40px_rgba(38,30,19,0.06)] backdrop-blur">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink font-mono text-xs uppercase tracking-[0.22em] text-paper">
            LP
          </span>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              loops.md
            </p>
            <p className="text-sm font-medium text-ink">Autonomous template directory</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-muted md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="https://github.com/johnjjung/loops.md"
          className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
        >
          GitHub
        </Link>
      </div>
    </header>
  );
}
