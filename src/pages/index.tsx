import { NavbarLayout } from "@/layouts";
import { HeroSection, AboutSection, EventDetailsSection, SignupSection } from "@/components/";
export default function Home() {
  return (
    <NavbarLayout>
      <HeroSection />
      <AboutSection />
      <EventDetailsSection />
      <SignupSection />
    </NavbarLayout>
  );
}
