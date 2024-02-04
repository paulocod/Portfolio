import Image from "next/image";
import { useTranslations } from 'next-intl';

interface Technology {
    name: string;
    color: string;
}

interface Project {
    id: string;
    image: string;
    title: string;
    description: string;
    technologies: Technology[];
}

interface ProjectCardProps {
    projects: Project[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projects }) => {
    const t = useTranslations('InfoText');

    return (
        <>
            {projects.map((project) => (
                <div key={project.id} className="rounded-lg overflow-hidden shadow-md flex bg-zinc-800 hover:bg-zinc-700 transition duration-300 transform hover:scale-105">
                    <div className="w-1/2 h-96 relative">
                        <div className="p-14">
                            <Image src={project.image} alt={project.title} fill className="rounded-l-lg object-cover" />
                        </div>
                    </div>
                    <div className="p-4 w-1/2">
                        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                        <h2 className="text-orange-500">{t('ProjectCardText1')}</h2>
                        <p className="max-w-full overflow-hidden overflow-ellipsis">
                            {project.description}
                        </p>
                        <h2 className="py-4 text-orange-500">{t('ProjectCardText2')}</h2>
                        <div className="flex flex-wrap gap-4">
                            {project.technologies.map((technology) => (
                                <div key={technology.name} className="p-2 rounded-lg transform transition duration-300 hover:scale-105" style={{ backgroundColor: technology.color }}>
                                    <p>{technology.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProjectCard;
