import { AnimationControls } from 'framer-motion';

export interface Props {
  name: string;
  icon: React.ReactElement;
  href: string;
  controls: AnimationControls;
  custom: number;
}
