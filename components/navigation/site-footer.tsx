import Link from 'next/link';
import Image from 'next/image';
import { NAV_ITEMS } from '@/components/navigation/nav-data';
import { NavLinks } from '@/components/navigation/NavLinks';
import { SocialLinks } from '@/components/navigation/SocialLinks';
import { JSX } from 'react';
import CallToAction from './CallToAction';

export default function SiteFooter(): JSX.Element {
  return (
    <footer
      role="contentinfo"
      className="bg-brand-graydark text-brand-bg">
      <CallToAction />
      <div className="mx-auto grid grid-cols-1 gap-6 px-6 py-12 md:grid-cols-3 md:items-center max-w-6xl xl:max-w-7xl md:px-10">
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
          className="flex md:w-max justify-center">
          <NavLinks
            items={NAV_ITEMS}
            className="justify-center flex-col md:flex-row"
          />
        </nav>

        {/* Right: Socials */}
        <SocialLinks
          githubUrl="https://github.com/your-handle"
          linkedinUrl="https://www.linkedin.com/in/your-handle"
          size={20}
          className="justify-center md:justify-end"
        />
      </div>
    </footer>
  );
}
