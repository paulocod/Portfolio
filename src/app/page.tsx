'use client'
import Header from "@/components/Header";
import MovingIcons from "@/components/MovingItems";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants";
import { DevToLogo, EnvelopeOpen, InstagramLogo, LinkedinLogo, MediumLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import Image from 'next/image';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <main className="px-48">
      {/* header */}
      <Header onButtonClick={(sectionId) => scrollToSection(sectionId)} />
      {/* homepage */}
      <section id="home" className="h-screen flex items-center justify-center mt-12 mb-20 relative z-10 overflow-hidden">
        <Image src="/Portfolio/imgs/grid-home.svg" alt="Projeto 1" layout="fill" className="rounded-l-lg object-cover" />
        <div className="h-1/2 text-center flex flex-col items-center">
          <h1 className="text-6xl mb-4">Hello.</h1>
          <h1 className="text-6xl mb-4">I’m <strong className="text-orange-500">Paulo</strong>, a software engineer</h1>
          <p className="text-5xl">Come explore the world by the <strong className="text-orange-500">CODE</strong></p>
        </div>
      </section>
      {/* about */}
      <div id="about" className="my-40">
        <h1 className="text-4xl mb-4">About <strong className="text-orange-500">me</strong></h1>
        <p className="text-3xl leading-10">Developer with substantial experience in software development. Holds a Bachelors degree in Computer Science. Specialized in using Node.js and more, committed to delivering scalable and high-impact technological solutions. Possesses a robust background in web and mobile development, showcasing expertise in TypeScript, Python, Apache, Redis, PostgreSQL, and AWS. Enthusiastic about crafting exceptional user experiences and improving software efficiency and quality.</p>
      </div>
      {/* skills */}
      <div className="my-40">
        <h1 className="text-4xl mb-12">Skills <strong className="text-orange-500">&</strong> technologies</h1>
        <MovingIcons />
      </div>
      {/* Projetos */}
      <div id="projects" className="my-40">
        <div className="grid grid-cols-1 gap-8">
          <h1 className="text-4xl mb-4">Projects</h1>
          <ProjectCard
            projects={projects}
          />
        </div>
      </div>
      {/* send message */}
      <div id="contact" className="my-12 flex items-center justify-between px-4">
        <div>
          <h1 className="text-4xl mb-2">Have idea about <strong className="text-orange-500">project</strong>?</h1>
          <p className="text-xl mb-4 w-2/3">
            Bridging Ideas with Code: Crafting Digital Realities from Concept to Completion. Transforming Vision into Actionable Software Solutions with Precision and Passion.</p>
          {/* <button className="bg-orange-500 text-white rounded-full py-3 px-6 border-2 hover:bg-orange-600 transition">Send a message</button> */}
        </div>
        <div className="relative w-96 h-96">
          <Image
            src="/Portfolio/imgs/grid-footer.svg"
            alt="Sua Imagem"
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>
      {/* footer */}
      <div className="my-12 grid grid-cols-3 gap-12 items-center">
        <div className="text-start">
          <a href="\" className="text-2xl">
            Paulo.<strong className="text-orange-500">dev</strong>
          </a>
        </div>
        <nav className="flex rounded-full place-content-center space-x-16 border-2 border-orange-500 place-items-center bg-zinc-800">
          <a href="https://www.linkedin.com/in/paulovcampos/" target="_blank" className="flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 text-white rounded-full p-2 transition">
            <LinkedinLogo size={32} weight="light" />
          </a>
          <a href="mailto:paulo.campos.dev@gmail.com" target="_blank" className="flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 text-white rounded-full p-2 transition">
            <EnvelopeOpen size={32} weight="light" />
          </a>
          {/* <a href="https://www.youtube.com/channel/UCwWJEbTXyAjlYpSRfPedy4w" target="_blank" className="flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 text-white rounded-full p-2 transition">
            <YoutubeLogo size={32} weight="light" />
          </a>
          <a href="https://www.instagram.com/buzz.paulo/" target="_blank" className="flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 text-white rounded-full p-2 transition">
            <InstagramLogo size={32} weight="light" />
          </a> */}
          <a href="https://medium.com/@paulo.campos.dev" target="_blank" className="flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 text-white rounded-full p-2 transition">
            <MediumLogo size={32} weight="light" />
          </a>
          <a href="https://dev.to/paulocod" target="_blank" className="flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 text-white rounded-full p-2 transition">
            <DevToLogo size={32} weight="light" />
          </a>
        </nav>
        <div className="text-end">
          <a href="/files/software-engineer.pdf" target="_blank" className="bg-orange-500 text-white rounded-full py-3 px-6 border-2 hover:bg-orange-600 transition">Resume</a>
        </div>
      </div>
    </main>
  );
}
