import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
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
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Design', href: '#design' },
        { name: 'Skills', href: '#skills' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <style>{`
                @media (max-width: 768px) {
                    .desktop-menu {
                        display: none !important;
                    }
                    .mobile-toggle {
                        display: flex !important;
                    }
                    .navbar-logo {
                        font-size: 1.2rem !important;
                    }
                    nav {
                        padding: 1rem 3% !important;
                    }
                }
                @media (min-width: 769px) {
                    .desktop-menu {
                        display: flex !important;
                    }
                    .mobile-toggle {
                        display: none !important;
                    }
                }
            `}</style>

            <nav
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    padding: '1rem 5%',
                    transition: 'var(--transition-medium)',
                    background: scrolled ? 'var(--navbar-bg)' : 'var(--navbar-bg-transparent)',
                    backdropFilter: 'blur(10px)',
                    borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid var(--glass-border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <div className="navbar-logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-primary)', zIndex: 1001 }}>
                    Developer
                </div>

                {/* Desktop Menu */}
                <ul
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        alignItems: 'center',
                    }}
                    className="desktop-menu"
                >
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    position: 'relative',
                                    transition: 'var(--transition-fast)',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <ThemeToggle />
                    </li>
                </ul>

                {/* Mobile Controls - Theme Toggle + Menu Button */}
                <div
                    style={{
                        display: 'none',
                        gap: '1rem',
                        alignItems: 'center',
                        zIndex: 1001,
                    }}
                    className="mobile-toggle"
                >
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '5px',
                        }}
                        aria-label="Toggle menu"
                    >
                        <span style={{
                            width: '24px',
                            height: '2px',
                            background: isOpen ? 'var(--accent-primary)' : 'var(--text-primary)',
                            transform: isOpen ? 'rotate(45deg) translateY(6px)' : 'none',
                            transition: 'all 0.3s ease',
                        }}></span>
                        <span style={{
                            width: '24px',
                            height: '2px',
                            background: 'var(--text-primary)',
                            opacity: isOpen ? 0 : 1,
                            transition: 'all 0.3s ease',
                        }}></span>
                        <span style={{
                            width: '24px',
                            height: '2px',
                            background: isOpen ? 'var(--accent-primary)' : 'var(--text-primary)',
                            transform: isOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
                            transition: 'all 0.3s ease',
                        }}></span>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        width: '70%',
                        maxWidth: '300px',
                        height: '100vh',
                        background: 'var(--navbar-bg)',
                        backdropFilter: 'blur(10px)',
                        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
                        transition: 'transform 0.3s ease',
                        padding: '5rem 2rem',
                        borderLeft: '1px solid var(--glass-border)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                        zIndex: 1000,
                    }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={handleLinkClick}
                            style={{
                                color: 'var(--text-secondary)',
                                fontSize: '1.2rem',
                                fontWeight: 500,
                                transition: 'var(--transition-fast)',
                                textAlign: 'right',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Overlay backdrop when menu is open */}
                {isOpen && (
                    <div
                        onClick={() => setIsOpen(false)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            background: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 999,
                        }}
                    />
                )}
            </nav>
        </>
    );
};

export default Navbar;
