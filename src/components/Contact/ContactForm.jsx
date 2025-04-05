import React, { useState, useEffect } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const formElement = document.getElementById('contact-form');
        if (formElement) {
            observer.observe(formElement);
        }

        return () => {
            if (formElement) {
                observer.unobserve(formElement);
            }
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de envío del formulario
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form 
            id="contact-form"
            onSubmit={handleSubmit} 
            className={`space-y-6 transform transition-all duration-700 ${
                isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-16 opacity-0'
            }`}
        >
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                />
                <span className="form-line"></span>
            </div>

            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    placeholder="Tu email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                />
                <span className="form-line"></span>
            </div>

            <div className="form-group">
                <textarea
                    name="message"
                    placeholder="Tu mensaje"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input min-h-[150px]"
                    required
                ></textarea>
                <span className="form-line"></span>
            </div>

            <button 
                type="submit" 
                className="w-full py-3 px-6 text-white font-medium rounded-lg
                         bg-gradient-to-r from-[#2196F3] to-[#1976D2]
                         transform transition-all duration-300 hover:scale-[1.02]
                         hover:shadow-[0_0_20px_rgba(33,150,243,0.3)]
                         active:scale-[0.98]"
            >
                Enviar mensaje
            </button>

            <style>{`
                .form-group {
                    position: relative;
                    margin-bottom: 1.5rem;
                }

                .form-input {
                    width: 100%;
                    padding: 0.75rem;
                    background-color: rgba(255, 255, 255, 0.05);
                    border: none;
                    border-radius: 0.5rem;
                    color: white;
                    outline: none;
                    transition: all 0.3s ease;
                }

                .form-input:focus {
                    background-color: rgba(255, 255, 255, 0.1);
                }

                .form-line {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #2196F3;
                    transition: width 0.3s ease;
                }

                .form-input:focus + .form-line {
                    width: 100%;
                    box-shadow: 0 0 10px rgba(33, 150, 243, 0.3);
                }

                .form-input::placeholder {
                    color: rgba(255, 255, 255, 0.5);
                }

                @keyframes buttonGlow {
                    0% { box-shadow: 0 0 5px rgba(33, 150, 243, 0.3); }
                    50% { box-shadow: 0 0 20px rgba(33, 150, 243, 0.5); }
                    100% { box-shadow: 0 0 5px rgba(33, 150, 243, 0.3); }
                }
            `}</style>
        </form>
    );
}