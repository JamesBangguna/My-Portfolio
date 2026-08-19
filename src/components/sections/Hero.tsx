'use client';

// PERBAIKAN: Menambahkan useState untuk mengontrol tampilan modal
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '700'],
});

export default function Hero() {
  // state untuk melacak tipe modal: null (tertutup), 'success', atau 'failed'
  const [modalType, setModalType] = useState<'success' | 'failed' | null>(null);

  // Fungsi simulasi klik Hire Me untuk memunculkan modal secara bergantian / acak demi testing,
  // atau Anda bisa langsung mengesetnya ke salah satu status (misal: 'success')
  const handleHireMeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Simulasi acak antara menampilkan modal Success atau Failed
    const randomStatus = Math.random() > 0.5 ? 'success' : 'failed';
    setModalType(randomStatus);
  };

  return (
    // Menggunakan flex-col agar elemen mengalir ke bawah secara natural di mobile
    <section className='relative min-h-screen w-full bg-[#02060d] overflow-hidden flex flex-col md:flex-row md:items-center pt-4 md:pt-0'>
      {/* Background Grid Pattern */}
      <div className='absolute inset-0 z-0 opacity-60 pointer-events-none mix-blend-screen'>
        <Image
          src='/Section.png'
          alt='Background Grid'
          fill
          priority
          className='object-cover object-top-left'
        />
      </div>

      {/* Main Content Wrapper */}
      <div className='max-w-7xl mx-auto w-full px-6 md:px-12 z-10 flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 items-center min-h-screen py-8 md:py-0'>
        {/* --- KOLOM ID CARD (Atas pada Mobile) --- */}
        <div className='w-full md:col-span-5 relative h-auto md:h-full flex justify-center md:block order-1 md:order-2'>
          {/* Pembungkus Animasi Jatuh dan Efek Goyang (Swinging) */}
          <motion.div
            initial={{ y: -800, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              // Efek Goyang/Ayunan setelah jatuh: berotasi ke kiri dan kanan secara berulang (loop)
              rotate: [0, -3, 2, -2, 1, 0, -1, 1, 0],
            }}
            transition={{
              y: { type: 'spring', stiffness: 45, damping: 12, delay: 0.2 },
              rotate: {
                delay: 1.1, // Mulai bergoyang setelah animasi jatuh selesai
                duration: 4,
                ease: 'easeInOut',
                repeat: Infinity, // Goyang terus-menerus
                repeatType: 'reverse',
              },
            }}
            // transformOrigin "top center" membuat poros ayunan berada di bagian klip atas ID card
            style={{ transformOrigin: 'top center' }}
            className='relative md:absolute md:top-0 md:right-0 w-64 sm:w-80 md:w-90 lg:w-100 aspect-3/4 z-30'
          >
            <Image
              src='/Frame1.png'
              alt='Edwin ID Card'
              fill
              priority
              className='object-contain object-top drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)]'
            />
          </motion.div>
        </div>

        {/* --- KOLOM TEKS (Bawah pada Mobile) --- */}
        <div className='w-full md:col-span-7 flex flex-col justify-center text-left pt-2 md:pt-0 order-2 md:order-1'>
          <span className='text-slate-300 text-sm md:text-base font-normal tracking-wide mb-4 opacity-90'>
            {"Hi, I'm James Bangguna"}
          </span>

          {/* Teks Utama */}
          <h1 className='text-[40px] sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight md:leading-none mb-6 select-none'>
            FRONT
            <span
              className={`${playfair.className} font-normal text-white uppercase italic ml-2`}
            >
              END
            </span>{' '}
            <br />
            DEVELOPER
          </h1>

          <p className='text-sm md:text-base text-slate-400 max-w-xl leading-relaxed mb-8'>
            Passionate about frontend development, I focus on crafting digital
            products that are visually polished, performance-optimized, and
            deliver a consistent experience across all platforms.
          </p>

          {/* Tombol Hire Me yang Responsif (Bekerja penuh di Mobile & Desktop) */}
          <div className='w-full md:w-auto flex'>
            {/* PERBAIKAN: Menambahkan onClick handler tanpa merubah fungsionalitas visual asli */}
            <a
              href='#contact'
              onClick={handleHireMeClick}
              className='w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#149cb0] hover:bg-[#0e7e90] text-white font-medium px-20 py-3 rounded-xs transition-colors duration-200'
            >
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
              </svg>
              Hire Me
            </a>
          </div>
        </div>
      </div>

      {/* --- LAYER POPUP MODAL (Kondisional menggunakan AnimatePresence) --- */}
      <AnimatePresence>
        {modalType && (
          <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md'>
            {/* Overlay penutup jika area luar diklik */}
            <div
              className='absolute inset-0'
              onClick={() => setModalType(null)}
            />

            {/* Kotak Modal Popup Konten */}
            {/* PERBAIKAN: Mengubah kelas bg-gradient-to-b menjadi bg-linear-to-b untuk mendukung standar Tailwind v4 */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={`relative z-10 w-full max-w-md p-8 text-center border shadow-2xl overflow-hidden rounded-xs bg-linear-to-b ${
                modalType === 'success'
                  ? 'from-teal-950/80 to-zinc-950/90 border-teal-500/30'
                  : 'from-rose-950/80 to-zinc-950/90 border-rose-500/30'
              }`}
            >
              {/* Desain lingkaran radial di background dalam card modal */}
              <div
                className={`absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none ${
                  modalType === 'success' ? 'bg-teal-400' : 'bg-rose-400'
                }`}
              />

              {/* Icon Status Keberhasilan / Kegagalan yang diambil dari folder public */}
              <div className='relative w-20 h-20 mx-auto mb-6 flex items-center justify-center select-none'>
                {modalType === 'success' ? (
                  <div className='w-full h-full rounded-full bg-[#149cb0]/10 flex items-center justify-center border border-[#149cb0]/20'>
                    {/* Gantilah '/success-icon.png' dengan path nama asset icon sukses milik Anda di folder public */}
                    <Image
                      src='/Success.png'
                      alt='Success Check'
                      width={40}
                      height={40}
                      className='object-contain'
                    />
                  </div>
                ) : (
                  <div className='w-full h-full rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20'>
                    {/* Gantilah '/failed-icon.png' dengan path nama asset icon gagal milik Anda di folder public */}
                    <Image
                      src='/Failed.png'
                      alt='Failed Cross'
                      width={60}
                      height={60}
                      className='object-contain'
                    />
                  </div>
                )}
              </div>

              {/* Teks Judul dan Deskripsi yang Rata Kanan Kiri (Text-Center / Justify-Text) */}
              <h3 className='text-2xl font-bold text-white mb-2 tracking-tight'>
                {modalType === 'success'
                  ? 'Thanks for Reaching Out!'
                  : 'Message Not Sent'}
              </h3>

              <p className='text-sm text-slate-400 max-w-xs mx-auto mb-8 leading-relaxed px-2'>
                {modalType === 'success'
                  ? "I've received your message and will get back to you shortly."
                  : "Something broke along the way. Let's try resending it."}
              </p>

              {/* Tombol aksi penutup modal yang responsif rata penuh */}
              <button
                onClick={() => setModalType(null)}
                className='w-full bg-[#149cb0] hover:bg-[#0e7e90] text-white font-medium py-3 rounded-md transition-colors duration-200 text-sm tracking-wide shadow-lg shadow-[#149cb0]/10'
              >
                {modalType === 'success' ? 'Back to Home' : 'Try Again'}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
