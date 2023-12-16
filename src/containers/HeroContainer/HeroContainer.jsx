import React from 'react'
import { images } from '../../utils/constants'

const techStack = [
    'html',
    'css',
    'js',
    'react',
    'scss',
    'tailwind',
    'bootstrap',
    'mui',
]

const HeroContainer = () => {
    return (
        <>
            <section
                className="section flex flex-col items-center justify-center py-20 lg:py-4"
                id={'hero'}
            >
                <div className="container">
                    <div className="mb-8 flex w-full flex-row flex-wrap-reverse items-center">
                        {/* details */}
                        <div className="flex w-full flex-col text-slate-800 md:w-[50%] lg:pr-10">
                            <h3 className="mb-4 text-center text-[64px] font-bold leading-none md:text-left md:text-6xl">
                                Front-End Developer
                            </h3>
                            <p className="text-center text-xl font-medium text-slate-600 md:text-left">
                                Hi, I'm Nirmal Fernando. A passionate Front-End
                                Developer based in Panadura, Sri Lanka.
                            </p>
                        </div>

                        {/* image */}
                        <div className="mb-5 flex w-full flex-col items-center justify-center md:mb-0 md:w-[50%] md:items-end lg:items-center">
                            <div className="h-[275px] w-[275px] overflow-hidden rounded-full bg-indigo-500 md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px] xl:h-[400px] xl:w-[400px]">
                                <img
                                    src={images.personBg}
                                    alt="Nirmal Fernando"
                                    loading="lazy"
                                    width={400}
                                    className="h-auto w-full object-cover"
                                />
                            </div>
                        </div>
                        <div></div>
                    </div>

                    {/* tech stack section */}
                    <div className="flex w-full flex-col items-center md:flex-row">
                        <p className="mb-4 flex-shrink-0 border-slate-800 text-center text-lg font-semibold text-slate-800 underline underline-offset-4 md:mb-0 md:mr-8 md:border-r-2 md:pr-4 md:text-left md:no-underline">
                            Tech Stack
                        </p>

                        {/* tech stack list */}
                        <div className="">
                            <ul className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                                {techStack.map((tech) => (
                                    <li
                                        className="cursor-pointer transition-all duration-300 ease-linear hover:-translate-y-2"
                                        key={tech}
                                    >
                                        <img
                                            src={`https://skillicons.dev/icons?i=${tech}`}
                                            alt={tech}
                                            loading="lazy"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroContainer
