export interface PortfolioDataProps {
  name: string;
  cvLink: string;
  dateStartedWorking: number;
  dateStartedDeveloper: number;
  image: string;
  profession: string;
  skills: SkillProps[];
  projects: ProjectProps[];
  work: WorkProps[];
  social: SocialProps[];
}

export interface SkillProps {
  id: number;
  image: string;
  name: string;
  dateStarted: number;
}

export interface ProjectProps {
  description: string;
  id: number;
  image: string;
  name: string;
  link: string;
}
export interface WorkProps {
  description: string;
  id: number;
  startDate: number;
}

export interface SocialProps {
  id: number;
  name: string;
  link: string;
}
