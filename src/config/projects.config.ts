import SolDeAmerica from "../assets/projects/sol-de-america.jpg";
import SublimeShop from "../assets/projects/sublime-shop.jpg";
import Recipez from "../assets/projects/recipez.jpg";
import PaymentsWeb from "../assets/projects/payments-web.jpg";
import PaymentsAPI from "../assets/projects/payments-api.jpg";

export const projectsConfig = [
  {
    title: "Payments Web",
    imageUrl: PaymentsWeb,
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "Zustand",
    ],
    demoUrl: "https://payments-web-one.vercel.app/",
    githubUrl: "https://github.com/mijecaap/payments-web",
    role: "Desarrollador Frontend",
    challenge:
      "Desarrollo de una plataforma web responsiva para gestión de pagos y transferencias bancarias",
    highlights: [
      "Interfaz de usuario responsiva con Tailwind CSS y tema claro/oscuro",
      "Gestión de estado global con Zustand para manejo eficiente de datos",
      "Componentes reutilizables y arquitectura modular React",
      "Formularios con validación avanzada usando React Hook Form y Zod",
      "Carga infinita con react-intersection-observer para optimizar rendimiento",
      "Integración segura con API RESTful mediante patrón de servicios",
      "Experiencia de usuario mejorada con notificaciones personalizadas usando Sonner",
    ],
  },
  {
    title: "Payments API",
    imageUrl: PaymentsAPI,
    technologies: [
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "JWT Authentication",
      "Passport.js",
      "Docker",
      "Swagger",
      "TypeScript",
    ],
    demoUrl: "https://payments-web-one.vercel.app/",
    githubUrl: "https://github.com/mijecaap/payments-api",
    role: "Backend Developer",
    challenge:
      "Desarrollo de una API de pagos que permite gestionar transacciones financieras entre cuentas, con sistema de comisiones por referidos y autenticación segura",
    highlights: [
      "Autenticación con JWT y Passport",
      "Sistema de transacciones entre cuentas",
      "Gestión de usuarios y cuentas",
      "Sistema de comisiones por referidos",
      "Base de datos PostgreSQL gestionada con TypeORM",
      "Pruebas de estrés con K6",
      "Despliegue completo en Railway (API y base de datos)",
    ],
  },
  {
    title: "Sublime Shop",
    imageUrl: SublimeShop,
    technologies: [
      "React",
      "Firebase",
      "Redux",
      "Styled Components",
      "Stripe",
      "OpenAI API",
    ],
    demoUrl: "https://sublime-shop.web.app/home",
    githubUrl: "https://github.com/mijecaap/sublime-shop",
    role: "Fullstack Developer",
    challenge:
      "Desarrollo de e-commerce con productos personalizables usando IA",
    highlights: [
      "Integración con DALL-E para generación de diseños personalizados",
      "Sistema de pagos con Stripe",
      "Autenticación y roles (admin/usuario) con Firebase",
      "Panel administrativo para gestión de pedidos",
      "Diseño responsive con Styled Components",
    ],
  },
  // {
  //   title: "Sol de América Landing Page",
  //   imageUrl: SolDeAmerica,
  //   technologies: [
  //     "React",
  //     "TypeScript",
  //     "Vite",
  //     "Tailwind CSS",
  //     "PostCSS",
  //     "ESLint",
  //   ],
  //   demoUrl: "https://sol-de-america.netlify.app/",
  //   githubUrl: "https://github.com/mijecaap/sol-de-america",
  //   role: "Frontend Developer",
  //   challenge:
  //     "Desarrollo de landing page moderna y responsive para empresa de transporte de carga",
  //   highlights: [
  //     "Diseño responsive con Tailwind CSS y media queries personalizadas",
  //     "Animaciones suaves de scroll y navegación",
  //     "Optimización SEO con metadatos",
  //     "Componentes React reutilizables para cards y secciones",
  //     "Sistema de grid adaptativo para mostrar flota de vehículos",
  //     "Header animado con efecto blur al hacer scroll",
  //     "Integración de Font Awesome para iconografía",
  //   ],
  // },
  {
    title: "Recipez",
    imageUrl: Recipez,
    technologies: [
      "Flutter",
      "Firebase Auth",
      "Cloud Firestore",
      "Firebase Storage",
      "Google Sign In",
      "Facebook Auth",
      "PayPal Integration",
    ],
    demoUrl: "https://appetize.io/app/b_2ovwifxjmu3ccbmy3slf64o5dq",
    githubUrl: "https://github.com/mijecaap/Food-Recipe-App",
    role: "Mobile Developer",
    challenge:
      "Desarrollo de una aplicación móvil para compartir y descubrir recetas de cocina con funcionalidades sociales y sistema de suscripción",
    highlights: [
      "Autenticación con Google y Facebook",
      "Sistema de suscripción mediante PayPal",
      "CRUD completo de recetas con imágenes",
      "Sistema de likes y vistas en recetas",
      "Búsqueda de recetas por nombre e ingredientes",
      "Sistema de reportes de contenido inapropiado",
      "Gestión de estado con BLoC pattern",
    ],
  },

  // ... otros proyectos con la misma estructura
];
