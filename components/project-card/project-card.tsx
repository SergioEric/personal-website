import React from 'react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  imageUrl,
  link = '#',
}) => {
  return (
    <div className="group flex flex-col gap-4 p-4 rounded-3xl bg-white dark:bg-card-dark border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10">
      <div className="w-full aspect-video bg-cover bg-center rounded-2xl overflow-hidden relative">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url("${imageUrl}")` }}
        ></div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
      </div>
      <div className="flex flex-col gap-2 px-1 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-slate-500 dark:text-[#9b92c9] text-xs font-medium uppercase tracking-wide mt-1">
              {category}
            </p>
          </div>
          <a
            href={link}
            className="bg-slate-100 dark:bg-[#292348] rounded-full p-2 text-slate-900 dark:text-white group-hover:bg-primary group-hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-sm block">
              arrow_outward
            </span>
          </a>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-2 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
