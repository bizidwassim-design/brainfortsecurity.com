import Link from "next/link";
import { ShieldAlert } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { getDictionary } from "@/i18n";
import { cn } from "@/lib/utils";

const dict = getDictionary();

export default function NotFound() {
  return (
    <section className="hero-glow flex min-h-[60vh] items-center py-20">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
          <ShieldAlert className="size-8" aria-hidden="true" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          404 — {dict.notFound.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {dict.notFound.description}
        </p>
        <div className="mt-8">
          <Link href="/" className={cn(buttonVariants({ size: "lg" }))}>
            {dict.notFound.back}
          </Link>
        </div>
      </div>
    </section>
  );
}
