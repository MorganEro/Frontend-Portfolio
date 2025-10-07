'use client';

import Link from 'next/link';
import Image from 'next/image';
import { JSX, useState } from 'react';
import { Menu } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { NAV_ITEMS } from '@/components/navigation/nav-data';
import { NavLinks } from '@/components/navigation/NavLinks';
import { SocialLinks } from '@/components/navigation/SocialLinks';
import { IoMdClose } from 'react-icons/io';
import Container from '../layout/Container';

export default function SiteHeader(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 bg-brand-bg text-brand-graydark">
      <Container>
        <div className="mx-auto flex max-w-7xl items-center gap-3 py-3 md:py-4">
          {/* Left: Logo */}
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

          {/* Center: Desktop nav */}
          <nav
            aria-label="Main"
            className="ml-auto hidden md:block">
            <NavLinks items={NAV_ITEMS} />
          </nav>

          {/* Right: Socials (desktop) + Mobile trigger */}
          <div className="ml-auto flex items-center gap-2 md:hidden">
            {/* Mobile popover menu */}
            <Popover
              open={open}
              onOpenChange={setOpen}>
              <PopoverTrigger
                className="md:hidden inline-flex items-center justify-center p-2"
                aria-label="Open menu"
                aria-expanded={open}>
                {!open ? (
                  <Menu className="w-6 h-6" />
                ) : (
                  <IoMdClose className="w-6 h-6 text-muted-foreground" />
                )}
              </PopoverTrigger>
              <PopoverContent
                align="end"
                sideOffset={8}
                className="w-56 p-0 border-0 md:hidden">
                <div className="overflow-hidden bg-brand-graydark text-brand-bg py-6">
                  <nav aria-label="Mobile">
                    <NavLinks
                      items={NAV_ITEMS}
                      orientation="vertical"
                      onItemClick={() => setOpen(false)}
                    />
                  </nav>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </Container>
    </header>
  );
}
