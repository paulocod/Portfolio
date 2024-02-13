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
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const t = useTranslations('InfoText');

    return (
        <>
            <div key={project.id} className="rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row bg-zinc-800 hover:bg-zinc-700 transition duration-300 transform hover:scale-105">
                <div className="w-full md:w-1/2 relative">
                    <div className="p-14">
                        <Image src={project.image} alt={project.title} fill className="rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover" />
                    </div>
                </div>
                <div className="p-4 w-full md:w-1/2">
                    <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                    <h2 className="text-orange-500">{t('ProjectCardText1')}</h2>
                    <p className="max-w-full overflow-hidden overflow-ellipsis line-clamp-3 lg:line-clamp-none">
                        {project.description}
                    </p>
                    <h2 className="py-4 text-orange-500">{t('ProjectCardText2')}</h2>
                    <div className="flex flex-wrap gap-4">
                        {project.technologies.map((technology) => (
                            <div key={technology.name} className="p-2 rounded-lg transform transition duration-300 hover:scale-105 bg-zinc-600 hover:bg-orange-500">
                                <p>{technology.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;
