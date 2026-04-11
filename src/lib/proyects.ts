import consumoApi from "@/assets/Consumo-API.webp";
import treadsShot from "@/assets/threadsShot.jpg";
import DevJobsShot from "@/assets/DevJobsShot.webp";

export const proyects = [
  {
    id: 0,
    title: "Sistema de registro de equipos",
    descriptionLittle:
      "Sistema de registro de equipos del universo Naruto con operaciones CRUD completas. Construido con HTML, CSS y JavaScript puro en el frontend, consumiendo datos a través de llamadas fetch a una API REST. Los equipos se renderizan dinámicamente en una tabla interactiva que permite crear, consultar, actualizar y eliminar registros en tiempo real.",
    image: consumoApi.src,
    descriptionLarge: `
    Esta aplicación simula el registro oficial de equipos ninja del universo Naruto, integrando las cuatro operaciones fundamentales de cualquier sistema de datos: Crear, Leer, Actualizar y Eliminar (CRUD).

    El frontend está desarrollado íntegramente con tecnologías web nativas — HTML semántico, CSS para el estilado y JavaScript vanilla para la lógica de interacción — sin depender de frameworks adicionales, lo que demuestra dominio de los fundamentos del desarrollo web.

    La comunicación con la API se gestiona mediante la Fetch API del navegador, manejando peticiones asíncronas con async/await, gestión de errores y parsing de respuestas JSON. Node.js se utiliza en el entorno de desarrollo para la instalación y gestión de dependencias a través de npm.

    La interfaz presenta una tabla dinámica que se actualiza en tiempo real reflejando el estado actual de los datos: cada registro muestra la información del equipo ninja (integrantes, sensei, aldea, entre otros) y expone controles para editar o eliminar directamente desde la vista. El formulario de creación y edición valida los campos antes de realizar la petición correspondiente a la API.

    Habilidades demostradas: consumo de APIs REST, manejo de peticiones HTTP (GET, POST, PUT, DELETE), manipulación dinámica del DOM, gestión del ciclo de vida de los datos y organización de código JavaScript sin frameworks.
    
    `,
    tecnologies: ["Html", "Css", "Javascript", "Node"],
  },
  {
    id: 1,
    title: "Clon funcional de la interfaz de Threads",
    descriptionLittle:
      "Clon funcional de la interfaz de Threads construido con HTML, CSS y JavaScript puro. Consume una API REST para renderizar publicaciones dinámicamente, mostrando avatar, texto, métricas de interacción (likes, comentarios, reposts) y marca de tiempo. Incluye la capacidad de agregar nuevas publicaciones en tiempo real, priorizando una UI/UX fiel al diseño de la plataforma original.",
    image: treadsShot.src,
    descriptionLarge: `
      Esta aplicación replica la experiencia visual y funcional de Threads, la red social de Meta, poniendo en práctica el consumo de datos desde una API REST para construir un feed de publicaciones completamente dinámico.

      Cada publicación renderizada en el feed muestra la información completa del autor — foto de perfil, nombre de usuario — junto al contenido del post, la marca de tiempo relativa y las métricas de interacción: likes, comentarios y demás estadísticas expuestas por la API. Todo esto se construye manipulando el DOM directamente con JavaScript vanilla, generando los componentes de cada tarjeta de publicación de forma programática a partir de los datos recibidos.

      La app también incorpora un flujo de creación de publicaciones: el usuario puede redactar y enviar un nuevo post que, tras realizar la petición correspondiente a la API, se añade al feed de forma inmediata sin recargar la página, replicando la experiencia fluida de las redes sociales modernas.

      El énfasis de este proyecto recae en la fidelidad visual y la experiencia de usuario: la interfaz replica fielmente la estética minimalista de Threads — tipografía, espaciado, jerarquía visual de los elementos del feed y microinteracciones — demostrando que una UI sólida no depende de frameworks de componentes, sino de un dominio preciso del CSS y la estructura del HTML.

      Habilidades demostradas: diseño de interfaces fieles a productos reales, consumo y mapeo de datos de API a componentes visuales, manipulación avanzada del DOM, gestión de estado del feed en el cliente y criterio de UI/UX aplicado a un producto de referencia en la industria.
    `,
    tecnologies: ["Html", "Css", "Javascript", "Node"],
  },
  {
    id: 2,
    title: "Plataforma de empleos full-stack",
    descriptionLittle:
      "Plataforma de empleos full-stack con landing page, autenticación y rutas protegidas. Frontend en React, React Router, Context y Zustand con filtrado, paginación y optimizaciones de rendimiento. La API REST propia fue construida con Node.js y Express bajo el patrón MVC y desplegada en Vercel, complementado con una UI minimalista y moderna en Tailwind CSS.",
    image: DevJobsShot.src,
    descriptionLarge: `
      Esta es la aplicación más completa de mi portafolio y la que mejor refleja mi capacidad para construir productos web full-stack de principio a fin, tomando decisiones técnicas reales en cada capa del sistema.

      Frontend Desarrollado en React con una arquitectura de rutas clara gracias a React Router, separando el contenido público — landing page y listado de empleos — del contenido protegido que requiere autenticación. La gestión del estado se distribuye conscientemente entre dos herramientas: React Context para el estado global de sesión y autenticación, y Zustand para el estado de la UI más localizado y reactivo, demostrando criterio a la hora de elegir la herramienta correcta según el caso de uso. El estilado se construyó íntegramente con Tailwind CSS, logrando una interfaz limpia, minimalista y coherente en todas las vistas.

      Experiencia de usuario El listado de empleos incorpora paginación, filtrado por texto libre y filtrado por categorías, permitiendo al usuario encontrar oportunidades de forma rápida e intuitiva. Se aplicaron prácticas orientadas al rendimiento para garantizar una experiencia fluida incluso al navegar entre páginas o aplicar filtros con frecuencia.
      
      Backend y API La API que alimenta la aplicación no es de terceros — fue diseñada y construida desde cero con Node.js y Express, aplicando el patrón de diseño MVC para separar responsabilidades entre modelos, controladores y rutas. Una vez finalizada, fue desplegada en Vercel, cerrando el ciclo completo de desarrollo: diseño, construcción, despliegue y consumo desde el cliente.

      Habilidades demostradas: desarrollo full-stack, diseño e implementación de APIs REST con Express y patrón MVC, despliegue en Vercel, gestión de estado con Context y Zustand, autenticación y rutas protegidas, paginación y filtrado en el cliente, optimizaciones de rendimiento en React y diseño de interfaces profesionales con Tailwind CSS.
    `,
    tecnologies: [
      "TailwindCSS",
      "Node",
      "Express",
      "React",
      "React Router",
      "Vercel",
      "Javascript",
      "Css",
      "Html",
    ],
  },
];

export default proyects;
