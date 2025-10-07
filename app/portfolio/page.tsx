import ProjectCard from '@/components/project/ProjectCard';
import { JSX } from 'react';
import { PROJECT_ITEMS } from './projects/project-data';

export default function PortfolioPage(): JSX.Element {
  return (
    <section>
      {PROJECT_ITEMS.map(project => (
        <ProjectCard
          key={project.title}
          title={project.title}
          imageURL={project.imageURL}
        />
      ))}
    </section>
  );
}
