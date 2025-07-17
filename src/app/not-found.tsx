import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-5xl font-bold">404</h1>
      <p className="mb-6 text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" className="border bg-neutral-500 text-neutral-300">
        Go back home
      </Link>
    </div>
  );
}
