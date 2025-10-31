import Link from "next/link";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Frequently Asked Questions",
  items = [
    {
      question: "How does the AI phone agent understand my restaurant's menu?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            During setup, we train the AI on your complete menu, including items, prices,
            ingredients, and special preparations. The system learns your specific offerings
            and can answer detailed questions about dishes, handle modifications, and
            understand dietary restrictions.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            The AI continuously improves through real interactions and can be updated
            instantly when you change your menu.
          </p>
        </>
      ),
    },
    {
      question: "What happens if the AI can't handle a specific request?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            Our AI is trained to handle 95% of common restaurant calls. For complex
            or unusual requests, the system can seamlessly transfer to your staff
            or take a message for callback.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            You can also set specific rules for when to escalate calls, such as
            large catering orders or special event inquiries.
          </p>
        </>
      ),
    },
    {
      question: "How does the Toast POS integration work?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Our system connects directly with your Toast POS through their official API.
            Orders taken by phone are instantly sent to your kitchen display system,
            just like orders placed in-person.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Menu items, prices, and availability sync automatically, ensuring the AI
            always has current information. Payment processing follows your existing
            Toast setup.
          </p>
        </>
      ),
    },
    {
      question: "How quickly can we get started?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          Setup typically takes 3-5 business days. We'll import your menu, configure
          your business rules, integrate with Toast POS, and train the AI on your
          specific needs. You'll have a dedicated onboarding specialist to ensure
          everything runs smoothly from day one.
        </p>
      ),
    },
    {
      question: "What languages does the AI support?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Currently, we support English, Spanish, French, Mandarin, and Cantonese.
            The AI can seamlessly switch between languages based on the customer's
            preference.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Additional languages can be added for enterprise customers. Contact our
            sales team to discuss your specific needs.
          </p>
        </>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
