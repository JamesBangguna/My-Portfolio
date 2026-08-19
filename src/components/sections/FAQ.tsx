'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

import faqData from './faqData';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  avatar: string;
}

export default function FAQ() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Deteksi ukuran layar untuk mengoptimalkan pergeseran animasi yang pas di mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : faqData.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < faqData.length - 1 ? prev + 1 : 0));
  };

  const cardWidthDesktop = 360;
  const gap = 24;

  // Rumus animasi dinamis: Persentase murni di mobile, piksel presisi di desktop
  const animateX = isMobile
    ? `calc(-${currentIndex * 100}% - ${currentIndex * gap}px)`
    : -(currentIndex * (cardWidthDesktop + gap)) + cardWidthDesktop * 0.1;

  return (
    <section
      id='faq'
      className='bg-black py-20 text-white overflow-hidden select-none'
    >
      <div className='container mx-auto max-w-7xl px-6 lg:px-12'>
        {/* Header & Navigation Slider */}
        <div className='flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-16'>
          <div>
            <h2 className='text-4xl font-extrabold tracking-tight text-white md:text-5xl mb-3'>
              Still Got Questions?
            </h2>
            <p className='text-sm md:text-base text-zinc-400 max-w-xl font-light'>
              I&apos;ve listed answers to questions I often get as a frontend
              developer.
            </p>
          </div>

          {/* Tombol Navigasi Slider */}
          <div className='flex gap-2 shrink-0'>
            <button
              onClick={handlePrev}
              className='px-7 py-2.5 border border-zinc-800 bg-black font-medium text-zinc-500 transition-colors duration-200 hover:border-zinc-600 hover:text-white min-w-25 text-center text-sm'
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className='px-7 py-2.5 border border-zinc-600 bg-black font-medium text-white transition-colors duration-200 hover:bg-zinc-900 min-w-25 text-center text-sm'
            >
              Next
            </button>
          </div>
        </div>

        {/* Jendela Jangkauan Slider */}
        <div className='relative w-full overflow-visible'>
          <motion.div
            className='flex'
            style={{ gap: `${gap}px` }}
            animate={{ x: animateX }}
            transition={{ type: 'spring', damping: 30, stiffness: 100 }}
          >
            {faqData.map((item: FAQItem, index: number) => {
              const isActive = index === currentIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative flex flex-col justify-between border p-8 transition-all duration-500 min-h-115 w-full sm:w-90 shrink-0 cursor-pointer ${
                    isActive
                      ? 'border-cyan-950 bg-[#044c54]'
                      : 'border-zinc-900 bg-black hover:border-zinc-800'
                  }`}
                >
                  {/* Top Row Area: Avatar & Icon */}
                  <div className='flex items-start justify-between w-full mb-8'>
                    {isActive ? (
                      <div className='relative h-16 w-16 overflow-hidden rounded-full border border-cyan-500/30 bg-zinc-800 shadow-md'>
                        <Image
                          src={item.avatar}
                          alt='Avatar'
                          fill
                          sizes='64px'
                          className='object-cover'
                        />
                      </div>
                    ) : (
                      <div className='text-zinc-500 opacity-60'>
                        <MessageSquare size={24} strokeWidth={1.5} />
                      </div>
                    )}

                    {isActive && (
                      <div className='text-white/90'>
                        <MessageSquare size={24} strokeWidth={2} />
                      </div>
                    )}
                  </div>

                  {/* Bottom Content Area */}
                  <div className='mt-auto flex flex-col justify-end h-full'>
                    <h3
                      className={`text-2xl font-bold tracking-tight leading-snug mb-3 transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-zinc-500 opacity-80'
                      }`}
                    >
                      {item.question}
                    </h3>

                    {/* Deskripsi jawaban */}
                    {isActive && (
                      <p className='text-left text-sm font-light leading-relaxed text-zinc-200/90 mt-2 transition-all duration-300'>
                        {item.answer}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
