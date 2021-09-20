import { useTranslation } from 'next-i18next';
import React, { FC } from 'react';

export const Logo: FC = () => {
  const { t } = useTranslation();

  return <h1 className="text-xl font-bold md:text-2xl text-black-900 dark:text-white-900">{t('header')}</h1>;
};
