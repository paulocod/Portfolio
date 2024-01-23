import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { EnvelopeOpen, InstagramLogo, LinkedinLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import Image from 'next/image';

const projects = [
  {
    id: '1',
    image: '/grid-home.svg',
    title: 'Projeto 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a mauris malesuada, viverra sapien vitae, congue massa. Vivamus rutrum pellentesque lacus ut tempor. Aenean auctor orci id lectus convallis, id vestibulum dui rhoncus. Sed quis ex a augue rutrum blandit. Vivamus vitae odio accumsan sapien condimentum varius quis sed nisi. Donec pretium vitae ipsum vitae viverra. Etiam porta vehicula velit, euismod rhoncus urna venenatis eu. Nunc pellentesque sapien non nulla lacinia, sed imperdiet lorem molestie.',
    tecnologies: ['Typescript', 'Javascript', 'NodeJs'],
  },
  {
    id: '2',
    image: '/grid-home.svg',
    title: 'Projeto 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a mauris malesuada, viverra sapien vitae, congue massa. Vivamus rutrum pellentesque lacus ut tempor. Aenean auctor orci id lectus convallis, id vestibulum dui rhoncus. Sed quis ex a augue rutrum blandit. Vivamus vitae odio accumsan sapien condimentum varius quis sed nisi. Donec pretium vitae ipsum vitae viverra. Etiam porta vehicula velit, euismod rhoncus urna venenatis eu. Nunc pellentesque sapien non nulla lacinia, sed imperdiet lorem molestie.',
    tecnologies: ['Typescript', 'Javascript', 'NodeJs'],
  },
  {
    id: '3',
    image: '/grid-home.svg',
    title: 'Projeto 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a mauris malesuada, viverra sapien vitae, congue massa. Vivamus rutrum pellentesque lacus ut tempor. Aenean auctor orci id lectus convallis, id vestibulum dui rhoncus. Sed quis ex a augue rutrum blandit. Vivamus vitae odio accumsan sapien condimentum varius quis sed nisi. Donec pretium vitae ipsum vitae viverra. Etiam porta vehicula velit, euismod rhoncus urna venenatis eu. Nunc pellentesque sapien non nulla lacinia, sed imperdiet lorem molestie.',
    tecnologies: ['Typescript', 'Javascript', 'NodeJs'],
  },
];

export default function Home() {
  return (
    <main className="px-48">
      <Header />
      <section className="h-screen flex items-center justify-center mt-12 mb-20 relative z-10 overflow-hidden">
        <Image src="/grid-home.svg" alt="Projeto 1" layout="fill" objectFit="cover" className="rounded-l-lg " />
        <div className="h-1/2 text-center flex flex-col items-center">
          <h1 className="text-6xl mb-4">Hello.</h1>
          <h1 className="text-6xl mb-4">I’m <strong className="text-orange-500">Paulo</strong>, a software engineer</h1>
          <p className="text-5xl">Come explore the world by the <strong className="text-orange-500">CODE</strong></p>
        </div>
      </section>
      <div className="my-40">
        <h1 className="text-4xl mb-4">About <strong className="text-orange-500">me</strong></h1>
        <p className="text-3xl leading-10">Developer with substantial experience in software development. Holds a Bachelors degree in Computer Science. Specialized in using Node.js and more, committed to delivering scalable and high-impact technological solutions. Possesses a robust background in web and mobile development, showcasing expertise in TypeScript, Python, Apache, Redis, PostgreSQL, and AWS. Enthusiastic about crafting exceptional user experiences and improving software efficiency and quality.</p>
      </div>
      <div className="my-40">
        <div className="grid grid-cols-1 gap-8">
          <h1 className="text-4xl mb-4">Projects</h1>
          <ProjectCard
            projects={projects}
          />
        </div>
      </div>
      <div className="my-12 flex items-center justify-between px-4">
        <div>
          <h1 className="text-4xl mb-2">Have idea about <strong className="text-orange-500">project</strong>?</h1>
          <p className="text-xl mb-4 w-2/3">Write anything here something about yourself to showcase what actually you doing or targeting etc.</p>
          <button className="bg-orange-500 text-white rounded-full py-3 px-6 border-2 hover:bg-orange-600 transition">Send a message</button>
        </div>
        <div className="relative w-96 h-96">
          <Image
            src="/grid-footer.svg"
            alt="Sua Imagem"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="my-12 grid grid-cols-3 gap-12 items-center">
        <div className="text-start">
          <h1 className="text-2xl">
            Paulo.<strong className="text-orange-500">dev</strong>
          </h1>
        </div>
        <nav className="flex rounded-full place-content-center space-x-12 border-2 border-orange-500 place-items-center bg-zinc-800">
          <a className="flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 text-white rounded-full p-2 transition" href="#Home">
            <LinkedinLogo size={32} weight="light" />
          </a>
          <a className="flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 text-white rounded-full p-2 transition" href="#Home">
            <EnvelopeOpen size={32} weight="light" />
          </a>
          <a className="flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 text-white rounded-full p-2 transition" href="#Home">
            <YoutubeLogo size={32} weight="light" />
          </a>
          <a className="flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 text-white rounded-full p-2 transition" href="#Home">
            <InstagramLogo size={32} weight="light" />
          </a>
        </nav>
        <div className="text-end">
          <button className="bg-orange-500 text-white rounded-full py-3 px-6 border-2 hover:bg-orange-600 transition">Hire me</button>
        </div>
      </div>
    </main>
  );
}
