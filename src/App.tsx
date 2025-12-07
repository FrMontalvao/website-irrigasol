import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Benefits } from "./components/Benefits";
import { Portfolio } from "./components/Portfolio";
import { Calculator } from "./components/Calculator";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Portfolio />
      <Calculator />
      <Contact />
      <Footer />
    </div>
  );
}