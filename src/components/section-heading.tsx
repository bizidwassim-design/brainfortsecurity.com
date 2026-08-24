import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  badgeVariant?: "default" | "secondary";
  /** Heading level. Default "h2"; pass "h1" for a page's main heading
   * when the section itself is the top of the page (e.g. a catalog hero
   * with no separate <h1>). */
  as?: "h1" | "h2";
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = "center",
  badgeVariant = "default",
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow && <Badge variant={badgeVariant}>{eyebrow}</Badge>}
      <Heading
        id={id}
        className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </Heading>
      {/* Flyer-style short gold rule under headings. */}
      <span
        aria-hidden="true"
        className={cn(
          "block h-1 w-12 rounded-full bg-primary",
          align === "center" && "mx-auto",
        )}
      />
      {subtitle && (
        <p className="text-lg leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
