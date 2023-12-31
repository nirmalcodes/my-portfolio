import React from 'react'
import { images } from '../../utils/constants'
import { Link } from 'react-router-dom'
import { IconSelector } from '../../components'

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

const contacts = [
    {
        name: 'github',
        url: 'https://www.github.com/',
        type: 'new',
    },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/',
        type: 'new',
    },
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
                            <p className="mb-8 text-center text-xl font-medium text-slate-600 md:text-left">
                                Hi, I'm Nirmal Fernando. A passionate Front-End
                                Developer based in Panadura, Sri Lanka.
                            </p>
                            <ul className="mx-auto flex items-center gap-4 sm:mx-0">
                                {contacts.map((contact) => (
                                    <li
                                        className="text-4xl text-slate-800 transition-all duration-300 ease-in hover:scale-110 hover:text-indigo-700"
                                        key={contact.name}
                                    >
                                        <Link
                                            to={contact.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={contact.name}
                                        >
                                            <IconSelector
                                                iconName={contact.name}
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* image */}
                        <div className="mb-5 flex w-full flex-col items-center justify-center md:mb-0 md:w-[50%] md:items-end lg:items-center">
                            <div className="h-[275px] w-[275px] overflow-hidden rounded-full bg-indigo-500 md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px] xl:h-[400px] xl:w-[400px]">
                                <img
                                    src={images.personBg}
                                    alt="Nirmal Fernando"
                                    loading="lazy"
                                    width={400}
                                    height={400}
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
                                            width={48}
                                            height={48}
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
