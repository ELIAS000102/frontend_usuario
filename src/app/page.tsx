// app/page.tsx o components/NavbarDemo.tsx
"use client";
import { useState } from "react";
// Importa tus componentes de Navbar
import {
  Navbar, NavBody, NavItems, MobileNav, NavbarLogo,
  NavbarButton, MobileNavHeader, MobileNavToggle, MobileNavMenu,
} from "@/components/ui/resizable-navbar";

// *****************************************************************
// IMPORTA EL COMPONENTE HERO PARALLAX (Asume que lo has copiado en esta ruta)
import { HeroParallax } from "@/components/ui/hero-parallax"; 
// *****************************************************************

// Define el array de productos para el componente Parallax
// ¡REEMPLAZA ESTO CON TUS PROPIOS DATOS E IMÁGENES REALES!
const products = [
  { title: "Moonbeam", link: "https://gomoonbeam.com", thumbnail: "/path/to/image1.png" },
  { title: "Cursor", link: "https://cursor.so", thumbnail: "/path/to/image2.png" },
  { title: "Rogue", link: "https://userogue.com", thumbnail: "/path/to/image3.png" },
  // ... (Añade más objetos de productos/imágenes según necesites)
];


// *****************************************************************
// La función principal de la página (o el componente NavbarDemo modificado)
// *****************************************************************
export function NavbarDemo() {
  const navItems = [
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // NOTA: El componente HeroParallax requiere bastante altura para que 
    // el efecto sea visible, así que asegúrate de que tu contenedor padre
    // tenga espacio para el desplazamiento.
    <div className="relative w-full"> 
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation (sin cambios) */}
        <MobileNav>
          {/* ... Código del menú móvil ... */}
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
                Login
              </NavbarButton>
              <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* ***************************************************************** */}
      {/* Reemplazamos DummyContent con HeroParallax */}
      <HeroParallax products={products} />
      {/* ***************************************************************** */}
      
    </div>
  );
}

// Si estás en page.tsx, exporta la NavbarDemo como componente principal
export default NavbarDemo; // o un wrapper si es necesario