'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Ticker() {
  // Daftar teks yang akan diulang-ulang agar animasi loop terlihat tanpa putus
  const tickerItems = [
    'App Development',
    'Website Development',
    'Pixel Perfect',
    'React Expert',
  ];

  // Menggandakan item array agar memenuhi layar saat bergeser tanpa menyisakan ruang kosong
  const duplicatedItems = [
    ...tickerItems,
    ...tickerItems,
    ...tickerItems,
    ...tickerItems,
  ];

  return (
    <section className='w-full bg-[#149cb0] py-4 md:py-5 overflow-hidden select-none flex items-center border-y border-cyan-300/20'>
      <div className='flex whitespace-nowrap min-w-full'>
        <motion.div
          // Menggerakkan elemen horizontal dari 0 ke -50% untuk loop yang tak terbatas
          animate={{ x: [0, '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 25, // Sesuaikan angka ini untuk mempercepat/memperlambat jalannya teks
            repeat: Infinity,
          }}
          className='flex items-center gap-12 pr-12 text-white font-bold text-xl sm:text-2xl md:text-3xl tracking-wide uppercase'
        >
          {duplicatedItems.map((text, index) => (
            <div key={index} className='flex items-center gap-12'>
              <span>{text}</span>

              {/* Icon pembatas lingkaran bintang yang berputar sendiri */}
              {/* PERBAIKAN: Mengganti flex-shrink-0 menjadi shrink-0 sesuai rekomendasi linter */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  ease: 'linear',
                  duration: 8,
                  repeat: Infinity,
                }}
                className='relative w-8 h-8 sm:w-10 sm:h-10 shrink-0'
              >
                <Image
                  src='/Group.png'
                  alt='Star Decoration'
                  fill
                  className='object-contain opacity-50'
                />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
