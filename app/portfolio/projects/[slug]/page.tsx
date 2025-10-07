import DetailPageNav from '@/components/project/DetailPageNav';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PROJECT_ITEMS, ProjectItem } from '../project-data';
import { slugify } from '@/lib/utils';
import { notFound } from 'next/navigation';
import Link from 'next/link';
// Pre-generate static routes for each project
export async function generateStaticParams() {
  return PROJECT_ITEMS.map(p => ({
    slug: slugify(p.title),
  }));
}

interface ProjectDetailsPageProps {
  params: Promise<{ slug: string }>;
}

async function ProductDetailPage({ params }: ProjectDetailsPageProps) {
  const { slug } = await params;
  const projectIndex = PROJECT_ITEMS.findIndex(p => slugify(p.title) === slug);

  if (projectIndex === -1) return notFound();
  const project = PROJECT_ITEMS[projectIndex];
  const prev =
    PROJECT_ITEMS[
      (projectIndex - 1 + PROJECT_ITEMS.length) % PROJECT_ITEMS.length
    ];
  const next = PROJECT_ITEMS[(projectIndex + 1) % PROJECT_ITEMS.length];

  return (
    <>
      <section className="grid gap-4 justify-items-start mt-6">
        <div className="relative aspect-square w-full">
          <Image
            src={project.imageURL}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
        <h1 className="heading-h2">{project.title}</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          saepe architecto consequuntur! Ad iste, exercitationem quasi est
          aliquam consequatur corporis, qui voluptatibus et voluptates, in minus
          repudiandae vitae soluta nam.
        </p>
        <ul className="flex gap-2">
          {project.techList.map(tech => (
            <li
              key={tech}
              className="text-brand-orange">
              {tech}
            </li>
          ))}
        </ul>
        <Button
          asChild
          variant="secondary">
          <Link
            href={project.viewProjectLink}
            target="_blank"
            rel="noopener noreferrer">
            Visit Website
          </Link>
        </Button>
      </section>
      <section>
        <h2 className="heading-h3">Project Background</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          voluptates suscipit, architecto deserunt ipsa cupiditate eligendi
          iusto laudantium perspiciatis consequatur laboriosam. Labore
          temporibus ad perspiciatis animi incidunt vitae sequi sapiente?
        </p>
      </section>
      <section>
        <h2 className="heading-h3">Static previews</h2>
        <div className="grid gap-4 jus">
          <div className="relative aspect-square w-full">
            <Image
              src="/image-placeholder-single.jpg"
              alt="Project screenshot"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform"
            />
          </div>
          <div className="relative aspect-square w-full">
            <Image
              src="/image-placeholder-single.jpg"
              alt="Project screenshot"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform"
            />
          </div>
          <Button
            asChild
            className="justify-self-start"
            variant="secondary">
            <Link
              href={project.viewCodeLink}
              target="_blank"
              rel="noopener noreferrer">
              Visit Code
            </Link>
          </Button>
        </div>
      </section>
      <DetailPageNav
        prevProject={prev ? prev.title : null}
        nextProject={next ? next.title : null}
      />
    </>
  );
}
export default ProductDetailPage;
