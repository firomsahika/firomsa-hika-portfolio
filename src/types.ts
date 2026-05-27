/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProjectType {
  id: string;
  title: string;
  role: string;
  url?: string;
  githubUrl?: string;
  description: string;
  highlights: string[];
  tags: string[];
  category: "fullstack" | "frontend" | "backend";
  featured?: boolean;
}

export interface ExperienceType {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  category: "internship" | "leadership" | "certificate";
  description: string[];
  technologies?: string[];
  link?: string;
}

export interface SkillCategoryType {
  title: string;
  icon: string; // Lucide icon reference name
  skills: string[];
  glowColor: string; // Tailwind glow class definition
}

export interface CourseType {
  name: string;
  code?: string;
}
