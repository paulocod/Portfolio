export interface Technology {
    name: string;
}

export interface Project {
    id: string;
    image: string;
    title: string;
    descriptionKey: string;
    githubLink: string;
    technologies: Technology[];
}

export const projects: Project[] = [
    {
        id: "1",
        image: "/imgs/dowhile.png",
        title: "DoWhile",
        descriptionKey: "ProjectDoWhileDescription",
        technologies: [
            { name: 'ReactJS' },
            { name: 'TypeScript' },
            { name: 'Styled Components' },
            { name: 'NodeJS' },
            { name: 'Prisma' },
            { name: 'Socket.io' },
            { name: 'React Native' },
            { name: 'Framer Motion' },
            { name: 'Moti' },
            { name: 'Elixir' },
        ],
        githubLink: "https://github.com/paulocod/DoWhileHeat",
    },
    {
        id: "2",
        image: "/imgs/podcastr.png",
        title: "Podcastr",
        descriptionKey: "ProjectPodcastrDescription",
        technologies: [
            { name: 'Reactjs' },
            { name: 'Axios' },
            { name: 'date-fns' },
            { name: 'Next' },
            { name: 'Sass' },
            { name: 'NodeJS' },
            { name: 'TypeScript' },
            { name: 'json-server' },
        ],
        githubLink: "https://github.com/paulocod/Podcastr",
    },
    {
        id: "3",
        image: "/imgs/whereisthephp.jpg",
        title: "WhereIsThePhp",
        descriptionKey: "ProjectWhereIsThePhpDescription",
        technologies: [
            { name: 'Typescript' },
            { name: 'Vue' },
            { name: 'NodeJs' },
            { name: 'BullMQ' },
            { name: 'ExpressJs' },
            { name: 'Prisma' },
            { name: 'Docker' },
            { name: 'MySQL' },
        ],
        githubLink: "https://github.com/orgs/hackathonbtg32/repositories",
    },
    {
        id: '4',
        image: '/imgs/project-devmenthors.jpg',
        title: 'DevMenthors',
        descriptionKey: "ProjectDevMenthorsDescription",
        technologies: [
            { name: 'Typescript' },
            { name: 'Docker' },
            { name: 'NodeJs' },
            { name: 'ExpressJs' },
            { name: 'Vitest' },
            { name: 'Prisma' },
            { name: 'Redis' },
            { name: 'SQLite' },
        ],
        githubLink: 'https://www.cps.sp.gov.br/projeto-devmenthors-e-concluido-com-apresentacao-para-pais-e-empresas-em-marilia/'
    },
];
