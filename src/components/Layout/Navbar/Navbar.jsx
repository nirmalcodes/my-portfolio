import React, { useState } from 'react'
import { FaBars, FaX } from 'react-icons/fa6'

const Navbar = ({ logoUrl, logoOnly = false, brandName, links }) => {
    const [isToggled, setToggled] = useState(false)

    const handleToggle = () => {
        setToggled((prev) => !prev)
    }

    return (
        <>
            <div className="flex h-14 items-center border-b border-slate-800/20 bg-white p-3 sm:h-16 sm:px-4 sm:py-3">
                <div className="text-xl font-medium text-slate-800">
                    {logoUrl && <img src={logoUrl} alt={brandName} />}
                    {!logoOnly && brandName && <>{brandName}</>}
                </div>
                <button
                    type="button"
                    onClick={handleToggle}
                    className={`z-[9999] ml-auto flex items-center justify-center rounded-full border border-slate-800/10 p-2 transition-all duration-0 md:hidden ${
                        isToggled
                            ? 'bg-indigo-500 text-white'
                            : 'text-slate-800'
                    }`}
                >
                    {isToggled ? <FaX /> : <FaBars />}
                </button>
            </div>
            <div
                className={`fixed inset-0 bg-slate-700/60 backdrop-blur-sm transition-all duration-300 ${
                    isToggled ? 'translate-x-0' : 'translate-x-full'
                }`}
                onClick={handleToggle}
            />
        </>
    )
}

Navbar.defaultProps = {
    logoUrl: '',
    logoOnly: false,
    brandName: 'Brand Name',
    links: [],
}

export default Navbar
