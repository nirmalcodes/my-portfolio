import React, { useEffect, useRef, useState } from 'react'
import { FaBars, FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { useClickOutsideListener } from '../../../hooks'

const Navbar = ({ logoUrl, logoOnly = false, brandName, links }) => {
    const navbarRef = useRef(null)
    const [isToggled, setIsToggled] = useState(false)
    const [activeLink, setActiveLink] = useState('hero')
    const [isScrolled, setIsScrolled] = useState(false)

    // function to scroll to the section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const mTop = 0
            const scrollY =
                element.getBoundingClientRect().top + window.scrollY - mTop
            window.scrollTo({ top: scrollY, behavior: 'smooth' })
        }
    }

    // function to detect active section
    const detectActiveSection = () => {
        for (let i = links.length - 1; i >= 0; i--) {
            const section = document.getElementById(links[i].id)
            if (section) {
                const rect = section.getBoundingClientRect()
                if (rect.top <= 120 && rect.bottom >= 120) {
                    setActiveLink(links[i].id)
                    break
                }
            }
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
            detectActiveSection()
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // function to handle navbar toggle
    const handleToggle = () => {
        setIsToggled((prev) => !prev)
    }

    // custom hook to listen outside click
    useClickOutsideListener(navbarRef, () => {
        setIsToggled(false)
    })

    return (
        <>
            <header
                className="fixed inset-x-0 top-0 z-[9999] flex h-14 items-center bg-white px-4 py-2 text-slate-800 shadow-md transition-all duration-300 ease-in lg:px-8"
                ref={navbarRef}
            >
                <div className="text-xl font-semibold">
                    {logoUrl && (
                        <img src={logoUrl} alt={brandName} loading="eager" />
                    )}
                    {!logoOnly && brandName && <>{brandName}</>}
                </div>
                <button
                    type="button"
                    onClick={handleToggle}
                    aria-label="Toggle Sidebar Menu"
                    className="z-[99999] ml-auto flex items-center justify-center rounded-full p-2 transition-all duration-300 ease-in lg:hidden"
                >
                    {isToggled ? <FaX /> : <FaBars />}
                </button>
                <nav
                    className={`fixed inset-0 z-[9999] ml-auto flex h-screen w-full items-center justify-center bg-white p-4 shadow-md backdrop-blur-lg transition-all duration-300 ease-in lg:relative lg:inset-auto lg:h-auto lg:w-auto lg:translate-x-0 lg:bg-transparent lg:p-0 lg:shadow-none${
                        isToggled ? ' translate-x-0' : ' translate-x-full'
                    }`}
                >
                    <ul className="flex flex-col items-center gap-8 lg:flex-row lg:gap-3">
                        {links?.map((link) => (
                            <li
                                key={link?.id}
                                onClick={() => {
                                    scrollToSection(link.id)
                                    setIsToggled(false)
                                }}
                            >
                                <Link
                                    to={`/`}
                                    className={`nav-link ${
                                        activeLink === link.id ? 'active' : null
                                    }`}
                                    aria-label={link.name}
                                >
                                    {link?.name}
                                </Link>
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
