/**
 * Core type definitions for Firomsa Hika Telila's Portfolio
 * Strictly aligned with resume specification.
 */

export interface ProjectType {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  displayUrl: string;
  githubUrl?: string;
  techStack: string[];
  points: string[];
}

export interface ExperienceType {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  points: string[];
}

export interface SkillCategoryType {
  category: string;
  skills: string[];
}
