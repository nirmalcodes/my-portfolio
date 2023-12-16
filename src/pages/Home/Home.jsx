import React from 'react'
import {
    HeroContainer,
    AboutContainer,
    ProjectsContainer,
    ContactContainer,
} from '../../containers'

const Home = () => {
    return (
        <>
            <div className="">
                <HeroContainer />
                <AboutContainer />
                <ProjectsContainer />
                <ContactContainer />
            </div>
        </>
    )
}

export default Home
