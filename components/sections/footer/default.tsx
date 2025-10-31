import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import HostessLogo from "../../logos/hostess";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  className?: string;
}

export default function FooterSection({
  logo = <HostessLogo />,
  name = "Hostess",
  columns = [
    {
      title: "Product",
      links: [
        { text: "Features", href: "#features" },
        { text: "Integrations", href: "#integrations" },
        { text: "Pricing", href: "#pricing" },
        { text: "API Docs", href: "/docs" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { text: "Quick Service", href: "/solutions/qsr" },
        { text: "Fine Dining", href: "/solutions/fine-dining" },
        { text: "Fast Casual", href: "/solutions/fast-casual" },
        { text: "Multi-Location", href: "/solutions/chains" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Careers", href: "/careers" },
        { text: "Blog", href: "/blog" },
        { text: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "Help Center", href: "/help" },
        { text: "Status", href: "https://status.tryhostess.com" },
        { text: "Email Us", href: siteConfig.links.email },
        { text: "Call: 1-800-AI-PHONE", href: "tel:18002474663" },
      ],
    },
  ],
  copyright = "© 2025 Hostess. All rights reserved",
  policies = [
    { text: "Privacy Policy", href: "/privacy" },
    { text: "Terms of Service", href: "/terms" },
    { text: "Security", href: "/security" },
  ],
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-4", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                {logo}
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground text-sm"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a key={index} href={policy.href}>
                  {policy.text}
                </a>
              ))}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
