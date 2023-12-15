import React from 'react'
import { images } from '../../utils/constants'
import { FaGithub, FaLink } from 'react-icons/fa'

const projects = [
    'Project 1',
    'Project 2',
    'Project 3',
    'Project 4',
    'Project 5',
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
                        {projects?.map((project, i) => (
                            <div
                                className="mb-4 flex flex-row flex-wrap  gap-x-8 gap-y-2 rounded-[8px] bg-white p-3 shadow-md md:p-4 md:even:flex-row-reverse"
                                key={`card${i}`}
                            >
                                {/* project previwe image */}
                                <div className="w-full overflow-hidden rounded-[6px] sm:max-h-[360px] md:max-h-none md:w-[320px] lg:w-[360px] xl:max-h-[360px] xl:w-1/2">
                                    <img
                                        src={images.person}
                                        alt=""
                                        width={400}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                {/* project details */}
                                <div className="flex min-h-full flex-1 flex-col bg-blue-200/0 py-4 lg:pr-5 xl:pr-[200px]">
                                    {/* project title */}
                                    <h5 className="text-lg font-bold text-slate-800">
                                        Project Name
                                    </h5>
                                    {/* project created date */}
                                    <span className="mb-3 text-sm font-bold text-slate-500">
                                        25th Dec 2023
                                    </span>

                                    {/* project description */}
                                    <p className="mb-3 font-medium">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Quas, architecto
                                        similique eaque ducimus dolorum minus
                                        quos iste adipisci impedit? Sit maiores
                                        sunt libero tempore impedit, hic sed
                                        quibusdam earum esse.
                                    </p>

                                    {/* project tech stack */}
                                    <ul className="mb-6 flex items-center gap-2 md:mb-10">
                                        <li className="">
                                            <img
                                                src={`https://skillicons.dev/icons?i=${'react'}`}
                                                alt={'react'}
                                                loading="lazy"
                                                width={32}
                                                className="transition-all duration-300 ease-in"
                                            />
                                        </li>
                                        <li className="">
                                            <img
                                                src={`https://skillicons.dev/icons?i=${'tailwind'}&`}
                                                alt={'tailwind'}
                                                loading="lazy"
                                                width={32}
                                                className="transition-all duration-300 ease-in"
                                            />
                                        </li>
                                    </ul>

                                    {/* project buttons */}
                                    <ul className="flex items-center gap-5">
                                        <li>
                                            <button
                                                type="button"
                                                className="flex items-center rounded-md bg-white px-4 py-2 text-slate-800 shadow-md duration-300 ease-in hover:scale-110"
                                            >
                                                <FaLink className="mr-2" />
                                                Demo
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="flex items-center rounded-md bg-white px-4 py-2 text-slate-800 shadow-md duration-300 ease-in hover:scale-110"
                                            >
                                                <FaGithub className="mr-2" />
                                                Code
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectsContainer
