import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="px-5 pb-10 pt-4 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 rounded-[30px] border border-line bg-[rgba(255,250,242,0.78)] px-6 py-6 text-sm text-muted shadow-[0_12px_40px_rgba(38,30,19,0.05)] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            loops.md
          </p>
          <p className="mt-2 max-w-2xl leading-7">
            A repo-backed library of business experiment loops for teams that want faster learning velocity across growth and operations.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/contribute" className="transition hover:text-accent">
            Contribute
          </Link>
          <Link href="https://github.com/johnjjung/loops.md" className="transition hover:text-accent">
            Repository
          </Link>
        </div>
      </div>
    </footer>
  );
}
