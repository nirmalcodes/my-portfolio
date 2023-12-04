import React from 'react'
import { images } from '../../utils/constants'
const Home = () => {
    return (
        <>
            <div className="">
                <section
                    className="flex h-screen flex-col items-center justify-center bg-red-300"
                    id={'hero'}
                >
                    hero
                </section>
                <section
                    className="flex h-screen flex-col items-center justify-center bg-blue-300"
                    id={'about'}
                >
                    about
                </section>
                <section
                    className="flex h-screen flex-col items-center justify-center bg-green-300"
                    id={'projects'}
                >
                    projects
                </section>
                <section
                    className="flex h-screen flex-col items-center justify-center bg-teal-300"
                    id={'contact'}
                >
                    contact
                </section>
            </div>
        </>
    )
}

export default Home
