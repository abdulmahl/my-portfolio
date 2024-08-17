import Header from "./ui/header";
import Footer from "./ui/footer";
import HeroSection from "./ui/home/heroSection";
import MySkills from "./ui/home/mySkills";
import MyProjects from "./ui/home/myProjects";
import PartnersSectin from "./ui/home/testimonials";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col">
        <HeroSection />
        <MySkills />
        <MyProjects />
        <PartnersSectin />
      </main>
      <Footer />
    </>
  );
}
