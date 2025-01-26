import { NavbarLayout } from "@/layouts";
import {
  HeroSection,
  AboutSection,
  EventDetailsSection,
  EventDetailsSidebar,
} from "@/components/";
import { SiteGrid } from "@/styles/globals";
export default function Home() {
  return (
    <NavbarLayout>
      <SiteGrid>
        <HeroSection />
        <AboutSection />
        <EventDetailsSection />
        <EventDetailsSidebar />
      </SiteGrid>
    </NavbarLayout>
  );
}
