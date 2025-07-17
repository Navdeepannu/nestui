"use client";
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <main className="min-w-0 p-8">{children}</main>
    </div>
  );
}
