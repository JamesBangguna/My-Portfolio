// PERBAIKAN: Menambahkan definisi interface agar TypeScript mengenali tipe data 'Experience'
export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Airbnb',
    role: 'Frontend Developer',
    period: '2025 - Present',
    location: 'San Francisco, USA',
    logo: '/airbnb.png',
    description:
      'Built responsive web interface using modern framework like react.js, ensuring seamless integration with backend systems. Optimized performanced, implemented accessible design, and delivered clean, reusable code to enhance user experience and scalability.',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 2,
    company: 'Dribbble',
    role: 'Frontend Developer',
    period: '2025 - Present',
    location: 'Remote',
    logo: '/driblle.png', // Catatan: pastikan file ini sesuai di folder public
    description:
      'Built responsive web interface using modern framework like react.js, ensuring seamless integration with backend systems. Optimized performanced, implemented accessible design, and delivered clean, reusable code to enhance user experience and scalability.',
    skills: ['React', 'JavaScript', 'SCSS', 'Figma', 'Responsive Design'],
  },
  {
    id: 3,
    company: 'Zoom',
    role: 'Frontend Developer',
    period: '2025 - Present',
    location: 'California, USA',
    logo: '/zod.png',
    description:
      'Built responsive web interface using modern framework like react.js, ensuring seamless integration with backend systems. Optimized performanced, implemented accessible design, and delivered clean, reusable code to enhance user experience and scalability.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Accessibility', 'UI/UX'],
  },
  {
    id: 4,
    company: 'Spotify',
    role: 'Frontend Developer',
    period: '2025 - Present',
    location: 'Stockholm, Sweden',
    logo: '/spotify.png',
    description:
      'Built responsive web interface using modern framework like react.js, ensuring seamless integration with backend systems. Optimized performanced, implemented accessible design, and delivered clean, reusable code to enhance user experience and scalability.',
    skills: [
      'React',
      'Redux',
      'Styled Components',
      'Performance',
      'API Integration',
    ],
  },
  {
    id: 5,
    company: 'Netflix',
    role: 'Frontend Developer',
    period: '2025 - Present',
    location: 'Los Angeles, USA',
    logo: '/netflix.png',
    description:
      'Built responsive web interface using modern framework like react.js, ensuring seamless integration with backend systems. Optimized performanced, implemented accessible design, and delivered clean, reusable code to enhance user experience and scalability.',
    skills: ['React', 'TypeScript', 'Design System', 'Webpack', 'Testing'],
  },
  {
    id: 6,
    company: 'Google',
    role: 'Frontend Developer',
    period: '2025 - Present',
    location: 'Mountain View, USA',
    logo: '/google.png',
    description:
      'Built responsive web interface using modern framework like react.js, ensuring seamless integration with backend systems. Optimized performanced, implemented accessible design, and delivered clean, reusable code to enhance user experience and scalability.',
    skills: ['JavaScript', 'HTML', 'CSS', 'Git', 'REST API'],
  },
];
