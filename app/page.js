import Header from "./ui/header";
import Footer from "./ui/footer";
import HeroSection from "./ui/heroSection";
import OurServicesSection from "./ui/ourServicesSection";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col">
        <HeroSection />
        <OurServicesSection />
      </main>
      <Footer />
    </>
  );
}
