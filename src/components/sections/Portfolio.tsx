'use client';

import Image from 'next/image';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Portofolio 1',
      year: '2025',
      imageSrc: '/Portfolio-1.png',
      alt: 'Willy Nielsen Portfolio Design',
    },
    {
      id: 2,
      title: 'Portofolio 2',
      year: '2025',
      imageSrc: '/Portfolio-2.png',
      alt: 'Building Fast & Interactive Web Experiences Design',
    },
    {
      id: 3,
      title: 'Portofolio 3',
      year: '2025',
      imageSrc: '/Portfolio-3.png',
      alt: 'Delon Lorenzo Portfolio Design',
    },
  ];

  return (
    <section className='w-full bg-black text-white py-16 md:py-24 flex flex-col items-center justify-center'>
      <div className='max-w-7xl w-full px-4 sm:px-6 md:px-12 flex flex-col items-center'>
        {/* Judul Utama */}
        <h2 className='text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center max-w-3xl'>
          Bridging Design and Development
        </h2>

        {/* Subtitle Deskripsi */}
        <p className='text-xs md:text-sm text-zinc-400 tracking-wide mb-16 text-center max-w-2xl font-light px-2 leading-relaxed'>
          These are real projects where I implemented frontend interfaces with
          precision and attention to detail.
        </p>

        {/* Grid Konten Portofolio - Kanan Kiri Seimbang */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='flex flex-col group cursor-pointer'
            >
              {/* Kontainer Gambar dengan Efek Hover Halus */}
              {/* PERBAIKAN: Mengubah aspect-[4/3] menjadi aspect-4/3 */}
              <div className='relative w-full aspect-4/3 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/50 transition-all duration-300 group-hover:border-zinc-700 group-hover:scale-[1.01] shadow-lg'>
                <Image
                  src={project.imageSrc}
                  alt={project.alt}
                  fill
                  sizes='(max-w-768px) 100vw, 33vw'
                  className='object-cover object-top transition-transform duration-500'
                  priority={project.id === 1}
                />
              </div>

              {/* Detail Teks di Bawah Gambar */}
              <div className='mt-5 flex flex-col items-start px-1'>
                <h3 className='text-base md:text-lg font-semibold text-zinc-200 transition-colors duration-200 group-hover:text-white'>
                  {project.title}
                </h3>
                <span className='text-xs md:text-sm text-zinc-500 mt-1 font-light'>
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
