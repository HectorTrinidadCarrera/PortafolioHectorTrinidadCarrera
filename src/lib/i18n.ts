export const TRANSLATIONS = {
  es: {
    nav_about: "Sobre mí",
    nav_skills: "Habilidades",
    nav_languages: "Idiomas",
    nav_projects: "Proyectos",
    nav_resume: "Trayectoria",
    nav_contact: "Contacto",
    nav_services: "Servicios",
    nav_certifications: "Certificaciones",
    hero_greeting: "Hola, soy",
    hero_cta_contact: "Contactar",
    hero_cta_projects: "Ver proyectos",
    hero_cta_cv: "Descargar CV",
    hero_description: "Ingeniero en Desarrollo de Software especializado en Java, Spring Boot y APIs REST, con experiencia fullstack (React, Next.js, Angular, Astro) y un fuerte enfoque en diseño UI/UX para crear experiencias digitales funcionales y atractivas.",
    about_title: "Sobre mí",
    about_subtitle: "Mi presentación",
    about_description: "Ingeniero en Desarrollo y Gestión de Software con experiencia integral en Backend, Frontend y diseño UI/UX. Especializado en Java, Spring Boot y APIs REST, domino tecnologías modernas como React, Next.js, Angular y Astro, combinando solidez técnica, arquitectura y bases de datos con el diseño de interfaces intuitivas y atractivas centradas en el usuario. Busco seguir creando soluciones de alto impacto en desarrollo backend y fullstack.",
    about_card_exp_title: "Experiencia",
    about_card_exp_subtitle: "3+ Años",
    about_card_proj_title: "Completado",
    about_card_proj_subtitle: "15+ Proyectos",
    about_card_support_title: "Soporte",
    about_card_support_subtitle: "24/7 Online",
    about_more_btn: "Saber más <i class=\"ph ph-arrow-right\"></i>",
    skills_title: "Habilidades técnicas",
    skills_subtitle: "Mi stack tecnológico principal",
    projects_title: "Proyectos",
    projects_subtitle: "Mis trabajos recientes",
    projects_latest: "Proyecto destacado",
    projects_explore: "EXPLORAR <iconify-icon icon=\"line-md:arrow-right\" class=\"text-lg\"></iconify-icon>",
    experience_title: "Trayectoria",
    experience_subtitle: "Mi camino profesional y académico",
    services_title: "Servicios",
    services_subtitle: "Lo que ofrezco",
    services_consult: "Consultar <iconify-icon icon=\"line-md:arrow-right\" class=\"text-lg\"></iconify-icon>",
    certifications_title: "Certificaciones y logros",
    certifications_subtitle: "Mis credenciales profesionales y académicas",
    cert_filter_all: "Todos",
    cert_filter_academic: "Académicas",
    cert_filter_courses: "Cursos y plataformas",
    cert_view_link: "Ver credencial <iconify-icon icon=\"line-md:arrow-right\" class=\"text-lg\"></iconify-icon>",
    contact_title: "Contacto",
    contact_subtitle: "Ponte en contacto",
    contact_talk_title: "¡Hablemos!",
    contact_talk_text: "Si tienes un proyecto en mente o solo quieres saludar, no dudes en contactarme.",
    contact_name_placeholder: "Nombre",
    contact_email_placeholder: "Correo electrónico",
    contact_message_placeholder: "Mensaje",
    contact_send: "Enviar mensaje",
    footer_text: "Todos los derechos reservados.",
  },
  en: {
    nav_about: "About me",
    nav_skills: "Skills",
    nav_languages: "Languages",
    nav_projects: "Projects",
    nav_resume: "Timeline",
    nav_contact: "Contact",
    nav_services: "Services",
    nav_certifications: "Certifications",
    hero_greeting: "Hi, I am",
    hero_cta_contact: "Contact me",
    hero_cta_projects: "View projects",
    hero_cta_cv: "Download CV",
    hero_description: "Software Engineer specialized in Java, Spring Boot and REST APIs, with fullstack experience (React, Next.js, Angular, Astro) and a strong focus on UI/UX design to create functional and engaging digital experiences.",
    about_title: "About me",
    about_subtitle: "My introduction",
    about_description: "Software Development and Management Engineer with comprehensive experience in Backend, Frontend and UI/UX design. Specialized in Java, Spring Boot and REST APIs, proficient in modern technologies like React, Next.js, Angular and Astro, combining technical robustness, architecture and databases with intuitive, user-centered interface design. Looking to continue creating high-impact solutions in backend and fullstack development.",
    about_card_exp_title: "Experience",
    about_card_exp_subtitle: "3+ Years",
    about_card_proj_title: "Completed",
    about_card_proj_subtitle: "15+ Projects",
    about_card_support_title: "Support",
    about_card_support_subtitle: "24/7 Online",
    about_more_btn: "Know more <i class=\"ph ph-arrow-right\"></i>",
    skills_title: "Technical skills",
    skills_subtitle: "My main tech stack",
    projects_title: "Projects",
    projects_subtitle: "My recent work",
    projects_latest: "Featured project",
    projects_explore: "EXPLORE <iconify-icon icon=\"line-md:arrow-right\" class=\"text-lg\"></iconify-icon>",
    experience_title: "Timeline",
    experience_subtitle: "My professional & academic journey",
    services_title: "Services",
    services_subtitle: "What I offer",
    services_consult: "Inquire <iconify-icon icon=\"line-md:arrow-right\" class=\"text-lg\"></iconify-icon>",
    certifications_title: "Certifications and achievements",
    certifications_subtitle: "My professional & academic credentials",
    cert_filter_all: "All",
    cert_filter_academic: "Academic",
    cert_filter_courses: "Courses & platforms",
    cert_view_link: "View credential <iconify-icon icon=\"line-md:arrow-right\" class=\"text-lg\"></iconify-icon>",
    contact_title: "Contact",
    contact_subtitle: "Get in touch",
    contact_talk_title: "Let's talk!",
    contact_talk_text: "If you have a project in mind or just want to say hi, feel free to contact me.",
    contact_name_placeholder: "Name",
    contact_email_placeholder: "Email address",
    contact_message_placeholder: "Message",
    contact_send: "Send message",
    footer_text: "All rights reserved.",
  },
} as const;

export type Language = keyof typeof TRANSLATIONS;

export function applyLanguage(language: Language) {
  const messages = TRANSLATIONS[language] as Record<string, string>;
  document.documentElement.lang = language;

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const message = key ? messages[key] : undefined;

    if (!message) return;

    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
      element.placeholder = message;
      return;
    }

    element.innerHTML = message;
  });

  window.dispatchEvent(new CustomEvent("languagechange", { detail: { lang: language } }));
}

export function initLanguage() {
  let currentLanguage = (localStorage.getItem("portfolio-lang") as Language) || "es";
  applyLanguage(currentLanguage);

  const toggle = document.querySelector<HTMLButtonElement>("#lang-toggle");
  if (!toggle) return;

  const freshToggle = toggle.cloneNode(true) as HTMLButtonElement;
  toggle.replaceWith(freshToggle);

  const updateLabel = () => {
    const label = freshToggle.querySelector("#lang-label");
    if (label) label.textContent = currentLanguage === "es" ? "EN" : "ES";
  };

  updateLabel();
  freshToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "es" ? "en" : "es";
    localStorage.setItem("portfolio-lang", currentLanguage);
    updateLabel();
    applyLanguage(currentLanguage);
  });
}
