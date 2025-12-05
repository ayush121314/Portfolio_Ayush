import profileData from '../data/profile.json';

interface ProfileData {
    name: string;
    role: string;
    tagline?: string;
    bio: string;
    social: {
        github: string;
        linkedin: string;
        email: string;
        resume: string;
    };
}

const Hero = () => {
    const profile = profileData as ProfileData;

    return (
        <>
            <style>{`
                @media (max-width: 968px) {
                    .hero-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                    .hero-content {
                        order: 1;
                        text-align: center;
                    }
                    .hero-content h3 {
                        font-size: 1rem !important;
                        margin-bottom: 0.5rem !important;
                    }
                    .hero-content h1,
                    .hero-content h2,
                    .hero-content p {
                        max-width: 100% !important;
                    }
                    .hero-content > div {
                        justify-content: center !important;
                    }
                    .hero-image {
                        order: 2;
                        justify-self: center !important;
                        margin-top: 2rem;
                    }
                    .profile-photo-container {
                        width: 250px !important;
                        height: 250px !important;
                    }
                }
            `}</style>

            <section
                id="home"
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '6rem 5% 2rem 5%',
                    position: 'relative',
                    overflow: 'visible',
                }}
            >
                {/* Background Glow */}
                <div
                    style={{
                        position: 'absolute',
                        top: '20%',
                        right: '-10%',
                        width: '500px',
                        height: '500px',
                        background: 'var(--accent-primary)',
                        filter: 'blur(150px)',
                        opacity: 0.1,
                        borderRadius: '50%',
                        zIndex: 0,
                    }}
                />

                {/* Content Container */}
                <div
                    className="hero-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr auto',
                        gap: '4rem',
                        alignItems: 'center',
                        maxWidth: '1400px',
                        width: '100%',
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    {/* Text Content */}
                    <div className="hero-content">
                        <h3
                            className="animate-fade-in"
                            style={{
                                color: 'var(--accent-primary)',
                                fontSize: '1.2rem',
                                marginBottom: '1rem',
                                fontFamily: 'var(--font-mono)',
                            }}
                        >
                            Hi, my name is
                        </h3>
                        <h1
                            className="animate-fade-in delay-100"
                            style={{
                                fontSize: 'clamp(3rem, 8vw, 5rem)',
                                fontWeight: 800,
                                lineHeight: 1.1,
                                marginBottom: '1rem',
                                background: 'var(--gradient-hero-name)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            {profile.name}.
                        </h1>
                        <h2
                            className="animate-fade-in delay-200"
                            style={{
                                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                                fontWeight: 700,
                                color: 'var(--text-secondary)',
                                marginBottom: '1.5rem',
                                maxWidth: '800px',
                            }}
                        >
                            {profile.tagline}
                        </h2>
                        <p
                            className="animate-fade-in delay-300"
                            style={{
                                maxWidth: '600px',
                                fontSize: '1.1rem',
                                color: 'var(--text-secondary)',
                                marginBottom: '3rem',
                                lineHeight: '1.7',
                            }}
                        >
                            {profile.bio}
                        </p>

                        {/* CTA Buttons */}
                        <div className="animate-fade-in delay-300" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <a
                                href="#projects"
                                style={{
                                    padding: '1rem 2rem',
                                    border: '1px solid var(--accent-primary)',
                                    borderRadius: '4px',
                                    color: 'var(--accent-primary)',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '1rem',
                                    transition: 'var(--transition-fast)',
                                    background: 'rgba(0, 243, 255, 0.05)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(0, 243, 255, 0.1)';
                                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 243, 255, 0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(0, 243, 255, 0.05)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                View My Work
                            </a>

                            <a
                                href={profile.social.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    padding: '1rem 2rem',
                                    border: '1px solid var(--accent-secondary)',
                                    borderRadius: '4px',
                                    color: 'var(--accent-secondary)',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '1rem',
                                    transition: 'var(--transition-fast)',
                                    background: 'rgba(188, 19, 254, 0.05)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(188, 19, 254, 0.1)';
                                    e.currentTarget.style.boxShadow = '0 0 20px rgba(188, 19, 254, 0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(188, 19, 254, 0.05)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                Resume
                            </a>
                        </div>
                    </div>

                    {/* Profile Photo */}
                    <div
                        className="hero-image animate-fade-in delay-400"
                        style={{
                            position: 'relative',
                            justifySelf: 'end',
                        }}
                    >
                        <div
                            className="profile-photo-container"
                            style={{
                                position: 'relative',
                                width: '350px',
                                height: '350px',
                                borderRadius: '50%',
                                padding: '8px',
                                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                                animation: 'pulse 3s ease-in-out infinite',
                            }}
                        >
                            <div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: '4px solid var(--bg-color)',
                                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                                }}
                            >
                                <img
                                    src="/profile.jpeg"
                                    alt="Ayush Singh Chauhan"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
