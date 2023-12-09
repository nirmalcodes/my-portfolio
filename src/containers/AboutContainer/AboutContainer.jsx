import React from 'react'

const AboutContainer = () => {
    return (
        <>
            <section className="section" id={'about'}>
                <div className="container flex min-h-screen flex-col items-center justify-center md:block">
                    <h3 className="relative mb-7 text-[64px] font-bold leading-none text-slate-800 opacity-10 md:absolute md:top-[40%] md:-translate-y-[40%] md:text-[128px] lg:top-[50%] lg:-translate-y-[50%] lg:text-[160px] xl:text-[200px]">
                        About Me
                    </h3>
                    <p className="text-2xl text-slate-800 md:absolute md:left-[15%] md:top-[55%] md:-translate-y-[55%] lg:top-[72%] lg:-translate-y-[72%] lg:text-[38px] lg:leading-[42px]">
                        Turning designs into interactive wonders. Crafting
                        clean, optimized, and reusable code is my forte. And a
                        rapid learner passionate about delivering seamless user
                        experiences.
                    </p>
                </div>
            </section>
        </>
    )
}

export default AboutContainer
