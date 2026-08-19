'use client';

import Image from 'next/image';

export default function About() {
  const features = [
    {
      icon: '/Frontend.png',
      title: 'Frontend Development',
      desc: 'I build responsive, accessible, and scalable websites using modern frontend tools and best practices.',
    },
    {
      icon: '/web.png',
      title: 'Web Performance',
      desc: 'I optimize websites for speed and efficiency to ensure smooth experiences across all devices.',
    },
    {
      icon: '/line.png',
      title: 'Component Based UI',
      desc: 'I specialize in crafting reusable UI components that are clean, maintainable, and aligned with design systems.',
    },
    {
      icon: '/mobile.png',
      title: 'Responsive Design',
      desc: 'I ensure that every layout adapts beautifully to different screen sizes — from mobile to desktop.',
    },
  ];

  // PERBAIKAN: Mengganti tautan '#' dengan URL resmi masing-masing platform
  const socialLinks = [
    { name: 'Facebook', icon: '/fb.png', url: 'https://facebook.com/' },
    { name: 'Instagram', icon: '/ig.png', url: 'https://instagram.com/' },
    { name: 'LinkedIn', icon: '/in.png', url: 'https://linkedin.com/' },
    { name: 'TikTok', icon: '/tiktok.png', url: 'https://tiktok.com/' },
  ];

  return (
    <section
      id='about'
      className='w-full bg-[#02060d] text-white py-20 md:py-28 overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-6 md:px-12'>
        {/* --- BAGIAN ATAS: Judul Utama & Sosial Media --- */}
        <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-6 border-b border-slate-800/60 pb-12 mb-16'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold max-w-3xl leading-snug tracking-tight text-left'>
            I turn ideas and designs into{' '}
            <span className='text-white'>
              functional, accessible, and performant websites{' '}
            </span>
            <span className='text-[#149cb0]'>
              using modern frontend technologies.
            </span>
          </h2>

          <div className='flex flex-col items-start md:items-end gap-4 shrink-0 w-full md:w-auto'>
            <span className='text-xs font-semibold uppercase tracking-widest text-slate-500'>
              About Me
            </span>
            <div className='flex items-center gap-3'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target='_blank' // PERBAIKAN: Membuka link di tab baru
                  rel='noopener noreferrer' // Keamanan tambahan saat membuka tab baru
                  title={social.name} // Menambah indikator teks alternatif (Axe accessibility)
                  aria-label={`Open ${social.name}`}
                  className='w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-[#149cb0] hover:bg-slate-800/50 transition-all duration-200'
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                    className='object-contain opacity-80'
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- BAGIAN BAWAH: Foto & Grid Fitur / Layanan --- */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start'>
          {/* Kolom Kiri: Foto Utama */}
          <div className='lg:col-span-5 w-full flex justify-center'>
            <div className='relative w-full max-w-md aspect-square bg-slate-950 rounded-lg overflow-hidden border border-slate-900 shadow-2xl'>
              <Image
                src='/Image1.jpg'
                alt='Edwin working on laptop'
                fill
                priority
                className='object-cover object-center'
              />
            </div>
          </div>

          {/* Kolom Kanan: Grid Fitur Keahlian */}
          <div className='lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12'>
            {features.map((item, index) => (
              <div key={index} className='flex flex-col items-start text-left'>
                {/* Pembungkus Icon */}
                <div className='w-10 h-10 flex items-center justify-center mb-4 rounded-md'>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={28}
                    height={28}
                    className='object-contain'
                  />
                </div>

                {/* Konten Teks */}
                <h3 className='text-lg font-bold text-white mb-2 tracking-wide uppercase'>
                  {item.title}
                </h3>
                <p className='text-sm text-slate-400 leading-relaxed text-justify'>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
