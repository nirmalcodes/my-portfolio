import React from 'react'
import { images } from '../../utils/constants'
const Home = () => {
    return (
        <>
            <div className="flex h-screen flex-1 items-center bg-slate-800 px-4 py-3 text-white">
                <div className="mx-auto flex flex-row flex-wrap-reverse items-center bg-blue-400/0 md:max-w-[80%] md:flex-wrap">
                    <div className="bg-pink-300/0 p-4 md:max-w-[55%]">
                        <h4 className="text-4xl font-semibold">
                            Hello, It's me
                        </h4>
                        <h3 className="mb-2 text-6xl font-bold text-indigo-500">
                            {'Nirmal Fernando'}
                        </h3>
                        <p className="">
                            Front-End Developer & UI/UX Developer
                        </p>
                    </div>
                    <div className="w-full bg-yellow-400/0 p-4 md:flex md:max-w-[45%] md:items-center md:justify-center">
                        <div className="h-[250px] w-[250px] overflow-hidden rounded-full bg-indigo-500 md:h-[450px] md:w-[450px]">
                            <img
                                src={images.personBg}
                                alt="Nirmal Fernando"
                                loading="lazy"
                                width={450}
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
