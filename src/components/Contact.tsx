import profileData from '../data/profile.json';

const Contact = () => {
    const email = profileData.social.email;
    const subject = encodeURIComponent("Hello");
    const body = encodeURIComponent("Hi Ayush,\n");

    return (
        <section
            id="contact"
            style={{
                padding: '8rem 10%',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto',
            }}
        >
            <p
                style={{
                    color: 'var(--accent-primary)',
                    fontFamily: 'var(--font-mono)',
                    marginBottom: '1.5rem',
                }}
            >
                06. What's Next?
            </p>

            <h2
                style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    fontWeight: 700,
                    marginBottom: '1.5rem',
                    color: 'var(--text-primary)',
                }}
            >
                Get In Touch
            </h2>

            <p
                style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.1rem',
                    marginBottom: '3rem',
                    lineHeight: '1.6',
                }}
            >
                I'm currently open to new opportunities. Whether you have a question or just
                want to say hi, I'll try my best to get back to you!
            </p>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem'
                }}
            >
                {/* BUTTON — opens Gmail directly */}
                <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        padding: '1.2rem 2.5rem',
                        border: '1px solid var(--accent-primary)',
                        borderRadius: '4px',
                        color: 'var(--accent-primary)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1rem',
                        transition: 'var(--transition-fast)',
                        display: 'inline-block',
                        textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 243, 255, 0.1)';
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 243, 255, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                >
                    Say Hello
                </a>

                {/* Email below (still mailto) */}
                <a
                    href={`mailto:${email}`}
                    style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1.1rem',
                        textDecoration: 'none',
                        transition: 'var(--transition-fast)',
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.color = 'var(--accent-primary)')
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.color = 'var(--text-secondary)')
                    }
                >
                    {email}
                </a>
            </div>
        </section>
    );
};

export default Contact;
