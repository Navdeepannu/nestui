import Link from "next/link";

const componentCategories = [
  {
    title: "Form Components",
    description: "Interactive form elements for user input",
    components: [
      {
        name: "Button",
        href: "/components/button",
        description: "Clickable button component with multiple variants",
      },
      {
        name: "Input",
        href: "/components/input",
        description: "Text input field for forms",
      },
    ],
  },
  {
    title: "Layout Components",
    description: "Components for structuring and organizing content",
    components: [
      {
        name: "Card",
        href: "/components/card",
        description: "Flexible container for grouping related content",
      },
    ],
  },
  {
    title: "Feedback Components",
    description: "Components for displaying status and information",
    components: [
      {
        name: "Badge",
        href: "/components/badge",
        description: "Small status descriptors and labels",
      },
    ],
  },
];

export default function ComponentsPage() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="mb-8">
        <h1 className="mb-3 text-4xl font-bold tracking-tight">Components</h1>
        <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed">
          A collection of reusable UI components built with React and styled
          with Tailwind CSS. Copy the code and customize to fit your needs.
        </p>
      </div>

      <div className="grid gap-8">
        {componentCategories.map((category) => (
          <div key={category.title}>
            <div className="mb-4">
              <h2 className="mb-2 text-2xl font-semibold">{category.title}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {category.components.map((component) => (
                <Link
                  key={component.name}
                  href={component.href}
                  className="group hover:border-accent hover:bg-accent/5 block rounded-lg border p-6 transition-all duration-200"
                >
                  <h3 className="group-hover:text-accent-foreground mb-2 text-lg font-semibold">
                    {component.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {component.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
