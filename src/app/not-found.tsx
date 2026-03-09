import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-start justify-center gap-6 px-5 py-16 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
        404 / loop not found
      </p>
      <h1 className="text-4xl font-semibold tracking-[-0.05em] text-ink sm:text-5xl">
        The page you asked for is not in the library.
      </h1>
      <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
        Head back to the directory and browse by category, metric, or signal speed.
      </p>
      <Link
        href="/"
        className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition hover:bg-[color:var(--accent-strong)]"
      >
        Return to the library
      </Link>
    </main>
  );
}
