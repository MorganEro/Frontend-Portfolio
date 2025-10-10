import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { slugify } from '@/lib/utils';
import { Separator } from '../ui/separator';

interface ProjectCardProps {
  title: string;
  imageURL: string;
  description: string;
  reverse?: boolean;
}

function ProjectCard({
  title,
  imageURL,
  description,
  reverse = false,
}: ProjectCardProps) {
  const slugifiedTitle = slugify(title);
  return (
    <article
      className={`grid md:grid-cols-2 md:gap-18 md:h-[400px] lg:h-[500px] ${
        reverse ? 'md:[&>*:first-child]:order-2' : ''
      }`}>
      <div className="relative aspect-square md:aspect-auto w-full md:h-full">
        <Image
          src={imageURL}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top-left"
        />
      </div>
      <div className="grid gap-4 justify-items-start lg:h-full grid-rows-[auto_1fr_auto]">
        <Separator />
        <div className="grid gap-4 lg:place-content-evenly">
          <h1 className="heading-h1">{title}</h1>
          <p>{description}</p>
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
        <Separator />
      </div>
    </article>
  );
}
export default ProjectCard;
