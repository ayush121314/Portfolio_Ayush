import skillsData from '../data/skills.json';

interface SkillCategory {
    name: string;
    icon?: string;
    skills: string[];
}

interface SkillsData {
    categories: SkillCategory[];
}

const Skills = () => {
    const data = skillsData as SkillsData;

    return (
        <section
            id="skills"
            style={{
                padding: '6rem 10%',
                background: 'var(--bg-secondary)',
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
                <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '1.5rem' }}>04.</span>
                Technical Skills
                <span style={{ height: '1px', background: 'var(--glass-border)', flex: 1, marginLeft: '1rem' }}></span>
            </h2>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                {data.categories.map((category, index) => (
                    <div
                        key={index}
                        style={{
                            background: 'var(--glass-bg)',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '1px solid var(--glass-border)',
                            transition: 'var(--transition-medium)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--accent-primary)';
                            e.currentTarget.style.transform = 'translateY(-5px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--glass-border)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <div style={{
                            fontSize: '2.5rem',
                            marginBottom: '1rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            width: '80px',
                            height: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                        }}>
                            {category.icon}
                        </div>
                        <h3 style={{
                            color: 'var(--text-primary)',
                            marginBottom: '1.5rem',
                            fontSize: '1.2rem',
                            fontWeight: 600
                        }}>
                            {category.name}
                        </h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', width: '100%' }}>
                            {category.skills.map((skill, i) => (
                                <li
                                    key={i}
                                    style={{
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.95rem',
                                        padding: '0.4rem',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        borderRadius: '6px',
                                    }}
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
