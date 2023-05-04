import { Section } from 'components';
import { useTranslation } from 'next-i18next';
import React, { FC, useMemo } from 'react';

import { ProjectCard } from './libs/ProjectCard';

export const Projects: FC = () => {
  const { t } = useTranslation('common');

  const projects = useMemo(
    () => [
      {
        title: 'MSMR',
        subtitle: t('projects.msmr.subtitle'),
        description: t('projects.msmr.description'),
        technologies: ['NextJS', 'Material UI', 'Strapi'],
        externalLink: 'https://msmrtool.com/',
        githubLink: 'https://github.com/LemonFace0309/msmr',
        imageLink: `/images/msmr.jpg`,
      },
      {
        title: 'UW Cribs',
        subtitle: t('projects.uwcribs.subtitle'),
        description: t('projects.uwcribs.description'),
        technologies: ['NextJS', 'GraphQL', 'Prisma', 'Elastic'],
        externalLink: 'https://www.uwcribs.com/search',
        githubLink: 'https://github.com/LemonFace0309/uwcribs',
        imageLink: `/images/uwcribs.jpg`,
      },
      {
        title: 'Squiggles',
        subtitle: t('projects.squiggles.subtitle'),
        description: t('projects.squiggles.description'),
        technologies: ['NextJS', 'GraphQL', 'Neo4J'],
        externalLink: 'https://squiggles.vercel.app/',
        githubLink: 'https://github.com/LemonFace0309/cs348',
        imageLink: `/images/squiggles.jpg`,
      },
    ],
    [t]
  );

  return (
    <Section className="mt-20 mb-16 md:mt-28" title={t('projects.title')} description={t('projects.description')}>
      <div className="px-4 mx-auto mt-10 md:mt-20 md:px-8 max-w-screen-lg">
        {projects.map((project, i) => (
          <ProjectCard key={i} rightShift={i % 2 === 0} {...project} />
        ))}
      </div>
    </Section>
  );
};
