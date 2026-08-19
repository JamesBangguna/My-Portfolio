'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Konfigurasi data media sosial satu per satu secara spesifik
  const socialPlatforms = [
    {
      name: 'facebook',
      url: 'https://facebook.com/',
      icon: '/fb.png',
    },
    {
      name: 'instagram',
      url: 'https://instagram.com/',
      icon: '/ig.png', // Diambil langsung dari public/instagram.png
    },
    {
      name: 'linkedin',
      url: 'https://linkedin.com/in/',
      icon: '/in.png', // Diambil langsung dari public/linkedin.png
    },
    {
      name: 'tiktok',
      url: 'https://tiktok.com/',
      icon: '/tiktok.png', // Diambil langsung dari public/tiktok.png
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi jika ada field yang kosong
    if (!formData.name || !formData.email || !formData.message) {
      alert('Harap isi semua bidang form sebelum mengirim pesan!');
      return;
    }

    // Jika form terisi semua
    alert(`Terima kasih ${formData.name}, pesan Anda berhasil dikirim!`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer className='relative bg-black text-white py-20 overflow-hidden min-h-screen flex items-center'>
      {/* Background Image Grafis Garis Teal di Bagian Bawah */}
      <div className='absolute inset-x-0 bottom-0 h-2/3 w-full opacity-100 pointer-events-none select-none'>
        <Image
          src='/Frame2.png'
          alt='Background Texture'
          fill
          priority
          className='object-cover object-bottom'
          unoptimized
        />
      </div>

      {/* Konten Utama Container */}
      <div className='relative z-10 container mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start w-full'>
        {/* Kolom Kiri: Form Konten */}
        <div className='bg-black/40 backdrop-blur-sm border border-zinc-900 p-8 md:p-12 w-full max-w-xl justify-self-start'>
          <h2 className='text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight'>
            Let&apos;s{' '}
            <span className='text-[#3bc1d1]'>Build Something Great</span>
          </h2>
          <p className='text-zinc-400 font-light text-sm md:text-base mb-8'>
            Got an idea, a project, or just want to connect? I&apos;m always
            open to new conversations.
          </p>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-zinc-300 mb-2'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'
                className='w-full bg-zinc-950/80 border border-zinc-800 px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-[#3bc1d1] transition-colors duration-200 text-sm'
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-zinc-300 mb-2'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
                className='w-full bg-zinc-950/80 border border-zinc-800 px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-[#3bc1d1] transition-colors duration-200 text-sm'
              />
            </div>

            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-zinc-300 mb-2'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder='Enter your message'
                className='w-full bg-zinc-950/80 border border-zinc-800 px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-[#3bc1d1] transition-colors duration-200 text-sm resize-none'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-white text-black font-semibold py-3.5 flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors duration-200 shadow-md text-sm'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                />
              </svg>
              Send Message
            </button>
          </form>
        </div>

        {/* Kolom Kanan: Informasi Kontak & Sosial Media */}
        {/* PERBAIKAN 1: Mengubah lg:min-h-[550px] menjadi lg:min-h-137.5 */}
        <div className='flex flex-col justify-between h-full lg:min-h-137.5 lg:justify-self-end w-full max-w-md pt-4'>
          <div className='space-y-10'>
            {/* Bagian Alamat */}
            <div>
              <h4 className='text-zinc-400 font-medium tracking-wider text-sm mb-2 uppercase'>
                Address
              </h4>
              <p className='text-zinc-300 font-light text-base border-b border-zinc-900 pb-6'>
                Poso-Sulawesi tengah, Indonesia
              </p>
            </div>

            {/* Bagian Kontak */}
            <div>
              <h4 className='text-zinc-400 font-medium tracking-wider text-sm mb-2 uppercase'>
                Contact
              </h4>
              <p className='text-zinc-300 font-light text-base border-b border-zinc-900 pb-6'>
                (+62) 81342587300
              </p>
            </div>

            {/* Bagian Sosial Media */}
            <div>
              <h4 className='text-zinc-400 font-medium tracking-wider text-sm mb-4 uppercase'>
                Social Media
              </h4>
              <div className='flex gap-3'>
                {socialPlatforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    title={platform.name} // PERBAIKAN 2: Memberikan title untuk validasi discernable text
                    aria-label={`Visit our ${platform.name} page`} // PERBAIKAN 3: Aksesibilitas screen reader
                    className='w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-200'
                  >
                    <Image
                      src={platform.icon}
                      alt={`${platform.name} icon`}
                      width={28}
                      height={20}
                      className='opacity-80 hover:opacity-100 transition-opacity object-contain'
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Teks Dekoratif Besar "GET IN TOUCH" */}
          <div className='mt-16 lg:mt-auto'>
            <h1 className='text-5xl md:text-6xl font-black tracking-tight text-white/95 uppercase leading-none select-none text-left lg:text-right'>
              Get In Touch
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
