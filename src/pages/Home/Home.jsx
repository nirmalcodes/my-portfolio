import React from 'react'
import { images } from '../../utils/constants'
import {
    AboutContainer,
    HeroContainer,
    ProjectsContainer,
} from '../../containers'

const Home = () => {
    return (
        <>
            <div className="">
                <HeroContainer />
                <AboutContainer />
                <ProjectsContainer />

                <section className="section" id={'contact'}>
                    <div className="container">contact</div>
                </section>
            </div>
        </>
    )
}

export default Home
