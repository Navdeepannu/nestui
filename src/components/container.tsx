import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col items-center justify-center",
        className,
      )}
    >
      {children}
    </div>
  );
};
