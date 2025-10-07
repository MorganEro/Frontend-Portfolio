'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';

function CallToAction() {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';

  if (isContactPage) return null;

  return (
    <section className="grid gap-8 bg-brand-bg px-4 pt-24 pb-12 text-center justify-items-center mx-auto max-w-6xl xl:max-w-7xl md:px-8">
      <h2 className="heading-h2">
        Interested in doing some projects together?
      </h2>
      <Button
        asChild
        variant="secondary">
        <Link href="/contact">Contact Me</Link>
      </Button>
    </section>
  );
}
export default CallToAction;
