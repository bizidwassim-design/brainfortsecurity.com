import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  badgeVariant?: "default" | "secondary";
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = "center",
  badgeVariant = "default",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow && <Badge variant={badgeVariant}>{eyebrow}</Badge>}
      <h2
        id={id}
        className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
