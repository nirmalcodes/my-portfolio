import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import NavbarSpacer from '../NavbarSpacer/NavbarSpacer'

const links = [
    {
        id: 1,
        name: 'Home',
        path: '/',
        component: 'Home',
    },
    {
        id: 2,
        name: 'Projects',
        path: '/projects',
        component: 'Projects',
    },
    {
        id: 3,
        name: 'Contact',
        path: '/contact',
        component: 'Contact',
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
            <Navbar brandName={'Nirmal'} links={links} />
            <div className="flex flex-1 flex-col">
                {/* <NavbarSpacer /> */}
                {children}
            </div>
            <Footer socials={socials} />
        </>
    )
}

export default Layout
