import { useState, useEffect } from 'react';
import '../styles/global.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Projects', href: '#projects' },
        { name: 'Design', href: '#design' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: '1rem 2rem',
                transition: 'var(--transition-medium)',
                background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-primary)' }}>
                Portfolio
            </div>

            {/* Desktop Menu */}
            <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                position: 'relative',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Button (Hidden on desktop via CSS media queries usually, but inline for now) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{ display: 'none', color: 'var(--text-primary)' }} // TODO: Add media query for mobile
                className="mobile-toggle"
            >
                Menu
            </button>
        </nav>
    );
};

export default Navbar;
