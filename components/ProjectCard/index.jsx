import Image from 'next/image';
import Link from 'next/link';
import { FaLink } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';

export default function ProjectCard({ project }) {
  const { name, date, techs, imgURL, demoURL, githubURL, description } =
    project;
  return (
    <>
      <div className='mb-4 flex flex-shrink-0 flex-col gap-x-4 gap-y-2 overflow-hidden rounded-2xl bg-[#1E1E1E] p-2 shadow-lg shadow-white/5 md:flex-row md:even:flex-row-reverse lg:rounded-3xl lg:p-3'>
        {/* image side */}
        <div className='relative block h-[200px] w-full flex-shrink-0 overflow-hidden rounded-lg bg-blue-500 md:h-[250px] md:flex-1 lg:h-[350px] lg:rounded-xl'>
          <Image
            src={imgURL}
            alt={name}
            sizes='(min-width: 1540px) 721px, (min-width: 1280px) calc(6.67vw + 521px), (min-width: 1040px) calc(3.64vw + 448px), (min-width: 780px) calc(4.17vw + 324px), (min-width: 720px) 624px, calc(93vw - 27px)'
            fill
            quality={100}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            loading='lazy'
            className='transition-all duration-300 ease-in hover:scale-105'
          />
        </div>

        {/* details side */}
        <div className='w-full flex-shrink-0 rounded-lg bg-green-600/0 p-1 md:flex-1'>
          <p className='text-xl font-semibold'>{name ?? 'Project Name'}</p>
          <span className='mb-4 inline-block text-sm font-medium opacity-75'>
            {date ?? 'Date'}
          </span>
          <div className='mb-3 max-w-lg'>
            {description ?? 'Project Description'}
          </div>
          {techs && (
            <ul className='flex flex-wrap items-center gap-2'>
              {techs.map((tech, index) => (
                <li key={index}>
                  <Image
                    src={`https://skillicons.dev/icons?i=${tech}`}
                    alt={tech}
                    width={32}
                    height={32}
                    priority={false}
                    unoptimized
                    loading='lazy'
                  />
                </li>
              ))}
            </ul>
          )}

          <div className='mt-7 flex gap-4 bg-red-400/0'>
            <Link
              href={demoURL ?? ''}
              target='_blank'
              aria-label='See live demo'
              className='flex flex-1 items-center justify-center rounded-md bg-white/25 px-4 py-2 text-sm backdrop-blur-sm transition-all duration-200 ease-in hover:scale-105 hover:bg-white/30 md:w-fit md:flex-none md:text-base'
            >
              <FaLink className='mr-1' />
              Demo
            </Link>
            <Link
              href={githubURL ?? ''}
              target='_blank'
              aria-label='See github code of this project'
              className='flex flex-1 items-center justify-center rounded-md bg-white/25 px-4 py-2 text-sm backdrop-blur-sm transition-all duration-200 ease-in hover:scale-105 hover:bg-white/30 md:w-fit md:flex-none md:text-base'
            >
              <FaGithub className='mr-1' />
              Code
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
