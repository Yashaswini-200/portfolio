import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text-secondary">
      <Nav />

      <main className="mx-auto max-w-6xl px-6 pb-20 pt-28 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects projects={projects} />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
