'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skill', href: '#skills' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* --- NAVBAR CONTAINER --- */}
      <div className='fixed top-0 z-50 w-full flex justify-center p-4 pointer-events-none'>
        {/* Kapsul Navbar Melayang di Tengah */}
        <nav
          className={`
          pointer-events-auto
          relative flex items-center justify-center
          w-full max-w-lg h-12 px-6
          rounded-full border border-white/5 backdrop-blur-md
          transition-all duration-300
          ${scrolled ? 'bg-[#031316]/80 shadow-lg shadow-black/40 border-white/10' : 'bg-[#031316]/40'}
        `}
        >
          {/* Logo Brand di Sisi Kiri Dalam Kapsul */}
          <Link
            href='/'
            className='absolute left-6 text-sm font-bold text-white tracking-wide'
          >
            James
          </Link>

          {/* Menu Desktop (Rapat Berdekatan di Tengah) */}
          <div className='hidden items-center gap-x-5 md:flex'>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className='text-xs font-medium text-slate-300 transition-colors duration-200 hover:text-white'
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Tombol Hamburger Mobile */}
          <button
            onClick={() => setIsOpen(true)}
            className='absolute right-6 block text-white focus:outline-none md:hidden'
            aria-label='Open Menu'
          >
            <Menu className='h-5 w-5' />
          </button>
        </nav>
      </div>

      {/* --- MOBILE FULLSCREEN OVERLAY MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 z-50 flex flex-col bg-[#02060d]/10 backdrop-blur-2xl md:hidden bg-no-repeat bg-cover bg-center'
            style={{ backgroundImage: "url('/Section (1).jpg')" }} // Memakai background image saat menu aktif
          >
            {/* Header Menu Mobile */}
            <div className='flex items-center justify-between px-8 py-6'>
              <span className='text-xl font-bold text-white'>James</span>
              <button
                onClick={() => setIsOpen(false)}
                className='text-white focus:outline-none'
                aria-label='Close Menu'
              >
                <X className='h-6 w-6' />
              </button>
            </div>

            {/* Link Navigasi Mobile */}
            <div className='flex flex-col gap-6 px-8 pt-12'>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='text-xl font-semibold text-slate-200 transition-colors duration-200 hover:text-cyan-400'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
