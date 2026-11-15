import profile from './profile.json';
import experienceData from './experience.json';
import projects from './projects.json';
import skills from './skills.json';
import services from './services.json';
import certifications from './certifications.json';

export type {
  Certification,
  ContactInfo,
  ExperienceItem,
  Profile,
  Project,
  ProjectLinks,
  Service,
  Skill,
  Skills,
  SocialLinks,
} from '../types/portfolio';

export const { experience, education } = experienceData;
export const { socials } = profile;

export {
  profile,
  experienceData,
  projects,
  skills,
  services,
  certifications,
};

export default {
  profile,
  about: {
    description: profile.about,
    experience: experienceData.experience,
    education: experienceData.education,
  },
  services,
  projects,
  skills,
  certifications,
  socials: profile.socials,
};
