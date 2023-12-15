import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLink } from 'react-icons/fa'

const ProjectCard = ({ projectData }) => {
    const {
        imgURL,
        title,
        createdAt,
        description,
        techStack = [],
        demoLink,
        githubLink,
    } = projectData

    return (
        <>
            <div className="mb-4 flex flex-row flex-wrap  gap-x-8 gap-y-2 rounded-[8px] bg-white p-3 shadow-md md:p-4 md:even:flex-row-reverse">
                {/* project previwe image */}
                <div className="relative flex max-h-[320px] w-full flex-col overflow-hidden rounded-[6px] md:max-h-none md:w-[320px] lg:w-[360px] xl:max-h-[360px] xl:w-1/2">
                    <div className="absolute inset-0 z-0 min-h-[180px] flex-1 animate-pulse bg-slate-200" />
                    <img
                        // hidden
                        src={imgURL}
                        alt={title}
                        loading="lazy"
                        width={400}
                        className="z-[1] h-full w-full object-cover"
                    />
                </div>

                {/* project details */}
                <div className="flex min-h-full flex-1 flex-col bg-blue-200/0 py-4">
                    {/* project title */}
                    <h5 className="text-lg font-bold text-slate-800">
                        {title ? title : 'Title'}
                    </h5>
                    {/* project created date */}
                    <span className="mb-3 text-sm font-bold text-slate-500">
                        {createdAt ? createdAt : 'DD/MM/YYYY'}
                    </span>

                    {/* project description */}
                    <p className="mb-3 font-medium text-slate-800">
                        {description ? description : 'Description'}
                    </p>

                    {/* project tech stack */}
                    {techStack && techStack.length !== 0 && (
                        <ul className="mb-6 flex items-center gap-2 md:mb-10">
                            {techStack.map((tech, index) => (
                                <li key={`tech-${index}`}>
                                    <img
                                        src={`https://skillicons.dev/icons?i=${tech}`}
                                        alt={tech}
                                        loading="lazy"
                                        width={32}
                                        className="transition-all duration-300 ease-in"
                                    />
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* project buttons */}
                    <ul className="flex items-center gap-5">
                        {/* demo */}
                        {demoLink && (
                            <li>
                                <Link
                                    to={demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex cursor-pointer items-center rounded-md bg-white px-4 py-2 text-slate-800 shadow-md duration-300 ease-in hover:scale-110"
                                >
                                    <FaLink className="mr-2" /> Demo
                                </Link>
                            </li>
                        )}

                        {/* github */}
                        {githubLink && (
                            <li>
                                <Link
                                    to={githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex cursor-pointer items-center rounded-md bg-white px-4 py-2 text-slate-800 shadow-md duration-300 ease-in hover:scale-110"
                                >
                                    <FaGithub className="mr-2" /> Code
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
