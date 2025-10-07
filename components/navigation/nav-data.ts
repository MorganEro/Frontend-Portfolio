// Reusable nav data + types (strict-friendly)
export type NavItem = {
  href: '/' | '/portfolio' | '/contact';
  label: 'Home' | 'Portfolio' | 'Contact Me';
};

export const NAV_ITEMS: readonly NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact Me' },
] as const;
