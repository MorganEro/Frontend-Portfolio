import { NAV_ITEMS } from '@/components/navigation/nav-data';
import { NavLinks } from '@/components/navigation/NavLinks';
import { SocialLinks } from '@/components/navigation/SocialLinks';
import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

export default function SiteFooter(): JSX.Element {
  return (
    <footer
      role="contentinfo"
      className="bg-brand-graydark text-brand-bg">
      <div className="mx-auto grid grid-cols-1 gap-6 md:gap-12 px-6 py-12 md:flex md:items-center max-w-6xl xl:max-w-7xl md:px-10">
        {/* Left: Logo */}
        <div className="flex items-center justify-center md:justify-start">
          <Link
            href="/"
            aria-label="Go to home"
            className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Site logo"
              width={36}
              height={36}
              priority
            />
            <span className="sr-only">Home</span>
          </Link>
        </div>

        {/* Middle: Nav */}
        <nav
          aria-label="Footer"
          className="flex md:w-max justify-center md:mr-auto">
          <NavLinks
            items={NAV_ITEMS}
            className="justify-center flex-col md:flex-row"
          />
        </nav>

        {/* Right: Socials */}
        <SocialLinks
          size={20}
          className="justify-center md:justify-end"
        />
      </div>
    </footer>
  );
}
