'use client';

import { motion } from 'framer-motion';
import TestimonialCard, { type TestimonialCardProps } from './TestimonialCard';

// Data disesuaikan persis seperti pola bento grid pada gambar contoh
const testimonialData: TestimonialCardProps[] = [
  {
    id: 1,
    title: '8X',
    subtitle: 'More users converted after redesign',
    review:
      'Working with Edwin has been a fantastic experience. His attention to detail and commitment to quality are evident in every project. He consistently delivers results that exceed expectations, making him a valuable asset to any team.',
    author: 'Pablo Stanley',
    position: 'Product Manager at Finovate',
    avatar: '/pablo-1.png',
    rating: 5,
    featured: true,
  },
  {
    id: 2,
    title: '3X',
    subtitle: 'Improved user engagement and sign-ups',
    review:
      "Edwin's expertise in frontend development is remarkable. He brings creativity and innovation to the table, ensuring that every project is not only functional but also visually appealing.",
    author: 'Pablo Stanley',
    position: 'Product Manager at Finovate',
    avatar: '/pablo.png',
    rating: 5,
    horizontal: true,
  },
  {
    id: 3,
    review:
      "Edwin's work ethic and dedication are truly inspiring. He approaches challenges with a positive attitude and consistently finds effective solutions.",
    author: 'Pablo Stanley',
    position: 'Product Manager at Finovate',
    avatar: '/pablo-2.png',
    rating: 5,
  },
  {
    id: 4,
    review:
      'Edwin has a unique ability to transform complex ideas into user-friendly designs. His contributions have significantly enhanced our projects.',
    author: 'Pablo Stanley',
    position: 'Product Manager at Finovate',
    avatar: '/pablo-3.png',
    rating: 5,
  },
];

export default function Testimonial() {
  return (
    <section id='testimonials' className='bg-black py-24 text-white'>
      <div className='container mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb-16 text-center'
        >
          <h2 className='text-4xl font-extrabold tracking-tight text-white md:text-5xl'>
            Trusted Voices
          </h2>
          {/* Solusi ESLint: Mengganti karakter ' dengan &apos; */}
          <p className='mt-4 text-base text-zinc-500 max-w-xl mx-auto'>
            Here&apos;s what people say about working with me — across projects,
            teams, and timelines.
          </p>
        </motion.div>

        {/* Bento Grid Core Container (Menggunakan gap-3 agar rapat sesuai gambar) */}
        <div className='grid grid-cols-1 gap-3 lg:grid-cols-3'>
          {/* Kolom Kiri: Kartu Panjang / Featured Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='lg:col-span-1'
          >
            <TestimonialCard {...testimonialData[0]} />
          </motion.div>

          {/* Kolom Kanan: Jarak gap disesuaikan dari gap-6 menjadi gap-3 */}
          <div className='flex flex-col gap-3 lg:col-span-2'>
            {/* Bagian Atas Kolom Kanan (Kartu 3X) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <TestimonialCard {...testimonialData[1]} />
            </motion.div>

            {/* Bagian Bawah Kolom Kanan: Menggunakan gap-3 */}
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
              {testimonialData.slice(2, 4).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TestimonialCard {...item} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
