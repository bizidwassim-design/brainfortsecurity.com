import { Quote } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Dictionary } from "@/i18n";

interface TestimonialsSectionProps {
  dict: Dictionary;
}

export function TestimonialsSection({ dict }: TestimonialsSectionProps) {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="testimonials"
            eyebrow={dict.testimonials.eyebrow}
            title={dict.testimonials.title}
            subtitle={dict.testimonials.subtitle}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {dict.testimonials.items.map((testimonial, index) => (
            <Reveal key={testimonial.quote} delay={index * 0.08}>
              <Card className="h-full">
                <CardHeader>
                  <Quote
                    className="size-8 text-primary/40 rtl:rotate-180"
                    aria-hidden="true"
                  />
                </CardHeader>
                <CardContent className="space-y-4">
                  <blockquote className="text-sm leading-relaxed text-foreground">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <footer className="text-sm">
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </footer>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
