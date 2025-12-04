import profileData from '../data/profile.json';

const Footer = () => {
    return (
        <footer
            style={{
                padding: '2rem',
                textAlign: 'center',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
            }}
        >
            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                <a href={profileData.social.github} target="_blank" rel="noopener noreferrer" className="hover-accent">
                    GitHub
                </a>
                <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover-accent">
                    LinkedIn
                </a>
            </div>
            <p>
                Designed & Built by {profileData.name}
            </p>
        </footer>
    );
};

export default Footer;
