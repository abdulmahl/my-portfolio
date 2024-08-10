import Header from "./ui/header";
import Footer from "./ui/footer";
import HeroSection from "./ui/home/heroSection";
import OurServicesSection from "./ui/home/ourServicesSection";
import WhyChooseUsSection from "./ui/home/whyChooseUsSection";
import PartnersSectin from "./ui/home/partnersSectin";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col">
        <HeroSection />
        <OurServicesSection />
        <WhyChooseUsSection />
        <PartnersSectin />
      </main>
      <Footer />
    </>
  );
}
