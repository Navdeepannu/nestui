export interface NavigationItem {
  title: string;
  href: string;
  description?: string;
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
  description?: string;
}

export interface ComponentLayoutProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
  installation?: {
    packages: string[];
    files?: Array<{
      name: string;
      content: string;
      language?: string;
    }>;
  };
  props?: Array<{
    name: string;
    type: string;
    default?: string;
    description: string;
    required?: boolean;
  }>;
  nextComponent?: {
    name: string;
    href: string;
  };
}
