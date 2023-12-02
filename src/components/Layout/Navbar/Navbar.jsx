import React, { useRef, useState } from 'react'
import { FaBars, FaX } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { useClickOutsideListener } from '../../../hooks'

const Navbar = ({ logoUrl, logoOnly = false, brandName, links }) => {
    const [isToggled, setToggled] = useState(false)
    const navbarRef = useRef(null)

    const handleToggle = () => {
        setToggled((prev) => !prev)
    }

    useClickOutsideListener(navbarRef, () => {
        setToggled(false)
    })

    return (
        <>
            <header
                className="fixed inset-x-0 top-0 z-[9999] flex h-14 w-full items-center bg-slate-800 p-3 transition-all duration-300  sm:px-4 sm:py-3"
                ref={navbarRef}
            >
                <div className="text-xl font-medium text-[#fefefe]">
                    {logoUrl && <img src={logoUrl} alt={brandName} />}
                    {!logoOnly && brandName && <>{brandName}</>}
                </div>
                <button
                    type="button"
                    onClick={handleToggle}
                    className={`z-[99999] ml-auto flex items-center justify-center rounded-full border border-slate-800/10 bg-indigo-500 p-2 text-[#fefefe] transition-all duration-0 lg:hidden`}
                >
                    {isToggled ? <FaX /> : <FaBars />}
                </button>
                <nav
                    className={`fixed inset-0 z-[9999] flex h-screen w-full flex-col items-center justify-center bg-slate-800/75 backdrop-blur-md transition-all duration-300 ease-in-out lg:relative lg:inset-auto lg:ml-auto lg:h-auto lg:w-auto lg:translate-x-0 lg:bg-transparent${
                        isToggled ? ' translate-x-0' : ' translate-x-full'
                    }`}
                >
                    <ul className="flex flex-col items-center gap-4 lg:flex-row">
                        {links.map((link) => (
                            <li key={link?.name}>
                                <NavLink to={link?.path} className="nav-link">
                                    {link?.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
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
