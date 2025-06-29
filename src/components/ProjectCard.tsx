import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

interface Technology {
  name: string;
}

interface Project {
  id: string;
  image: string;
  title: string;
  descriptionKey: string;
  githubLink: string;
  technologies: Technology[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const t = useTranslations('InfoText');

  return (
    <motion.article
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row bg-zinc-800 hover:bg-zinc-700 transition duration-300 transform hover:scale-105"
      tabIndex={0}
    >
      <div className="w-full md:w-1/2 relative">
        <Image
          src={project.image}
          alt={`Imagem do projeto: ${project.title} - Clique para ver no GitHub`}
          fill
          className="rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover"
        />
      </div>

      {/* Conteúdo textual */}
      <div className="p-4 w-full md:w-1/2">
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <h3 className="text-orange-500">{t('ProjectCardText1')}</h3>
        <p className="max-w-full overflow-hidden overflow-ellipsis line-clamp-3 lg:line-clamp-none">
          {t(project.descriptionKey)}{' '}
        </p>
        <h3 className="py-4 text-orange-500">{t('ProjectCardText2')}</h3>
        <div className="flex flex-wrap gap-4">
          {project.technologies.map((tech) => (
            <div
              key={tech.name}
              className="p-2 rounded-lg transform transition duration-300 hover:scale-105 bg-zinc-600 hover:bg-orange-500"
              aria-label={`Technology: ${tech.name}`}
            >
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-orange-500 text-white rounded-full py-2 px-4 border-2 hover:bg-orange-600 transition font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95"
          aria-label={`Ver projeto ${project.title} no GitHub`}
        >
          {t('ProjectCardButtonSeeProject')}
        </a>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
