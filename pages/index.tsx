import React from 'react';
import Link from 'next/link';
import sotfSkill from '@data/soft_skills';
import Layout from '@components/layout/layout';
import ProjectCard from '@components/project-card/project-card';

const calc_years = (since: number) => {
  const thisYear = new Date().getFullYear();
  const _since = thisYear - since;
  return _since === 1 ? `${_since} year` : `${_since} years`;
};

const getIconForSkill = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes('flutter')) return 'smartphone';
  if (lower.includes('react')) return 'code';
  if (lower.includes('css') || lower.includes('js')) return 'javascript';
  if (lower.includes('figma')) return 'design_services';
  return 'dataset';
};

const projects = [
  {
    title: 'Customela',
    link: '/projects/customela-automation',
    category: 'React · MUI · Redux · PostgreSQL · WYSIWYG',
    description:
      'Contract management platform with a WYSIWYG editor, dynamic variables, and versioned templates for creating and maintaining legal documents.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC0WN6rbUvTaeLM8ZGNUZp3rm79cV4xZ3hYrnOS9CZ34NjITynfbTZu45FimetEU_o7FqzKZxa8HasyS4yCKPZGCIf5Cyh5uQLn6fAD85ztdRs_RCwU45-DkuOxdo-EYo2Q2HuTPkDL58P5xkmrhZKQhn7pZRYnYhxWFJIA-y0xDzp7ey2q2USQIN0Y7o8fVHyxryt-Zj2UZ-c9mZa-E_n4L-VplnovP7kg8oP8dI1tHy3-OgbYUv2N1_IkuS6HNBYJNvPltmqZ2Us',
  },
  {
    title: 'RXR — TaskBank',
    link: '/projects/rxr-task-bank',
    category: 'Next.js · React · Cognito · MUI',
    description:
      'Internal task and workflow management platform with complex creation flows, recurring tasks, and notifications for multiple departments.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuATyfBXZm-JGm7wpHhI_aoUz_Et9xaTpgYmxXCCygo572BP6o1Mm5VJ24SsPuiyuZvpfLcXo3UTa4UyuPd8CIEWOyvICSk9XFlKtN_H6C3Zsa5N3E6gbmktC-jDfsMVc5m-R-fW4TSvLm2PAemzKQy5JwxTQLb7XY3dmL9Ea86SI9PyEEuqZZwV0_Ikla5wqin6-G9SEHP1f6VFoidmOA5A_88hSRh36vNpFS4nBAFq0BZlT85iZZDrJDjZUdaYeSXLYKDklGpAD4Y',
  },
  {
    title: 'MobiliHD',
    link: '/projects/mobilihd-case-management',
    category: 'React · React Query · MUI · Laravel · MySQL',
    description:
      'Internal case and task management system featuring Kanban workflows, optimistic UI, and real-time state synchronization for a real estate agency.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCsafQP4LUUxorknnqAEmid-V7_XhFtXM0N6IvbZsC_2YwJugFv9T0E4IenavIqA2U1_mzKvJoGZH1Q684f-k2KPDw2s0cJEFeBGmU8oU3OtUFRrl7Eos0se1bBhoNmRpKnIN1vNFqTBqita4kGDPgMOZcm6nx_-yG5oB5G8TY8pvVTF1g6DXSgtLhYcmumQpr5So8TOXcDUV6oxVdQXbWwS-pdWT05KLi0ygIa6dv0W25oVqhFaWR3MmP54uyhV-oKbLdvnWXlj4o',
  },
  {
    title: 'JDI',
    link: '/projects/jdi-performance-kpi',
    category: 'React · MUI · Dashboards · Data Visualization',
    description:
      'KPI dashboard platform for car dealerships, featuring advanced data visualization, financial components, and competitive performance tracking between branches.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9NylJssFPXk1dJhnlSXGkyaJLzGvXgUXwCj4AIxxCQEe66AfkDRxT89F365Uj6_u9wdKC6wGGJGwZhnUTUaHS4C-7cxEOpBawtPenElEgHKRCvY3xkD53YmcgL1A7dD-9ogeQMT0NVz-3yJUd-FXludwX8wXnNTBFZXy7rHqZYBhcv7uBmX5YS7zEuVYMkaS6_JyeLlMiaMSQuWnzKXGyVWv5fiOLpy3o3-SWaIaeEXFAKJz5YlcmB4JMDzCEAV23R60ZDEPGDTE',
  },
  {
    title: 'Giway',
    category: 'Tanstack Start • PostgreSQL • R2 • SES • Drizzle',
    description:
      'The complete platform for organizing raffles with number slots or simple giveaway drawings. Manage participants, track reservations, and pick winners fairly.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0E8N92DhnNbF5yxjamtYT3xxra0N_BVpH9IB2UMA8Sgrqklr48tIY07rGPx2RNENpOYRKL-UhLsiqNp9By7QcuV9p_y8PnS4GYCNUsCGqN0qhwjOhLSdZlJ1uYuAPTtVaI1fSOkaIShEryQHMhcUfrVlIKBCeuAYhYJJv9kbzK-ExrYF-kLNCXl6AmdJ71icrFkfgV6OTYK8FiJ4l_pYQZguVIwDO8QYFK8LMPENJW1rPnk-9XozIGiekDszEg0Y193Alyuqnej8',
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="w-full px-4 md:px-20 py-12 md:py-24 max-w-300"
        id="about"
      >
        <div className="@container">
          <div className="flex flex-col-reverse gap-10 md:gap-16 items-center md:flex-row">
            {/* Text Content */}
            <div className="flex flex-col gap-6 flex-1 text-center md:text-left items-center md:items-start">
              <div className="flex flex-col gap-4">
                <span className="inline-flex items-center rounded-full bg-primary/10 dark:bg-primary/20 px-3 py-1 text-sm font-medium text-primary dark:text-indigo-300 ring-1 ring-inset ring-primary/20 w-fit mx-auto md:mx-0">
                  Freelance available
                </span>
                <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                  Hello, i am Sergio Morales. <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400">
                    Full-Stack Engineer
                  </span>{' '}
                  helping teams ship scalable web products faster.
                </h1>
                {/* <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
                  Subtitle
                </p> */}
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
                <a
                  href="#work"
                  className="flex items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
                >
                  Projects
                </a>
                <Link
                  href="/cv-en"
                  className="flex items-center justify-center rounded-full h-12 px-8 bg-white dark:bg-[#292348] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base font-bold hover:bg-slate-50 dark:hover:bg-[#342c5a] transition-colors"
                >
                  Download CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section (Chips) */}
      <section className="hidden w-full px-4 py-8 max-w-240" id="skills">
        <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider mb-6 text-center md:text-left pl-2">
          Tecnologías & Herramientas
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          {sotfSkill.map((skill) => (
            <div
              key={skill.name}
              className="flex h-10 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#292348] border border-slate-200 dark:border-slate-700 px-6 transition-transform hover:scale-105 cursor-default"
            >
              <span className="material-symbols-outlined text-[20px] text-primary">
                {getIconForSkill(skill.name)}
              </span>
              <p className="text-sm font-bold">
                {skill.name}{' '}
                <span className="font-normal text-xs opacity-70">
                  ({calc_years(skill.since)})
                </span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Header */}
      <section
        className="w-full px-4 pt-15 pb-8 max-w-240 flex flex-col md:flex-row justify-between items-end gap-4 border-b border-slate-200 dark:border-slate-800 mb-8"
        id="work"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Featured Projects
        </h2>
        <a
          className="text-primary hover:text-purple-400 font-medium flex items-center gap-1 transition-colors group"
          href="#"
        >
          See all
          <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>
      </section>

      {/* Projects Grid */}
      <section className="w-full px-4 md:px-10 pb-20 max-w-300">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
