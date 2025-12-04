import profileData from '../data/profile.json';

interface ProfileData {
    name: string;
    role: string;
    bio: string;
    social: {
        github: string;
        linkedin: string;
        email: string;
    };
    education?: {
        institution: string;
        degree: string;
        period: string;
    };
    achievements?: string[];
}

const About = () => {
    const profile = profileData as ProfileData;

    return (
        <section
            id="about"
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
                <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '1.5rem' }}>05.</span>
                About Me
                <span style={{ height: '1px', background: 'var(--glass-border)', flex: 1, marginLeft: '1rem' }}></span>
            </h2>

            <div style={{ display: 'grid', gap: '2rem' }}>
                {profile.education && (
                    <div
                        style={{
                            background: 'var(--glass-bg)',
                            padding: '2rem',
                            borderRadius: '8px',
                            border: '1px solid var(--glass-border)',
                        }}
                    >
                        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '1.2rem' }}>
                            Education
                        </h3>
                        <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                            {profile.education.degree}
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '0.3rem' }}>
                            {profile.education.institution}
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                            {profile.education.period}
                        </p>
                    </div>
                )}

                {profile.achievements && profile.achievements.length > 0 && (
                    <div
                        style={{
                            background: 'var(--glass-bg)',
                            padding: '2rem',
                            borderRadius: '8px',
                            border: '1px solid var(--glass-border)',
                        }}
                    >
                        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
                            Achievements & Leadership
                        </h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {profile.achievements.map((achievement, index) => (
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
                                    <span>{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
};

export default About;
