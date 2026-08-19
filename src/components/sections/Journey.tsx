'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';

import ExperienceCard from './ExperienceCard';
import { experiences, type Experience } from '@/data/experience';

export default function Journey() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: false,
    loop: false,
    slidesToScroll: 1,
  });

  // Solusi ESLint: Menghapus selectedIndex karena sudah tidak digunakan lagi
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    const progress = emblaApi.scrollProgress() * 100;
    setScrollProgress(progress);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', onSelect);
    emblaApi.on('scroll', onSelect);
    emblaApi.on('init', onSelect);

    const initId = requestAnimationFrame(() => {
      onSelect();
    });

    return () => {
      cancelAnimationFrame(initId);
      emblaApi.off('select', onSelect);
      emblaApi.off('scroll', onSelect);
      emblaApi.off('init', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id='journey' className='bg-black py-24 text-white'>
      <div className='container mx-auto max-w-7xl px-6 lg:px-8'>
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <h2 className='text-4xl font-extrabold tracking-tight text-white md:text-6xl'>
            My Journey in Tech
          </h2>
          <p className='mt-6 max-w-3xl text-lg leading-8 text-zinc-400'>
            From small gigs to real-world challenges — each experience helped me
            grow as a builder and problem-solver.
          </p>
        </motion.div>

        {/* ================= CAROUSEL ================= */}
        <div ref={emblaRef} className='overflow-hidden'>
          <div className='flex gap-6'>
            {experiences.map((item: Experience, index: number) => (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] xl:flex-[0_0_calc(33.333%-16px)]'
              >
                {/* Solusi ESLint: Menghapus tipe 'as any' karena objek 'item' sudah bertipe 'Experience' yang memiliki properti 'logo' */}
                <ExperienceCard
                  role={item.role}
                  company={item.company}
                  period={item.period}
                  description={item.description}
                  logo={item.logo}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= PROGRESS BAR ================= */}
        <div className='mt-14 w-full'>
          <div className='h-0.5 w-full bg-zinc-800 relative rounded-full overflow-hidden'>
            <motion.div
              className='h-full bg-white rounded-full'
              animate={{
                width: `${Math.max(scrollProgress, 15)}%`,
              }}
              transition={{
                duration: 0.2,
                ease: 'easeOut',
              }}
            />
          </div>
        </div>

        {/* ================= BUTTONS NAVIGASI ================= */}
        <div className='mt-8 flex items-center gap-4'>
          <button
            onClick={scrollPrev}
            disabled={!emblaApi?.canScrollPrev()}
            className='flex h-10 w-24 items-center justify-center border border-zinc-800 bg-transparent text-sm font-medium text-zinc-400 transition-all duration-300 hover:border-white hover:text-white disabled:cursor-not-allowed disabled:opacity-20'
          >
            Prev
          </button>

          <button
            onClick={scrollNext}
            disabled={!emblaApi?.canScrollNext()}
            className='flex h-10 w-24 items-center justify-center border border-zinc-800 bg-transparent text-sm font-medium text-white transition-all duration-300 hover:border-white disabled:cursor-not-allowed disabled:opacity-20'
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
