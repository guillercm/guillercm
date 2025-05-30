export interface Config {
  personalData: PersonalData;
  resume: {
    description: string;
  };
  portfolio: {
    home: string;
    aboutMe: string[];
  };
  skills: Skill[];
  training: Training[];
  projects: Project[];
  certificates: Certificate[];
  workExperience: WorkExperience[];
}

export interface Skill {
  name: string;
  description: string;
  show?: boolean;
  technologies: string[];
}

export interface Certificate {
  name: string;
  date?: string;
  description: string;
  image: string;
  show?: boolean;
}

export interface WorkProject {
  name: string;
  position: string;
  date: string;
  description: string;
}

export interface WorkExperience {
  position: string;
  company: string;
  date: string;
  description?: string;
  projects?: WorkProject[];
  show?: boolean;
}

export interface PersonalData {
  nickname: string;
  name: string;
  surnames: Surnames;
  phone: string;
  email: string;
  location: string;
  position: string;
  portfolio: string[];
  socialNetworks: SocialNetworks;
}

export interface Surnames {
  first: string;
  second: string;
}

export interface ProjectActions {
  preview?: string;
  npm?: string;
  gitHub?: string;
}

export interface Project {
  name: string;
  date: string;
  image?: string;
  video?: string;
  description: string;
  technologies: string[];
  show: boolean;
  actions: ProjectActions
}

export interface SocialNetworks {
  linkedIn: string;
  infoJobs: string;
  gitHub: string;
}

export interface DataAllTechnology {
  image: string;
  url: string;
}

export interface Training {
  name: string;
  acronym: string;
  institute: string;
  date: string;
}

