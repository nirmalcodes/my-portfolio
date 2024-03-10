'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaBars, FaX } from 'react-icons/fa6';
import { useClickOutsideListener } from '@/hooks';
import { usePathname } from 'next/navigation';
// import { useRouter } from 'next/navigation';

const navLinks = [
  { id: 1, name: 'About', path: '#about' },
  { id: 2, name: 'Portfolio', path: '#portfolio' },
  { id: 3, name: 'Contact', path: '#contact' },
];

export default function Navbar() {
  // const router = useRouter();
  const pathname = usePathname();
  const navbarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    // Adjust as needed based on your layout and design
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // TODO: futer developments
    // const sectionObserver = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       setActiveSection(entry.target.id);
    //       if (entry.target.id === '') {
    //         router.push('/', { scroll: false });
    //       } else {
    //         router.push(`/#${entry.target.id}`, { scroll: false });
    //       }
    //     }
    //   });
    // }, observerOptions);

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useClickOutsideListener(navbarRef, () => {
    setIsOpen(false);
  });

  return (
    <>
      <header className='navbar' ref={navbarRef}>
        <Link
          href={'/'}
          className='navbar__brand'
          aria-label='home nav link'
          scroll={false}
          onClick={handleClick}
        >
          Nirmal Fernando
        </Link>
        <button
          className='navbar__toggler'
          type='button'
          aria-label='Toggle navigation'
          onClick={handleToggle}
        >
          {isOpen ? <FaX /> : <FaBars />}
        </button>
        <nav className={`nav ml-auto ${isOpen ? '-translate-x-0' : ''}`}>
          <ul className='nav__list'>
            <li className='nav__item md:hidden'>
              <Link
                href={'/'}
                aria-label='home nav link'
                className={`nav__link ${activeSection === '' ? 'active' : ''}`}
                scroll={false}
                onClick={() => {
                  handleClick();
                  setIsOpen(false);
                }}
              >
                Home
              </Link>
            </li>
            {navLinks.map((link) => (
              <li className='nav__item' key={`link-${link.id}`}>
                <Link
                  href={link.path}
                  aria-label={`${link.name} nav link`}
                  className={`nav__link ${activeSection === link.name.toLowerCase() ? 'active' : ''}`}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
