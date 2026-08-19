'use client';

export default function SkillsComparison() {
  const comparisonData = [
    { feature: 'React Expert', withMe: true, other: false },
    { feature: 'Pixel Perfect', withMe: true, other: false },
    { feature: 'TypeScript Proficiency', withMe: true, other: false },
    { feature: 'Clean, Maintainable Code', withMe: true, other: false },
    { feature: 'Performance Optimization', withMe: true, other: false },
    { feature: 'Responsive Website', withMe: true, other: false },
    { feature: 'UI Design Proficiency (Figma)', withMe: true, other: false },
  ];

  return (
    <section className="w-full bg-black text-white py-16 md:py-24 overflow-hidden relative bg-[url('/Section.png')] bg-cover">
      {/* Efek Glow Biru firus di background kiri - Menggunakan class canonical w-125 h-125 */}
      <div className='absolute left-0 top-1/2 -translate-y-1/2 w-125 h-125 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none z-0' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center relative z-10'>
        {/* Judul Utama */}
        <h2 className='text-3xl md:text-5xl text-white font-bold tracking-tight mb-4 text-center max-w-3xl'>
          Not Your Typical Frontend Developer
        </h2>

        {/* Teks Subtitle Atas */}
        <p className='text-xs md:text-sm text-slate-400 tracking-wide mb-12 text-center max-w-xl font-light px-2'>
          I care about how it looks, how it works, and how it feels — all at
          once
        </p>

        {/* Kontainer Tabel Utama - Efek Melayang Kokoh & Rata Kiri Kanan */}
        <div className='w-full max-w-4xl bg-black rounded-xl border border-slate-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden'>
          {/* Header Tabel (Responsive Grid System) */}
          <div className='grid grid-cols-12 items-stretch border-b border-slate-900/80'>
            {/* Mobile memakai 6 bagian, Desktop 6 bagian */}
            <div className='col-span-6 py-5 px-4 sm:px-6 text-sm md:text-base font-bold tracking-wider text-white flex items-center'>
              Skill
            </div>
            {/* Mobile menyempit ke 3 bagian agar muat teks di kiri, Desktop tetap 3 bagian */}
            <div className='col-span-3 py-5 text-center text-xs md:text-base font-bold tracking-wider text-white bg-[#0a525f] flex items-center justify-center'>
              With Me
            </div>
            {/* Mobile memakai 3 bagian, Desktop 3 bagian */}
            <div className='col-span-3 py-5 text-center text-xs md:text-base font-bold tracking-wider text-slate-400 flex items-center justify-center'>
              Other
            </div>
          </div>

          {/* Baris Data Fitur */}
          <div className='flex flex-col'>
            {comparisonData.map((item, index) => (
              <div
                key={index}
                className='grid grid-cols-12 items-stretch border-b border-slate-900/60 last:border-none'
              >
                {/* Kolom Kriteria (Rata Kiri) */}
                <div className='col-span-6 py-5 px-4 sm:px-6 text-xs md:text-sm font-medium text-slate-300 flex items-center'>
                  {item.feature}
                </div>

                {/* Kolom "With Me" (Warna Teal Teal Solid & Penuh ke Bawah) */}
                <div className='col-span-3 py-5 flex justify-center items-center bg-[#0a525f]'>
                  <div className='w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center shadow-md shrink-0'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={3.5}
                      stroke='#0a525f'
                      className='w-3 h-3 md:w-3.5 md:h-3.5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4.5 12.75l6 6 9-13.5'
                      />
                    </svg>
                  </div>
                </div>

                {/* Kolom "Other" (Tanda Silang Redup) */}
                <div className='col-span-3 py-5 flex justify-center items-center'>
                  <div className='w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#1e293b]/40 flex items-center justify-center border border-slate-800/80 shrink-0'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={3}
                      stroke='#475569'
                      className='w-2.5 h-2.5 md:w-3 md:h-3'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
