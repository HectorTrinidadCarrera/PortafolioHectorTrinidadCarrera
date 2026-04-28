# 📋 Plan de Portafolio Moderno - Basado en Video Bedimcode

## 🎯 Visión General

Crear un **portafolio personal responsivo y moderno** siguiendo la estructura y diseño del video "Build a Modern Responsive Portfolio Website Using HTML CSS & JavaScript" de Bedimcode, pero implementado con **Astro** para mejor rendimiento y mantenibilidad.

**Inspiración Visual:**
- Gradientes moderno (púrpura/azul/naranja)
- Navbar limpio y responsivo
- Foto de perfil circular
- Secciones bien organizadas
- Animaciones suaves
- Mobile-first design

---

## 📐 Estructura de Secciones (Basada en el Video)

### 1. **Navbar / Header**
- Logo o nombre
- Links de navegación: Home, About, Projects, Contact
- Botón hamburguesa para mobile
- Sticky/fijo al scroll
- Colores: gradiente o colores sólidos modernos

### 2. **Hero / Inicio**
- Foto de perfil (circular)
- Nombre y título profesional (ej: "Creative Developer")
- Descripción corta (1-2 líneas)
- Botones CTA: "Ver Proyectos", "Descargar CV", "Contactar"
- Fondo con gradiente o patrón
- Animaciones on-scroll

### 3. **About (Sobre Mí)**
- Foto adicional o expandida
- Biografía personal
- Experiencia profesional (años, empresa, rol)
- Skills principales
- Datos personales (email, ubicación, disponibilidad)

### 4. **Projects (Proyectos)**
- Grid de tarjetas (2-3 columnas en desktop, 1 en mobile)
- Cada proyecto contiene:
  - Imagen/thumbnail
  - Título
  - Descripción corta
  - Tecnologías usadas (tags)
  - Botones: "Ver" (link) y "Código" (GitHub)
- Hover effects: zoom, overlay, cambio de color
- Posible filtrado por categoría

### 5. **Skills (Habilidades)**
- Categorías: Frontend, Backend, Tools, Design, etc.
- Presentación:
  - Lista de tags/badges
  - O barras de progreso
  - O iconos con nombres
- Colores diferenciados por categoría

### 6. **Contact (Contacto)**
- Formulario simple (nombre, email, mensaje)
- O enlaces directos a:
  - Email
  - LinkedIn
  - GitHub
  - Twitter/X
  - WhatsApp
- Texto de llamada a la acción

### 7. **Footer**
- Links rápidos
- Copyright
- Social icons
- Posible suscripción newsletter (opcional)

---

## 🎨 Diseño Visual

### Paleta de Colores (Inspirada en el Video)

```css
--color-primary: #7C3AED (púrpura)
--color-secondary: #3B82F6 (azul)
--color-accent: #EC4899 (rosa/magenta)
--color-orange: #F97316 (naranja)

--color-text-dark: #1F2937 (gris oscuro)
--color-text-light: #F3F4F6 (gris claro)
--color-bg-light: #FFFFFF
--color-bg-dark: #111827

--gradient-primary: linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)
--gradient-secondary: linear-gradient(135deg, #EC4899 0%, #F97316 100%)
```

### Tipografía

```
--font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
--font-display: 'Poppins', sans-serif (para títulos)
--font-mono: 'Courier New', monospace (para código)

--font-size-small: 0.875rem (14px)
--font-size-base: 1rem (16px)
--font-size-lg: 1.125rem (18px)
--font-size-xl: 1.5rem (24px)
--font-size-2xl: 2rem (32px)
--font-size-3xl: 2.5rem (40px)
--font-size-4xl: 3rem (48px)
```

### Espaciado

```
--spacing-xs: 0.25rem (4px)
--spacing-sm: 0.5rem (8px)
--spacing-md: 1rem (16px)
--spacing-lg: 1.5rem (24px)
--spacing-xl: 2rem (32px)
--spacing-2xl: 3rem (48px)
--spacing-3xl: 4rem (64px)
```

