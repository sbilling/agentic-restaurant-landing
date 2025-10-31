import {
  PhoneIcon,
  CalendarIcon,
  ShoppingBagIcon,
  ClockIcon,
  LineChartIcon,
  ShieldCheckIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription,ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Intelligent phone service that understands your restaurant",
  items = [
    {
      title: "Take Orders Instantly",
      description: "Capture every order accurately with AI that understands your menu",
      icon: <ShoppingBagIcon className="size-5 stroke-1" />,
    },
    {
      title: "Manage Reservations",
      description: "Book tables, handle waitlists, and optimize seating automatically",
      icon: <CalendarIcon className="size-5 stroke-1" />,
    },
    {
      title: "Customizable availability",
      description: "Configure our agent to take calls during your operating hours.",
      icon: <ClockIcon className="size-5 stroke-1" />,
    },
    {
      title: "Toast POS Integration",
      description: "Seamlessly syncs orders directly to your existing POS system",
      icon: <ZapIcon className="size-5 stroke-1" />,
    },
    {
      title: "Answer Any Question",
      description: "AI trained on your menu, hours, policies, and special offers",
      icon: <PhoneIcon className="size-5 stroke-1" />,
    },
    {
      title: "Handle Multiple Calls",
      description: "Scale infinitely during peak hours without adding staff",
      icon: <UsersIcon className="size-5 stroke-1" />,
    },
    {
      title: "Real-Time Analytics",
      description: "Track call volume, orders, and customer insights in one dashboard",
      icon: <LineChartIcon className="size-5 stroke-1" />,
    },
    {
      title: "Enterprise Security",
      description: "PCI compliant with encrypted payment processing",
      icon: <ShieldCheckIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[760px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
