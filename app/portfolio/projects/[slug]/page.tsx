import DetailPageNav from '@/components/project/DetailPageNav';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PROJECT_ITEMS, ProjectItem } from '../project-data';
import { slugify } from '@/lib/utils';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
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
    <div className="grid gap-4 lg:gap-x-18 lg:grid-cols-3 lg:[grid-template-areas:'image_image_image'_'details_background_background'_'details_previews_previews'_'nav_nav_nav']">
      <div className="relative aspect-video w-full lg:[grid-area:image] lg:mb-12">
        <Image
          src={project.imageURL}
          alt={project.title}
          fill
          className="object-cover object-top"
        />
      </div>
      <section className="lg:[grid-area:details]">
        <Separator className="my-4 md:my-6 lg:mt-0" />
        <div
          className="
    grid gap-4
    [grid-template-areas:'title'_'description'_'techStack'_'btn']
    md:[grid-template-areas:'title_description'_'techStack_description'_'btn_description']
    md:grid-cols-2
    lg:[grid-template-areas:'title'_'description'_'techStack'_'btn'] lg:grid-cols-1
  ">
          <h1 className="heading-h1 lg:[grid-area:title]">{project.title}</h1>
          <p className="[grid-area:description]">{project.description}</p>
          <ul className="flex gap-2 [grid-area:techStack]">
            {project.techList.map(tech => (
              <li
                key={tech}
                className="text-brand-orange">
                {tech}
              </li>
            ))}
          </ul>
          <div className="[grid-area:btn]">
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
          </div>
        </div>
        <Separator className="my-4 md:my-6" />
      </section>
      <section className="grid gap-4 justify-items-start mb-6 lg:mb-8 lg:[grid-area:background]">
        <h2 className="heading-h2">Project Background</h2>
        <p>{project.background}</p>
      </section>
      <section className="grid gap-8 lg:[grid-area:previews]">
        <h2 className="heading-h2">Static previews</h2>
        <div className="grid gap-4 md:gap-8">
          {project.previews.map((preview, index) => (
            <div
              key={index}
              className="relative aspect-square md:aspect-[3/2] w-full">
              <Image
                src={preview}
                alt={`Project screenshot ${index + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover group-hover:scale-[1.02] transition-transform border object-top-left"
              />
            </div>
          ))}

          <Button
            asChild
            className="justify-self-start"
            variant="secondary">
            <Link
              href={project.viewCodeLink}
              target="_blank"
              rel="noopener noreferrer">
              View Code
            </Link>
          </Button>
        </div>
      </section>
      <div className="lg:[grid-area:nav]">
        <DetailPageNav
          prevProject={prev ? prev.title : null}
          nextProject={next ? next.title : null}
        />
      </div>
    </div>
  );
}
export default ProductDetailPage;
