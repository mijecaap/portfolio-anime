import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function FloatingContactIcons() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Invertimos la visibilidad cuando el footer está visible
                setIsVisible(!entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const footer = document.getElementById('contact-icons');
        if (footer) {
            observer.observe(footer);
        }

        return () => {
            if (footer) {
                observer.unobserve(footer);
            }
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
            <a
                href="https://www.linkedin.com/in/tu-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="floating-icon-link group"
            >
                <div className="floating-icon bg-[#0077B5]">
                    <FaLinkedin size={20} />
                </div>
            </a>

            <a
                href="https://github.com/tu-github"
                target="_blank"
                rel="noopener noreferrer"
                className="floating-icon-link group"
            >
                <div className="floating-icon bg-[#333]">
                    <FaGithub size={20} />
                </div>
            </a>

            <a
                href="mailto:tu@email.com"
                className="floating-icon-link group"
            >
                <div className="floating-icon bg-[#EA4335]">
                    <MdEmail size={20} />
                </div>
            </a>

            <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="floating-icon-link group"
            >
                <div className="floating-icon bg-[#25D366]">
                    <FaWhatsapp size={20} />
                </div>
            </a>

            <style>{`
                .floating-icon-link {
                    position: relative;
                    display: inline-block;
                }

                .floating-icon {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    color: white;
                    transform: translateX(0);
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .floating-icon-link:hover .floating-icon {
                    transform: translateX(-8px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                }
            `}</style>
        </div>
    );
}