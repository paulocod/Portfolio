"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const t = useTranslations("InfoText");

  return (
    <motion.section
      id="projects"
      className="md:my-40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <header className="text-start">
        <h1
          id="projects-heading"
          className="text-2xl mb-4 md:text-3xl xl:text-4xl"
        >
          {t("ProjectsSectionText1")}
        </h1>
      </header>

      <div
        className="grid grid-cols-1 gap-8"
        role="list"
        aria-labelledby="projects-heading"
      >
        {projects.length > 0 ? (
          projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2 * projects.indexOf(project),
              }}
              role="listitem"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-400">
            {t("NoProjectsAvailable")}
          </p>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;
