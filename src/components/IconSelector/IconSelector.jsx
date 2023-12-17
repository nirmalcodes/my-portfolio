import React from 'react'
import { FaLink } from 'react-icons/fa'
import {
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaDribbble,
    FaBehance,
    FaGithub,
} from 'react-icons/fa6'

const IconSelector = ({ iconName, className }) => {
    let iconComponent
    switch (iconName) {
        case 'link':
            iconComponent = <FaLink className={className} />
            break
        case 'email':
            iconComponent = <FaEnvelope className={className} />
            break
        case 'facebook':
            iconComponent = <FaFacebookF className={className} />
            break
        case 'instagram':
            iconComponent = <FaInstagram className={className} />
            break
        case 'twitter':
            iconComponent = <FaXTwitter className={className} />
            break
        case 'linkedin':
            iconComponent = <FaLinkedinIn className={className} />
            break
        case 'youtube':
            iconComponent = <FaYoutube className={className} />
            break
        case 'dribbble':
            iconComponent = <FaDribbble className={className} />
            break
        case 'behance':
            iconComponent = <FaBehance className={className} />
            break
        case 'github':
            iconComponent = <FaGithub className={className} />
            break
        default:
            iconComponent = <FaLink className={className} />
    }
    return iconComponent
}

export default IconSelector
