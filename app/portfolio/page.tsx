import ProjectCard from '@/components/project/ProjectCard';
import { JSX } from 'react';
import { PROJECT_ITEMS } from './projects/project-data';

export default function PortfolioPage(): JSX.Element {
  return (
    <section className="grid gap-18 last:pb-6">
      {PROJECT_ITEMS.map((project, i) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          imageURL={project.imageURL}
          description={project.description}
          reverse={i % 2 === 1}
        />
      ))}
    </section>
  );
}
