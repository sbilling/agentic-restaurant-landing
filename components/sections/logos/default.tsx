import Toast from "@/public/toast.png";
import Image from "next/image";
import { Section } from "../../ui/section";

interface LogosProps {
  title?: string;
  className?: string;
}

export default function Logos({
  title = "Seamless integrations with your existing tools",
  className,
}: LogosProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-md font-semibold sm:text-2xl">{title}</h2>
        </div>
        <Image src={Toast} alt="Toast POS" width={44} height={44} />
      <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="8" fill="#22C55E" />
          <path d="M6.5 8.5l1.5 1.5 3-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Official Partner
      </span>
      </div>
    </Section>
  );
}
