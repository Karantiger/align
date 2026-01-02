import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DownloadSection from "@/components/DownloadSection";
import FeaturesSection from "@/components/FeaturesSection";
import ScreenshotsSection from "@/components/ScreenShotsSection";
import DemoSection from "@/components/FAQSection";
import WhySection from "@/components/WhySection";
import TestimonialsSection from "@/components/Testimonial";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingBlobs from "@/components/FlootingBlobs";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-x-hidden">
      <FloatingBlobs />
      <Navbar />
      <main>
        <HeroSection />
        <DownloadSection />
        <FeaturesSection />
        <ScreenshotsSection />
        <DemoSection />
        <WhySection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
