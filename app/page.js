import Header from "./ui/header";
import Footer from "./ui/footer";
import HeroSection from "./ui/heroSection";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex h-screen flex-col items-center justify-between">
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
