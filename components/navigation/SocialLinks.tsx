import Link from 'next/link';
import { JSX } from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

type Props = {
  githubUrl: string;
  linkedinUrl: string;
  size?: number; // icon size in px
  className?: string;
};

export function SocialLinks({
  githubUrl,
  linkedinUrl,
  size = 18,
  className,
}: Props): JSX.Element {
  const base =
    'inline-flex rounded-md p-2 transition-colors hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60';

  return (
    <div className={`flex items-center gap-2 ${className ?? ''}`}>
      <Link href={githubUrl} aria-label="GitHub" className={base}>
        <SiGithub size={size} />
      </Link>
      <Link href={linkedinUrl} aria-label="LinkedIn" className={base}>
        <SiLinkedin size={size} />
      </Link>
    </div>
  );
}
