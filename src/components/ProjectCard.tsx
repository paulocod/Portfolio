import Image from "next/image";
import { InfoText } from "@/constants";

interface Project {
    id: string;
    image: string;
    title: string;
    description: string;
    tecnologies: string[];
}

interface ProjectCardProps {
    projects: Project[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projects }) => {
    return (
        <>
            {projects.map((project) => (
                <div key={project.id} className="bg-zinc-800 rounded-lg overflow-hidden shadow-md flex">
                    <div className="w-1/2 h-96 relative">
                        <div className="p-14">
                            <Image src={project.image} alt={project.title} layout="fill" className="rounded-l-lg object-cover" />
                        </div>
                    </div>
                    <div className="p-4 w-1/2">
                        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                        <h2 className="text-orange-500">{InfoText.ProjectCardText1}</h2>
                        <p className="max-w-full overflow-hidden overflow-ellipsis">
                            {project.description}
                        </p>
                        <h2 className="py-4 text-orange-500">{InfoText.ProjectCardText2}</h2>
                        <div className="flex flex-wrap gap-4">
                            {project.tecnologies.map((technology) => (
                                <div key={technology} className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition duration-300">
                                    <p>{technology}</p>
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
