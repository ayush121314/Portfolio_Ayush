import designData from '../data/design.json';

interface DesignPattern {
    name: string;
    usage: string;
}

interface DesignProject {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
    overview: string;
    features: string[];
    patterns: DesignPattern[];
}

const SystemDesign = () => {
    const designs = designData as DesignProject[];

    return (
        <section
            id="design"
            style={{
                padding: '6rem 10%',
                background: 'var(--bg-secondary)',
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
                <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '1.5rem' }}>03.</span>
                System Design
                <span style={{ height: '1px', background: 'var(--glass-border)', flex: 1, marginLeft: '1rem' }}></span>
            </h2>
            <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                marginBottom: '3rem',
                maxWidth: '700px'
            }}>
                Architectural implementations focusing on clean object modeling and design patterns.
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem',
            }}>
                {designs.map((design) => (
                    <div
                        key={design.id}
                        style={{
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '12px',
                            padding: '2rem',
                            transition: 'var(--transition-medium)',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--accent-primary)';
                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 243, 255, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--glass-border)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        {/* Header */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                                {design.title}
                            </h3>
                            <p style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', marginBottom: '0.8rem', fontWeight: 500 }}>
                                {design.subtitle}
                            </p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                {design.overview}
                            </p>
                        </div>

                        {/* Features */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{
                                color: 'var(--accent-primary)',
                                fontSize: '1rem',
                                marginBottom: '0.8rem',
                                fontWeight: 600
                            }}>
                                Key Features
                            </h4>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                {design.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '0.6rem',
                                            color: 'var(--text-secondary)',
                                            fontSize: '0.85rem',
                                            lineHeight: '1.5',
                                        }}
                                    >
                                        <span style={{ color: 'var(--accent-secondary)', marginTop: '0.2rem', flexShrink: 0 }}>▹</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Design Patterns */}
                        <div style={{ marginBottom: '1.5rem', flex: 1 }}>
                            <h4 style={{
                                color: 'var(--accent-primary)',
                                fontSize: '1rem',
                                marginBottom: '0.8rem',
                                fontWeight: 600
                            }}>
                                Design Patterns
                            </h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {design.patterns.map((pattern, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            background: 'rgba(188, 19, 254, 0.08)',
                                            border: '1px solid rgba(188, 19, 254, 0.2)',
                                            borderRadius: '4px',
                                            padding: '0.4rem 0.8rem',
                                            color: 'var(--accent-secondary)',
                                            fontSize: '0.8rem',
                                            fontWeight: 500,
                                        }}
                                    >
                                        {pattern.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Tech Stack & Links */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            paddingTop: '1rem',
                            borderTop: '1px solid var(--glass-border)',
                            marginTop: 'auto'
                        }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {design.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.75rem',
                                            color: 'var(--accent-primary)',
                                            background: 'rgba(0, 243, 255, 0.08)',
                                            padding: '0.3rem 0.7rem',
                                            borderRadius: '4px',
                                        }}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                {design.github && (
                                    <a
                                        href={design.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: 'var(--text-secondary)',
                                            fontSize: '0.9rem',
                                            transition: 'var(--transition-fast)'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                                    >
                                        → Repository
                                    </a>
                                )}
                                {design.demo && (
                                    <a
                                        href={design.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: 'var(--accent-primary)',
                                            fontSize: '0.9rem',
                                            fontWeight: 500,
                                            transition: 'var(--transition-fast)'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                                        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                                    >
                                        → Preview
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SystemDesign;
