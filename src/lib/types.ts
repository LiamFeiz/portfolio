export type NavItem = {
  href: string;
  label: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type ExperienceRole = {
  id: string;
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
  technologies: string[];
};

export type FeaturedWork = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
};

export type Education = {
  school: string;
  degree: string;
  location: string;
  start: string;
  end: string;
  detail?: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  nav: NavItem[];
  skills: SkillGroup[];
  featuredWork: FeaturedWork[];
  experience: ExperienceRole[];
  education: Education[];
};
