export interface Props {
  title: string;
  subtitle: string;
  description: string;
  disclaimer?: string;
  technologies: readonly string[];
  githubLink: string;
  externalLink: string;
  imageLink: string;
  rightShift?: boolean;
  className?: string | undefined;
}
