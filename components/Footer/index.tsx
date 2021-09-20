import { Container } from 'components';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const Footer: FC = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <p className="py-8 text-sm font-light text-center dark:text-white-700 text-black-700">
        <a
          href="https://github.com/LemonFace0309/personal-website-2.0"
          target="_blank"
          className="hover:opacity-80 transition-opacity"
          rel="noreferrer">
          {t('footer')}
        </a>
      </p>
    </Container>
  );
};