### Efectos

- **Transiciones:** 0.3s ease-in-out por defecto
- **Border Radius:** 8px (componentes), 50% (avatares)
- **Box Shadow:** Sombras suaves para elevación
- **Animaciones:** 
  - Fade-in on scroll
  - Slide-up on scroll
  - Hover scale (1.05)
  - Hover shadow increase

---

## 📁 Estructura de Carpetas (Astro)

```
Portafolio/
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   ├── profile.jpg          (foto de perfil)
│   │   ├── cover.jpg            (imagen de fondo hero)
│   │   └── projects/
│   │       ├── project-1.jpg
│   │       ├── project-2.jpg
│   │       └── project-3.jpg
│   └── resume.pdf               (CV)
│
├── src/
│   ├── assets/
│   │   └── images/              (imágenes optimizadas)
│   │
│   ├── components/
│   │   ├── Navbar.astro         ✓ Navbar sticky responsivo
│   │   ├── Hero.astro           ✓ Sección hero con CTA
│   │   ├── About.astro          ✓ Sección About
│   │   ├── ProjectCard.astro    ✓ Tarjeta de proyecto individual
│   │   ├── Projects.astro       ✓ Grid de proyectos
│   │   ├── Skills.astro         ✓ Sección de skills
│   │   ├── Contact.astro        ✓ Sección de contacto
│   │   └── Footer.astro         ✓ Footer
│   │
│   ├── layouts/
│   │   └── Layout.astro         ✓ Layout principal
│   │
│   ├── styles/
│   │   ├── globals.css          ✓ Estilos globales
│   │   ├── variables.css        ✓ CSS variables
│   │   ├── components.css       ✓ Estilos de componentes
│   │   └── responsive.css       ✓ Media queries
│   │
│   ├── data/
│   │   └── portfolio.json       ✓ Datos del portafolio (proyectos, skills, etc.)
│   │
│   └── pages/
│       └── index.astro          ✓ Página principal
│
├── astro.config.mjs             ✓ Configuración Astro
├── tsconfig.json                ✓ Configuración TypeScript
├── package.json                 ✓ Dependencias
└── portfolio-plan.md            ✓ Este archivo (plan)
```

---

## 🧩 Componentes a Crear

### Navbar.astro
```
- Logo/Nombre (clickeable)
- Menu items (Home, About, Projects, Skills, Contact)
- Hamburger menu (mobile)
- Sticky scroll behavior
- Active link indicator
```

### Hero.astro
```
- Contenedor con gradient background
- Foto de perfil (circular, con border)
- Nombre grande
- Título profesional / tagline
- Descripción corta (2-3 líneas)
- 2-3 botones CTA
- Animación fade-in on scroll
```

### About.astro
```
- Contenedor full-width
- 2 columnas (img + texto) en desktop, stacked mobile
- Foto expandida
- Bio principal
- Lista de experiencia
- Datos clave (años, especialidades)
```

### ProjectCard.astro
```
- Imagen del proyecto
- Título
- Descripción breve
- Tags de tecnologías
- Botones (Demo, GitHub)
- Hover effects (zoom, overlay)
```

### Projects.astro
```
- Grid responsive (3 cols desktop, 2 tablet, 1 mobile)
- Múltiples ProjectCard
- Posible filtro por categoría
- Animaciones on-scroll
```

### Skills.astro
```
- Título "Skills"
- Categorías (Frontend, Backend, Tools, Design)
- Cada categoría con lista de skills
- Visualización: badges/tags coloridos
- Alternativa: barras de progreso
```

### Contact.astro
```
- Título "Get In Touch"
- Formulario simple o enlaces directos
- Campos: nombre, email, mensaje
- Botón submit
- Links a redes sociales
```

