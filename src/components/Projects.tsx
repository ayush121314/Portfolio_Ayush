import projectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section
            id="projects"
            style={{
                padding: '6rem 10%',
            }}
        >
            <h2
                style={{
                    fontSize: '2rem',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                }}
            >
                <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '1.5rem' }}>01.</span>
                Featured Projects
                <span style={{ height: '1px', background: 'var(--glass-border)', flex: 1, marginLeft: '1rem' }}></span>
            </h2>
            <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                marginBottom: '3rem',
                maxWidth: '700px'
            }}>
                Full-stack web applications built with modern technologies, focusing on user experience and scalable architecture.
            </p>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
                    gap: '2rem',
                }}
            >
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
