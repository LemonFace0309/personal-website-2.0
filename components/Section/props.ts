import React from 'react';

import { Props as SectionHeaderProps } from './libs/SectionHeader/props';

export interface Props extends SectionHeaderProps {
  children: React.ReactNode;
}
