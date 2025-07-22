import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-5xl font-bold">404</h1>
      <p className="text-md text-muted-foreground mb-6 font-light">
        Sorry, the page you are looking for does not exist.
      </p>
      <div className="flex items-center gap-4">
        <Link
          href="/docs/introduction"
          className="border-border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground rounded-2xl border px-4 py-2 transition-all duration-300 hover:scale-105"
        >
          Documentation
        </Link>
        <Link
          href="/components/card"
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl px-4 py-2 transition-all duration-300 hover:scale-105"
        >
          Components
        </Link>
      </div>
    </div>
  );
}
