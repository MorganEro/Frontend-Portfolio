import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ButtonWithIcon({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Button
      asChild
      size="withIcon">
      <Link href={href}>
        <div className="p-4 bg-black/30">
          <img
            src="/down-arrows.svg"
            alt=""
            className="w-4 h-4"
            style={{ filter: 'invert(1) brightness(4)' }}
            aria-hidden="true"
          />
        </div>
        <div className="px-10">{children}</div>
      </Link>
    </Button>
  );
}
