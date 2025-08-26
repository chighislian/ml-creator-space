import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
