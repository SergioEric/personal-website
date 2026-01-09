import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@components/layout/layout';
import Gallery from '@components/gallery/gallery';
import projectsData from '@data/projects.json';
import { cn } from '@lib/utils';

// Type definitions based on JSON
interface Project {
  slug: string;
  title: string;
  subtitle: string;
  techStack: { name: string; color: string }[];
  image: string;
  repoUrl: string;
  webSite: string | null;
  details: {
    role: string;
    timeline: string;
    client: string;
    year: string;
  };
  description: string;
  challenges: { description: string }[];
  achievements: { description: string }[];
  gallery: { url: string; alt: string }[];
  nextProject: { title: string; slug: string; image: string };
}

interface ProjectPageProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  if (!project) return null;

  return (
    <Layout>
      <Head>
        <title>{project.title} - Portfolio</title>
      </Head>

      {/* Content wrapper matching the user's main inner structure */}
      <div className="w-full pb-20">

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex flex-col gap-8">
            {/* Breadcrumbs/Back */}
            <Link href="/" className="inline-flex items-center text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors gap-1 w-fit group">
              <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
              Back to Home
            </Link>

            {/* Title Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex flex-col gap-4 max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                  {project.title}
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                  {project.subtitle}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex gap-2 flex-wrap mt-2">
                  {project.techStack.map((tech) => (
                    <div key={tech.name} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-[#292348] px-4">
                      <span className="size-2 rounded-full" style={{ backgroundColor: tech.color }}></span>
                      <p className="text-xs font-bold uppercase tracking-wide">{tech.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={cn("shrink-0", project.webSite == null ? 'hidden' : '')}>
                <button className="flex items-center gap-2 rounded-full bg-primary text-white text-base font-bold px-8 py-4 hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 w-full md:w-auto justify-center">
                  <span>View project</span>
                  <span className="material-symbols-outlined text-lg">open_in_new</span>
                </button>
              </div>
            </div>

            {/* Main Project Image - Carousel */}
            <div className="mt-8">
              <Gallery images={project.gallery} />
            </div>
          </div>
        </div>

        {/* Project Details Strip */}
        <div className="border-y border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 dark:divide-slate-800/50">
              <div className="p-6 md:pl-0">
                <p className="text-slate-500 dark:text-[#9b92c9] text-sm font-medium mb-1">Role</p>
                <p className="font-bold text-lg">{project.details.role}</p>
              </div>
              <div className="p-6">
                <p className="text-slate-500 dark:text-[#9b92c9] text-sm font-medium mb-1">Timeline</p>
                <p className="font-bold text-lg">{project.details.timeline}</p>
              </div>
              <div className="p-6">
                <p className="text-slate-500 dark:text-[#9b92c9] text-sm font-medium mb-1">Client</p>
                <p className="font-bold text-lg">{project.details.client}</p>
              </div>
              <div className="p-6 md:pr-0">
                <p className="text-slate-500 dark:text-[#9b92c9] text-sm font-medium mb-1">Year</p>
                <p className="font-bold text-lg">{project.details.year}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout: Context & Challenges */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Sticky Sidebar for Titles */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
                  About the Project
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-body">
                  {project.description}
                </p>
              </div>

              {project.repoUrl && (
                <div className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">Repository</h4>
                  <a href={project.repoUrl} className="flex items-center justify-between group p-2 -mx-2 rounded-lg hover:bg-slate-100 dark:hover:bg-background-dark transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="bg-black text-white p-1.5 rounded-full">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path></svg>
                      </span>
                      <span className="font-medium text-sm">GitHub code</span>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_outward</span>
                  </a>
                </div>
              )}
            </div>

            {/* Right Content */}
            <div className="lg:col-span-8 space-y-16">
              {/* Challenges Section */}
              <section>
                <h3 className="text-3xl font-bold mb-8">Project Challenges</h3>
                <div className="space-y-4">
                  {project.challenges.map((challenge, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-body">
                        {challenge.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="w-full h-px bg-slate-200 dark:bg-slate-800"></div>

              {/* Achievements Section */}
              <section>
                <h3 className="text-3xl font-bold mb-8">Achievements</h3>
                <div className="space-y-4">
                  {project.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-body">
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Next Project Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/projects/${project.nextProject.slug}`} className="group relative rounded-3xl overflow-hidden bg-primary h-64 md:h-80 flex items-center justify-center text-center">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url("${project.nextProject.image}")` }}
            >
            </div>
            <div className="relative z-10 p-6 flex flex-col items-center gap-4">
              <span className="text-white/80 uppercase tracking-widest text-sm font-bold">Next Project</span>
              <h2 className="text-4xl md:text-5xl font-black text-white group-hover:-translate-y-1 transition-transform">{project.nextProject.title}</h2>
              <div className="mt-4 flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                <span>View Case Study</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectsData.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const project = projectsData.find((p) => p.slug === slug);

  return {
    props: {
      project,
    },
  };
};