### Footer.astro
```
- Copyright info
- Quick links
- Social icons
- Posible "Back to top" button
```

---

## 📊 Datos de Contenido (Portfolio.json)

```json
{
  "profile": {
    "name": "[Tu Nombre]",
    "title": "Creative Developer",
    "bio": "Descripción corta sobre ti...",
    "email": "tu@email.com",
    "phone": "+34 XXX XXX XXX",
    "location": "Madrid, España",
    "available": true
  },

  "about": {
    "description": "Texto más largo sobre tu experiencia...",
    "experience": [
      {
        "company": "Empresa X",
        "role": "Frontend Developer",
        "years": "2022 - Presente",
        "description": "Descripción del rol"
      }
    ]
  },

  "projects": [
    {
      "id": 1,
      "title": "Proyecto 1",
      "description": "Descripción breve",
      "image": "/images/projects/project-1.jpg",
      "technologies": ["React", "Tailwind", "Node.js"],
      "links": {
        "demo": "https://ejemplo.com",
        "github": "https://github.com/usuario/proyecto"
      },
      "category": "frontend"
    }
  ],

  "skills": {
    "frontend": ["React", "Vue", "Astro", "CSS", "JavaScript"],
    "backend": ["Node.js", "Python", "SQL"],
    "tools": ["Git", "Docker", "VS Code"],
    "design": ["Figma", "UI/UX Design"]
  },

  "socials": {
    "github": "https://github.com/usuario",
    "linkedin": "https://linkedin.com/in/usuario",
    "twitter": "https://twitter.com/usuario",
    "email": "mailto:tu@email.com"
  }
}
```

---

## ✨ Funcionalidades Interactivas

- [x] Navbar sticky con scroll
- [x] Menu móvil hamburguesa
- [x] Links de navegación suave (smooth scroll)
- [x] Animaciones on-scroll (AOS o Intersection Observer)
- [x] Hover effects en proyectos
- [x] Formulario de contacto (validación básica)
- [x] Dark mode toggle (opcional)
- [x] Responsive design (mobile-first)
- [x] Performance optimizado

---

## 📱 Breakpoints Responsive

```css
/* Mobile First */
--mobile: < 640px      (teléfono)
--tablet: >= 640px     (tablet)
--desktop: >= 1024px   (computadora)
--wide: >= 1280px      (pantalla grande)
```

---

## 🚀 Fases de Implementación

### ✅ FASE 1: Planning (HOY)
- [x] Analizar video y estructura
- [x] Crear este archivo de plan
- [x] Definir componentes y diseño

### ⏳ FASE 2: Setup Astro (Próximo paso)
- [ ] Inicializar proyecto Astro
- [ ] Crear estructura de carpetas
- [ ] Instalar dependencias necesarias

### ⏳ FASE 3: Estilos Base
- [ ] Crear variables CSS globales
- [ ] Crear estilos globales
- [ ] Crear utilities CSS

### ⏳ FASE 4: Componentes
- [ ] Crear cada componente Astro
- [ ] Implementar estilos específicos
- [ ] Agregar interactividad (JavaScript)

### ⏳ FASE 5: Contenido
- [ ] Crear archivo portfolio.json con datos reales
- [ ] Agregar imágenes y recursos
- [ ] Optimizar imágenes

### ⏳ FASE 6: Testing & Optimización
- [ ] Testing responsivo en múltiples dispositivos
- [ ] Lighthouse audit (performance, accessibility, SEO)
- [ ] Optimizaciones necesarias

### ⏳ FASE 7: Deploy
- [ ] Preparar para producción (build)
- [ ] Configurar Vercel/Netlify
- [ ] Deploy online

---

## 📝 Checklist de Features

### UI/UX
- [x] Navbar responsive
- [x] Hero section atractivo
- [x] Foto de perfil circular
- [x] Grid de proyectos responsivo
- [x] Sección de skills
- [x] Formulario de contacto
- [x] Footer con links
- [x] Animaciones suaves
- [x] Hover effects

