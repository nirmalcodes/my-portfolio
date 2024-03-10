'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa6';

export default function STTButton() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    router.push('/', { scroll: false });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button
        type='button'
        onClick={scrollToTop}
        aria-label='Scroll to Top'
        className={`fixed bottom-8 right-4 z-[8888] flex h-[48px] w-[48px] cursor-pointer items-center  justify-center overflow-hidden rounded-lg bg-indigo-500 p-2 text-3xl text-[#fefefe] shadow-md backdrop-blur-sm transition-all duration-300 ease-in ${
          isScrolled ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <FaChevronUp
          className={`transition-all duration-300 ease-in-out ${
            isScrolled ? 'translate-y-0' : 'translate-y-[1000px]'
          }`}
        />
      </button>
    </>
  );
}
