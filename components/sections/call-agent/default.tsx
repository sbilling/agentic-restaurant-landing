"use client";

import { Phone, Store } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";
import { Section } from "../../ui/section";

interface CallAgentProps {
  description?: string;
  className?: string;
}

export default function CallAgent({
  description = "AI-powered phone agents that handle customer calls 24/7. Take orders, book reservations, and answer questions while you focus on great food.",
  className,
}: CallAgentProps) {
  const [restaurantName, setRestaurantName] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Restaurant:", restaurantName, "Phone:", userPhone);
  };

  return (
    <Section id="demo" className={cn("", className)}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
            {description}
          </p>
        </div>

        <div className="glass-2 w-full max-w-xl rounded-2xl p-8 shadow-xl mt-8">
            <div
              className="text-center w-full items-center pb-8 text-md font-medium"
            >
              Don't take our word for it, give your new hostess a call.
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="restaurant-name"
                className="flex items-center gap-2 text-sm font-medium"
              >
                <Store className="size-4" />
                Restaurant Name
              </label>
              <input
                id="restaurant-name"
                type="text"
                value={restaurantName}
                onChange={(e) => setRestaurantName(e.target.value)}
                placeholder="Your Restaurant"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="user-phone"
                className="flex items-center gap-2 text-sm font-medium"
              >
                <Phone className="size-4" />
                Your Phone Number
              </label>
              <input
                id="user-phone"
                type="tel"
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                placeholder="(555) 123-4567"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
            </div>

            <Button type="submit" size="lg" variant="default" className="w-full">
              Call Me
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}