import { InfoText, projects } from "@/data"
import ProjectCard from "./ProjectCard"

const Projects: React.FC = () => {
    return (
        <div id="projects" className="my-40">
            <div className="grid grid-cols-1 gap-8">
                <h1 className="text-4xl mb-4">{InfoText.ProjectsSectionText1}</h1>
                <ProjectCard
                    projects={projects}
                />
            </div>
        </div>
    )
}

export default Projects