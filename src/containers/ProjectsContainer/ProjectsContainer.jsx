import React from 'react'
import { ProjectCard } from '../../components/'

const projects = [
    {
        imgURL: 'https://source.unsplash.com/random/1920x1080/?technology&1',
        title: 'Project 1',
        createdAt: '20/05/2023',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nemo dignissimos odio aspernatur eos excepturi praesentium. Quod, facere obcaecati? Excepturi, reprehenderit repellendus. Consectetur, saepe asperiores? Magnam modi voluptatem veniam aliquid!',
        techStack: ['react', 'tailwindcss'],
        demoLink: 'https://www.youtube.com/',
        githubLink: 'https://www.google.com/',
    },
    {
        imgURL: 'https://source.unsplash.com/random/1920x1080/?technology&2',
        title: 'Project 2',
        createdAt: '20/06/2023',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nemo dignissimos odio aspernatur eos excepturi praesentium. Quod, facere obcaecati? Excepturi, reprehenderit repellendus. Consectetur, saepe asperiores? Magnam modi voluptatem veniam aliquid!',
        techStack: ['react', 'css'],
        demoLink: 'https://www.youtube.com/',
        githubLink: 'https://www.google.com/',
    },
    {
        imgURL: 'https://source.unsplash.com/random/1920x1080/?technology&3',
        title: 'Project 3',
        createdAt: '20/10/2023',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nemo dignissimos odio aspernatur eos excepturi praesentium. Quod, facere obcaecati? Excepturi, reprehenderit repellendus. Consectetur, saepe asperiores? Magnam modi voluptatem veniam aliquid!',
        techStack: ['react', 'scss'],
        demoLink: 'https://www.youtube.com/',
        githubLink: 'https://www.google.com/',
    },
]

const ProjectsContainer = () => {
    return (
        <>
            <section className="section" id={'projects'}>
                <div className="container min-h-screen bg-red-200/0 py-20">
                    <h5 className="mb-6 text-lg font-bold text-indigo-500">
                        PORTFOLIO
                    </h5>

                    <div className="">
                        {projects?.map((project, index) => (
                            <ProjectCard
                                projectData={project}
                                key={`project-${index}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectsContainer
