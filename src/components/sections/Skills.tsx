'use client';

import Image from 'next/image';

export default function Skills() {
  const tools = [
    { name: 'HTML', percentage: '100%', icon: '/HTML.png' },
    { name: 'CSS', percentage: '90%', icon: '/CSS.png' },
    { name: 'Javascript', percentage: '90%', icon: '/Js.png' },
    { name: 'Typescript', percentage: '80%', icon: '/Ts.png' },
    { name: 'Sequelize', percentage: '80%', icon: '/Sequalize.png' },
    { name: 'Mongo DB', percentage: '75%', icon: '/Mongo.png' },
  ];

  return (
    <section
      id='skills'
      className='w-full bg-black text-white py-12 md:py-16 overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-6 md:px-12'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start'>
          {/* --- KOLOM KIRI: Judul, Deskripsi & Tombol --- */}
          <div className='lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-24'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4'>
              Tools I Use to Build
            </h2>
            <p className='text-sm md:text-base text-slate-400 leading-relaxed mb-6 max-w-md'>
              From code to design — here&apos;s the tech that helps me turn
              ideas into real products.
            </p>

            {/* Tombol Send Message */}
            <a
              href='#contact'
              className='w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-md bg-[#149cb0] text-white font-medium hover:bg-[#118596] transition-all duration-200'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                />
              </svg>
              Send Message
            </a>
          </div>

          {/* --- KOLOM KANAN: Daftar List Skill & Garis Vertikal --- */}
          <div className='lg:col-span-7 w-full flex flex-col lg:border-l lg:border-white lg:pl-8'>
            {tools.map((tool, index) => (
              <div
                key={index}
                className='flex items-center justify-between py-4 border-b border-slate-800/80 last:border-none group hover:bg-slate-900/20 px-2 transition-all duration-200'
              >
                {/* Bagian Kiri: Ikon & Nama */}
                <div className='flex items-center gap-4'>
                  <div className='relative w-9 h-9 flex items-center justify-center shrink-0'>
                    <Image
                      src={tool.icon}
                      alt={`${tool.name} icon`}
                      width={32}
                      height={32}
                      className='object-contain'
                    />
                  </div>
                  <span className='text-sm md:text-base font-medium tracking-wide text-slate-300 group-hover:text-white transition-colors'>
                    {tool.name}
                  </span>
                </div>

                {/* Bagian Kanan: Persentase Angka */}
                <div className='text-right'>
                  <span className='text-sm md:text-base font-bold tracking-wider text-white'>
                    {tool.percentage}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
