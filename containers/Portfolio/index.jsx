import ProjectCard from '@/components/ProjectCard';
import StaggeredFromLeft from '@/components/Animations/StaggeredFromLeft';

export default function Portfolio() {
  const projects = [
    {
      name: 'MUI dashboar in React',
      date: '10/04/2023',
      techs: [
        'React',
        'React Router',
        'Material UI',
        'Material Icons',
        'Apache ECharts',
        'dnd kit',
        'Vite',
      ],
      imgURL: '/mui/1.png',
      demoURL: 'https://muidashboard.web.app',
      githubURL: 'https://github.com/nirmalcodes/mui-dashboard',
      description: 'Admin dashboard designed with MUI',
    },
    {
      name: 'Landing page in React',
      date: '16/11/2022',
      techs: [
        'React',
        'React Router',
        'Tailwind CSS',
        'React icons',
        'React Splide',
        'Vite',
      ],
      imgURL: '/pixy/desktop/1.png',
      demoURL: 'https://landingpagetw.web.app',
      githubURL: 'https://github.com/nirmalcodes/tailwind-landing-page',
      description: 'Landing page with Tailwind CSS',
    },
  ];

  const projectCards = projects.map((project, index) => (
    <ProjectCard project={project} key={index} />
  ));
  return (
    <section id='portfolio' className='section text-white'>
      <div className='container mx-auto'>
        <h1 className='mb-6 text-[clamp(1.5rem,_5vw_+_1rem,_6.25rem)] font-bold leading-none'>
          Portfolio
        </h1>

        <ul className='flex flex-col'>
          {projectCards.map((projectCard, index) => (
            <StaggeredFromLeft as='li' key={index}>
              {projectCard}
            </StaggeredFromLeft>
          ))}
        </ul>
      </div>
    </section>
  );
}
