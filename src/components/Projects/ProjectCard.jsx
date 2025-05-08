import React from "react";

export default function ProjectCardReact({ project }) {
  // Función para evitar que los clics en los botones interactúen con la tarjeta
  const handleButtonClick = (e) => {
    e.stopPropagation();
  };
  // Convertir la imageUrl para su uso en estilo CSS
  const backgroundImageUrl = `url('${project.imageUrl.src}')`;
  return (
    <div className="project-card-container w-full max-w-2xl mx-auto h-[400px] hover:scale-[1.02] transition-all duration-300">
      <div className="project-card relative w-full h-full transition-transform duration-700 transform-style-3d">
        {/* Front Card */}
        <div className="absolute w-full h-full backface-hidden front-card">
          <div className="bg-[#1a1a1a] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden h-full flex relative card-border">
            <div className="w-2/3 h-full flex-shrink-0 relative overflow-hidden">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center blur-md opacity-70"
                style={{ backgroundImage: backgroundImageUrl }}
              ></div>
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center z-10 p-4">
                <img
                  src={project.imageUrl.src}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
            <div className="w-1/3 p-4">
              <h3 className="text-xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#2196F3]/20 text-[#64B5F6] rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute bottom-3 right-3 text-[#2196F3] animate-pulse-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>{" "}
          </div>
        </div>
        {/* Back Card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 back-card">
          <div className="bg-[#1a1a1a] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 h-full flex flex-col card-border">
            <div className="flex-1">
              <h4 className="text-xl font-bold text-[#2196F3] mb-3">
                Rol: {project.role}
              </h4>
              <p className="text-gray-300 mb-3">{project.challenge}</p>
              <div className="space-y-1.5">
                {project.highlights.map((highlight, index) => (
                  <p
                    key={index}
                    className="text-gray-400 flex items-center gap-2 text-sm"
                  >
                    <span className="text-[#64B5F6]">•</span> {highlight}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-4 z-30 relative">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border border-[#2196F3] text-white rounded-lg hover:bg-[#2196F3]/10 transition-colors whitespace-nowrap flex items-center gap-2"
                  onClick={handleButtonClick}
                >
                  <svg
                    height="20"
                    width="20"
                    viewBox="0 0 16 16"
                    className="fill-current"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  GitHub
                </a>
              )}
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[#2196F3] text-white rounded-lg hover:bg-[#1976D2] transition-colors whitespace-nowrap"
                onClick={handleButtonClick}
              >
                Ver Demo 🔗
              </a>{" "}
            </div>
          </div>
        </div>{" "}
      </div>
      <style>{`
        @keyframes pulse-icon {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse-icon {
          animation: pulse-icon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        /* Nuevos estilos para el efecto hover */
        .project-card-container:hover .project-card {
          transform: rotateY(180deg);
        }

        .front-card,
        .back-card {
          transition: all 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
        }

        .project-card-container:hover .front-card {
          pointer-events: none;
        }

        .project-card-container:not(:hover) .back-card {
          pointer-events: none;
        }

        .project-card-container {
          position: relative;
          perspective: 1000px; /* Añade perspectiva al contenedor externo */
          z-index: 1;
        }

        /* Estilos para bordes y efectos de iluminación */
        .card-border {
          border: 1px solid rgba(33, 150, 243, 0.3);
          box-shadow: 0 0 15px rgba(33, 150, 243, 0.15),
            0 5px 25px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .card-border::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 0.75rem; /* rounded-xl */
          padding: 1px;
          background: linear-gradient(
            225deg,
            rgba(33, 150, 243, 0.5) 0%,
            rgba(25, 118, 210, 0.1) 50%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .project-card-container:hover .card-border {
          border-color: rgba(33, 150, 243, 0.5);
          box-shadow: 0 0 20px rgba(33, 150, 243, 0.25),
            0 8px 32px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
}
