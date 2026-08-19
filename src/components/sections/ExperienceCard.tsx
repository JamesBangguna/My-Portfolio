'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BriefcaseBusiness } from 'lucide-react';

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  logo: string;
  description: string;
}

export default function ExperienceCard({
  company,
  role,
  period,
  logo,
  description,
}: ExperienceCardProps) {
  return (
    <motion.article
      className='
        group
        relative
        flex
        h-full
        min-h-105
        flex-col
        justify-between
        overflow-hidden
        border
        border-zinc-900
        bg-black
        p-8
        transition-all
        duration-300
      '
    >
      {/* Left Accent Bar */}
      <div
        className='
          absolute
          left-0
          top-8
          h-8
          w-0.75
          bg-cyan-400
        '
      />

      {/* Top Section: Role, Period & Briefcase Icon */}
      <div>
        <div className='flex items-start justify-between'>
          <div>
            <h3 className='text-xl font-bold tracking-tight text-white md:text-2xl'>
              {role}
            </h3>
            <p className='mt-2 text-sm font-medium text-zinc-500'>{period}</p>
          </div>

          <div className='text-zinc-400 opacity-80'>
            <BriefcaseBusiness size={20} strokeWidth={1.5} />
          </div>
        </div>

        {/* Divider Line */}
        <hr className='my-6 border-zinc-900' />

        {/* Description */}
        <p className='text-sm leading-relaxed text-zinc-500 md:text-base'>
          {description}
        </p>
      </div>

      {/* Bottom Section: Company Logo dari folder public (Warna Asli) */}
      <div className='mt-8 pt-4'>
        {logo ? (
          <div className='relative h-10 w-32 transition-all duration-300'>
            <Image
              src={logo}
              alt={company}
              fill
              className='object-contain object-left'
              sizes='(max-w-768px) 100vw, 128px'
            />
          </div>
        ) : (
          <span className='text-lg font-bold tracking-wider text-zinc-400'>
            {company}
          </span>
        )}
      </div>
    </motion.article>
  );
}
