import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { slugify } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  imageURL: string;
}

function ProjectCard({ title, imageURL }: ProjectCardProps) {
  const slugifiedTitle = slugify(title);
  return (
    <article className="grid border-b border-brand-lightgrey pb-18 last:pb-6">
      <div className="relative aspect-square w-full">
        <Image
          src={imageURL}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="grid gap-4 justify-items-start border-t border-brand-lightgrey pt-6">
        <h1 className="heading-h2">{title}</h1>
        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          voluptate nulla vero impedit cupiditate ab ea, dolorum repellat eaque
          deleniti quos, ipsam deserunt fugiat. Laboriosam unde repellat ducimus
          numquam temporibus?{' '}
        </p>
        <div className="mt-4">
          <Button
            asChild
            variant="secondary">
            <Link href={`portfolio/projects/${slugifiedTitle}`}>
              View Project
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
export default ProjectCard;
