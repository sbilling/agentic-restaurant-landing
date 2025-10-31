import { Store, Building2, Briefcase } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";
import { Section } from "../../ui/section";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
  title = "Simple pricing that scales with your restaurant",
  description = "Let's discuss how AI phone agents can transform your restaurant operations.",
  plans = [
    {
      name: "Custom Integration",
      icon: <Briefcase className="size-4" />,
      description: "Tailored to your restaurant's specific needs",
      price: "",
      priceNote: "Schedule a consultation",
      cta: {
        variant: "default",
        label: "Contact Sales",
        href: "mailto:sawyer@fullsend.io",
      },
      features: [
        "AI phone agent for inbound calls",
        "Toast POS integration",
        "Order taking & reservations",
        "Available during your hours",
        "Multi-lingual support",
        "Priority support",
        "Custom voice training",
      ],
      variant: "glow-brand",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto flex justify-center">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                price={plan.price}
                priceNote={plan.priceNote}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
                className={plan.className}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
