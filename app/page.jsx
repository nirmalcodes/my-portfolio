import About from '@/containers/About';
import Contact from '@/containers/Contact';
import Hero from '@/containers/Hero';
import Portfolio from '@/containers/Portfolio';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
}
