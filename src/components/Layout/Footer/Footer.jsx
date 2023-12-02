import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaDribbble,
    FaBehance,
    FaLink,
} from 'react-icons/fa6'

const iconFinder = (iconName) => {
    switch (iconName) {
        case 'facebook':
            return <FaFacebookF />
        case 'instagram':
            return <FaInstagram />
        case 'twitter':
            return <FaXTwitter />
        case 'linkedin':
            return <FaLinkedinIn />
        case 'youtube':
            return <FaYoutube />
        case 'dribbble':
            return <FaDribbble />
        case 'behance':
            return <FaBehance />
        default:
            return <FaLink />
    }
}

const Footer = ({ name, socials }) => {
    const DateYear = new Date().getFullYear()

    return (
        <>
            <div className="mt-auto flex flex-wrap items-center gap-3 bg-slate-900 p-3 sm:px-4 sm:py-3">
                <p className="mx-auto text-sm font-medium text-slate-500 md:m-0 md:text-base">
                    ©{DateYear} {name}. All rights reserved.
                </p>
                {socials.length > 0 && (
                    <ul className="mx-auto flex items-center gap-2 md:m-0 md:ml-auto">
                        {socials.map((social) => (
                            <li key={social.name} title={social.name}>
                                <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-7 w-7 items-center justify-center rounded bg-slate-500 text-xl text-slate-800"
                                >
                                    {iconFinder(social.name)}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}

Footer.defaultProps = {
    name: 'Nirmal Fernando',
    socials: [],
}

export default Footer
