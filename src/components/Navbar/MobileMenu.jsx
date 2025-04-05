import { useState } from 'react';

export default function MobileMenu({ items }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-2xl focus:outline-none transition-transform duration-300"
            >
                <span className={`transform inline-block transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
                    {isOpen ? '×' : '☰'}
                </span>
            </button>

            <div className={`absolute top-16 left-0 w-full bg-[#1a1a1a]/95 backdrop-blur-sm py-4 px-6 
                transform transition-all duration-300 ease-in-out origin-top
                ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <ul className="flex flex-col gap-4">
                    {items.map(({ href, label }) => (
                        <li key={href}
                            className={`transform transition-all duration-300 delay-100
                                ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                            <a 
                                href={href} 
                                className="text-lg hover:text-[#2196F3] transition-colors block py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
