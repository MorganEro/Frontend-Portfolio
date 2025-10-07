'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavItem } from './nav-data';
import { JSX } from 'react';

type Props = {
  items: readonly NavItem[];
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  onItemClick?: () => void;
};

export function NavLinks({
  items,
  orientation = 'horizontal',
  className,
  onItemClick,
}: Props): JSX.Element {
  const pathname = usePathname();

  const isActive = (href: string): boolean => {
    // exact match for '/', prefix for other routes
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const baseItem =
    'font-normal transition-colors hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60 uppercase';
  const activeItem = 'text-brand-orange';

  if (orientation === 'vertical') {
    return (
      <ul className={`${className}`}>
        {items.map(item => (
          <li
            key={item.href}
            className="">
            <Link
              href={item.href}
              className={`block px-4 py-3 text-center ${baseItem} ${
                isActive(item.href) ? activeItem : ''
              }`}
              aria-current={isActive(item.href) ? 'page' : undefined}
              onClick={onItemClick}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  // horizontal
  return (
    <ul className={`flex items-center gap-8 ${className ?? ''}`}>
      {items.map(item => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={`${baseItem} ${isActive(item.href) ? activeItem : ''}`}
            aria-current={isActive(item.href) ? 'page' : undefined}
            onClick={onItemClick}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
