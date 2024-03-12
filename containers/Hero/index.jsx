import SlideInFromLeft from '@/components/Animations/SlideInFromLeft';
import StaggeredFromBottom from '@/components/Animations/StaggeredFromBottom';
import ZoomIn from '@/components/Animations/ZoomIn';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronDown,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa6';

const contacts = [
  {
    name: 'email',
    icon: FaEnvelope,
    url: 'mailto:srnfernando102@gmail.com',
    type: 'normal',
  },
  {
    name: 'github',
    icon: FaGithub,
    url: 'https://github.com/nirmalcodes',
    type: 'new',
  },
  {
    name: 'linkedin',
    icon: FaLinkedinIn,
    url: 'https://www.linkedin.com/in/s-r-n-fernando-5310b4209?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BAqRQIZajQReQM7AKkzxBzw%3D%3D',
    type: 'new',
  },
];

const contactLinks = contacts.map((contact) => {
  if (contact.type == 'normal') {
    return (
      <div className='transition-all duration-300 ease-in hover:-rotate-6 hover:scale-110'>
        <Link
          href={contact.url}
          aria-label={`${contact.name} link`}
          key={contact.name}
        >
          <contact.icon />
        </Link>
      </div>
    );
  }
  if (contact.type == 'new') {
    return (
      <div className='transition-all duration-300 ease-in hover:-rotate-6 hover:scale-110'>
        <Link
          href={contact.url}
          aria-label={`${contact.name} link`}
          target='_blank'
          key={contact.name}
        >
          <contact.icon />
        </Link>
      </div>
    );
  }
});

export default function Hero() {
  return (
    <section id='' className='section flex flex-col justify-center text-white'>
      <div className='relative mx-auto flex flex-col-reverse md:flex-row'>
        <div className='flex-shrink-0'>
          <ZoomIn duration={0.15}>
            <div className='person'>
              <div className='person__container'>
                <div className='person__circle bg-gradient-to-br from-[#6889ff] to-[#0a0a0a]' />
                <Image
                  src='/me.png'
                  alt='my picture'
                  width={816}
                  height={800}
                  priority
                  quality={100}
                  className='person__img'
                />
              </div>
            </div>
          </ZoomIn>
        </div>
        <div className='md:relative md:-left-[8%] md:flex md:items-center lg:-left-[5%]'>
          <div className='h-min flex-grow-0 md:w-max'>
            <SlideInFromLeft className='overflow-hidden'>
              <h1 className='text-[clamp(2rem,_6vw_+_1rem,_6.25rem)] font-extrabold leading-none transition-all duration-300 ease-in-out lg:font-bold'>
                Nirmal Fernando
              </h1>
            </SlideInFromLeft>
            <SlideInFromLeft delay={0.15} className='overflow-hidden'>
              <p className='md:text-3xl` mb-4 text-center text-xl font-semibold tracking-widest opacity-70 transition-all duration-300 ease-in-out sm:text-left sm:text-2xl md:pl-1'>
                Front-End Developer
              </p>
            </SlideInFromLeft>
            <div className='flex flex-wrap items-center gap-5 text-2xl md:pl-1'>
              {contactLinks.map((link, index) => (
                <StaggeredFromBottom key={index} index={index}>
                  {link}
                </StaggeredFromBottom>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ZoomIn duration={0.15} className='relative mx-auto mt-10'>
        <Link
          href={'#about'}
          aria-label='scroll to about section link'
          className='relative block h-12 w-12 overflow-hidden rounded-full border border-white text-xl leading-none'
        >
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <FaChevronDown className='animate-bounce' />
          </div>
        </Link>
      </ZoomIn>
    </section>
  );
}
