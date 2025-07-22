export default function Page() {
  return (
    <div>
      <h1 className="mb-8 text-4xl font-bold">Welcome to NEST UI</h1>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4 text-lg leading-relaxed">
          NEST UI is a modern React component library designed to help
          developers build beautiful, responsive interfaces with minimal effort.
          Our components are built with TypeScript, Tailwind CSS, and follow
          modern design principles.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          This is a test of the scrolling behavior. When you scroll in the
          sidebar, only the sidebar should scroll, and the main content should
          remain in place. Similarly, when you scroll in the main content area,
          only this content should move while the sidebar stays fixed.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Features</h2>
        <ul className="list-disc space-y-2 pl-6 text-lg">
          <li>Modern React components with TypeScript support</li>
          <li>Built with Tailwind CSS for easy customization</li>
          <li>Responsive design out of the box</li>
          <li>Accessible components following WCAG guidelines</li>
          <li>Easy to integrate with existing projects</li>
        </ul>
      </section>
    </div>
  );
}
