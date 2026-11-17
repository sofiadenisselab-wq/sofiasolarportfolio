# Portafolio Interactivo Vertical (Estilo TikTok)

Un portafolio web mobile-first minimalista, ultra liviano y optimizado para compartir por WhatsApp, Instagram Bio o DM. Permite al cliente explorar tus mejores piezas audiovisuales en formato vertical y consultar tus tarifas en 1 solo tap.

---

## ⚡ Características Principales

1. **Selector de Proyectos Minimalista:** Vista limpia en negro profundo con tarjetas de proyectos, vista previa en video y conteo de clips.
2. **Feed Vertical TikTok:**
   - Scroll vertical fluido con `scroll-snap`.
   - Autoplay inteligente: solo reproduce el clip visible en pantalla y pausa los demás.
   - Tap en pantalla para reproducir / pausar con animación sutil.
   - Control de audio global (`Muted` / `Audio ON`).
   - Barra de progreso en tiempo real para cada video.
3. **1-Tap Pricing (Bottom Sheet):**
   - Botón siempre visible `[ ⚡ Tarifas ]` en la barra superior.
   - Despliega una hoja deslizante con paquetes de precios transparentes y botón directo a tu **WhatsApp**.
4. **Puente con Framer:** Enlace directo para aquellos clientes que quieran revisar casos de estudio extensos o documentales en tu web principal.
5. **Listo para Vercel:** Cero dependencias complejas, funciona en cualquier navegador moderno.

---

## 📁 Archivos del Proyecto

* [index.html](file:///C:/Users/THOMAS/Documents/antigravity/silly-planck/index.html): Estructura visual de las 3 vistas (Home, Feed vertical, Bottom sheet de pricing).
* [style.css](file:///C:/Users/THOMAS/Documents/antigravity/silly-planck/style.css): Sistema de diseño oscuro minimalista, adaptaciones para móviles y contenedor smartphone para monitores de escritorio.
* [app.js](file:///C:/Users/THOMAS/Documents/antigravity/silly-planck/app.js): Motor interactivo y objeto de configuración de datos.
* [vercel.json](file:///C:/Users/THOMAS/Documents/antigravity/silly-planck/vercel.json): Configuración de headers y optimización para Vercel.

---

## 🛠️ Cómo Personalizar tus Datos (En 2 Minutos)

Al inicio del archivo [app.js](file:///C:/Users/THOMAS/Documents/antigravity/silly-planck/app.js) vas a encontrar el bloque `PORTFOLIO_DATA`:

```javascript
const PORTFOLIO_DATA = {
  creator: {
    name: "TU NOMBRE // VISUALS",
    tagline: "Video Editor & Content Strategist",
    extendedPortfolioUrl: "https://framer.com/@tu-usuario",
    whatsappNumber: "5491100000000", // Tu número con código de país (sin + ni espacios)
    defaultWhatsappMessage: "¡Hola! Vi tu portafolio y quiero cotizar videos...",
    email: "tu@email.com",
    instagram: "@tu_usuario"
  },
  pricing: [
    // Modificá los precios, nombres y características aquí
  ],
  projects: [
    // Agregá o quitá proyectos y tus enlaces de video .mp4
  ]
};
```

---

## 🚀 Cómo Publicarlo GRATIS en Vercel

1. Creá una cuenta gratuita en [Vercel](https://vercel.com).
2. En tu panel principal, hacé clic en **"Add New..."** → **"Project"**.
3. Tenés dos opciones:
   - **Opción Rápida (Sin GitHub):** Podés arrastrar la carpeta `silly-planck` directamente al importador de Vercel.
   - **Opción GitHub (Recomendada):** Subís estos archivos a un repositorio privado de GitHub y lo conectás en un clic.
4. ¡Listo! En 15 segundos Vercel te dará tu enlace en vivo: `https://tu-nombre.vercel.app`.
