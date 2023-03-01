import { Container, Section } from 'components';
import { useAnimation } from 'framer-motion';
import { useMdScreen } from 'lib';
import { useTranslation } from 'next-i18next';
import React, { FC, useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

import { Item } from './libs/Item';

export const Experience: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const mdScreen = useMdScreen();
  const { t } = useTranslation('common');

  const experience = useMemo(
    () => [
      {
        title: 'CertiK Software Engineer Intern',
        place: 'New York, NY',
        date: 'Jan 2023 - April 2023',
      },
      {
        title: 'On Deck Full Stack Product Engineer Intern',
        place: 'San Francisco, Ca',
        date: 'Jan 2022 - April 2022',
      },
      {
        title: 'Enzuzo Full Stack Developer Intern',
        place: 'Waterloo, On',
        date: 'May 2021 - August 2021',
      },
      {
        title: 'Freelance Software Developer',
        place: 'Toronto, On',
        date: 'May 2020 - April 2021',
      },
      {
        title: 'Bitcoin Bay Intern',
        place: 'Toronto, On',
        date: 'July 2019 - September 2019',
      },
    ],
    []
  );

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.2 },
      }));
    }
  }, [controls, inView]);

  return (
    <Section className="mt-20 mb-16 md:mt-28" title={t('experience.title')} description={t('experience.description')}>
      <Container className="mt-14">
        <div className="flex justify-between max-w-screen-sm" ref={ref}>
          {mdScreen ? (
            <>
              <div>
                {experience.slice(0, 3).map((item, i) => (
                  <Item {...item} key={i} first={i === 0} last={i === 2} controls={controls} custom={i} />
                ))}
              </div>
              <div>
                {experience.slice(3).map((item, i) => (
                  <Item {...item} key={i} first={i === 0} last={i === 2} controls={controls} custom={i} />
                ))}
              </div>
            </>
          ) : (
            <div>
              {experience.map((item, i) => (
                <Item
                  {...item}
                  key={i}
                  first={i === 0}
                  controls={controls}
                  last={i === experience.length - 1}
                  custom={i}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};
