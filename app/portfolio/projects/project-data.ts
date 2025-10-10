// Reusable nav data + types (strict-friendly)

export type ProjectItem = {
  title: string;
  techList: string[];
  viewProjectLink: string;
  viewCodeLink: string;
  imageURL: string;
  description: string;
  background: string;
  previews: string[];
};

export const PROJECT_ITEMS: readonly ProjectItem[] = [
  {
    title: 'Entertainment Web App',
    techList: ['Vite/React', 'Styled components'],
    viewProjectLink: 'https://fm-entertainment-web-app.netlify.app/',
    viewCodeLink: 'https://github.com/MorganEro/entertainment-web-app',
    imageURL: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/portfolio-images/Screen%20Shot%202024-12-28%20at%2018.36.59.png?updatedAt=1735432672199`,
    description:
      'A responsive web application built as part of a Frontend Mentor challenge, designed to improve practical UI and development skills. The app allows users to browse, bookmark, and manage entertainment content across devices, showcasing a strong focus on layout, accessibility, and responsiveness.',
    background:
      'This challenge helped me refine my frontend workflow by building a site from a detailed design brief, complete with mobile and desktop views. It was a great opportunity to practice real-world problem solving and responsive design principles. I later expanded the project into a fullstack version as an extra challenge.',
    previews: [
      `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/portfolio-images/Screen%20Shot%202024-12-16%20at%2013.25.53.png?updatedAt=1760116675414`,
      `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/portfolio-images/Screen%20Shot%202024-12-16%20at%2013.26.25.png?updatedAt=1760116674406`,
    ],
  },

  {
    title: 'Mythguard2',
    techList: ['NextJs', 'TypeScript', 'Tailwind'],
    viewProjectLink: 'https://mythguard-3.vercel.app/',
    viewCodeLink: 'https://github.com/MorganEro/Mythguard-3',
    imageURL: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/portfolio-images/Screen%20Shot%202025-06-09%20at%2009.54.29.png?updatedAt=1749481059126`,
    description:
      'A modern e-commerce platform built with Next.js 15, featuring a dynamic product catalog, secure user authentication, and a full admin dashboard. This project highlights advanced React patterns, TypeScript best practices, and scalable application design.',
    background:
      'After learning Next.js and TypeScript, I decided to reimagine my original Mythguard concept with a cleaner, more professional edge. I integrated Clerk for authentication and payments, shadcn/ui for component styling, and Prisma with Supabase for data management. This project represents my evolution from simple CMS work to modern fullstack development.',
    previews: [
      `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/portfolio-images/mythguard-2screenshot2.png?updatedAt=1760116608999`,
      `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/portfolio-images/mythguard-2screenshot.png?updatedAt=1760116609039`,
    ],
  },

  {
    title: 'Happy Crafts',
    techList: ['NextJs', 'TypeScript', 'Tailwind'],
    viewProjectLink: 'https://happy-crafts.vercel.app/',
    viewCodeLink: 'https://github.com/MorganEro/Happy-Crafts',
    imageURL: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/portfolio-images/happycraftsscreenshot4?updatedAt=1760118114845`,
    description:
      'Built with Next.js, TypeScript, Prisma, Supabase, React Query, React Hook Form, and Zod, this project delivers a smooth, responsive, and performant shopping experience. It includes product galleries, favorites, reviews, and admin editing tools for full control.',
    background:
      'After seeing my Mythguard projects, my partner asked me to create a platform to showcase her crafting projects. It was a rewarding experience working with a real client, gathering feedback, iterating on designs, and tailoring features to match her vision. She’s thrilled with the results, and I gained valuable experience in client communication and collaborative iteration.',
    previews: [
      `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/portfolio-images/happycraftScreenshot3.png?updatedAt=1760116608754`,
      `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/portfolio-images/happycraftScreenshot2.png`,
    ],
  },
  {
    title: 'Mythguard1',
    techList: ['Wordpress', 'PHP'],
    viewProjectLink: 'https://morgansprojects.com',
    viewCodeLink: 'https://github.com/MorganEro/mythguard',
    imageURL: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/portfolio-images/mythguard-portfolio-image.webp?updatedAt=1748309030108`,
    description:
      'This project was built with WordPress and PHP, then deployed through DreamHost. I developed a custom theme, integrated a calendar, added OpenStreetMap functionality, and implemented a Lightbox gallery to highlight the artwork and world-building visuals.',
    background:
      'I created this project while applying for a frontend position that required WordPress and PHP experience. To strengthen my skills, I took a Udemy course and used this build to demonstrate what I’d learned. The “Mythguard” theme let me explore creative storytelling and experiment with AI-generated imagery, blending design and technical skills in a fun way.',
    previews: [
      `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/portfolio-images/mythguard1screenshot1.png?updatedAt=1760116609624`,
      `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/portfolio-images/mythguard1screenshot2.png?updatedAt=1760116609334`,
    ],
  },
] as const;

//https://ik.imagekit.io/3wvmuwil3/portfolio-images/happycraftsscreenshot4?updatedAt=1760118114845
