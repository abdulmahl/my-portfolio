import Header from "./ui/header";
import Footer from "./ui/footer";
import HeroSection from "./ui/heroSection";
import MySkills from "./ui/mySkills";
import MyProjects from "./ui/myProjects";
import ContactSection from "./ui/contact";
import AboutMe from "./ui/about";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col">
        <HeroSection />
        <AboutMe />
        <MySkills />
        <MyProjects />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
