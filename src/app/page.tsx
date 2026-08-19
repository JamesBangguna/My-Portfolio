import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Ticker from '@/components/sections/Ticker';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import SkillsMarquee from '@/components/sections/SkillsMarquee';
import Portfolio from '@/components/sections/Portfolio';
import Journey from '@/components/sections/Journey';
// import Testimonial from '@/components/sections/Testimonial';
// import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className='bg-[#02060d] min-h-screen'>
        {/* Section 1: Hero area dengan ID Card bergoyang */}
        <Hero />
        <Ticker />
        <About />
        <Skills />
        <SkillsMarquee />
        <Portfolio />
        <Journey />
        {/* <Testimonial />
        <FAQ /> */}
      </main>
    </>
  );
}
