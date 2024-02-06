import { projects } from "@/data";
import ProjectCard from "./ProjectCard";
import { useTranslations } from 'next-intl';
import Link from "next/link";

const Projects: React.FC = () => {
    const t = useTranslations('InfoText');

    return (
        <div id="projects" className="my-40">
            <div className="grid grid-cols-1 gap-8">
                <h1 className="text-4xl mb-4">{t('ProjectsSectionText1')}</h1>
                {projects.map((project) => (
                    <Link key={project.id} href={project.githubLink} target="_blank">
                        <ProjectCard project={project} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Projects;
