import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import Brokers from "@/components/Brokers";
import Academy from "@/components/Academy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Courses />
      <Features />
      <Brokers />
      <Academy />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
