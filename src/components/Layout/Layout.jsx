import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const sections = [
    {
        id: 'hero',
        name: 'Home',
    },
    {
        id: 'about',
        name: 'About',
    },
    {
        id: 'projects',
        name: 'Projects',
    },
    {
        id: 'contact',
        name: 'Contact',
    },
]

const socials = [
    {
        id: 1,
        name: 'facebook',
        url: 'https://www.facebook.com',
    },
    {
        id: 2,
        name: 'instagram',
        url: 'https://www.instagram.com',
    },
    {
        id: 3,
        name: 'youtube',
        url: 'https://www.youtube.com',
    },
]

const Layout = ({ children }) => {
    return (
        <>
            <Navbar brandName={'Nirmal'} links={sections} />
            <div className="flex flex-1 flex-col">{children}</div>
            {/* <Footer socials={socials} /> */}
        </>
    )
}

export default Layout
