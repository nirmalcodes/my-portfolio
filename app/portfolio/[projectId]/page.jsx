export default function ProjectDetails({ params }) {
  return (
    <main className='relative '>
      <section className='text-white pt-16 px-4 py-4'>
        <div>Project Details ID - {params.projectId}</div>
      </section>
    </main>
  );
}
