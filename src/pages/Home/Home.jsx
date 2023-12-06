import React from 'react'
import { images } from '../../utils/constants'
import { HeroContainer } from '../../containers'

const Home = () => {
    return (
        <>
            <div className="">
                <HeroContainer />
                <section className="section" id={'about'}>
                    <div className="container">about</div>
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
