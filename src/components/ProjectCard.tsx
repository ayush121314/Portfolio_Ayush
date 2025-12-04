import React from 'react';

interface ProjectProps {
    project: {
        id: string;
        title: string;
        description: string;
        tech: string[];
        year: string;
        github?: string;
        demo?: string;
        highlights?: string[];
    };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
    return (
        <div
            style={{
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '12px',
                padding: '2rem',
                transition: 'var(--transition-medium)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
            className="project-card"
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 243, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            {/* Header */}
            <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                        {project.title}
                    </h3>
                    <span style={{
                        color: 'var(--accent-primary)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        flexShrink: 0,
                        marginLeft: '1rem',
                        marginTop: '0.4rem'
                    }}>
                        {project.year}
                    </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
                    {project.description}
                </p>
            </div>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
                <ul style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.8rem',
                    marginBottom: '2rem',
                    flex: 1
                }}>
                    {project.highlights.map((highlight, i) => (
                        <li
                            key={i}
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.7rem',
                                color: 'var(--text-secondary)',
                                fontSize: '0.95rem',
                                lineHeight: '1.6',
                            }}
                        >
                            <span style={{ color: 'var(--accent-secondary)', marginTop: '0.25rem', flexShrink: 0 }}>▹</span>
                            <span>{highlight}</span>
                        </li>
                    ))}
                </ul>
            )}

            {/* Footer: Tech & Links */}
            <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
                    {project.tech.map((t, i) => (
                        <span
                            key={i}
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.8rem',
                                color: 'var(--accent-primary)',
                                background: 'rgba(0, 243, 255, 0.08)',
                                padding: '0.3rem 0.8rem',
                                borderRadius: '4px',
                            }}
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.95rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                transition: 'var(--transition-fast)'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            <span style={{ fontSize: '1.2rem' }}>⎋</span> Repository
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--accent-primary)',
                                fontSize: '0.95rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                fontWeight: 500,
                                transition: 'var(--transition-fast)'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                            onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                        >
                            <span style={{ fontSize: '1.2rem' }}>↗</span> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