### Técnico
- [x] Astro SSG
- [x] CSS modular
- [x] Mobile-first responsive
- [x] Optimización de imágenes
- [x] SEO básico (meta tags, sitemap)
- [x] Performance (lazy loading)
- [x] Accesibilidad (WCAG)
- [x] Dark mode (opcional)

### Contenido
- [x] Información personal completa
- [x] Mínimo 3-5 proyectos
- [x] Skills por categoría
- [x] Links a redes sociales
- [x] CV/Resume descargable
- [x] Formulario funcional

---

## ❓ Información Necesaria del Usuario

Para completar el portafolio necesitamos:

1. **Información Personal**
   - [ ] Nombre completo
   - [ ] Título profesional / especialidad
   - [ ] Bio corta (1-2 párrafos)
   - [ ] Email de contacto
   - [ ] Ubicación

2. **Experiencia**
   - [ ] Empresa(s), rol(es), años
   - [ ] Descripción de responsabilidades
   - [ ] Logros principales

3. **Proyectos** (mínimo 3)
   - [ ] Título
   - [ ] Descripción
   - [ ] Tecnologías usadas
   - [ ] Links (demo, GitHub)
   - [ ] Imagen/screenshot

4. **Skills**
   - [ ] Frontend (lenguajes, librerías, frameworks)
   - [ ] Backend (lenguajes, bases de datos)
   - [ ] Tools (Git, Docker, etc.)
   - [ ] Diseño (si aplica)

5. **Redes Sociales**
   - [ ] GitHub
   - [ ] LinkedIn
   - [ ] Twitter/X
   - [ ] Otros

6. **Recursos**
   - [ ] Foto de perfil (alta calidad)
   - [ ] CV/Resume en PDF
   - [ ] Imágenes de proyectos

---

## 🎨 Ejemplo Visual (Basado en Video)

```
┌─────────────────────────────────────────┐
│ Logo          Home About Projects       │  <- Navbar
├─────────────────────────────────────────┤
│                                         │
│      👤                                 │
│      Tu Nombre                          │
│      Creative Developer                 │
│      Descripción corta...              │
│   [Ver Proyectos] [Descargar CV]       │
│                                         │
├─────────────────────────────────────────┤
│ ABOUT ME                                │
│ [Foto] | Texto sobre ti...             │
├─────────────────────────────────────────┤
│ PROJECTS                                │
│ [Proyecto 1] [Proyecto 2] [Proyecto 3] │
├─────────────────────────────────────────┤
│ SKILLS                                  │
│ Frontend | Backend | Tools              │
├─────────────────────────────────────────┤
│ CONTACT                                 │
│ [Formulario o Enlaces]                 │
├─────────────────────────────────────────┤
│ Footer con links y copyright            │
└─────────────────────────────────────────┘
```

---

## 🔗 Referencias

- Video: https://www.youtube.com/watch?v=qxxanKFR7js
- Astro Docs: https://docs.astro.build
- Playlist completa: 16 videos, 2h 41m

---

## 📌 Notas Importantes

1. **Este portafolio será similar al del video pero mejorado con Astro**
2. **Mobile-first design es prioridad**
3. **Todos los datos serán personalizables**
4. **Las animaciones serán suaves pero no pesadas**
5. **Optimización de performance desde el inicio**

---

## ✅ Próximo Paso

Después de validar este plan, procederemos a:

1. **Recopilar tu información personal, proyectos y skills**
2. **Inicializar el proyecto Astro**
3. **Crear los componentes uno a uno**
4. **Integrar tus datos**
5. **Testing y deploy**

---

**Creado:** 28 de Abril de 2026
**Basado en:** Video Bedimcode - Build a Modern Responsive Portfolio Website
**Tecnología:** Astro + HTML + CSS + JavaScript
