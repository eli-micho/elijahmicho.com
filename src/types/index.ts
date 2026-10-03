export type SocialLink = {
  label: string;
  href: string;
  mark: string;
};

export type ExperienceItem = {
  title: string;
  description: string;
  company: string;
  employment: string;
  location: string;
  period: string;
  highlights: string[];
  technologies: string[];
};

export interface Article {
  title: string;
  description: string;
  date: string;
  url: string;
}

export type Technology = {
  name: string;
  note: string;
};
