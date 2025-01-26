import { NavbarLayout } from "@/layouts";
import {
  HeroSection,
  AboutSection,
  EventDetailsSection,
  SignupSection,
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
