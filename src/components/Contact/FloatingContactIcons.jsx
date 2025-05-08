import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaTimes, FaPlus } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function FloatingContactIcons() {
    const [isVisible, setIsVisible] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);

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

    const icons = [
        {
            href: "https://www.linkedin.com/in/tu-linkedin",
            Icon: FaLinkedin,
            bgColor: "bg-[#0077B5]",
            label: "LinkedIn"
        },
        {
            href: "https://github.com/tu-github",
            Icon: FaGithub,
            bgColor: "bg-[#333]",
            label: "GitHub"
        },
        {
            href: "mailto:tu@email.com",
            Icon: MdEmail,
            bgColor: "bg-[#EA4335]",
            label: "Email"
        },
        {
            href: "https://wa.me/1234567890",
            Icon: FaWhatsapp,
            bgColor: "bg-[#25D366]",
            label: "WhatsApp"
        }
    ];

    return (
        <>
            {/* Versión Desktop */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4 z-50">
                {icons.map(({ href, Icon, bgColor }) => (
                    <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="floating-icon-link group"
                    >
                        <div className={`floating-icon ${bgColor}`}>
                            <Icon size={20} />
                        </div>
                    </a>
                ))}
            </div>

            {/* Versión Mobile */}
            <div className="fixed right-4 bottom-4 md:hidden z-50 flex flex-col items-end gap-2">
                {isExpanded && (
                    <div className="flex flex-col gap-2 mb-2 animate-fade-up">
                        {icons.map(({ href, Icon, bgColor, label }) => (
                            <a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 justify-end"
                            >
                                <span className="text-sm bg-[#1a1a1a]/80 text-white px-2 py-1 rounded">
                                    {label}
                                </span>
                                <div className={`w-10 h-10 ${bgColor} rounded-full flex items-center justify-center text-white`}>
                                    <Icon size={20} />
                                </div>
                            </a>
                        ))}
                    </div>
                )}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`w-12 h-12 bg-[#2196F3] rounded-full flex items-center justify-center text-white shadow-lg
                             transition-all duration-300 transform ${isExpanded ? 'rotate-45' : 'hover:scale-110'}`}
                >
                    {isExpanded ? <FaTimes size={20} /> : <FaPlus size={20} />}
                </button>
            </div>

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

                @keyframes fadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-up {
                    animation: fadeUp 0.3s ease-out forwards;
                }
            `}</style>
        </>
    );
}