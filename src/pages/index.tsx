import { useRef } from "react";
import { NavbarLayout } from "@/layouts";
import {
  HeroSection,
  AboutSection,
  EventDetailsSection,
  EventDetailsSidebar,
} from "@/components/";
import { SiteGrid } from "@/styles/globals";

export default function Home() {
  // Create a ref in the Home component.
  const bottomRef = useRef<HTMLDivElement>(null);

  return (
    <NavbarLayout bottomRef={bottomRef}>
      <SiteGrid>
        <HeroSection />
        <AboutSection />
        <EventDetailsSection />
        <EventDetailsSidebar bottomRef={bottomRef} />
      </SiteGrid>
    </NavbarLayout>
  );
}
