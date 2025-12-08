import { useState, useEffect } from 'react';
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
    github: string;
    demo: string;
    overview: string;
    features: string[];
    patterns: DesignPattern[];
    diagrams?: Record<string, string>;
}

const SystemDesign = () => {
    const designs = designData as unknown as DesignProject[];
    const [selectedDesign, setSelectedDesign] = useState<DesignProject | null>(null);

    // Handle ESC key to close modal
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedDesign(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedDesign) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [selectedDesign]);

    return (
        <section
            id="design"
            style={{
                minHeight: '100vh',
                padding: '100px 5%',
                background: 'var(--bg-primary)',
                position: 'relative',
            }}
        >
            <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                marginBottom: '3rem',
                textAlign: 'center',
            }}>
                System <span style={{ color: 'var(--accent-primary)' }}>Design</span>
            </h2>

            {/* MAIN GRID LAYOUT */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {designs.map((design) => (
                    <div
                        key={design.id}
                        onClick={() => setSelectedDesign(design)}
                        style={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '20px',
                            padding: '2rem',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.borderColor = 'var(--accent-primary)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 243, 255, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'none';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                                {design.title.split("—")[0].trim()}
                            </h3>
                            <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 500 }}>
                                {design.subtitle}
                            </p>
                        </div>

                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', flex: 1 }}>
                            {design.overview}
                        </p>

                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                            {design.tech.slice(0, 3).map((t, i) => (
                                <span key={i} style={{
                                    fontSize: '0.75rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '0.3rem 0.6rem',
                                    borderRadius: '4px',
                                    color: '#ccc'
                                }}>
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div style={{
                            marginTop: '1rem',
                            paddingTop: '1rem',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            color: 'var(--accent-primary)',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            Read Case Study <span style={{ fontSize: '1.1rem' }}>→</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL OVERLAY */}
            {selectedDesign && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.85)', // Keep backdrop dark for focus
                    backdropFilter: 'blur(12px)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem', // Reduced from 2rem for mobile
                    opacity: 1,
                    transition: 'opacity 0.3s ease'
                }} onClick={() => setSelectedDesign(null)}>

                    {/* MODAL CONTENT */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: 'min(1100px, 100%)',
                            maxHeight: '90vh',
                            background: 'var(--bg-color)', // Theme-aware background
                            border: '1px solid var(--glass-border)',
                            borderRadius: '24px',
                            overflowY: 'auto',
                            position: 'relative',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            flexDirection: 'column',
                            color: 'var(--text-primary)' // Base text color
                        }}
                    >
                        {/* Close Button - Sticky for better mobile UX */}
                        <div style={{
                            position: 'sticky',
                            top: 0,
                            right: 0,
                            zIndex: 10,
                            display: 'flex',
                            justifyContent: 'flex-end',
                            padding: '1rem',
                            // Gradient matches theme bg to fade out content
                            background: 'linear-gradient(to bottom, var(--bg-color) 80%, transparent)'
                        }}>
                            <button
                                onClick={() => setSelectedDesign(null)}
                                style={{
                                    background: 'var(--glass-bg)',
                                    border: '1px solid var(--glass-border)',
                                    color: 'var(--text-primary)',
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'background 0.2s',
                                    backdropFilter: 'blur(4px)'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent-primary)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'var(--glass-bg)'}
                            >
                                ✕
                            </button>
                        </div>

                        {/* CONTENT CONTAINER */}
                        <div style={{
                            padding: '0 2rem 2rem 2rem', // Responsive padding in style tag below would be ideal, but using safe default
                        }}>
                            {/* DETAILED SPLIT LAYOUT */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Reduced min-width for mobile
                                gap: '2.5rem'
                            }}>
                                {/* LEFT COLUMN: Context & Features */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                    <div>
                                        <h3 style={{
                                            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                                            fontWeight: 700,
                                            margin: 0,
                                            marginBottom: '0.5rem',
                                            color: 'var(--text-primary)', // Explicitly ensuring title color
                                        }}>
                                            {selectedDesign.title.split("—")[0].trim()}
                                        </h3>
                                        <p style={{
                                            color: 'var(--accent-primary)',
                                            fontSize: '1rem',
                                            fontWeight: 500,
                                            marginBottom: '1rem'
                                        }}>
                                            {selectedDesign.subtitle}
                                        </p>
                                        <p style={{
                                            color: 'var(--text-secondary)',
                                            fontSize: '1rem',
                                            lineHeight: '1.7',
                                        }}>
                                            {selectedDesign.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 style={{ color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '0.8rem', fontWeight: 600 }}>
                                            Key Features
                                        </h4>
                                        <ul style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '0.6rem',
                                            padding: 0,
                                            margin: 0,
                                            listStyle: 'none'
                                        }}>
                                            {selectedDesign.features.map((feature, i) => (
                                                <li key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'start' }}>
                                                    <span style={{ color: 'var(--accent-primary)', lineHeight: '1.6' }}>▹</span>
                                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                                        {feature.split('(')[0].trim()}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* RIGHT COLUMN: Technical Deep Dive */}
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.5rem',
                                    background: 'var(--bg-secondary)', // Subtle contrast
                                    padding: '1.5rem',
                                    borderRadius: '20px',
                                    border: '1px solid var(--glass-border)',
                                    height: 'fit-content'
                                }}>
                                    {/* Diagrams */}
                                    {selectedDesign.diagrams && Object.keys(selectedDesign.diagrams).length > 0 && (
                                        <div>
                                            <h4 style={{
                                                color: 'var(--text-primary)',
                                                fontSize: '0.85rem',
                                                marginBottom: '0.8rem',
                                                fontWeight: 600,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                opacity: 0.7
                                            }}>
                                                Architecture
                                            </h4>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                {Object.entries(selectedDesign.diagrams).map(([name, url], i) => (
                                                    <a
                                                        key={i}
                                                        href={url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0.5rem',
                                                            color: 'var(--accent-primary)',
                                                            fontSize: '0.95rem',
                                                            textDecoration: 'none',
                                                            transition: 'all 0.2s ease',
                                                            padding: '0.5rem',
                                                            background: 'var(--glass-bg)',
                                                            borderRadius: '8px',
                                                            border: '1px solid transparent'
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.borderColor = 'var(--accent-primary)';
                                                            e.currentTarget.style.transform = 'translateX(5px)';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.borderColor = 'transparent';
                                                            e.currentTarget.style.transform = 'none';
                                                        }}
                                                    >
                                                        <span>📄</span>
                                                        {name.replace(/([A-Z])/g, ' $1').trim()}
                                                        <span style={{ marginLeft: 'auto', opacity: 0.5 }}>↗</span>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Patterns */}
                                    <div>
                                        <h4 style={{
                                            color: 'var(--text-primary)',
                                            fontSize: '0.85rem',
                                            marginBottom: '0.8rem',
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            opacity: 0.7
                                        }}>
                                            Patterns In Use
                                        </h4>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {selectedDesign.patterns.map((p, i) => (
                                                <div key={i} style={{
                                                    background: 'var(--glass-bg)',
                                                    border: '1px solid var(--glass-border)',
                                                    borderRadius: '100px',
                                                    padding: '0.3rem 0.8rem',
                                                    fontSize: '0.8rem',
                                                    color: 'var(--text-secondary)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.4rem'
                                                }}>
                                                    <span style={{ color: 'var(--accent-primary)' }}>•</span>
                                                    {p.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem', paddingTop: '0.5rem' }}>
                                        {selectedDesign.github && (
                                            <a href={selectedDesign.github} target="_blank" rel="noopener noreferrer"
                                                style={{
                                                    flex: 1,
                                                    background: 'var(--text-primary)', // Invert for contrast
                                                    color: 'var(--bg-color)',
                                                    fontWeight: 700,
                                                    fontSize: '0.95rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '0.5rem',
                                                    padding: '0.8rem',
                                                    borderRadius: '10px',
                                                    textDecoration: 'none',
                                                    transition: 'transform 0.2s',
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                            >
                                                View Source
                                            </a>
                                        )}
                                        {selectedDesign.demo && (
                                            <a href={selectedDesign.demo} target="_blank" rel="noopener noreferrer"
                                                style={{
                                                    flex: 1,
                                                    background: 'var(--glass-bg)',
                                                    color: 'var(--text-primary)',
                                                    fontWeight: 600,
                                                    fontSize: '0.95rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '0.5rem',
                                                    padding: '0.8rem',
                                                    borderRadius: '10px',
                                                    textDecoration: 'none',
                                                    border: '1px solid var(--glass-border)',
                                                    transition: 'background 0.2s'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--glass-bg)'}
                                                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SystemDesign;
