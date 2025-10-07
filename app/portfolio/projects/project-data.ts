// Reusable nav data + types (strict-friendly)

export type ProjectItem = {
  title: string;
  techList: string[];
  viewProjectLink: string;
  viewCodeLink: string;
  imageURL: string;
};

export const PROJECT_ITEMS: readonly ProjectItem[] = [
  {
    title: 'Mythguard1',
    techList: ['Wordpress', 'PHP'],
    viewProjectLink: 'https://morgansprojects.com',
    viewCodeLink: 'https://github.com/MorganEro/mythguard',
    imageURL: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/portfolio-images/mythguard-portfolio-image.webp?updatedAt=1748309030108`,
  },
  {
    title: 'Entertainment Web App',
    techList: ['Vite/React', 'Styled components'],
    viewProjectLink: 'https://fm-entertainment-web-app.netlify.app/',
    viewCodeLink: 'https://github.com/MorganEro/entertainment-web-app',
    imageURL: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/portfolio-images/Screen%20Shot%202024-12-28%20at%2018.36.59.png?updatedAt=1735432672199`,
  },

  {
    title: 'Mythguard2',
    techList: ['NextJs', 'TypeScript', 'Tailwind'],
    viewProjectLink: 'https://mythguard-3.vercel.app/',
    viewCodeLink: 'https://github.com/MorganEro/Mythguard-3',
    imageURL: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/portfolio-images/Screen%20Shot%202025-06-09%20at%2009.54.29.png?updatedAt=1749481059126`,
  },

  {
    title: 'E-commerce Product Page',
    techList: ['React', 'Bootstrap'],
    viewProjectLink: 'https://morganero.github.io/ecommerce-product-page/',
    viewCodeLink: 'https://github.com/MorganEro/ecommerce-product-page',
    imageURL: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/portfolio-images/Screen%20Shot%202025-01-02%20at%2013.18.43.png?updatedAt=1735845554876`,
  },
] as const;
