import React from 'react'
import { images } from '../../utils/constants'

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
                    <div
                        className=" grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        hidden
                    >
                        {projects?.map((project, i) => (
                            <div
                                key={`card${i}`}
                                className="aspect-square w-full max-w-[320px] rounded-md bg-white p-4 shadow-md"
                            >
                                {project}
                            </div>
                        ))}
                    </div>

                    <div className="">
                        {projects?.map((project, i) => (
                            <div className="mb-4 flex flex-wrap items-center gap-x-8 gap-y-4 rounded-[8px] bg-white p-3 shadow-md md:p-4 md:even:flex-row-reverse">
                                <div className=" w-full overflow-hidden rounded-[6px] md:w-[320px] lg:w-[360px] xl:w-[480px]">
                                    <img
                                        src={images.person}
                                        alt=""
                                        width={400}
                                        className="h-auto w-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 self-start bg-blue-200">
                                    card-right
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
