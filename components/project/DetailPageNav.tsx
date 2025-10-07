import { slugify } from '@/lib/utils';
import Link from 'next/link';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

interface DetailPageNavProps {
  prevProject: string | null;
  nextProject: string | null;
}

function DetailPageNav({ prevProject, nextProject }: DetailPageNavProps) {
  const prev = slugify(prevProject || '');
  const next = slugify(nextProject || '');
  return (
    <nav className="grid grid-cols-2 mt-12 pt-6 divide-x-2 divide-brand-lightgrey">
      {prevProject ? (
        <Link
          href={`/portfolio/projects/${prev}`}
          className="flex items-start py-6 flex-col gap-2 border-y-2 border-brand-lightgrey">
          <SlArrowLeft className="w-5 h-5 mb-2" />
          <p className="ps-2 capitalize text-xl font-heading font-semibold">
            {prevProject}
          </p>
          <p className="ps-2 text-muted-foreground/70">Previous Project</p>
        </Link>
      ) : (
        <span />
      )}

      {nextProject ? (
        <Link
          href={`/portfolio/projects/${next}`}
          className="flex flex-col items-end py-6 text-end gap-2 border-y-2 border-brand-lightgrey">
          <SlArrowRight className="w-5 h-5 mb-2" />
          <p className="pe-2 capitalize text-xl font-heading font-semibold">
            {nextProject}
          </p>
          <p className="pe-2 text-muted-foreground/70">Next Project</p>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
export default DetailPageNav;
