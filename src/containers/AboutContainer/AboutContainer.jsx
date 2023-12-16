import React from 'react'
import { SlideInAnimation } from '../../components'

const AboutContainer = () => {
    return (
        <>
            <section className="section" id={'about'}>
                <div className="container flex min-h-screen flex-col items-center justify-center md:block md:p-4">
                    <SlideInAnimation
                        component="h3"
                        className={
                            'relative mb-7 text-[64px] font-bold uppercase leading-none text-slate-800 opacity-10 md:absolute md:top-[40%] md:-translate-y-[40%] md:text-[128px] lg:top-[37%] lg:-translate-y-[37%] lg:text-[156px] xl:text-[200px]'
                        }
                    >
                        About Me
                    </SlideInAnimation>
                    <p className="text-2xl text-slate-800 md:absolute md:left-[15%] md:top-[55%] md:-translate-y-[55%] lg:top-[65%] lg:-translate-y-[65%] lg:text-[38px] lg:leading-[42px]">
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
