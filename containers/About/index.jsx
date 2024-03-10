import FadeIn from '@/components/Animations/FadeIn';
import SlideInFromLeft from '@/components/Animations/SlideInFromLeft';
import StaggeredFromBottom from '@/components/Animations/StaggeredFromBottom';
import Image from 'next/image';

const techStack = [
  'html',
  'css',
  'js',
  'bootstrap',
  'scss',
  'tailwind',
  'react',
  'mui',
  'vite',
  'firebase',
  'figma',
  'nextjs',
];

const techStackImages = techStack.map((tech) => (
  <div className='cursor-pointer transition-all duration-300 ease-in-out hover:scale-110'>
    <Image
      src={`https://skillicons.dev/icons?i=${tech}`}
      alt={tech}
      width={48}
      height={48}
      priority={false}
      unoptimized
    />
  </div>
));

export default function About() {
  return (
    <section
      id='about'
      className='section flex items-center text-white'
    >
      <div className='container mx-auto'>
        <SlideInFromLeft
          as='h2'
          duration={0.5}
          className='mb-8 text-[clamp(3.5rem,_10vw_+_1rem,_6.25rem)] font-bold leading-none'
        >
          About Me
        </SlideInFromLeft>
        <FadeIn
          as='p'
          delay={0.5}
          duration={0.5}
          className='mb-7 max-w-7xl text-[clamp(1rem,_6vw,_2rem)] font-medium leading-none'
        >
          Hi, I'm Nirmal Fernando. A passionate Front-End Developer based in Sri
          Lanka. Turning designs into interactive wonders. Crafting clean,
          optimized, and reusable code is my forte. And a rapid learner
          passionate about delivering seamless user experiences.
        </FadeIn>
        <ul className='flex flex-wrap items-center justify-center gap-2 md:justify-start'>
          {techStackImages.map((tech, index) => (
            <StaggeredFromBottom as='li' key={index} index={index}>
              {tech}
            </StaggeredFromBottom>
          ))}
        </ul>
      </div>
    </section>
  );
}
