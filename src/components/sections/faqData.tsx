/* ================================
   FAQ Types & Data Source
================================ */

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  avatar: string;
}

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'Do you work on freelance or remote projects?',
    answer:
      'Yes, I am fully available for freelance gigs and remote full-time positions. I have extensive experience collaborating asynchronously across different time zones, managing deliverables efficiently, and maintaining clear communication.',
    avatar: '/faq.png',
  },
  {
    id: 2,
    question: 'What technologies do you work with?',
    answer:
      'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
    avatar: '/faq.png',
  },
  {
    id: 3,
    question: 'Can you convert Figma or Sketch designs into code?',
    answer:
      'Absolutely. I specialize in turning design mockups into pixel-perfect, responsive, and highly performant web applications. I ensure semantic code, clean architecture, and smooth CSS transitions based on your exact specifications.',
    avatar: '/faq.png',
  },
  {
    id: 4,
    question: 'Do you collaborate with backend developers or teams?',
    answer:
      'Yes, I work seamlessly inside cross-functional teams. I have solid experience integrating RESTful APIs and GraphQL, utilizing Git workflows, and communicating smoothly with backend engineers to ensure complete end-to-end functionality.',
    avatar: '/faq.png',
  },
];

export default faqData;
