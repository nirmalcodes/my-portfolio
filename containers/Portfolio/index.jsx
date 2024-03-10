import ProjectCard from '@/components/ProjectCard';
import StaggeredFromLeft from '@/components/Animations/StaggeredFromLeft';

export default function Portfolio() {
  const projects = [
    {
      name: 'Dashboard',
      date: '10/10/2022',
      techs: ['react', 'mui'],
      imgURL: 'https://picsum.photos/1280/720?random=1',
      demoURL: 'https://www.google.com',
      githubURL: 'https://www.github.com',
      description: 'Admin dashboard designed with MUI',
    },
    {
      name: 'Dashboard',
      date: '10/10/2022',
      techs: ['react', 'mui'],
      imgURL: 'https://picsum.photos/1280/720?random=1',
      demoURL: 'https://www.google.com',
      githubURL: 'https://www.github.com',
      description: 'Admin dashboard designed with MUI',
    },
    {
      name: 'Dashboard',
      date: '10/10/2022',
      techs: ['react', 'mui'],
      imgURL: 'https://picsum.photos/1280/720?random=1',
      demoURL: 'https://www.google.com',
      githubURL: 'https://www.github.com',
      description: 'Admin dashboard designed with MUI',
    },
    {
      name: 'Dashboard',
      date: '10/10/2022',
      techs: ['react', 'mui'],
      imgURL: 'https://picsum.photos/1280/720?random=1',
      demoURL: 'https://www.google.com',
      githubURL: 'https://www.github.com',
      description: 'Admin dashboard designed with MUI',
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
