import React from 'react'
import { images } from '../../utils/constants'
import { HeroContainer } from '../../containers'

const Home = () => {
    return (
        <>
            <div className="">
                <HeroContainer />
                <section className="section bg-teal-400" id={'about'}>
                    <div className="container flex min-h-screen flex-col items-center justify-center md:block">
                        <h3 className="relative mb-7 text-[64px] font-bold leading-none text-slate-800 underline underline-offset-4 opacity-100 md:absolute md:top-[35%] md:-translate-y-[35%] md:text-[128px] md:no-underline md:opacity-10">
                            About Me
                        </h3>
                        <p className="text-center text-lg md:absolute md:left-[15%] md:top-[42%] md:text-left md:text-xl">
                            As a Junior Front-End Developer, I possess an
                            impressive arsenal of skills in HTML, CSS,
                            JavaScript, React, Tailwind, and SCSS. I excel in
                            designing and maintaining responsive websites that
                            offer a smooth user experience. My expertise lies in
                            crafting dynamic, engaging interfaces through
                            writing clean and optimized code and utilizing
                            cutting-edge development tools and techniques. I am
                            also a team player who thrives in collaborating with
                            cross-functional teams to produce outstanding web
                            applications.
                        </p>
                    </div>
                </section>
                <section className="section" id={'projects'}>
                    <div className="container">projects</div>
                </section>
                <section className="section" id={'contact'}>
                    <div className="container">contact</div>
                </section>
            </div>
        </>
    )
}

export default Home
