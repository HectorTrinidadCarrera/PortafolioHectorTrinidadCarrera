"use client";

import React, { useEffect, useState } from "react";
import { Dock, DockIcon } from "./ui/dock";

export default function MagicDock() {
  const [active, setActive] = useState("#home");

  const items = [
    { href: "#home", icon: "ph-house", label: "Inicio" },
    { href: "#about", icon: "ph-user", label: "Sobre mí" },
    { href: "#skills", icon: "ph-lightning", label: "Habilidades" },
    { href: "#qualification", icon: "ph-graduation-cap", label: "Trayectoria" },
    { href: "#projects", icon: "ph-briefcase", label: "Proyectos" },
    { href: "#certifications", icon: "ph-certificate", label: "Certificados" },
    { href: "#contact", icon: "ph-envelope-simple", label: "Contacto" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive("#" + entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // Detecta cuando la sección cruza la mitad de la pantalla
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <Dock direction="middle" className="bg-white/90 dark:bg-[#080808]/90 border-black/10 dark:border-white/10 p-2">
        {items.map((item) => (
          <DockIcon key={item.href}>
            <a 
              href={item.href} 
              aria-label={item.label} 
              className={`w-full h-full flex items-center justify-center rounded-full transition-colors ${
                active === item.href ? "text-primary" : "text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
              }`}
            >
              <i className={`ph ${item.icon} text-2xl`} />
            </a>
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
}
