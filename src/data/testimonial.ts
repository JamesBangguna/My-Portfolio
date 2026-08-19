// PERBAIKAN: Menambahkan definisi interface agar TypeScript mengenali tipe data 'Testimonial'
export interface Testimonial {
  id: number;
  title?: string; // Menggunakan tanda tanya (?) karena ada beberapa data yang isinya kosong ('')
  subtitle?: string; // Menggunakan tanda tanya (?) agar bersifat opsional
  review: string;
  author: string;
  position: string;
  avatar: string;
  rating: number;
  featured?: boolean; // Opsional karena hanya ada di id: 1
  horizontal?: boolean; // Opsional karena hanya ada di id: 2
}

export const testimonials: Testimonial[] = [
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
    title: '',
    subtitle: '',
    review:
      "Edwin's work ethic and dedication are truly inspiring. He approaches challenges with a positive attitude and consistently finds effective solutions.",
    author: 'Pablo Stanley',
    position: 'Product Manager at Finovate',
    avatar: '/pablo-1.png',
    rating: 5,
  },
  {
    id: 4,
    title: '',
    subtitle: '',
    review:
      'Edwin has a unique ability to transform complex ideas into user-friendly designs. His contributions have significantly enhanced our projects.',
    author: 'Pablo Stanley',
    position: 'Product Manager at Finovate',
    avatar: '/pablo-1.png',
    rating: 5,
  },
];
