'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';
import { Separator } from '../ui/separator';

function CallToAction() {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';

  if (isContactPage) return null;

  return (
    <section className="grid md:[grid-template-columns:44%_1fr_max-content] lg:[grid-template-columns:33i %_1fr_max-content] gap-8 bg-brand-bg px-4 py-12 lg:py-18 text-center justify-items-center w-full md:items-center mx-auto max-w-6xl xl:max-w-7xl md:px-8">
      <h2 className="heading-h1 md:text-start">
        Interested in working together?
      </h2>
      <Separator className="hidden md:block" />
      <Button
        asChild
        variant="secondary">
        <Link href="/contact">Contact Me</Link>
      </Button>
    </section>
  );
}
export default CallToAction;
