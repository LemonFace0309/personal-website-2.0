import { AnimationControls } from 'framer-motion';

export interface Props {
  title: string;
  place: string;
  date: string;
  custom: number;
  last?: boolean;
  first?: boolean;
  cancelled?: boolean;
  controls?: AnimationControls;
  className?: string | undefined;
}
