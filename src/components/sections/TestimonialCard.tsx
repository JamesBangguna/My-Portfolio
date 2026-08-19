'use client';

import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

export interface TestimonialCardProps {
  id: number;
  title?: string;
  subtitle?: string;
  review: string;
  author: string;
  position: string;
  avatar: string;
  rating: number;
  featured?: boolean;
  horizontal?: boolean;
}

export default function TestimonialCard({
  title,
  subtitle,
  review,
  author,
  position,
  avatar,
  rating,
  featured,
  horizontal,
}: TestimonialCardProps) {
  return (
    <div
      className={`
        group relative flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-900 bg-black p-6 transition-all duration-300 hover:border-zinc-800
        ${featured ? 'h-full min-h-137.5 border-cyan-900/40 bg-linear-to-b from-cyan-950/10 to-black lg:p-8' : ''}
        ${horizontal ? 'md:flex-col justify-between' : ''}
      `}
    >
      {/* Top Content Area */}
      <div>
        {/* Dynamic Big Title (8X, 3X) */}
        {title && (
          <h3 className='text-3xl font-extrabold tracking-tight text-white lg:text-4xl'>
            {title}
          </h3>
        )}

        {/* Subtitle */}
        {subtitle && (
          <h4 className='mt-2 text-base font-semibold tracking-wide text-white'>
            {subtitle}
          </h4>
        )}

        {/* Star Ratings */}
        <div
          className={`flex items-center gap-1 ${title || subtitle ? 'mt-3' : 'mt-1'}`}
        >
          {Array.from({ length: Math.min(rating, 5) }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className='fill-amber-500 text-amber-500'
              strokeWidth={1}
            />
          ))}
        </div>

        {/* Review Message - Rata Kiri Kanan */}
        <p className='mt-5 text-justify text-sm leading-relaxed text-zinc-400 md:text-base opacity-90'>
          {review}
        </p>
      </div>

      {/* Bottom Profile Area & Quote Icon */}
      <div className='mt-8 flex items-end justify-between pt-4'>
        <div className='flex items-center gap-3'>
          <div className='relative h-10 w-10 overflow-hidden rounded-full border border-zinc-800 bg-zinc-900'>
            <Image
              src={avatar}
              alt={author}
              fill
              sizes='40px'
              className='object-cover'
            />
          </div>
          <div>
            <h5 className='text-sm font-bold text-white'>{author}</h5>
            <p className='text-xs text-zinc-500'>{position}</p>
          </div>
        </div>

        {/* Aesthetic Quote Icon Right-Bottom */}
        <div className='text-zinc-800 opacity-40 transition-colors duration-300 group-hover:text-zinc-700'>
          <Quote size={32} className='rotate-180 fill-current' />
        </div>
      </div>
    </div>
  );
}
