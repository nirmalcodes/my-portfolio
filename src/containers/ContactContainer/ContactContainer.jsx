import React from 'react'
import {
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaDribbble,
    FaBehance,
    FaLink,
} from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const iconFinder = (iconName) => {
    switch (iconName) {
        case 'email':
            return <FaEnvelope />
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

const ContactContainer = () => {
    const contacts = [
        {
            name: 'email',
            url: 'mailto:srnfernando102@gmail.com',
            type: 'normal',
        },
        {
            name: 'instagram',
            url: 'https://www.instagram.com/',
            type: 'new',
        },
        {
            name: 'twitter',
            url: 'https://www.twitter.com/',
            type: 'new',
        },
        {
            name: 'linkedin',
            url: 'https://www.linkedin.com/',
            type: 'new',
        },
    ]

    return (
        <>
            <a href="http://" target="_blank" rel="noopener noreferrer"></a>
            <section className="section" id={'contact'}>
                <div className="container flex min-h-screen flex-col items-center justify-center md:block md:p-4">
                    <h3 className="relative mb-7 text-[64px] font-bold uppercase leading-none text-slate-800 opacity-10 md:absolute md:top-[40%] md:-translate-y-[40%] md:text-[128px] lg:top-[45%] lg:-translate-y-[45%] lg:text-[160px] xl:text-[200px]">
                        Contact
                    </h3>
                    <div className="text-2xl text-slate-800 md:absolute md:left-[10%] md:top-[50%] md:-translate-y-[50%] lg:top-[55%] lg:-translate-y-[55%] lg:text-[38px] lg:leading-[42px]">
                        <ul className="flex flex-wrap items-center justify-center gap-x-[75px] gap-y-8 text-[88px] leading-[92px]">
                            {contacts.map((contact) => {
                                if (contact.type == 'normal') {
                                    return (
                                        <li
                                            className="transition-all duration-300 ease-in-out hover:-rotate-6"
                                            key={contact.name}
                                        >
                                            <Link to={contact.url}>
                                                {iconFinder(contact.name)}
                                            </Link>
                                        </li>
                                    )
                                }
                                if (contact.type == 'new') {
                                    return (
                                        <li
                                            className="transition-all duration-300 ease-in-out hover:-rotate-6"
                                            key={contact.name}
                                        >
                                            <Link
                                                to={contact.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {iconFinder(contact.name)}
                                            </Link>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactContainer
