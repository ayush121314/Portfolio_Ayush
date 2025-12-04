import experienceData from '../data/experience.json';

interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    period: string;
    highlights: string[];
}

const Experience = () => {
    return (
        <section
            id="experience"
            style={{
                padding: '6rem 10%',
                maxWidth: '1000px',
                margin: '0 auto',
            }}
        >
            <h2
                style={{
                    fontSize: '2rem',
                    marginBottom: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                }}
            >
                <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '1.5rem' }}>03.</span>
                Experience
                <span style={{ height: '1px', background: 'var(--glass-border)', flex: 1, marginLeft: '1rem' }}></span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {(experienceData as ExperienceItem[]).map((job) => (
                    <div
                        key={job.id}
                        style={{
                            paddingLeft: '1.5rem',
                            borderLeft: '2px solid var(--glass-border)',
                            position: 'relative',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                left: '-6px',
                                top: '0',
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                background: 'var(--accent-primary)',
                            }}
                        />
                        <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                            {job.role} <span style={{ color: 'var(--accent-primary)' }}>@ {job.company}</span>
                        </h3>
                        <p
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                marginBottom: '1.2rem',
                            }}
                        >
                            {job.period}
                        </p>

                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {job.highlights.map((highlight, index) => (
                                <li
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.8rem',
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                    }}
                                >
                                    <span style={{ color: 'var(--accent-secondary)', marginTop: '0.3rem', flexShrink: 0 }}>▹</span>
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
