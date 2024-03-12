import SlideInFromLeft from '@/components/Animations/SlideInFromLeft';
import StaggeredFromBottom from '@/components/Animations/StaggeredFromBottom';
import Link from 'next/link';
import { FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa6';

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

export default function Contact() {
  return (
    <section
      id='contact'
      className='section flex flex-col items-center justify-center text-white'
    >
      <div className='container mx-auto'>
        <SlideInFromLeft
          as='h2'
          duration={0.5}
          className='mb-12 text-[clamp(3.5rem,_10vw_+_1rem,_6.25rem)] font-bold leading-none'
        >
          Contact
        </SlideInFromLeft>
        <div className='flex flex-wrap items-center justify-center gap-8 text-[88px] md:justify-start'>
          {contactLinks.map((link, index) => (
            <StaggeredFromBottom key={index} index={index}>
              {link}
            </StaggeredFromBottom>
          ))}
        </div>
      </div>
    </section>
  );
}
