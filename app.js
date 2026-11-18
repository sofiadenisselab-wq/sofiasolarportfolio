/**
 * SOFIA SOLAR // PORTFOLIO & CREATIVE DIRECTION
 * Cloud Video CDN Streaming Architecture (Cloudinary q_auto,f_auto)
 */

/* ==========================================================================
   1. CONFIGURACIÓN CENTRAL DE VIDEOS EN LA NUBE (CLOUDINARY q_auto,f_auto)
   --------------------------------------------------------------------------
   Todos los enlaces incluyen `q_auto,f_auto` para compresión y formato óptimo
   automático al hacer scroll.
   ========================================================================== */
const CLOUD_VIDEO_URLS = {
  // 1. VIDEOFOLIO -> Social Media (Vertical 9:16)
  "social-media": [
    "https://res.cloudinary.com/bdyq2cm3/video/upload/q_auto,f_auto/v1794956266/CHICARUBIO_LETRAS.mp4"
  ],

  // 2. VIDEOFOLIO -> Real Estate (Vertical 9:16)
  "real-estate": [
    "https://res.cloudinary.com/bdyq2cm3/video/upload/q_auto,f_auto/v1794955618/galpon_edit_original_-_FG.mp4",
    "https://res.cloudinary.com/bdyq2cm3/video/upload/q_auto,f_auto/v1794955612/240_correccion.mp4",
    "https://res.cloudinary.com/bdyq2cm3/video/upload/q_auto,f_auto/v1794955579/la_alameda_reel.mp4"
  ],

  // 3. VIDEOFOLIO -> Marca Personal (Vertical 9:16)
  "marca-personal": [
    "https://res.cloudinary.com/bdyq2cm3/video/upload/q_auto,f_auto/v1794955229/reel_31.mp4",
    "https://res.cloudinary.com/bdyq2cm3/video/upload/q_auto,f_auto/v1794955222/ali_-_4.mp4",
    "https://res.cloudinary.com/bdyq2cm3/video/upload/q_auto,f_auto/v1794955205/REEL_37.mp4"
  ],

  // 4. VIDEOFOLIO -> Gastronomía (Vertical 9:16)
  "gastronomia": [
    "https://res.cloudinary.com/bdyq2cm3/video/upload/q_auto,f_auto/v1794954959/pochi_reel_2.mp4",
    "https://res.cloudinary.com/bdyq2cm3/video/upload/q_auto,f_auto/v1794954946/POCHI_SORTEO_2.mp4"
  ],

  // 5. VIDEOFOLIO -> Entrenamiento (Vertical 9:16)
  "entrenamiento": [
    "https://res.cloudinary.com/bdyq2cm3/video/upload/q_auto,f_auto/v1794954523/sabores_clau_bora.mp4",
    "https://res.cloudinary.com/bdyq2cm3/video/upload/q_auto,f_auto/v1794954447/REMAKE_BORA_28.09.mp4",
    "https://res.cloudinary.com/bdyq2cm3/video/upload/q_auto,f_auto/v1794954445/BORA_LUNES_7.9.mp4",
    "https://res.cloudinary.com/bdyq2cm3/video/upload/q_auto,f_auto/v1794954324/SIN_RESULTADOS_BORA_-_Trim.mp4"
  ],

  // 6. VIDEOFOLIO -> Distribuidora (Vertical 9:16)
  "distribuidora": [
    "https://res.cloudinary.com/bdyq2cm3/video/upload/q_auto,f_auto/v1794953842/JUDAS_ULT_VERS.mp4",
    "https://res.cloudinary.com/bdyq2cm3/video/upload/q_auto,f_auto/v1794953806/pelea_chsime.mp4"
  ],

  // 7. VIDEOFOLIO -> YouTube (Horizontal 16:9)
  "youtube": [
    "https://res.cloudinary.com/bdyq2cm3/video/upload/q_auto,f_auto/v1794961893/ytb_6.mp4"
  ],

  // 8. DJ -> Grabaciones (Vertical 9:16)
  "grabaciones": [
    "https://res.cloudinary.com/bdyq2cm3/video/upload/q_auto,f_auto/v1794953292/IMG_0799_1.mov",
    "https://res.cloudinary.com/bdyq2cm3/video/upload/q_auto,f_auto/v1794953268/IMG_0789_1.mov",
    "https://res.cloudinary.com/bdyq2cm3/video/upload/q_auto,f_auto/v1794953264/IMG_0786_2.mov",
    "https://res.cloudinary.com/bdyq2cm3/video/upload/q_auto,f_auto/v1794953257/IMG_0782.mov",
    "https://res.cloudinary.com/bdyq2cm3/video/upload/q_auto,f_auto/v1794953189/IMG_0800_1.mov"
  ],

  // 9. DJ -> Video Sets (Horizontal 16:9 - Próximos sets de YouTube o Cloudinary)
  "video-sets": []
};

// Rutas locales de respaldo (usadas automáticamente si estás sin internet en tu PC)
const LOCAL_FALLBACK_URLS = {
  "social-media": [
    "VIDEOFOLIO/SOCIALMEDIA/CHICARUBIO%20%2B%20LETRAS.mp4"
  ],
  "real-estate": [
    "VIDEOFOLIO/REALSTATE/galpon%20edit%20original%20-%20FG.mp4",
    "VIDEOFOLIO/REALSTATE/240%20correccion.mp4",
    "VIDEOFOLIO/REALSTATE/la%20alameda%20reel.mp4"
  ],
  "marca-personal": [
    "VIDEOFOLIO/MARCA%20PERSONAL/reel%2031.mp4",
    "VIDEOFOLIO/MARCA%20PERSONAL/ali%20-%204.mp4",
    "VIDEOFOLIO/MARCA%20PERSONAL/REEL%2037.mp4"
  ],
  "gastronomia": [
    "VIDEOFOLIO/GASTRONOMIA/pochi%20reel%202.mp4",
    "VIDEOFOLIO/GASTRONOMIA/POCHI%20SORTEO%202.mp4"
  ],
  "entrenamiento": [
    "VIDEOFOLIO/ENTRENAMIENTO/sabores%20clau%20bora.mp4",
    "VIDEOFOLIO/ENTRENAMIENTO/REMAKE%20BORA%2028.09.mp4",
    "VIDEOFOLIO/ENTRENAMIENTO/BORA%20LUNES%207.9.mp4",
    "VIDEOFOLIO/ENTRENAMIENTO/SIN%20RESULTADOS%20BORA%20-%20Trim.mp4"
  ],
  "distribuidora": [
    "VIDEOFOLIO/DISTRIBUIDORA/JUDAS%20ULT%20VERS.mp4",
    "VIDEOFOLIO/DISTRIBUIDORA/pelea%20chsime.mp4"
  ],
  "youtube": [
    "VIDEOFOLIO/YOUTUBE/ytb%206.mp4"
  ],
  "grabaciones": [
    "DJ/GRABACIONES%20CELU/VIDEOS/IMG_0799%20%281%29.mp4",
    "DJ/GRABACIONES%20CELU/VIDEOS/IMG_0789%20%281%29.mp4",
    "DJ/GRABACIONES%20CELU/VIDEOS/IMG_0786%20%282%29.mp4",
    "DJ/GRABACIONES%20CELU/VIDEOS/IMG_0782.mp4",
    "DJ/GRABACIONES%20CELU/VIDEOS/IMG_0800%20%281%29.mp4"
  ],
  "video-sets": []
};

function optimizeCloudVideoUrl(rawUrl, fallbackUrl) {
  const trimmed = (rawUrl || '').trim();
  if (!trimmed || trimmed.includes('TU_CLOUD_NAME')) {
    return fallbackUrl || trimmed;
  }
  if (trimmed.includes('res.cloudinary.com') && trimmed.includes('/video/upload/')) {
    if (!trimmed.includes('/video/upload/q_auto,f_auto') && !trimmed.includes('/video/upload/f_auto,q_auto')) {
      return trimmed.replace('/video/upload/', '/video/upload/q_auto,f_auto/');
    }
  }
  return trimmed;
}

function getYouTubeEmbedUrl(url) {
  if (!url) return null;
  const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return m ? `https://www.youtube.com/embed/${m[1]}?autoplay=1&rel=0&playsinline=1` : null;
}

function buildVideoProjectsFromCloudConfig() {
  const meta = {
    "social-media":  { title: "Social Media",   layout: "vertical" },
    "real-estate":   { title: "Real Estate",    layout: "vertical" },
    "marca-personal":{ title: "Marca Personal", layout: "vertical" },
    "gastronomia":   { title: "Gastronomía",    layout: "vertical" },
    "entrenamiento": { title: "Entrenamiento",  layout: "vertical" },
    "distribuidora": { title: "Distribuidora",  layout: "vertical" },
    "youtube":       { title: "YouTube",        layout: "horizontal" },
    "grabaciones":   { title: "Grabaciones",    layout: "vertical" },
    "video-sets":    { title: "Video Sets",     layout: "horizontal" }
  };

  const out = {};
  Object.keys(meta).forEach(key => {
    const cloudList = CLOUD_VIDEO_URLS[key] || [];
    const localList = LOCAL_FALLBACK_URLS[key] || [];
    const count = Math.max(cloudList.length, localList.length);
    const videos = [];

    for (let i = 0; i < count; i++) {
      const item = cloudList[i];
      const rawCloudUrl = typeof item === 'string' ? item : (item && item.url ? item.url : '');
      const localH264Url = localList[i] || '';
      const primaryUrl = optimizeCloudVideoUrl(rawCloudUrl, localH264Url);
      const backupUrl = localH264Url;

      if (primaryUrl) {
        videos.push({
          url: primaryUrl,
          fallbackUrl: backupUrl,
          caption: meta[key].title,
          badge: meta[key].title.toUpperCase()
        });
      }
    }

    out[key] = {
      title: meta[key].title,
      layout: meta[key].layout,
      videos: videos
    };
  });
  return out;
}

/* ==========================================================================
   DICCIONARIO DE TRADUCCIÓN MULTILINGÜE (ES / EN / FR)
   ========================================================================== */
const TRANSLATIONS = {
  es: {
    subtitulo: "Edición, guiones, dirección estética y estrategia para marcas y creadores.",
    footerStatus: "Disponible para nuevos proyectos · Ver tarifas",
    backText: "Volver",
    swipeHint: "Deslizá hacia arriba",
    pricingTag: "TARIFARIO DE SERVICIOS",
    pricingTitle: "Servicios & Paquetes",
    pricingSubtitle: "Precios transparentes y asesoría a medida para marcas y creadores. Consultá por disponibilidad o paquetes personalizados.",
    whatsappMain: "Consultar por WhatsApp",
    whatsappSub: "Respondé directo con tu consulta",
    pricingCardCta: "Consultar este servicio",
    pricingTabs: {
      video: "Edición de Video",
      contenido: "Creadora de Contenido",
      moda: "Producción de Moda",
      tarot: "Tarot"
    },
    pricingTiers: {
      particulares: "Particulares",
      pymes: "PyMEs",
      empresas: "Empresas"
    },
    
    // 5 Roles (Pills & Modales Limpios)
    roles: {
      moda: {
        pill: "Productora de Moda & Estilista",
        title: "Productora de Moda & Estilista",
        subtitle: "2020 - 2026 / MadHouse - en constante formación.",
        lead: "Materializo universos conceptuales en estilismos y producciones visuales.",
        sections: [
          {
            title: "Producción",
            focus: "enfocado en dirección de grupos y materialización de ideas.",
            items: [
              { label: "Planificación del concepto", desc: "Traduzco la idea del cliente o diseñador en un plan de acción concreto." },
              { label: "Búsqueda de recursos", desc: "Consigo las locaciones (estudio, exteriores), los permisos y el equipo necesario." },
              { label: "Armado del equipo", desc: "Contrato y coordino a los fotógrafos, videógrafos, modelos, maquilladores, peinadores y asistentes." },
              { label: "Gestión de tiempos y presupuesto", desc: "Superviso el cronograma del día de producción (shooting) y me aseguro de no exceder los costos." }
            ]
          },
          {
            title: "Estilismo",
            focus: "enfocado en la dirección estética y la narrativa visual del personaje.",
            items: [
              { label: "Selección de vestuario", desc: "Elijo, consigo y combino prendas y accesorios (de marcas, showrooms o diseñadores) para contar una historia o reflejar una época." },
              { label: "Armado de looks", desc: "Defino cómo se verá la ropa puesta en el modelo, asegurando la armonía de colores, texturas y proporciones." },
              { label: "Dirección de imagen en set", desc: "Durante la sesión o el desfile, vigilo que las prendas queden impecables y dialogo con el maquillador y peluquero para cerrar el concepto estético global." },
              { label: "Asesoría a celebridades", desc: "Trabajo con artistas o figuras públicas para diseñar su imagen personal y pública en alfombras rojas o apariciones en medios." }
            ]
          }
        ]
      },
      editora: {
        pill: "Editora de Video",
        title: "Editora de Video",
        subtitle: "DaVinci Resolve + Paquete Adobe + CapCut + Canva + IA",
        lead: "Transformo material en crudo en piezas dinámicas, estéticas y con una narrativa visual coherente y atrapante.",
        sections: [
          {
            title: "Montaje & Ritmo",
            focus: "enfocado en captar la atención y sostener el interés.",
            items: [
              { label: "Cortes dinámicos y estructura", desc: "Selecciono las mejores tomas y construyo el ritmo ideal para Reels, TikToks, anuncios (Ads), YouTube y videoclips." },
              { label: "Subtítulos y gráficos", desc: "Diseño textos animados y placas que refuerzan el mensaje sin saturar la pantalla." },
              { label: "Transiciones", desc: "Aplico recursos visuales fluidos que potencian la continuidad entre escenas." }
            ]
          },
          {
            title: "Acabado Estético & Técnico",
            focus: "enfocado en la calidad visual y sonora final.",
            items: [
              { label: "Color Grading", desc: "Ajusto la luz, el contraste y la paleta cromática para lograr una identidad visual cinematográfica o comercial según el proyecto." },
              { label: "Sound Design", desc: "Integro efectos de sonido, música y limpieza de audio para dar inmersión y peso a cada corte." }
            ]
          }
        ]
      },
      creadora: {
        pill: "Creadora de Contenido",
        title: "Creadora de Contenido",
        subtitle: "Estrategia, guiones y ejecución para marcas y creadores.",
        lead: "Bajo ideas abstractas a piezas concretas, atractivas y listas para posicionar tu identidad digital.",
        sections: [
          {
            title: "Conceptualización & Guionado",
            focus: "enfocado en el mensaje y la estructura.",
            items: [
              { label: "Desarrollo de ideas", desc: "Traduzco la esencia de tu marca o perfil en pilares de contenido claros." },
              { label: "Guiones y Hooks", desc: "Redacto estructuras narrativas pensadas para frenar el scroll en los primeros 3 segundos y generar conexión real." },
              { label: "Planificación", desc: "Organizo calendarios y formatos para sostener una presencia constante y estratégica." }
            ]
          },
          {
            title: "Producción en Cámara",
            focus: "enfocado en la ejecución visual.",
            items: [
              { label: "Grabación", desc: "Me encargo de filmar el contenido cuidando encuadres, iluminación y estética, ya sea protagonizando las piezas o dirigiendo a quien está frente a cámara." }
            ]
          }
        ]
      },
      dj: {
        pill: "DJ",
        title: "DJ",
        subtitle: "",
        lead: "Since 2020 activando la pista de baile.",
        sections: []
      },
      tarot: {
        pill: "Tarotista",
        title: "Tarotista",
        subtitle: "2020 - Actualidad",
        lead: "Utilizo el tarot como una herramienta de comprensión de la psique para ordenar escenarios, destrabar decisiones y comprender procesos personales o creativos.",
        sections: [
          {
            title: "Enfoque de Lectura",
            focus: "Orientado a ganar perspectiva y tomar decisiones con mayor claridad.",
            items: [
              {
                label: "Viaje Interior & Arquetipos",
                desc: "Acompaño al consultante en un viaje hacia su interior mental y emocional, abordando cada tirada como un mapa arquetípico, traduciendo los símbolos en información práctica y aplicable, orientado a ganar perspectiva y tomar decisiones con mayor claridad."
              }
            ]
          }
        ]
      }
    },

    // 4 Categorías del Menú Anidado
    menu: {
      videofolio: {
        title: "Videofolio",
        subItems: [
          { id: "social-media", title: "Social Media" },
          { id: "real-estate", title: "Real Estate" },
          { id: "marca-personal", title: "Marca Personal" },
          { id: "gastronomia", title: "Gastronomía" },
          { id: "entrenamiento", title: "Entrenamiento" },
          { id: "distribuidora", title: "Distribuidora" },
          { id: "youtube", title: "YouTube" }
        ]
      },
      moda: {
        title: "Producciones de Moda",
        subItems: [
          { id: "ciriart", title: "CIRIART" },
          { id: "feelgood", title: "FEELGOOD" }
        ]
      },
      soundSets: "DJ",
      tarot: "Tarot"
    }
  },

  en: {
    subtitulo: "Editing, scripting, aesthetic direction, and strategy for brands and creators.",
    footerStatus: "Available for new projects · View rates",
    backText: "Back",
    swipeHint: "Swipe up to view more",
    pricingTag: "SERVICES & RATES",
    pricingTitle: "Services & Packages",
    pricingSubtitle: "Transparent rates and tailored strategy for creators and brands. Contact for availability or custom quotes.",
    whatsappMain: "Contact on WhatsApp",
    whatsappSub: "Get in touch directly",
    pricingCardCta: "Inquire about this service",
    pricingTabs: {
      video: "Video Editing",
      contenido: "Content Creator",
      moda: "Fashion Production",
      tarot: "Tarot"
    },
    pricingTiers: {
      particulares: "Individuals",
      pymes: "SMBs",
      empresas: "Enterprises"
    },

    roles: {
      moda: {
        pill: "Fashion Producer & Stylist",
        title: "Fashion Producer & Stylist",
        subtitle: "2020 - 2026 / MadHouse - ongoing training.",
        lead: "I materialize conceptual universes into visual styling and high-end productions.",
        sections: [
          {
            title: "Production",
            focus: "focused on team leadership and materializing creative visions.",
            items: [
              { label: "Concept Planning", desc: "Translating client or designer briefs into an actionable masterplan." },
              { label: "Resource Sourcing", desc: "Securing locations (studio, outdoor), permits, and production equipment." },
              { label: "Team Assembly", desc: "Hiring and directing photographers, videographers, models, hair & makeup, and assistants." },
              { label: "Timeline & Budget Control", desc: "Supervising call sheets, shooting schedules, and keeping costs on track." }
            ]
          },
          {
            title: "Styling",
            focus: "focused on aesthetic direction and the character's visual narrative.",
            items: [
              { label: "Wardrobe Curation", desc: "Selecting, sourcing, and combining designer garments and accessories to tell a cohesive story." },
              { label: "Outfit Fitting", desc: "Ensuring harmony across color palettes, silhouettes, and fabric textures." },
              { label: "On-Set Image Direction", desc: "Overseeing garment drape and synchronizing with hair & makeup artists during shoots." },
              { label: "Celebrity & Talent Styling", desc: "Tailoring public image and red-carpet aesthetics for artists and public figures." }
            ]
          }
        ]
      },
      editora: {
        pill: "Video Editor",
        title: "Video Editor",
        subtitle: "DaVinci Resolve + Adobe Suite + CapCut + Canva + AI",
        lead: "I transform raw footage into dynamic, aesthetic pieces with compelling visual rhythm.",
        sections: [
          {
            title: "Assembly & Rhythm",
            focus: "focused on hooking attention and driving viewer retention.",
            items: [
              { label: "Dynamic Pacing & Structure", desc: "Crafting optimal flow for Reels, TikToks, Ads, YouTube, and music videos." },
              { label: "Subtitles & Motion Graphics", desc: "Designing animated typography that reinforces messages without screen clutter." },
              { label: "Fluid Transitions", desc: "Applying seamless visual techniques to maintain scene continuity." }
            ]
          },
          {
            title: "Aesthetic & Technical Finish",
            focus: "focused on cinematic image quality and sound depth.",
            items: [
              { label: "Color Grading", desc: "Fine-tuning exposure, contrast, and color palettes for a tailored commercial or cinematic look." },
              { label: "Sound Design", desc: "Layering custom SFX, foley, and music mastering for an immersive viewing experience." }
            ]
          }
        ]
      },
      creadora: {
        pill: "Content Creator",
        title: "Content Creator",
        subtitle: "Strategy, scripting, and execution for brands and creators.",
        lead: "I turn abstract concepts into tangible, scroll-stopping digital assets.",
        sections: [
          {
            title: "Ideation & Scriptwriting",
            focus: "focused on narrative structure and key takeaways.",
            items: [
              { label: "Content Pillars", desc: "Defining clear core topics tailored to your brand's digital identity." },
              { label: "Hooks & Retention Scripts", desc: "Structuring 3-second hooks engineered to stop the scroll and build connection." },
              { label: "Editorial Scheduling", desc: "Organizing production workflows for consistent, strategic publishing." }
            ]
          },
          {
            title: "On-Camera Production",
            focus: "focused on visual execution and lighting.",
            items: [
              { label: "Filming & Framing", desc: "Shooting high-resolution vertical footage with tailored aesthetic direction." }
            ]
          }
        ]
      },
      dj: {
        pill: "DJ",
        title: "DJ",
        subtitle: "",
        lead: "Since 2020 igniting the dance floor.",
        sections: []
      },
      tarot: {
        pill: "Tarot Reader",
        title: "Tarot Reader",
        subtitle: "2020 - Present",
        lead: "Using tarot as a psychological map to clarify scenarios, unlock creative blocks, and guide decisions.",
        sections: [
          {
            title: "Reading Approach",
            focus: "Aimed at gaining clarity and making empowered decisions.",
            items: [
              {
                label: "Inner Archetypal Journey",
                desc: "Guiding clients through symbolic archetypes, turning intuitive insights into practical, actionable clarity."
              }
            ]
          }
        ]
      }
    },

    menu: {
      videofolio: {
        title: "Videofolio",
        subItems: [
          { id: "social-media", title: "Social Media" },
          { id: "real-estate", title: "Real Estate" },
          { id: "marca-personal", title: "Personal Brand" },
          { id: "gastronomia", title: "Gastronomy" },
          { id: "entrenamiento", title: "Training" },
          { id: "distribuidora", title: "Distributor" },
          { id: "youtube", title: "YouTube" }
        ]
      },
      moda: {
        title: "Fashion Productions",
        subItems: [
          { id: "ciriart", title: "CIRIART" },
          { id: "feelgood", title: "FEELGOOD" }
        ]
      },
      soundSets: "DJ",
      tarot: "Tarot"
    }
  },

  fr: {
    subtitulo: "Montage, écriture, direction esthétique et stratégie pour marques et créateurs.",
    footerStatus: "Disponible pour nouveaux projets · Voir tarifs",
    backText: "Retour",
    swipeHint: "Glissez vers le haut",
    pricingTag: "GRILLE TARIFAIRE",
    pricingTitle: "Services & Forfaits",
    pricingSubtitle: "Tarifs clairs et accompagnement sur-mesure pour créateurs et marques. Devis sur mesure disponible.",
    whatsappMain: "Contacter sur WhatsApp",
    whatsappSub: "Échangeons directement",
    pricingCardCta: "Consulter ce service",
    pricingTabs: {
      video: "Montage Vidéo",
      contenido: "Créatrice de Contenu",
      moda: "Production de Mode",
      tarot: "Tarot"
    },
    pricingTiers: {
      particulares: "Particuliers",
      pymes: "PME",
      empresas: "Entreprises"
    },

    roles: {
      moda: {
        pill: "Productrice de Mode & Styliste",
        title: "Productrice de Mode & Styliste",
        subtitle: "2020 - 2026 / MadHouse - en constante formation.",
        lead: "Je matérialise des univers conceptuels en stylismes et productions visuelles de haute volée.",
        sections: [
          {
            title: "Production",
            focus: "dédié à la direction d'équipe et la matérialisation d'idées.",
            items: [
              { label: "Planification du concept", desc: "Traduction du brief créatif en un plan d'action rigoureux." },
              { label: "Recherche de ressources", desc: "Sélection des lieux (studio, extérieur), permis et équipements techniques." },
              { label: "Constitution de l'équipe", desc: "Coordination des photographes, vidéastes, mannequins, coiffeurs et maquilleurs." },
              { label: "Gestion du temps et budget", desc: "Supervision du planning de tournage et respect des coûts prévus." }
            ]
          },
          {
            title: "Stylisme",
            focus: "dédié à la direction esthétique et la narration visuelle.",
            items: [
              { label: "Sélection des tenues", desc: "Recherche et association de pièces de créateurs pour raconter une histoire singulière." },
              { label: "Composition des looks", desc: "Harmonisation des silhouettes, des palettes chromatiques et des textures." },
              { label: "Direction d'image sur plateau", desc: "Contrôle minutieux du tombé des vêtements et cohérence esthétique globale." },
              { label: "Conseil en image", desc: "Création de styles sur mesure pour personnalités publiques et tapis rouges." }
            ]
          }
        ]
      },
      editora: {
        pill: "Monteuse Vidéo",
        title: "Monteuse Vidéo",
        subtitle: "DaVinci Resolve + Suite Adobe + CapCut + Canva + IA",
        lead: "Je sublime les rushs bruts en pièces dynamiques, esthétiques et captivantes.",
        sections: [
          {
            title: "Montage & Rythme",
            focus: "dédié à la rétention d'attention et l'engagement.",
            items: [
              { label: "Rythme dynamique & structure", desc: "Construction du flux narratif idéal pour Reels, TikToks, Ads et YouTube." },
              { label: "Sous-titres & Motion Design", desc: "Création d'animations typographiques percutantes et élégantes." },
              { label: "Transitions fluides", desc: "Raccords visuels soignés pour maximiser la continuité de scène." }
            ]
          },
          {
            title: "Finition Esthétique & Sonore",
            focus: "dédié à l'exigence cinématographique et au sound design.",
            items: [
              { label: "Étalonnage (Color Grading)", desc: "Ajustement méticuleux de la lumière et des teintes pour une identité forte." },
              { label: "Sound Design", desc: "Intégration d'effets sonores et spatialisation audio pour une immersion totale." }
            ]
          }
        ]
      },
      creadora: {
        pill: "Créatrice de Contenu",
        title: "Créatrice de Contenu",
        subtitle: "Stratégie, écriture et exécution pour marques et créateurs.",
        lead: "Je concrétise vos concepts en contenus digitaux percutants et raffinés.",
        sections: [
          {
            title: "Conceptualisation & Écriture",
            focus: "dédié au message et à la structure narrative.",
            items: [
              { label: "Piliers de contenu", desc: "Définition des axes éditoriaux en phase avec votre univers de marque." },
              { label: "Accroches & Hooks", desc: "Rédaction d'amorces percutantes pour stopper le défilement dès les 3 premières secondes." },
              { label: "Calendrier éditorial", desc: "Organisation méthodique pour maintenir une régularité stratégique." }
            ]
          },
          {
            title: "Tournage & Réalisation",
            focus: "dédié à la qualité d'image et la direction visuelle.",
            items: [
              { label: "Prises de vue", desc: "Tournage vertical soigné avec gestion de la lumière et du cadre." }
            ]
          }
        ]
      },
      dj: {
        pill: "DJ",
        title: "DJ",
        subtitle: "",
        lead: "Since 2020 aux commandes des dancefloors.",
        sections: []
      },
      tarot: {
        pill: "Tarologue",
        title: "Tarologue",
        subtitle: "2020 - Présent",
        lead: "J'utilise le tarot comme grille de lecture psychologique pour ordonner les scénarios et éclairer les choix.",
        sections: [
          {
            title: "Approche de Consultation",
            focus: "Orienté vers la clarté d'esprit et la prise de décision sereine.",
            items: [
              {
                label: "Voyage Intérieur & Archétypes",
                desc: "Accompagnement introspectif transformant la symbolique des cartes en pistes de réflexion concrètes et bienveillantes."
              }
            ]
          }
        ]
      }
    },

    menu: {
      videofolio: {
        title: "Vidéofolio",
        subItems: [
          { id: "social-media", title: "Social Media" },
          { id: "real-estate", title: "Real Estate" },
          { id: "marca-personal", title: "Marque personnelle" },
          { id: "gastronomia", title: "Gastronomie" },
          { id: "entrenamiento", title: "Entraînement" },
          { id: "distribuidora", title: "Distributeur" },
          { id: "youtube", title: "YouTube" }
        ]
      },
      moda: {
        title: "Productions de Mode",
        subItems: [
          { id: "ciriart", title: "CIRIART" },
          { id: "feelgood", title: "FEELGOOD" }
        ]
      },
      soundSets: "DJ",
      tarot: "Tarot"
    }
  }
};


/* ==========================================================================
   DATOS DE PROYECTOS PARA TIKTOK FEED & REPRODUCTOR HORIZONTAL (DESDE NUBE)
   ========================================================================== */
const VIDEO_PROJECTS = buildVideoProjectsFromCloudConfig();


/* ==========================================================================
   DATOS DE CARRUSELES ESTILO INSTAGRAM (MODA & TAROT)
   ========================================================================== */
const CAROUSEL_PROJECTS = {
  "ciriart": {
    "title": "CIRIART",
    "slides": [
      {
        "url": "MODA/CIRIART/Captura%20de%20pantalla%202026-01-18%20213642.png",
        "caption": "CIRIART · 1/7"
      },
      {
        "url": "MODA/CIRIART/Captura%20de%20pantalla%202026-01-18%20213657.png",
        "caption": "CIRIART · 2/7"
      },
      {
        "url": "MODA/CIRIART/Captura%20de%20pantalla%202026-01-18%20213713.png",
        "caption": "CIRIART · 3/7"
      },
      {
        "url": "MODA/CIRIART/Captura%20de%20pantalla%202026-01-18%20213723.png",
        "caption": "CIRIART · 4/7"
      },
      {
        "url": "MODA/CIRIART/Captura%20de%20pantalla%202026-01-18%20213734.png",
        "caption": "CIRIART · 5/7"
      },
      {
        "url": "MODA/CIRIART/Captura%20de%20pantalla%202026-01-18%20213746.png",
        "caption": "CIRIART · 6/7"
      },
      {
        "url": "MODA/CIRIART/Captura%20de%20pantalla%202026-01-18%20213754.png",
        "caption": "CIRIART · 7/7"
      }
    ]
  },
  "feelgood": {
    "title": "FEELGOOD",
    "slides": [
      {
        "url": "MODA/FEELGOOD/IMG_2698.JPG.jpeg",
        "caption": "FEELGOOD · 1/6"
      },
      {
        "url": "MODA/FEELGOOD/IMG_2719.JPG.jpeg",
        "caption": "FEELGOOD · 2/6"
      },
      {
        "url": "MODA/FEELGOOD/IMG_2721.JPG.jpeg",
        "caption": "FEELGOOD · 3/6"
      },
      {
        "url": "MODA/FEELGOOD/IMG_2723.JPG%20%281%29.jpeg",
        "caption": "FEELGOOD · 4/6"
      },
      {
        "url": "MODA/FEELGOOD/IMG_2724.JPG.jpeg",
        "caption": "FEELGOOD · 5/6"
      },
      {
        "url": "MODA/FEELGOOD/IMG_2725.JPG.jpeg",
        "caption": "FEELGOOD · 6/6"
      }
    ]
  }
};


/* ==========================================================================
   CONSOLIDATED PRICING DATABASE (MULTILINGUAL & TIERED ACROSS CATEGORIES)
   ES: Video/Contenido/Moda in USD, Tarot in ARS ($10.000 to $45.000)
   EN: ALL in USD (Tarot $7, $17, $20, $25, $30)
   FR: ALL in EUR (€)
   Zero emojis in titles/cards; uppercase editorial typography
   ========================================================================== */
const CONSOLIDATED_PRICING = {
  es: {
    video: {
      id: "video",
      title: "Edición de Video",
      hasTiers: true,
      baseStyleTitle: "ESTILO BASE",
      baseStyle: "Cortes dinámicos y transiciones, subtítulos animados, color grading base, música y diseño sonoro (SFX).",
      tiers: {
        particulares: {
          id: "particulares",
          name: "Particulares",
          upsellTitle: "EXTRAS PREMIUM",
          upsellNotice: "Animaciones con Inteligencia Artificial, color grading cinematográfico avanzado y edición multiformato: Desde +$15 USD.",
          cards: [
            {
              nombre: "Video Suelto (Reel / TikTok / Short)",
              precio: "$30 USD",
              periodo: "por video",
              idealPara: "Ideal para creadores o proyectos puntuales con entrega ágil.",
              destacado: false,
              items: [
                "Formato vertical 9:16 optimizado",
                "Cortes dinámicos y retención en primeros 3s",
                "Subtítulos dinámicos estilizados",
                "Color grading base + música y SFX",
                "Entrega en 48hs hábiles (2 revisiones)"
              ]
            },
            {
              nombre: "Pack 15 Videos Mensuales",
              precio: "$360 USD",
              periodo: "$24 USD c/u",
              idealPara: "Para sostener presencia constante y profesional todo el mes.",
              destacado: true,
              badge: "AHORRO DEL 20%",
              items: [
                "15 Reels / TikToks editados al mes",
                "Planificación y edición por lote",
                "Plantilla visual con tu identidad de marca",
                "Sound design y transiciones fluidas",
                "Canal directo y prioritario de WhatsApp"
              ]
            },
            {
              nombre: "YouTube / Vlog",
              precio: "$10 USD",
              periodo: "por minuto editado",
              idealPara: "Videos horizontales de formato medio/largo.",
              destacado: false,
              items: [
                "Montaje con ritmo narrativo atrapante",
                "Música incidental y nivelación de audio",
                "Gráficos en pantalla y placas explicativas",
                "Exportación en 4K / 1080p optimizada"
              ]
            },
            {
              nombre: "Hora de Trabajo",
              precio: "$15 USD",
              periodo: "por hora",
              idealPara: "Ediciones a medida, revisiones extras o tareas técnicas.",
              destacado: false,
              items: [
                "Correcciones específicas o variantes",
                "Asistencia en montaje o exportaciones",
                "Cálculo transparente de horas dedicadas"
              ]
            }
          ]
        },
        pymes: {
          id: "pymes",
          name: "PyMEs",
          upsellTitle: "EXTRAS PREMIUM",
          upsellNotice: "Animaciones con Inteligencia Artificial, color grading cinematográfico avanzado y edición multiformato: Desde +$30 USD.",
          cards: [
            {
              nombre: "Video Suelto (Ads / Comercial)",
              precio: "$60 USD",
              periodo: "por video",
              idealPara: "Piezas orientadas a conversión, lanzamientos o promociones.",
              destacado: false,
              items: [
                "Estructura comercial (Hook + Offer + CTA)",
                "Motion graphics sutiles para features",
                "Color grading comercial atractivo",
                "Adaptación a pauta en Meta / TikTok Ads"
              ]
            },
            {
              nombre: "Pack 15 Videos Mensuales",
              precio: "$720 USD",
              periodo: "$48 USD c/u",
              idealPara: "Plan de contenidos continuo para empresas en crecimiento.",
              destacado: true,
              badge: "RECOMENDADO",
              items: [
                "15 videos mensuales para Reels, Shorts y TikTok",
                "Estrategia de retención y hooks comerciales",
                "Subtítulos corporativos con branding",
                "Entrega calendarizada y soporte dedicado"
              ]
            },
            {
              nombre: "YouTube / Vlog Corporativo",
              precio: "$20 USD",
              periodo: "por minuto editado",
              idealPara: "Contenido institucional, podcasts o capacitaciones.",
              destacado: false,
              items: [
                "Montaje multicámara y sincronización",
                "Limpieza de ruido y ecualización de audio",
                "Placas institucionales y lower thirds de marca",
                "Capítulos y timestamps listos para publicar"
              ]
            },
            {
              nombre: "Hora de Trabajo",
              precio: "$30 USD",
              periodo: "por hora",
              idealPara: "Soporte de edición a demanda para tu equipo de marketing.",
              destacado: false,
              items: [
                "Adaptación de piezas existentes para campañas",
                "Cortes de webinars o lives en micro-contenidos",
                "Disponibilidad horaria acordada"
              ]
            }
          ]
        },
        empresas: {
          id: "empresas",
          name: "Empresas",
          upsellTitle: "EXTRAS PREMIUM",
          upsellNotice: "Animaciones con Inteligencia Artificial, color grading cinematográfico avanzado y edición multiformato: Desde +$45 USD.",
          cards: [
            {
              nombre: "Video Suelto (High-End Campañas)",
              precio: "$90 USD",
              periodo: "por video",
              idealPara: "Máxima exigencia estética para campañas y posicionamiento.",
              destacado: false,
              items: [
                "Edición minuciosa frame por frame",
                "Sound design cinematográfico y mezcla estéreo",
                "Color grading avanzado de alta gama",
                "Master multiformato (9:16, 1:1, 16:9)"
              ]
            },
            {
              nombre: "Pack 15 Videos Mensuales",
              precio: "$1.080 USD",
              periodo: "$72 USD c/u",
              idealPara: "Producción y edición integral de escala corporativa.",
              destacado: true,
              badge: "FULL SUITE",
              items: [
                "15 piezas de alto impacto mensual",
                "Dirección de montaje y narrativa corporativa",
                "Plantillas de diseño exclusivas para la marca",
                "Atención prioritaria y entregas ultra-rápidas"
              ]
            },
            {
              nombre: "YouTube / Serie Institucional",
              precio: "$30 USD",
              periodo: "por minuto editado",
              idealPara: "Documentales, entrevistas ejecutivas y series web.",
              destacado: false,
              items: [
                "Tratamiento cinematográfico completo",
                "Edición de sonido con licencias comerciales",
                "Animación de títulos y gráficos 2D avanzados",
                "Control de calidad exhaustivo de imagen y audio"
              ]
            },
            {
              nombre: "Hora de Trabajo",
              precio: "$45 USD",
              periodo: "por hora",
              idealPara: "Consultoría técnica, dirección de postproducción o workflow.",
              destacado: false,
              items: [
                "Asesoría técnica a equipos internos",
                "Supervisión de postproducción y workflows",
                "Tratamiento urgente de piezas críticas"
              ]
            }
          ]
        }
      }
    },

    contenido: {
      id: "contenido",
      title: "Creadora de Contenido",
      hasTiers: true,
      baseStyleTitle: "ALCANCE BASE",
      baseStyle: "Investigación profunda de nicho, definición de pilares de contenido, redacción de guiones con hooks de 3 seg y selección estratégica de formatos.",
      tiers: {
        particulares: {
          id: "particulares",
          name: "Particulares",
          upsellTitle: "EXTRAS PREMIUM",
          upsellNotice: "Grabación presencial en set, dirección de escena y co-creación: Desde +$20 USD.",
          cards: [
            {
              nombre: "Guion Individual (Reel o Carrusel)",
              precio: "$15 USD",
              periodo: "por guion",
              idealPara: "Ideal para destrabar una idea clave o lanzar un mensaje puntual.",
              destacado: false,
              items: [
                "Hook inicial probado para frenar el scroll (primeros 3s)",
                "Estructura narrativa dinámica y concisa",
                "Llamado a la acción (CTA) enfocado en conversión",
                "Indicaciones visuales y de texto en pantalla"
              ]
            },
            {
              nombre: "Pack Mensual Estratégico",
              precio: "$100 USD",
              periodo: "10 Guiones + Pilares",
              idealPara: "Para construir una estrategia mensual sólida y publicar con propósito.",
              destacado: true,
              badge: "MÁS ESTRATÉGICO",
              items: [
                "10 guiones estructurados listos para grabar",
                "Definición de 3 a 5 pilares temáticos de tu perfil",
                "Calendario de publicación sugerido",
                "Estrategia de formatos (cara a cámara, carruseles)",
                "Revisión y feedback para perfeccionar tu tono"
              ]
            },
            {
              nombre: "Consultoría / Estrategia de Perfil",
              precio: "$20 USD",
              periodo: "por hora",
              idealPara: "Auditoría integral 1 a 1 de tu presencia digital.",
              destacado: false,
              items: [
                "Auditoría profunda de feed, bio y ganchos",
                "Detección de puntos de fuga y oportunidades de contenido",
                "Optimización de embudo de perfil hacia ventas o leads",
                "Plan de acción concreto para los siguientes 30 días"
              ]
            }
          ]
        },
        pymes: {
          id: "pymes",
          name: "PyMEs",
          upsellTitle: "EXTRAS PREMIUM",
          upsellNotice: "Coordinación de creadores externos y supervisión de guiones UGC: Desde +$40 USD.",
          cards: [
            {
              nombre: "Guion Comercial / Lanzamiento",
              precio: "$30 USD",
              periodo: "por guion",
              idealPara: "Anuncios pagados, lanzamientos de producto y campañas comerciales.",
              destacado: false,
              items: [
                "Estructura orientada a ventas y conversión",
                "Múltiples variaciones de hook de apertura",
                "Storytelling comercial y manejo de objeciones",
                "Instrucciones de tomas de apoyo (B-roll)"
              ]
            },
            {
              nombre: "Plan de Contenidos Mensual",
              precio: "$200 USD",
              periodo: "20 Guiones + Calendario",
              idealPara: "Presencia continua y consistente orientada al crecimiento de marca.",
              destacado: true,
              badge: "RECOMENDADO",
              items: [
                "20 guiones completos adaptados a tu audiencia",
                "Estrategia mensual con calendario editorial detallado",
                "Pilares temáticos de marca y diferenciación",
                "Alineación con lanzamientos y fechas comerciales"
              ]
            },
            {
              nombre: "Asesoría Estratégica & Optimización",
              precio: "$40 USD",
              periodo: "por hora",
              idealPara: "Acompañamiento a equipos de marketing internos.",
              destacado: false,
              items: [
                "Revisión analítica de métricas de contenido",
                "Optimización del embudo orgánico hacia conversión",
                "Guía de tendencias de nicho y formatos efectivos"
              ]
            }
          ]
        },
        empresas: {
          id: "empresas",
          name: "Empresas",
          upsellTitle: "EXTRAS PREMIUM",
          upsellNotice: "Dirección creativa de campañas 360° y curaduría de embajadores de marca: A medida.",
          cards: [
            {
              nombre: "Guiones de Alta Conversión / Campañas",
              precio: "$60 USD",
              periodo: "por guion",
              idealPara: "Piezas institucionales de alto impacto y campañas a gran escala.",
              destacado: false,
              items: [
                "Investigación competitiva de mercado y benchmarks",
                "Desarrollo narrativo con tono de voz corporativo",
                "Guion técnico audiovisual (sonido, planos, ritmo)",
                "3 iteraciones de hooks para testeo A/B"
              ]
            },
            {
              nombre: "Estrategia Integral Multicanal",
              precio: "$400 USD",
              periodo: "30 Guiones + Dirección Creativa",
              idealPara: "Despliegue integral de contenido para marcas consolidadas.",
              destacado: true,
              badge: "FULL SUITE",
              items: [
                "30 guiones de contenido orgánico y paid media",
                "Estrategia multicanal (Instagram, TikTok, YouTube Shorts)",
                "Dirección creativa y supervisión editorial completa",
                "Reunión quincenal de seguimiento y optimización"
              ]
            },
            {
              nombre: "Consultoría Creativa & Dirección de Marca",
              precio: "$75 USD",
              periodo: "por hora",
              idealPara: "Sesiones de ideación estratégica para directores y líderes.",
              destacado: false,
              items: [
                "Consultoría con directores de marketing y producto",
                "Definición de posicionamiento digital y narrativa",
                "Protocolos de comunicación para voceros de marca"
              ]
            }
          ]
        }
      }
    },

    moda: {
      id: "moda",
      title: "Producción de Moda",
      hasTiers: true,
      baseStyleTitle: "ALCANCE BASE",
      baseStyle: "Investigación conceptual, curaduría de moodboard, fitting y prueba de vestuario, y dirección estética en set.",
      tiers: {
        particulares: {
          id: "particulares",
          name: "Particulares",
          upsellTitle: "EXTRAS PREMIUM",
          upsellNotice: "Búsqueda y gestión de piezas exclusivas de archivo: Desde +$50 USD.",
          cards: [
            {
              nombre: "Asesoría & Armado de Look",
              precio: "$100 USD",
              periodo: "Fitting individual",
              idealPara: "Para eventos, presentaciones, sesiones personales o shows.",
              destacado: false,
              items: [
                "Curaduría estética personalizada según tu estilo y evento",
                "Selección y combinación de prendas y accesorios de diseñador",
                "Prueba de vestuario (Fitting) previa a la fecha",
                "Guía de calzado, peinado y complementos armónicos"
              ]
            },
            {
              nombre: "Dirección de Estilismo en Set",
              precio: "$200 USD",
              periodo: "Jornada hasta 6hs",
              idealPara: "Shootings de fotos, videoclips o lookbooks de marcas.",
              destacado: false,
              items: [
                "Acompañamiento y supervisión de imagen en set",
                "Cuidado de calce, caída y prolijidad en cada toma",
                "Diálogo con fotógrafo/videógrafo para potenciar ángulos",
                "Coordinación fluida con peinador y maquillador"
              ]
            },
            {
              nombre: "Producción de Moda Integral",
              precio: "$350 USD",
              periodo: "Campaña chica",
              idealPara: "Lanzamientos de cápsula, campañas de showroom o marcas emergentes.",
              destacado: true,
              badge: "SERVICIO COMPLETO",
              items: [
                "Planificación conceptual y curaduría de moodboard narrativo",
                "Búsqueda y gestión de prendas con showrooms y diseñadores",
                "Scouting de locaciones (estudio o exteriores) y permisos",
                "Casting de modelos y armado de equipo técnico completo",
                "Dirección de producción y ejecución integral durante el shooting"
              ]
            }
          ]
        },
        pymes: {
          id: "pymes",
          name: "PyMEs",
          upsellTitle: "EXTRAS PREMIUM",
          upsellNotice: "Contratación de fotógrafos y modelos profesionales con gestión completa: A coordinar.",
          cards: [
            {
              nombre: "Lookbook / Catálogo Cápsula",
              precio: "$200 USD",
              periodo: "hasta 5 looks",
              idealPara: "Showrooms y marcas que lanzan colecciones de temporada.",
              destacado: false,
              items: [
                "Curaduría y combinación de hasta 5 conjuntos completos",
                "Moodboard visual alineado al público objetivo de la marca",
                "Fitting previo con modelo y checklist de detalles",
                "Supervisión estética durante las fotos de catálogo"
              ]
            },
            {
              nombre: "Dirección de Estilismo para Campaña",
              precio: "$350 USD",
              periodo: "Jornada completa (hasta 8hs)",
              idealPara: "Campañas comerciales de moda, calzado o accesorios.",
              destacado: false,
              items: [
                "Dirección completa del styling durante toda la jornada",
                "Asistencia continua en set para ajustes de prendas y tomas",
                "Gestión de accesorios, detalles y cambios rápidos de look",
                "Coordinación con el equipo de foto y video"
              ]
            },
            {
              nombre: "Producción Integral Showroom / Lookbook",
              precio: "$550 USD",
              periodo: "Campaña comercial",
              idealPara: "Producciones comerciales que buscan delegar toda la gestión.",
              destacado: true,
              badge: "RECOMENDADO",
              items: [
                "Dirección conceptual y bajada de moodboard de temporada",
                "Scouting de locaciones ideales y coordinación de permisos",
                "Convocatoria de modelos, maquillaje y peinado",
                "Cronograma del shooting y dirección en set"
              ]
            }
          ]
        },
        empresas: {
          id: "empresas",
          name: "Empresas",
          upsellTitle: "EXTRAS PREMIUM",
          upsellNotice: "Producción internacional o viajes fuera de locación base: A convenir.",
          cards: [
            {
              nombre: "Dirección Creativa & Estilismo Editorial",
              precio: "$400 USD",
              periodo: "Por campaña",
              idealPara: "Editoriales para revistas, portadas y marcas consolidadas.",
              destacado: false,
              items: [
                "Desarrollo de concepto editorial de vanguardia",
                "Gestión de vestuario exclusivo de alta costura o diseñadores",
                "Dirección de arte junto a realizadores audiovisuales",
                "Supervisión minuciosa de cada plano y composición"
              ]
            },
            {
              nombre: "Producción de Moda Integral High-End",
              precio: "$600 USD",
              periodo: "Jornada completa + equipo",
              idealPara: "Campañas de gran escala con múltiples modelos y locaciones.",
              destacado: false,
              items: [
                "Planificación integral y logística de producción completa",
                "Armado de equipo técnico de primer nivel (foto, video, luces)",
                "Casting profesional y gestión de acuerdos de imagen",
                "Supervisión ejecutiva de presupuesto y cronograma"
              ]
            },
            {
              nombre: "Campaña Global / Desfile / Fashion Film",
              precio: "$950 USD",
              periodo: "Producción integral",
              idealPara: "Grandes lanzamientos de marca, pasarelas y producciones cinematográficas.",
              destacado: true,
              badge: "FULL PRODUCTION",
              items: [
                "Dirección creativa, estilismo y producción ejecutiva 360°",
                "Coordinación de desfiles en vivo o rodajes de fashion films",
                "Gestión completa de backstages, tiempos y fittings masivos",
                "Entrega llave en mano con estándares internacionales"
              ]
            }
          ]
        }
      }
    },

    tarot: {
      id: "tarot",
      title: "Tarot",
      hasTiers: false,
      currencyNoticeTitle: "TARIFAS LOCALES (ARS)",
      currencyNotice: "Valores expresados en Pesos Argentinos (ARS). Medios de pago: Transferencia bancaria / Mercado Pago.",
      baseScopeTitle: "ENFOQUE ARQUETÍPICO",
      baseScope: "Tarot psicológico y arquetípico como herramienta de introspección, desbloqueo de decisiones y orientación personal o creativa.",
      cards: [
        {
          nombre: "Pregunta Puntual",
          precio: "$10.000 ARS",
          periodo: "1 consulta específica",
          idealPara: "Para una duda concreta que necesita claridad inmediata.",
          destacado: false,
          items: [
            "Tirada focalizada sobre un tema o decisión precisa",
            "Respuesta detallada con análisis simbólico y práctico",
            "Audio explicativo personalizado + foto de las cartas",
            "Entrega en el día o dentro de las 24hs"
          ]
        },
        {
          nombre: "Pack 3 Preguntas",
          precio: "$25.000 ARS",
          periodo: "3 consultas interconectadas",
          idealPara: "Para explorar una situación con múltiples aristas o caminos.",
          destacado: true,
          badge: "POPULAR",
          items: [
            "3 preguntas profundas o conectadas entre sí",
            "Mapeo de causa, momento actual y proyección",
            "Consejo práctico para destrabar el proceso",
            "Registro fotográfico completo y audios de devolución"
          ]
        },
        {
          nombre: "Lectura General Escrita",
          precio: "$30.000 ARS",
          periodo: "Formato Book + Audios",
          idealPara: "Un documento detallado y reflexivo para releer en el tiempo.",
          destacado: false,
          items: [
            "Informe en PDF (Book) con diseño cuidado y curado",
            "Registro fotográfico de cada tirada y posición arquetípica",
            "Audios complementarios con matices y recomendaciones",
            "Análisis de áreas: energía general, vínculos y bloqueo principal"
          ]
        },
        {
          nombre: "Lectura en Vivo Online (30 min)",
          precio: "$35.000 ARS",
          periodo: "30 minutos en vivo",
          idealPara: "Intercambio en tiempo real por videollamada para profundizar.",
          destacado: false,
          items: [
            "Sesión individual y personalizada vía Google Meet o WhatsApp",
            "Tiradas interactivas y diálogo fluido según surja",
            "Espacio para repreguntar y clarificar en el momento",
            "Foto final de la tirada para registro personal"
          ]
        },
        {
          nombre: "Lectura en Vivo Integral (1 hora)",
          precio: "$45.000 ARS",
          periodo: "60 minutos en vivo",
          idealPara: "Inmersión profunda en patrones psicológicos y mapa de vida.",
          destacado: true,
          badge: "EXPERIENCIA TOTAL",
          items: [
            "1 hora completa de consulta personalizada en tiempo real",
            "Mapeo arquetípico profundo: mente, sombra, potencial y decisiones",
            "Tiradas evolutivas y estratégicas para proyectos o procesos vitales",
            "Orientación práctica concreta para accionar con seguridad y calma"
          ]
        }
      ]
    }
  },

  en: {
    video: {
      id: "video",
      title: "Video Editing",
      hasTiers: true,
      baseStyleTitle: "BASE STYLE",
      baseStyle: "Dynamic cuts, fluid transitions, animated subtitles, base color grading, background music & sound design (SFX).",
      tiers: {
        particulares: {
          id: "particulares",
          name: "Individuals",
          upsellTitle: "PREMIUM ADD-ONS",
          upsellNotice: "AI animations, advanced cinematic color grading, and multi-format adaptations: From +$15 USD.",
          cards: [
            {
              nombre: "Single Video (Reel / TikTok / Short)",
              precio: "$30 USD",
              periodo: "per video",
              idealPara: "Perfect for creators or standalone projects with fast delivery.",
              destacado: false,
              items: [
                "Optimized vertical 9:16 aspect ratio",
                "Dynamic cuts & first 3-second hook retention",
                "Styled dynamic animated subtitles",
                "Base color grading + music & SFX",
                "Delivered within 48 business hours (2 revisions)"
              ]
            },
            {
              nombre: "Monthly Pack 15 Videos",
              precio: "$360 USD",
              periodo: "$24 USD each",
              idealPara: "Sustain consistent, professional visibility all month long.",
              destacado: true,
              badge: "20% SAVINGS",
              items: [
                "15 Reels / TikToks edited per month",
                "Batch planning and efficient editing workflow",
                "Tailored visual identity template",
                "Custom sound design and fluid transitions",
                "Direct and prioritized WhatsApp channel"
              ]
            },
            {
              nombre: "YouTube / Vlog",
              precio: "$10 USD",
              periodo: "per edited minute",
              idealPara: "Horizontal medium and long-form video content.",
              destacado: false,
              items: [
                "Engaging narrative flow and pacing",
                "Incidental soundtrack and audio normalization",
                "On-screen graphics and lower thirds",
                "Exported in 4K / 1080p high bitrate"
              ]
            },
            {
              nombre: "Hourly Rate",
              precio: "$15 USD",
              periodo: "per hour",
              idealPara: "Custom edits, additional revisions, or technical workflow tasks.",
              destacado: false,
              items: [
                "Targeted corrections or format variants",
                "Assembly assistance and rendering exports",
                "Transparent tracking of invested time"
              ]
            }
          ]
        },
        pymes: {
          id: "pymes",
          name: "SMBs",
          upsellTitle: "PREMIUM ADD-ONS",
          upsellNotice: "AI animations, advanced cinematic color grading, and multi-format adaptations: From +$30 USD.",
          cards: [
            {
              nombre: "Single Video (Ads / Commercial)",
              precio: "$60 USD",
              periodo: "per video",
              idealPara: "Conversion-driven pieces, product launches, and seasonal promos.",
              destacado: false,
              items: [
                "Sales framework (Hook + Offer + CTA)",
                "Subtle motion graphics highlighting product features",
                "Attractive commercial color grading",
                "Ready for Meta Ads and TikTok Ads deployment"
              ]
            },
            {
              nombre: "Monthly Pack 15 Videos",
              precio: "$720 USD",
              periodo: "$48 USD each",
              idealPara: "Continuous content strategy for growing businesses.",
              destacado: true,
              badge: "RECOMMENDED",
              items: [
                "15 monthly videos for Reels, Shorts, and TikTok",
                "Audience retention strategy and sales hooks",
                "Branded corporate typography & subtitles",
                "Scheduled batch deliveries with priority support"
              ]
            },
            {
              nombre: "YouTube / Corporate Vlog",
              precio: "$20 USD",
              periodo: "per edited minute",
              idealPara: "Institutional content, podcasts, or training masterclasses.",
              destacado: false,
              items: [
                "Multi-camera assembly and sync",
                "Noise reduction and studio audio EQ",
                "Branded title cards and animated lower thirds",
                "Timestamps and chapter markers ready to publish"
              ]
            },
            {
              nombre: "Hourly Rate",
              precio: "$30 USD",
              periodo: "per hour",
              idealPara: "On-demand post-production support for your marketing team.",
              destacado: false,
              items: [
                "Repurposing existing brand assets for campaigns",
                "Clipping webinars and live streams into shorts",
                "Guaranteed reservation of production time"
              ]
            }
          ]
        },
        empresas: {
          id: "empresas",
          name: "Enterprises",
          upsellTitle: "PREMIUM ADD-ONS",
          upsellNotice: "AI animations, advanced cinematic color grading, and multi-format adaptations: From +$45 USD.",
          cards: [
            {
              nombre: "Single Video (High-End Campaigns)",
              precio: "$90 USD",
              periodo: "per video",
              idealPara: "Uncompromising aesthetic quality for brand campaigns.",
              destacado: false,
              items: [
                "Meticulous frame-by-frame assembly",
                "Cinematic foley, mixing, and stereo mastering",
                "High-end custom color grading",
                "Multi-format master deliverables (9:16, 1:1, 16:9)"
              ]
            },
            {
              nombre: "Monthly Pack 15 Videos",
              precio: "$1,080 USD",
              periodo: "$72 USD each",
              idealPara: "Comprehensive enterprise-scale video production.",
              destacado: true,
              badge: "FULL SUITE",
              items: [
                "15 high-impact visual pieces every month",
                "Creative editorial direction and brand narrative",
                "Custom bespoke motion graphic design systems",
                "Dedicated executive channel and rush turnarounds"
              ]
            },
            {
              nombre: "YouTube / Institutional Series",
              precio: "$30 USD",
              periodo: "per edited minute",
              idealPara: "Documentary shorts, executive keynotes, and docuseries.",
              destacado: false,
              items: [
                "Complete cinematic narrative treatment",
                "Licensed commercial sound track licensing",
                "Advanced 2D kinetic typography and motion",
                "Full QA color and audio broadcast delivery standards"
              ]
            },
            {
              nombre: "Hourly Rate",
              precio: "$45 USD",
              periodo: "per hour",
              idealPara: "Technical consulting, workflow architecture, or direction.",
              destacado: false,
              items: [
                "Consulting for internal media teams",
                "Post-production workflow optimization",
                "Urgent turnaround priority for critical releases"
              ]
            }
          ]
        }
      }
    },

    contenido: {
      id: "contenido",
      title: "Content Creator",
      hasTiers: true,
      baseStyleTitle: "BASE SCOPE",
      baseStyle: "In-depth niche research, core content pillars, scriptwriting with 3-second retention hooks, and multi-format strategy.",
      tiers: {
        particulares: {
          id: "particulares",
          name: "Individuals",
          upsellTitle: "PREMIUM ADD-ONS",
          upsellNotice: "On-set live filming, camera direction, and co-creation: From +$20 USD.",
          cards: [
            {
              nombre: "Single Script (Reel or Carousel)",
              precio: "$15 USD",
              periodo: "per script",
              idealPara: "Unlock a specific content idea or deliver a key message.",
              destacado: false,
              items: [
                "Tested opening hook to stop infinite scrolling (first 3s)",
                "Crisp, dynamic, concise narrative structure",
                "Conversion-focused call to action (CTA)",
                "Visual on-screen cues and audio instructions"
              ]
            },
            {
              nombre: "Strategic Monthly Pack",
              precio: "$100 USD",
              periodo: "10 Scripts + Content Pillars",
              idealPara: "Build a consistent content cadence and publish with purpose.",
              destacado: true,
              badge: "MOST STRATEGIC",
              items: [
                "10 full production-ready scripts ready to record",
                "3 to 5 core brand pillar definitions",
                "Suggested editorial publishing calendar",
                "Multi-format balance (talking head, b-roll, carousels)",
                "Iterative feedback to dial in your unique voice"
              ]
            },
            {
              nombre: "Profile Strategy / Consulting",
              precio: "$20 USD",
              periodo: "per hour",
              idealPara: "Comprehensive 1-on-1 digital presence audit.",
              destacado: false,
              items: [
                "In-depth audit of feed, bio, and visual hooks",
                "Identification of traffic drop-offs and growth opportunities",
                "Profile funnel optimization toward leads and sales",
                "Actionable 30-day tactical roadmap"
              ]
            }
          ]
        },
        pymes: {
          id: "pymes",
          name: "SMBs",
          upsellTitle: "PREMIUM ADD-ONS",
          upsellNotice: "Creator coordination and UGC talent supervision: From +$40 USD.",
          cards: [
            {
              nombre: "Commercial / Launch Script",
              precio: "$30 USD",
              periodo: "per script",
              idealPara: "Paid acquisition ads, feature reveals, and campaign hooks.",
              destacado: false,
              items: [
                "Sales psychology structure (Hook + Problem + Offer + CTA)",
                "Multiple tested opening variants for A/B testing",
                "Commercial storytelling handling common objections",
                "Precise visual B-roll framing cues"
              ]
            },
            {
              nombre: "Monthly Content Plan",
              precio: "$200 USD",
              periodo: "20 Scripts + Content Calendar",
              idealPara: "Steady organic growth and brand authority across social.",
              destacado: true,
              badge: "RECOMMENDED",
              items: [
                "20 tailored scripts formulated for your core customer",
                "Detailed monthly editorial schedule",
                "Distinctive brand positioning pillars",
                "Aligned with business milestones and promotions"
              ]
            },
            {
              nombre: "Strategic Advisory & Funnel",
              precio: "$40 USD",
              periodo: "per hour",
              idealPara: "Direct advisory for in-house marketing teams.",
              destacado: false,
              items: [
                "Analytical content performance breakdown",
                "Conversion optimization from organic reach to sales",
                "Niche trend translation and format guidelines"
              ]
            }
          ]
        },
        empresas: {
          id: "empresas",
          name: "Enterprises",
          upsellTitle: "PREMIUM ADD-ONS",
          upsellNotice: "360° creative campaign oversight and brand ambassador curation: Custom quote.",
          cards: [
            {
              nombre: "High-Conversion Campaign Scripts",
              precio: "$60 USD",
              periodo: "per script",
              idealPara: "High-stakes brand awareness and conversion campaigns.",
              destacado: false,
              items: [
                "Comprehensive competitor analysis and audience benchmarking",
                "Scripting aligned with established corporate tone of voice",
                "Technical audiovisual storyboard cues",
                "3 creative hook iterations for paid media optimization"
              ]
            },
            {
              nombre: "Full Omnichannel Strategy",
              precio: "$400 USD",
              periodo: "30 Scripts + Creative Direction",
              idealPara: "End-to-end content production architecture for established brands.",
              destacado: true,
              badge: "FULL SUITE",
              items: [
                "30 scripts tailored for organic and paid distribution",
                "Omnichannel execution (Instagram, TikTok, YouTube Shorts)",
                "Full creative direction and editorial quality control",
                "Bi-weekly strategy and metric iteration calls"
              ]
            },
            {
              nombre: "Creative Consulting & Brand Direction",
              precio: "$75 USD",
              periodo: "per hour",
              idealPara: "Executive ideation sessions with founders and directors.",
              destacado: false,
              items: [
                "Executive consulting on brand messaging and digital positioning",
                "Narrative strategy for founders and key executives",
                "Brand guidelines for external media creators"
              ]
            }
          ]
        }
      }
    },

    moda: {
      id: "moda",
      title: "Fashion Production",
      hasTiers: true,
      baseStyleTitle: "BASE SCOPE",
      baseStyle: "Conceptual research, moodboard curation, garment fitting, and on-set aesthetic direction.",
      tiers: {
        particulares: {
          id: "particulares",
          name: "Individuals",
          upsellTitle: "PREMIUM ADD-ONS",
          upsellNotice: "Sourcing rare archival designer garments: From +$50 USD.",
          cards: [
            {
              nombre: "Look Styling & Consultation",
              precio: "$100 USD",
              periodo: "Individual fitting",
              idealPara: "For special events, red carpets, private shoots, or performances.",
              destacado: false,
              items: [
                "Personalized styling aligned with your aesthetic and occasion",
                "Garment and designer accessory curation",
                "Pre-event private garment fitting",
                "Footwear, jewelry, hair, and makeup harmonization"
              ]
            },
            {
              nombre: "On-Set Styling Direction",
              precio: "$200 USD",
              periodo: "Half-day session (up to 6h)",
              idealPara: "Photo shoots, lookbooks, or music video sets.",
              destacado: false,
              items: [
                "Full image oversight and silhouette adjustments on set",
                "Detailed garment drape and tailoring checks per take",
                "Collaboration with photographer/director on lighting angles",
                "Continuous synergy with hair and makeup artists"
              ]
            },
            {
              nombre: "Full Fashion Production",
              precio: "$350 USD",
              periodo: "Small campaign",
              idealPara: "Capsule launches, showroom lookbooks, or emerging brands.",
              destacado: true,
              badge: "FULL SERVICE",
              items: [
                "Conceptual roadmap and narrative moodboard curation",
                "Wardrobe sourcing and designer showroom liaison",
                "Studio/outdoor location scouting and permit management",
                "Model casting and full technical crew assembly",
                "Complete on-set production management and execution"
              ]
            }
          ]
        },
        pymes: {
          id: "pymes",
          name: "SMBs",
          upsellTitle: "PREMIUM ADD-ONS",
          upsellNotice: "Professional photographer and model casting management: Coordinated on request.",
          cards: [
            {
              nombre: "Capsule Lookbook / Catalog",
              precio: "$200 USD",
              periodo: "Up to 5 looks",
              idealPara: "Showrooms and fashion labels launching seasonal collections.",
              destacado: false,
              items: [
                "Curating and assembling up to 5 complete ready-to-shoot looks",
                "Visual moodboard matching target demographics",
                "Pre-shoot fitting with talent and garment checklist",
                "On-set aesthetic supervision for catalog imagery"
              ]
            },
            {
              nombre: "Commercial Campaign Styling",
              precio: "$350 USD",
              periodo: "Full day (up to 8h)",
              idealPara: "Commercial shoots for apparel, footwear, or accessories.",
              destacado: false,
              items: [
                "Comprehensive styling direction throughout the entire day",
                "Real-time garment adjustments between takes",
                "Accessory management and swift look transitions",
                "Active coordination with lighting and camera crew"
              ]
            },
            {
              nombre: "Full Showroom / Commercial Production",
              precio: "$550 USD",
              periodo: "Commercial shoot",
              idealPara: "Brands seeking end-to-end delegation of production logistics.",
              destacado: true,
              badge: "RECOMMENDED",
              items: [
                "Seasonal moodboard translation and creative guidelines",
                "Ideal location scouting and permit approvals",
                "Model casting, hair, and makeup coordination",
                "Detailed call sheet scheduling and on-set execution"
              ]
            }
          ]
        },
        empresas: {
          id: "empresas",
          name: "Enterprises",
          upsellTitle: "PREMIUM ADD-ONS",
          upsellNotice: "International travel or multi-city productions: Quoted upon request.",
          cards: [
            {
              nombre: "Creative Direction & Editorial Styling",
              precio: "$400 USD",
              periodo: "Per editorial",
              idealPara: "Magazine covers, high-fashion editorials, and luxury houses.",
              destacado: false,
              items: [
                "Cutting-edge avant-garde editorial concept creation",
                "Sourcing exclusive haute couture and designer archives",
                "Collaborative art direction with visual directors",
                "Rigorous composition and silhouette quality control"
              ]
            },
            {
              nombre: "High-End Fashion Production",
              precio: "$600 USD",
              periodo: "Full day + crew management",
              idealPara: "Large-scale campaigns involving multiple models and locations.",
              destacado: false,
              items: [
                "Comprehensive production design and multi-tier logistics",
                "Top-tier technical crew management (photo, video, lighting)",
                "Professional agency casting and image licensing oversight",
                "Executive timeline and budgetary supervision"
              ]
            },
            {
              nombre: "Global Brand Campaign / Runway Film",
              precio: "$950 USD",
              periodo: "Full production",
              idealPara: "Major brand launches, fashion films, and runway shows.",
              destacado: true,
              badge: "FULL PRODUCTION",
              items: [
                "360° creative direction, styling, and executive production",
                "Runway staging or cinematic fashion film management",
                "Backstage coordination, quick-change fittings, and timing",
                "Turnkey delivery meeting international broadcast standards"
              ]
            }
          ]
        }
      }
    },

    tarot: {
      id: "tarot",
      title: "Tarot",
      hasTiers: false,
      currencyNoticeTitle: "CURRENCY & PAYMENT",
      currencyNotice: "Rates quoted in US Dollars (USD). International payment methods: PayPal / Wise / Stripe.",
      baseScopeTitle: "ARCHETYPAL APPROACH",
      baseScope: "Psychological and archetypal tarot as an introspective tool for decision unlocking and personal or creative orientation.",
      cards: [
        {
          nombre: "Single Specific Question",
          precio: "$7 USD",
          periodo: "1 focused question",
          idealPara: "For a concrete question requiring immediate clarity.",
          destacado: false,
          items: [
            "Focused spread on a specific topic or decision",
            "Detailed response with symbolic and practical insights",
            "Personalized voice note + high-res photo of the spread",
            "Delivered same day or within 24 hours"
          ]
        },
        {
          nombre: "3-Question Exploration Pack",
          precio: "$17 USD",
          periodo: "3 interconnected questions",
          idealPara: "To examine a complex situation from multiple angles.",
          destacado: true,
          badge: "POPULAR",
          items: [
            "3 connected or deep inquiry questions",
            "Mapping of root causes, current energy, and forward projection",
            "Practical guidance to unblock stagnation",
            "Full photo record and comprehensive audio feedback"
          ]
        },
        {
          nombre: "Written In-Depth Reading",
          precio: "$20 USD",
          periodo: "Curated PDF Book + Audios",
          idealPara: "A reflective, lasting document to revisit over time.",
          destacado: false,
          items: [
            "Elegantly designed PDF report (Reading Book)",
            "Photographic documentation of every card and archetypal position",
            "Companion voice memos with nuanced interpretations",
            "In-depth analysis: overall energy, relationships, and key blocks"
          ]
        },
        {
          nombre: "Live Online Session (30 min)",
          precio: "$25 USD",
          periodo: "30-minute live call",
          idealPara: "Real-time exchange via video call to dive deeper.",
          destacado: false,
          items: [
            "Private 1-on-1 session via Google Meet or WhatsApp",
            "Interactive spreads and fluid dialogue as questions arise",
            "Opportunity for live follow-up questions and clarifications",
            "Summary photo of the closing spread for your records"
          ]
        },
        {
          nombre: "Full Live Immersion (1 hour)",
          precio: "$30 USD",
          periodo: "60-minute in-depth session",
          idealPara: "Deep psychological exploration of life patterns and goals.",
          destacado: true,
          badge: "TOTAL EXPERIENCE",
          items: [
            "Full 60 minutes of real-time personalized consultation",
            "Comprehensive archetypal mapping: mind, shadow, potential, and decisions",
            "Evolutionary spreads for creative projects or personal transitions",
            "Actionable insights to move forward with clarity and calm"
          ]
        }
      ]
    }
  },

  fr: {
    video: {
      id: "video",
      title: "Montage Vidéo",
      hasTiers: true,
      baseStyleTitle: "STYLE DE BASE",
      baseStyle: "Découpage dynamique, transitions soignées, sous-titres animés, étalonnage de base, musique et design sonore (SFX).",
      tiers: {
        particulares: {
          id: "particulares",
          name: "Particuliers",
          upsellTitle: "OPTIONS PREMIUM",
          upsellNotice: "Animations IA, étalonnage cinématographique et déclinaisons multi-formats : À partir de +14 € EUR.",
          cards: [
            {
              nombre: "Vidéo à l'unité (Reel / TikTok / Short)",
              precio: "28 € EUR",
              periodo: "par vidéo",
              idealPara: "Idéal pour créateurs ou projets ponctuels avec livraison rapide.",
              destacado: false,
              items: [
                "Format vertical 9:16 optimisé pour mobile",
                "Découpage dynamique et rétention sur les 3 premières secondes",
                "Sous-titres dynamiques stylisés",
                "Étalonnage de base + musique et effets sonores",
                "Livraison en 48h ouvrées (2 séries de retours)"
              ]
            },
            {
              nombre: "Pack 15 Vidéos Mensuel",
              precio: "330 € EUR",
              periodo: "22 € EUR / vidéo",
              idealPara: "Maintenir une présence régulière et professionnelle tout le mois.",
              destacado: true,
              badge: "ÉCONOMIE DE 20%",
              items: [
                "15 Reels / TikToks montés par mois",
                "Planification et montage par lots optimisés",
                "Charte visuelle adaptée à votre univers de marque",
                "Sound design soigné et transitions fluides",
                "Canal WhatsApp direct et prioritaire"
              ]
            },
            {
              nombre: "YouTube / Vlog",
              precio: "10 € EUR",
              periodo: "par minute montée",
              idealPara: "Vidéos horizontales de format moyen ou long.",
              destacado: false,
              items: [
                "Montage avec sens du rythme narratif",
                "Musique d'ambiance et équilibrage précis de l'audio",
                "Éléments graphiques et bandeaux explicatifs",
                "Export en 4K / 1080p haute fidélité"
              ]
            },
            {
              nombre: "Tarif Horaire",
              precio: "14 € EUR",
              periodo: "par heure",
              idealPara: "Montages sur-mesure, ajustements ou interventions techniques.",
              destacado: false,
              items: [
                "Corrections spécifiques et déclinaisons",
                "Assistance à la finalisation et exports",
                "Décompte transparent des heures allouées"
              ]
            }
          ]
        },
        pymes: {
          id: "pymes",
          name: "PME",
          upsellTitle: "OPTIONS PREMIUM",
          upsellNotice: "Animations IA, étalonnage cinématographique et déclinaisons multi-formats : À partir de +28 € EUR.",
          cards: [
            {
              nombre: "Vidéo à l'unité (Ads / Commerciale)",
              precio: "55 € EUR",
              periodo: "par vidéo",
              idealPara: "Vidéos destinées à la conversion, lancements et campagnes.",
              destacado: false,
              items: [
                "Structure commerciale percutante (Hook + Offer + CTA)",
                "Animations graphiques légères soulignant les points clés",
                "Étalonnage commercial valorisant",
                "Format adapté aux campagnes publicitaires Meta & TikTok"
              ]
            },
            {
              nombre: "Pack 15 Vidéos Mensuel",
              precio: "660 € EUR",
              periodo: "44 € EUR / vidéo",
              idealPara: "Stratégie de contenu pérenne pour entreprises en essor.",
              destacado: true,
              badge: "RECOMMANDÉ",
              items: [
                "15 vidéos mensuelles pour Reels, Shorts et TikTok",
                "Stratégie de rétention et accroches commerciales",
                "Sous-titres corporate aux couleurs de la marque",
                "Calendrier de livraison fixe et support dédié"
              ]
            },
            {
              nombre: "YouTube / Vlog Corporate",
              precio: "18 € EUR",
              periodo: "par minute montée",
              idealPara: "Contenus institutionnels, podcasts ou modules de formation.",
              destacado: false,
              items: [
                "Montage multi-caméras et synchronisation",
                "Nettoyage du bruit résiduel et égalisation vocale",
                "Bandeaux institutionnels et chartes visuelles",
                "Chapitrage et horodatage prêts pour la mise en ligne"
              ]
            },
            {
              nombre: "Tarif Horaire",
              precio: "28 € EUR",
              periodo: "par heure",
              idealPara: "Soutien créatif à la demande pour votre équipe marketing.",
              destacado: false,
              items: [
                "Déclinaison de supports existants pour de nouvelles campagnes",
                "Recoupage de webinaires ou lives en capsules courtes",
                "Réservation d'heures garantie"
              ]
            }
          ]
        },
        empresas: {
          id: "empresas",
          name: "Entreprises",
          upsellTitle: "OPTIONS PREMIUM",
          upsellNotice: "Animations IA, étalonnage cinématographique et déclinaisons multi-formats : À partir de +42 € EUR.",
          cards: [
            {
              nombre: "Vidéo à l'unité (Campagnes Haute Gamme)",
              precio: "85 € EUR",
              periodo: "par vidéo",
              idealPara: "Haute exigence esthétique pour campagnes d'envergure.",
              destacado: false,
              items: [
                "Montage minutieux au millième de seconde",
                "Sound design cinématographique et mixage stéréo",
                "Étalonnage haut de gamme sur mesure",
                "Livrables multi-formats complets (9:16, 1:1, 16:9)"
              ]
            },
            {
              nombre: "Pack 15 Vidéos Mensuel",
              precio: "990 € EUR",
              periodo: "66 € EUR / vidéo",
              idealPara: "Production et post-production globale pour grands comptes.",
              destacado: true,
              badge: "SUITE COMPLÈTE",
              items: [
                "15 créations vidéo à fort impact par mois",
                "Direction de montage et storytelling de marque",
                "Système graphique propriétaire exclusif",
                "Accès direct prioritaire et délais accélérés"
              ]
            },
            {
              nombre: "YouTube / Série Institutionnelle",
              precio: "28 € EUR",
              periodo: "par minute montée",
              idealPara: "Documentaires d'entreprise, interviews exécutives et séries web.",
              destacado: false,
              items: [
                "Traitement cinématographique d'ensemble",
                "Illustration musicale sous licence commerciale complète",
                "Animations de titres et typographies animées 2D",
                "Contrôle qualité image et audio strict aux normes broadcast"
              ]
            },
            {
              nombre: "Tarif Horaire",
              precio: "42 € EUR",
              periodo: "par heure",
              idealPara: "Conseil technique, direction de post-production ou workflow.",
              destacado: false,
              items: [
                "Accompagnement méthodologique des équipes internes",
                "Supervision technique de la chaîne de fabrication vidéo",
                "Traitement prioritaire des demandes urgentes"
              ]
            }
          ]
        }
      }
    },

    contenido: {
      id: "contenido",
      title: "Créatrice de Contenu",
      hasTiers: true,
      baseStyleTitle: "PÉRIMÈTRE DE BASE",
      baseStyle: "Étude approfondie du secteur, définition des piliers éditoriaux, rédaction de scripts avec accroches de 3 secondes et stratégie de formats.",
      tiers: {
        particulares: {
          id: "particulares",
          name: "Particuliers",
          upsellTitle: "OPTIONS PREMIUM",
          upsellNotice: "Tournage sur plateau, direction d'acteur et co-création : À partir de +18 € EUR.",
          cards: [
            {
              nombre: "Script à l'unité (Reel ou Carrousel)",
              precio: "14 € EUR",
              periodo: "par script",
              idealPara: "Idéal pour débloquer une idée clé ou transmettre un message fort.",
              destacado: false,
              items: [
                "Accroche initiale formulée pour capter l'attention en 3s",
                "Structure narrative fluide et synthétique",
                "Appel à l'action (CTA) orienté conversion",
                "Indications visuelles et textuelles à l'écran"
              ]
            },
            {
              nombre: "Pack Stratégique Mensuel",
              precio: "90 € EUR",
              periodo: "10 Scripts + Piliers",
              idealPara: "Bâtir une stratégie éditoriale cohérente et publier avec régularité.",
              destacado: true,
              badge: "LE PLUS STRATÉGIQUE",
              items: [
                "10 scripts prêts à tourner",
                "Définition de 3 à 5 thématiques majeures pour votre profil",
                "Calendrier de publication prévisionnel",
                "Équilibre des formats (face caméra, carrousels, voix off)",
                "Relectures et ajustements pour affiner votre tonalité"
              ]
            },
            {
              nombre: "Audit & Conseil Stratégique",
              precio: "18 € EUR",
              periodo: "par heure",
              idealPara: "Diagnostic complet en tête-à-tête de votre visibilité numérique.",
              destacado: false,
              items: [
                "Audit approfondi du feed, de la bio et des accroches",
                "Détection des points de friction et des opportunités",
                "Optimisation du parcours d'abonné vers la conversion",
                "Feuille de route concrète pour les 30 prochains jours"
              ]
            }
          ]
        },
        pymes: {
          id: "pymes",
          name: "PME",
          upsellTitle: "OPTIONS PREMIUM",
          upsellNotice: "Coordination de créateurs UGC et supervision de briefs : À partir de +36 € EUR.",
          cards: [
            {
              nombre: "Script Commercial / Lancement",
              precio: "28 € EUR",
              periodo: "par script",
              idealPara: "Publicités ciblées, lancements de produit et offres spéciales.",
              destacado: false,
              items: [
                "Structure orientée vers la vente et la conversion",
                "Variations d'accroches pour tests A/B",
                "Storytelling commercial répondant aux objections",
                "Feuille de route pour les plans d'illustration (B-roll)"
              ]
            },
            {
              nombre: "Plan de Contenu Mensuel",
              precio: "185 € EUR",
              periodo: "20 Scripts + Calendrier",
              idealPara: "Présence active et positionnement affirmé sur votre marché.",
              destacado: true,
              badge: "RECOMMANDÉ",
              items: [
                "20 scripts complets ciblés pour votre clientèle",
                "Calendrier de diffusion détaillé",
                "Piliers d'autorité et différenciation de marque",
                "Synchronisation avec vos temps forts commerciaux"
              ]
            },
            {
              nombre: "Conseil Stratégique & Tunnel",
              precio: "36 € EUR",
              periodo: "par heure",
              idealPara: "Accompagnement opérationnel pour vos équipes marketing.",
              destacado: false,
              items: [
                "Analyse des performances et de la rétention",
                "Optimisation du tunnel de conversion organique",
                "Veille sur les formats tendance et recommandations"
              ]
            }
          ]
        },
        empresas: {
          id: "empresas",
          name: "Entreprises",
          upsellTitle: "OPTIONS PREMIUM",
          upsellNotice: "Direction créative de campagnes 360° et sélection d'ambassadeurs : Sur devis.",
          cards: [
            {
              nombre: "Scripts Haute Conversion / Campagnes",
              precio: "55 € EUR",
              periodo: "par script",
              idealPara: "Prises de parole d'envergure et campagnes de notoriété.",
              destacado: false,
              items: [
                "Étude comparative de la concurrence et positionnement",
                "Rédaction alignée sur la tonalité institutionnelle de l'entreprise",
                "Conducteur audiovisuel détaillé (visuel, voix, son)",
                "3 déclinaisons d'accroches pour les tests publicitaires"
              ]
            },
            {
              nombre: "Stratégie Intégrale Omnicanale",
              precio: "370 € EUR",
              periodo: "30 Scripts + Direction Créative",
              idealPara: "Déploiement complet pour marques et organisations installées.",
              destacado: true,
              badge: "SUITE COMPLÈTE",
              items: [
                "30 scripts pour diffusion organique et paid media",
                "Stratégie cross-plateforme (Instagram, TikTok, YouTube Shorts)",
                "Direction artistique et contrôle qualité éditorial complet",
                "Points d'étape bimensuels d'analyse et d'optimisation"
              ]
            },
            {
              nombre: "Conseil Créatif & Image de Marque",
              precio: "70 € EUR",
              periodo: "par heure",
              idealPara: "Sessions de cadrage stratégique pour dirigeants et équipes dirigeantes.",
              destacado: false,
              items: [
                "Conseil stratégique auprès des directeurs marketing et produit",
                "Définition de la ligne éditoriale et de la posture publique",
                "Charte de communication pour les porte-paroles de l'entreprise"
              ]
            }
          ]
        }
      }
    },

    moda: {
      id: "moda",
      title: "Production de Mode",
      hasTiers: true,
      baseStyleTitle: "PÉRIMÈTRE DE BASE",
      baseStyle: "Recherche conceptuelle, élaboration de moodboards, essayages vestimentaires et direction esthétique sur le plateau.",
      tiers: {
        particulares: {
          id: "particulares",
          name: "Particuliers",
          upsellTitle: "OPTIONS PREMIUM",
          upsellNotice: "Recherche de pièces d'archives rares et créateurs : À partir de +45 € EUR.",
          cards: [
            {
              nombre: "Conseil & Création de Silhouette",
              precio: "95 € EUR",
              periodo: "Fitting individuel",
              idealPara: "Événements, soirées, séances personnelles ou apparitions publiques.",
              destacado: false,
              items: [
                "Direction de style personnalisée selon votre morphologie et l'occasion",
                "Sélection et accord de vêtements et accessoires de créateurs",
                "Séance d'essayage préparatoire en amont de la date",
                "Conseil en chaussures, mise en beauté et accessoires"
              ]
            },
            {
              nombre: "Direction de Stylisme sur Plateau",
              precio: "185 € EUR",
              periodo: "Demi-journée (jusqu'à 6h)",
              idealPara: "Shootings photos, clips musicaux ou lookbooks de marques.",
              destacado: false,
              items: [
                "Présence et vigilance continue sur le rendu des silhouettes",
                "Vérification du tombé des tissus et ajustements à chaque prise",
                "Échange constant avec l'équipe photo et vidéo",
                "Coordination avec coiffure et maquillage"
              ]
            },
            {
              nombre: "Production de Mode Complète",
              precio: "320 € EUR",
              periodo: "Petite campagne",
              idealPara: "Collections capsules, lookbooks showroom ou marques émergentes.",
              destacado: true,
              badge: "SERVICE COMPLET",
              items: [
                "Recherche conceptuelle et création du moodboard narratif",
                "Recherche et gestion des tenues auprès de showrooms partenaires",
                "Repérage des décors (studio ou extérieur) et autorisations",
                "Casting mannequins et constitution de l'équipe technique",
                "Coordination et direction globale le jour du shooting"
              ]
            }
          ]
        },
        pymes: {
          id: "pymes",
          name: "PME",
          upsellTitle: "OPTIONS PREMIUM",
          upsellNotice: "Recrutement et gestion complète des mannequins et photographes : Sur demande.",
          cards: [
            {
              nombre: "Lookbook / Catalogue Capsule",
              precio: "185 € EUR",
              periodo: "Jusqu'à 5 looks",
              idealPara: "Showrooms et créateurs présentant une collection saisonnière.",
              destacado: false,
              items: [
                "Stylisme et association de 5 silhouettes complètes",
                "Moodboard visuel en résonance avec votre clientèle cible",
                "Essayage préalable avec le mannequin et liste des pièces",
                "Supervision esthétique lors des prises de vue du catalogue"
              ]
            },
            {
              nombre: "Direction de Stylisme Campagne Commerciale",
              precio: "320 € EUR",
              periodo: "Journée entière (jusqu'à 8h)",
              idealPara: "Campagnes commerciales pour le prêt-à-porter ou accessoires.",
              destacado: false,
              items: [
                "Direction artistique du stylisme tout au long de la journée",
                "Intervention continue sur le plateau pour parfaire les tenues",
                "Gestion des accessoires et rotations rapides de looks",
                "Coordination technique avec l'équipe de prise de vue"
              ]
            },
            {
              nombre: "Production Complète Showroom / Lookbook",
              precio: "510 € EUR",
              periodo: "Shooting commercial",
              idealPara: "Marques désireuses de déléguer l'ensemble de la logistique de production.",
              destacado: true,
              badge: "RECOMMANDÉ",
              items: [
                "Conception artistique et déclinaison du moodboard de saison",
                "Repérage des lieux idéaux et démarches administratives",
                "Sélection des mannequins, maquilleurs et coiffeurs",
                "Planning de production détaillé et régie sur plateau"
              ]
            }
          ]
        },
        empresas: {
          id: "empresas",
          name: "Entreprises",
          upsellTitle: "OPTIONS PREMIUM",
          upsellNotice: "Tournages internationaux et déplacements hors base : Sur devis.",
          cards: [
            {
              nombre: "Direction Créative & Stylisme Éditorial",
              precio: "370 € EUR",
              periodo: "Par campagne",
              idealPara: "Séries pour la presse de mode, couvertures et maisons établies.",
              destacado: false,
              items: [
                "Élaboration d'un concept éditorial d'avant-garde",
                "Sourcing de pièces haute couture et archives de créateurs",
                "Direction artistique partagée avec les réalisateurs",
                "Contrôle rigoureux de la composition et des lumières"
              ]
            },
            {
              nombre: "Production de Mode Haute Gamme Complète",
              precio: "550 € EUR",
              periodo: "Journée entière + équipe",
              idealPara: "Campagnes de grande envergure avec multiples modèles et décors.",
              destacado: false,
              items: [
                "Conception globale et gestion de la logistique d'ensemble",
                "Direction de l'équipe technique de premier plan (photo, vidéo, éclairage)",
                "Casting en agence et encadrement des cessions de droits",
                "Suivi budgétaire et respect du planning prévisionnel"
              ]
            },
            {
              nombre: "Campagne Globale / Défilé / Fashion Film",
              precio: "880 € EUR",
              periodo: "Production intégrale",
              idealPara: "Lancements majeurs de marque, défilés et créations cinématographiques.",
              destacado: true,
              badge: "PRODUCTION TOTALE",
              items: [
                "Direction créative, stylisme et production exécutive à 360°",
                "Organisation de défilés en direct ou tournage de fashion films",
                "Gestion des coulisses, minutage des passages et essayages",
                "Livraison clé en main conforme aux standards internationaux"
              ]
            }
          ]
        }
      }
    },

    tarot: {
      id: "tarot",
      title: "Tarot",
      hasTiers: false,
      currencyNoticeTitle: "TARIFS & RÈGLEMENTS",
      currencyNotice: "Tarifs exprimés en Euros (€ EUR). Règlements acceptés : Virement bancaire SEPA / PayPal / Carte bancaire.",
      baseScopeTitle: "APPROCHE ARCHÉTYPALE",
      baseScope: "Le tarot comme outil introspectif et psychologique pour structurer les réflexions, lever les doutes et orienter les décisions personnelles et créatives.",
      cards: [
        {
          nombre: "Question Précise",
          precio: "7 € EUR",
          periodo: "1 question ciblée",
          idealPara: "Pour éclairer rapidement une interrogation précise du moment.",
          destacado: false,
          items: [
            "Tirage ciblé sur une décision ou un choix concret",
            "Réponse détaillée combinant analyse symbolique et mise en pratique",
            "Note vocale personnalisée + photographie haute définition du tirage",
            "Restitution sous 24h ouvrées"
          ]
        },
        {
          nombre: "Pack 3 Questions",
          precio: "16 € EUR",
          periodo: "3 questions interconnectées",
          idealPara: "Pour explorer une situation sous plusieurs perspectives.",
          destacado: true,
          badge: "POPULAIRE",
          items: [
            "3 questions approfondies reliées à votre problématique",
            "Mise en lumière des causes, de l'état présent et des tendances futures",
            "Conseils pragmatiques pour libérer les blocages",
            "Photos complètes du tirage et enregistrements vocaux explicatifs"
          ]
        },
        {
          nombre: "Lecture Complète Écrite",
          precio: "19 € EUR",
          periodo: "Format Carnet PDF + Audios",
          idealPara: "Un document soigné et intemporel à relire au fil des mois.",
          destacado: false,
          items: [
            "Rapport rédigé en format PDF avec mise en page soignée",
            "Photographies de chaque position archétypale du tirage",
            "Audios complémentaires précisant les subtilités d'interprétation",
            "Bilan d'ensemble : dynamique générale, relations et axes prioritaires"
          ]
        },
        {
          nombre: "Séance en Direct (30 min)",
          precio: "24 € EUR",
          periodo: "30 minutes en direct",
          idealPara: "Échange interactif en visioconférence pour aller au fond des choses.",
          destacado: false,
          items: [
            "Consultation privée par visioconférence (Google Meet ou WhatsApp)",
            "Tirages interactifs et dialogue fluide au fil de la discussion",
            "Possibilité de poser des questions complémentaires en temps réel",
            "Photographie souvenir du tirage final"
          ]
        },
        {
          nombre: "Immersion Complète (1 heure)",
          precio: "29 € EUR",
          periodo: "60 minutes en direct",
          idealPara: "Exploration en profondeur des schémas de vie et des opportunités.",
          destacado: true,
          badge: "EXPÉRIENCE TOTALE",
          items: [
            "Une heure entière de consultation sur mesure en temps réel",
            "Cartographie archétypale approfondie : esprit, ombre, potentiel et décisions",
            "Tirages stratégiques et évolutifs pour vos projets et choix de vie",
            "Repères clairs et concrets pour agir avec lucidité et sérénité"
          ]
        }
      ]
    }
  }
};


/* ==========================================================================
   ESTADO GLOBAL DE LA APLICACIÓN
   ========================================================================== */
const state = {
  lang: "es", // "es", "en", "fr"
  activeVideoCategory: null,
  activeVideoIndex: 0,
  activeCarouselProject: null,
  activeCarouselIndex: 0,
  activePricingTab: "video", // "video", "contenido", "moda", "tarot"
  activeVideoTier: "particulares", // "particulares", "pymes", "empresas"
  isMuted: true,
  intersectionObserver: null,
  hasScrolledFeed: false
};


/* ==========================================================================
   ASMR CRISP JELLY POP SOUND ENGINE (WEB AUDIO API - ZERO REVERB/ECHO)
   Synthesizes a dry, immediate, tactile mechanical "pop" with steep decay
   Press: Sine 380Hz→110Hz in 14ms (fast decay to 0.0001 at 18ms) + 6ms punch
   Release: Light dry pop 440Hz→220Hz in 10ms (gain 0.09)
   Micro-pitch randomization ±3.5% for organic mechanical feel
   ========================================================================== */
class JellyKeyboardSoundEngine {
  constructor() {
    this.audioCtx = null;
    this.unlocked = false;
    this._lastPressTime = 0;
    this._lastReleaseTime = 0;
  }

  init() {
    try {
      if (!this.audioCtx) {
        const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
        if (AudioCtxClass) {
          this.audioCtx = new AudioCtxClass({ latencyHint: 'interactive' });
        }
      }
      if (this.audioCtx && this.audioCtx.state !== 'running') {
        this.audioCtx.resume().catch(() => {});
      }
    } catch (e) { /* ignore */ }
  }

  unlock() {
    try {
      this.init();
      if (!this.audioCtx) return;
      const ctx = this.audioCtx;

      if (ctx.state !== 'running') {
        ctx.resume().catch(() => {});
      }

      // Reproducir un buffer silencioso de 1 sample dentro del gesto táctil
      // para desbloquear el canal de hardware de audio en iOS Safari y Android Chrome
      const buffer = ctx.createBuffer(1, 1, 22050);
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.connect(ctx.destination);
      if (source.start) {
        source.start(0);
      } else if (source.noteOn) {
        source.noteOn(0);
      }

      if (ctx.state === 'running') {
        this.unlocked = true;
      }
    } catch (e) { /* ignore */ }
  }

  _jitter() {
    return 1 + (Math.random() * 0.07 - 0.035);
  }

  press() {
    try {
      const nowMs = performance.now();
      if (nowMs - this._lastPressTime < 25) return; // Evita doble disparo touchstart + mousedown
      this._lastPressTime = nowMs;

      this.init();
      if (!this.audioCtx) return;

      const ctx = this.audioCtx;
      if (ctx.state !== 'running') {
        ctx.resume().catch(() => {});
      }

      const now = ctx.currentTime;
      const j = this._jitter();

      // Main crisp pop: Sine sweep 380Hz -> 110Hz in 14ms, steep decay to 0.0001 at 18ms
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(380 * j, now);
      osc.frequency.exponentialRampToValueAtTime(Math.max(30, 110 * j), now + 0.014);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.24, now + 0.0015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.018);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.020);

      // Micro-punch body: 520Hz sine burst for 6ms at 0.07 gain
      const punch = ctx.createOscillator();
      const punchGain = ctx.createGain();

      punch.type = 'sine';
      punch.frequency.setValueAtTime(520 * j, now);

      punchGain.gain.setValueAtTime(0.0001, now);
      punchGain.gain.linearRampToValueAtTime(0.07, now + 0.001);
      punchGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.006);

      punch.connect(punchGain);
      punchGain.connect(ctx.destination);
      punch.start(now);
      punch.stop(now + 0.008);

    } catch (e) { /* AudioContext pre-gesture safety */ }
  }

  release() {
    try {
      const nowMs = performance.now();
      if (nowMs - this._lastReleaseTime < 25) return; // Evita doble disparo touchend + mouseup
      this._lastReleaseTime = nowMs;

      this.init();
      if (!this.audioCtx) return;

      const ctx = this.audioCtx;
      if (ctx.state !== 'running') {
        ctx.resume().catch(() => {});
      }

      const now = ctx.currentTime;
      const j = this._jitter();

      // Crisp upstroke: Triangle 440Hz -> 220Hz over 10ms, steep decay to 0.0001 at 12ms
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440 * j, now);
      osc.frequency.exponentialRampToValueAtTime(Math.max(40, 220 * j), now + 0.010);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.09, now + 0.001);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.012);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.015);

    } catch (e) { /* AudioContext pre-gesture safety */ }
  }
}

const jellySound = new JellyKeyboardSoundEngine();

const JELLY_SELECTOR = [
  'button', 'a',
  '.role-pill-btn', '.lang-btn', '.social-bubble-btn',
  '.pricing-bubble-btn', '.nested-main-btn', '.nested-sub-btn',
  '.carousel-arrow', '.carousel-dot', '.modal-close-btn', '.sheet-close-btn',
  '.footer-pricing-shortcut', '.feed-nav-btn',
  '.pricing-tab', '.pricing-tier-btn', '.plan-card-action-btn',
  '.theme-toggle-btn', '.btn-mail',
  '[data-role]', '[data-toggle]', '[data-video-category]', '[data-carousel-project]',
  '[data-pricing-tab]', '[data-pricing-tier]'
].join(',');

function setupJellyKeyboard() {
  // 1. Global AudioContext Unlocker para iOS Safari y Android Chrome en el primer toque
  const unlockEvents = ['touchstart', 'touchend', 'pointerdown', 'mousedown', 'click', 'keydown'];
  const handleGlobalUnlock = () => {
    jellySound.unlock();
  };
  unlockEvents.forEach(ev => {
    document.addEventListener(ev, handleGlobalUnlock, { capture: true, passive: true });
  });

  // Re-desbloquear cuando el usuario vuelve a la pestaña o desbloquea la pantalla del celular
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      jellySound.unlocked = false;
      jellySound.init();
    }
  });
  window.addEventListener('pageshow', () => {
    jellySound.unlocked = false;
    jellySound.init();
  });

  // 2. Ejecución sincrónica ligada a acciones táctiles y de mouse sin bloqueos asíncronos
  const onPress = (e) => {
    jellySound.unlock();
    const el = e.target && e.target.closest ? e.target.closest(JELLY_SELECTOR) : null;
    if (!el) return;

    el.classList.add('jelly-pressed');
    jellySound.press();
  };

  const onRelease = (e) => {
    const el = e.target && e.target.closest ? e.target.closest(JELLY_SELECTOR) : null;
    if (el) {
      el.classList.remove('jelly-pressed');
      jellySound.release();
    } else {
      const pressed = document.querySelector('.jelly-pressed');
      if (pressed) {
        pressed.classList.remove('jelly-pressed');
        jellySound.release();
      }
    }
  };

  const onCancel = () => {
    document.querySelectorAll('.jelly-pressed').forEach(el => el.classList.remove('jelly-pressed'));
  };

  document.addEventListener('touchstart', onPress, { capture: true, passive: true });
  document.addEventListener('mousedown', onPress, { capture: true, passive: true });

  document.addEventListener('touchend', onRelease, { capture: true, passive: true });
  document.addEventListener('mouseup', onRelease, { capture: true, passive: true });

  document.addEventListener('touchcancel', onCancel, { passive: true });
  document.addEventListener('pointercancel', onCancel, { passive: true });
}


/* ==========================================================================
   DESKTOP MOUSE WHEEL & CLICK-DRAG PANNING INTERACTIVITY
   Seamlessly scrolls horizontal selectors & carousels via wheel or drag
   ========================================================================== */
function enableScrollAndDrag(element) {
  if (!element || element._dragInitialized) return;
  element._dragInitialized = true;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  let hasDragged = false;

  // 1. Mouse wheel horizontal scrolling
  element.addEventListener('wheel', (e) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (delta !== 0) {
      const maxScroll = element.scrollWidth - element.clientWidth;
      if (maxScroll > 0) {
        element.scrollLeft += delta;
        e.preventDefault();
      }
    }
  }, { passive: false });

  // 2. Mouse click-and-drag panning
  element.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return; // Left click only
    isDown = true;
    hasDragged = false;
    startX = e.pageX - element.offsetLeft;
    scrollLeft = element.scrollLeft;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const x = e.pageX - element.offsetLeft;
    const walk = (x - startX) * 1.4;
    if (Math.abs(walk) > 4) {
      hasDragged = true;
      element.classList.add('is-dragging');
    }
    element.scrollLeft = scrollLeft - walk;
  });

  window.addEventListener('mouseup', () => {
    if (isDown) {
      isDown = false;
      element.classList.remove('is-dragging');
      setTimeout(() => { hasDragged = false; }, 40);
    }
  });

  // Intercept click on children if a drag took place
  element.addEventListener('click', (e) => {
    if (hasDragged) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);
}

function initAllScrollAndDrag() {
  const selectors = [
    '#pricing-tabs-nav',
    '#role-pills-cluster',
    '#carousel-slider',
    '.pricing-tier-toggle'
  ];
  selectors.forEach(sel => {
    const el = document.querySelector(sel);
    if (el) enableScrollAndDrag(el);
  });
}


/* ==========================================================================
   LIGHT THEME "SOL" // GALAXY PASTEL THEME TOGGLE
   Toggles data-theme="sol" on <html>, persists in localStorage
   ========================================================================== */
function setupThemeToggle() {
  const btn = document.getElementById('theme-toggle-btn');
  const indicator = document.getElementById('theme-icon-indicator');

  const savedTheme = localStorage.getItem('sofia_solar_theme') || 'noche';
  applyTheme(savedTheme);

  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'sol' ? 'sol' : 'noche';
      const nextTheme = current === 'sol' ? 'noche' : 'sol';
      applyTheme(nextTheme);
      localStorage.setItem('sofia_solar_theme', nextTheme);
    });
  }

  function applyTheme(theme) {
    if (theme === 'sol') {
      document.documentElement.setAttribute('data-theme', 'sol');
      if (indicator) indicator.textContent = '🌙';
      if (btn) btn.setAttribute('aria-label', 'Modo Noche');
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (indicator) indicator.textContent = '☀️';
      if (btn) btn.setAttribute('aria-label', 'Modo Sol');
    }
  }
}


/* ==========================================================================
   BACKGROUND AURORA PARALLAX (MOUSE & GYROSCOPE)
   ========================================================================== */
function setupAuroraParallax() {
  const layer = document.getElementById('parallax-aura-layer');
  if (!layer) return;

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  const STRENGTH = 18;

  function lerp(a, b, t) { return a + (b - a) * t; }

  function tick() {
    currentX = lerp(currentX, targetX, 0.06);
    currentY = lerp(currentY, targetY, 0.06);
    layer.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  window.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    targetX = ((e.clientX - cx) / cx) * STRENGTH;
    targetY = ((e.clientY - cy) / cy) * STRENGTH;
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!e.touches[0]) return;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    targetX = ((e.touches[0].clientX - cx) / cx) * STRENGTH;
    targetY = ((e.touches[0].clientY - cy) / cy) * STRENGTH;
  }, { passive: true });

  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', (e) => {
      if (e.gamma == null || e.beta == null) return;
      targetX = (e.gamma / 45) * STRENGTH;
      targetY = ((e.beta - 20) / 60) * STRENGTH;
    }, { passive: true });
  }
}


/* ==========================================================================
   RENDERIZADO MULTILINGÜE Y ACTUALIZACIÓN DINÁMICA
   ========================================================================== */
function renderLanguageContent() {
  const currentLang = state.lang || 'es';
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.es;

  // Bio & Header Subtitles
  const subEl = document.getElementById('profile-subtitle');
  if (subEl) subEl.textContent = t.subtitulo;

  const footerStatus = document.getElementById('footer-status-text');
  if (footerStatus) footerStatus.textContent = t.footerStatus;

  const feedBackText = document.getElementById('feed-back-text');
  if (feedBackText) feedBackText.textContent = t.backText;

  const carouselBackText = document.getElementById('carousel-back-text');
  if (carouselBackText) carouselBackText.textContent = t.backText;

  const swipeHint = document.getElementById('swipe-hint-text');
  if (swipeHint) swipeHint.textContent = t.swipeHint;

  // Pricing sheet headers
  const pricingTag = document.getElementById('pricing-sheet-tag');
  if (pricingTag) pricingTag.textContent = t.pricingTag;

  const pricingTitle = document.getElementById('pricing-title');
  if (pricingTitle) pricingTitle.textContent = t.pricingTitle;

  const waBtnText = document.getElementById('whatsapp-btn-text');
  if (waBtnText) waBtnText.textContent = t.whatsappMain;

  const waBtnSub = document.getElementById('whatsapp-btn-sub');
  if (waBtnSub) waBtnSub.textContent = t.whatsappSub;

  // Render Role Pills
  const roleCluster = document.getElementById('role-pills-cluster');
  if (roleCluster) {
    const roleKeys = ['moda', 'editora', 'creadora', 'dj', 'tarot'];
    roleCluster.innerHTML = roleKeys.map(k => `
      <button class="role-pill-btn" data-role="${k}">
        ${t.roles[k].pill}
      </button>
    `).join('');
    enableScrollAndDrag(roleCluster);
  }

  // Render Nested Category Menu
  const menuContainer = document.getElementById('nested-menu-container');
  if (menuContainer) {
    menuContainer.innerHTML = `
      <!-- 1. Videofolio (Acordeón con 3 sub-opciones) -->
      <div class="nested-item-group" id="group-videofolio">
        <button class="nested-main-btn" data-toggle="group-videofolio">
          <span class="nested-main-text">${t.menu.videofolio.title}</span>
          <span class="nested-indicator-icon">▾</span>
        </button>
        <div class="nested-sub-container">
          ${t.menu.videofolio.subItems.map(item => `
            <button class="nested-sub-btn" data-video-category="${item.id}">
              <span>${item.title}</span>
              <span class="nested-sub-arrow">▶</span>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- 2. Producciones de Moda (Acordeón con CIRIART y FEELGOOD) -->
      <div class="nested-item-group" id="group-moda">
        <button class="nested-main-btn" data-toggle="group-moda">
          <span class="nested-main-text">${t.menu.moda.title}</span>
          <span class="nested-indicator-icon">▾</span>
        </button>
        <div class="nested-sub-container">
          ${t.menu.moda.subItems.map(item => `
            <button class="nested-sub-btn" data-carousel-project="${item.id}">
              <span>${item.title}</span>
              <span class="nested-sub-arrow">✦</span>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- 3. Sound & Sets (DJ): Video Sets -->
      <div class="nested-item-group" id="group-djsets">
        <button class="nested-main-btn" data-toggle="group-djsets">
          <span class="nested-main-text">${t.menu.soundSets}</span>
          <span class="nested-indicator-icon">▾</span>
        </button>
        <div class="nested-sub-container">
          <button class="nested-sub-btn" data-video-category="grabaciones">
            <span>Grabaciones</span>
            <span class="nested-sub-arrow">▶</span>
          </button>
          <button class="nested-sub-btn" data-video-category="video-sets">
            <span>Video Sets</span>
            <span class="nested-sub-arrow">▶</span>
          </button>
        </div>
      </div>

      <!-- 4. Tarot (abre directamente el tarifario en la solapa Tarot) -->
      <div class="nested-item-group">
        <button class="nested-main-btn" data-open-pricing="tarot">
          <span class="nested-main-text">${t.menu.tarot}</span>
          <span class="nested-indicator-icon">▾</span>
        </button>
      </div>
    `;
  }

  // Update Pricing Tabs labels
  const tabBtns = document.querySelectorAll('.pricing-tab');
  tabBtns.forEach(btn => {
    const tabKey = btn.dataset.pricingTab;
    if (t.pricingTabs && t.pricingTabs[tabKey]) {
      btn.textContent = t.pricingTabs[tabKey];
    }
  });

  // Re-render the pricing panel with the active language and active tier
  renderPricingPanel();
}

function setupLanguageSwitcher() {
  const btns = document.querySelectorAll('.lang-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.dataset.lang;
      if (selected === state.lang) return;

      state.lang = selected;
      btns.forEach(b => b.classList.toggle('active', b.dataset.lang === selected));
      renderLanguageContent();
    });
  });
}


/* ==========================================================================
   ROLE DETAIL MODAL (CLEAN FLOATING DRAWER)
   ========================================================================== */
function setupRoleModal() {
  const cluster = document.getElementById('role-pills-cluster');
  const backdrop = document.getElementById('role-modal-backdrop');
  const closeBtn = document.getElementById('close-role-modal-btn');
  const modalBody = document.getElementById('role-modal-body');

  if (!cluster || !backdrop || !modalBody) return;

  cluster.addEventListener('click', (e) => {
    const pill = e.target.closest('.role-pill-btn');
    if (!pill) return;

    const roleKey = pill.dataset.role;
    const tRole = TRANSLATIONS[state.lang].roles[roleKey];
    if (!tRole) return;

    modalBody.innerHTML = `
      <div class="role-header-box">
        <h2 class="role-title">${tRole.title}</h2>
        ${tRole.subtitle ? `<span class="role-subtitle">${tRole.subtitle}</span>` : ''}
      </div>

      ${tRole.lead ? `<p class="role-lead">${tRole.lead}</p>` : ''}



      ${tRole.sections && tRole.sections.length > 0 ? tRole.sections.map(sec => `
        <div class="role-section-box">
          <h3 class="role-section-title">${sec.title}</h3>
          ${sec.focus ? `<p class="role-section-focus">${sec.focus}</p>` : ''}
          <ul class="role-items-list">
            ${sec.items.map(item => `
              <li class="role-item-row">
                <span class="role-item-title">${item.label}:</span> ${item.desc}
              </li>
            `).join('')}
          </ul>
        </div>
      `).join('') : ''}
    `;

    backdrop.classList.add('active');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });

  const closeModal = () => {
    backdrop.classList.remove('active');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });
}


/* ==========================================================================
   NESTED CATEGORY ACCORDION LISTENERS
   ========================================================================== */
function setupNestedMenuListeners() {
  const container = document.getElementById('nested-menu-container');
  if (!container) return;

  container.addEventListener('click', (e) => {
    // 1. Accordion Toggle
    const toggleBtn = e.target.closest('[data-toggle]');
    if (toggleBtn) {
      const targetId = toggleBtn.dataset.toggle;
      const group = document.getElementById(targetId);
      if (group) group.classList.toggle('open');
      return;
    }

    // 1b. Direct pricing shortcut (Tarot)
    const pricingBtn = e.target.closest('[data-open-pricing]');
    if (pricingBtn) {
      openPricingModal(pricingBtn.dataset.openPricing);
      return;
    }

    // 2. Video Feed option (TikTok Feed)
    const videoBtn = e.target.closest('[data-video-category]');
    if (videoBtn) {
      const catKey = videoBtn.dataset.videoCategory;
      openCategoryVideoFeed(catKey);
      return;
    }

    // 3. Carousel option (Instagram Feed)
    const carouselBtn = e.target.closest('[data-carousel-project]');
    if (carouselBtn) {
      const projKey = carouselBtn.dataset.carouselProject;
      openInstagramCarousel(projKey);
      return;
    }
  });
}


/* ==========================================================================
   INSTAGRAM-STYLE CAROUSEL INTERFACE
   ========================================================================== */
function preloadCarouselImages() {
  try {
    window.__preloadedCarouselImgs = [];
    Object.values(CAROUSEL_PROJECTS).forEach(proj => {
      (proj.slides || []).forEach(slide => {
        if (slide && slide.url) {
          const img = new Image();
          img.decoding = 'async';
          img.src = slide.url;
          window.__preloadedCarouselImgs.push(img);
        }
      });
    });
  } catch (e) {}
}

function openInstagramCarousel(projectKey) {
  const project = CAROUSEL_PROJECTS[projectKey];
  if (!project) return;

  state.activeCarouselProject = projectKey;
  state.activeCarouselIndex = 0;

  const carouselView = document.getElementById('carousel-view');
  const homeView = document.getElementById('home-view');
  const slider = document.getElementById('carousel-slider');
  const titleEl = document.getElementById('carousel-title');
  const dotsEl = document.getElementById('carousel-dots');
  const captionEl = document.getElementById('carousel-caption');

  if (titleEl) titleEl.textContent = project.title;

  // Activar vista ANTES de inyectar las imágenes para que el contenedor tenga ancho real en mobile y PC
  homeView.classList.remove('active');
  carouselView.classList.add('active');

  slider.innerHTML = project.slides.map((s, idx) => `
    <div class="carousel-slide ${idx === 0 ? 'active' : ''}" data-slide-index="${idx}">
      <img src="${s.url}" alt="${project.title} - Imagen ${idx + 1}" class="carousel-img" loading="eager" decoding="async" draggable="false">
    </div>
  `).join('');

  dotsEl.innerHTML = project.slides.map((_, idx) => `
    <span class="carousel-dot ${idx === 0 ? 'active' : ''}" data-dot-index="${idx}"></span>
  `).join('');

  if (captionEl && project.slides[0]) {
    captionEl.textContent = project.slides[0].caption;
  }

  slider.scrollLeft = 0;
  updateCarouselCounter();
  window.scrollTo(0, 0);

  enableScrollAndDrag(slider);
}

function closeInstagramCarousel() {
  const carouselView = document.getElementById('carousel-view');
  const homeView = document.getElementById('home-view');
  carouselView.classList.remove('active');
  homeView.classList.add('active');
}

function updateCarouselCounter() {
  const project = CAROUSEL_PROJECTS[state.activeCarouselProject];
  if (!project) return;

  const counterEl = document.getElementById('carousel-counter');
  if (counterEl) {
    counterEl.textContent = `${state.activeCarouselIndex + 1}/${project.slides.length}`;
  }
}

function setupCarouselListeners() {
  const backBtn = document.getElementById('back-from-carousel-btn');
  if (backBtn) backBtn.addEventListener('click', closeInstagramCarousel);

  const prevBtn = document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next-btn');
  const dotsContainer = document.getElementById('carousel-dots');
  let scrollLockTimer = null;

  const syncCarouselUI = (newIndex) => {
    const project = CAROUSEL_PROJECTS[state.activeCarouselProject];
    if (!project) return;

    state.activeCarouselIndex = newIndex;

    const slides = document.querySelectorAll('.carousel-slide');
    slides.forEach((sl, idx) => {
      sl.classList.toggle('active', idx === newIndex);
    });

    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dt, idx) => {
      dt.classList.toggle('active', idx === newIndex);
    });

    const captionEl = document.getElementById('carousel-caption');
    if (captionEl && project.slides[newIndex]) {
      captionEl.textContent = project.slides[newIndex].caption;
    }

    updateCarouselCounter();
  };

  const goToSlide = (newIndex, fromScroll) => {
    const project = CAROUSEL_PROJECTS[state.activeCarouselProject];
    if (!project) return;

    if (newIndex < 0) newIndex = project.slides.length - 1;
    if (newIndex >= project.slides.length) newIndex = 0;

    syncCarouselUI(newIndex);

    const sliderEl = document.getElementById('carousel-slider');
    if (sliderEl && !fromScroll) {
      if (scrollLockTimer) clearTimeout(scrollLockTimer);
      sliderEl._programmaticScroll = true;
      sliderEl.scrollTo({ left: newIndex * sliderEl.clientWidth, behavior: 'smooth' });
      scrollLockTimer = setTimeout(() => {
        sliderEl._programmaticScroll = false;
      }, 450);
    }
  };

  if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(state.activeCarouselIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(state.activeCarouselIndex + 1));

  if (dotsContainer) {
    dotsContainer.addEventListener('click', (e) => {
      const dot = e.target.closest('.carousel-dot');
      if (!dot) return;
      const idx = parseInt(dot.dataset.dotIndex, 10);
      if (!isNaN(idx)) goToSlide(idx);
    });
  }

  // Sincronización con scroll nativo (swipe táctil en celular y arrastre en PC)
  const slider = document.getElementById('carousel-slider');
  if (slider) {
    slider.addEventListener('scroll', () => {
      if (slider._programmaticScroll || !slider.clientWidth) return;
      const idx = Math.round(slider.scrollLeft / slider.clientWidth);
      const project = CAROUSEL_PROJECTS[state.activeCarouselProject];
      if (project && idx !== state.activeCarouselIndex && idx >= 0 && idx < project.slides.length) {
        syncCarouselUI(idx);
      }
    }, { passive: true });
  }
}


/* ==========================================================================
   VERTICAL TIKTOK VIDEO FEED (VIDEOFOLIO & DJ) + REPRODUCTOR HORIZONTAL YT
   ========================================================================== */
function openCategoryVideoFeed(categoryKey) {
  const data = VIDEO_PROJECTS[categoryKey];
  if (!data) return;

  state.activeVideoCategory = categoryKey;
  state.activeVideoIndex = 0;

  const homeView = document.getElementById('home-view');
  const feedView = document.getElementById('feed-view');
  const feedContainer = document.getElementById('feed-scroll-container');
  const titleEl = document.getElementById('feed-current-category-title');

  if (titleEl) titleEl.textContent = data.title;

  const feedWrapper = feedView.querySelector('.feed-device-wrapper');
  const isHorizontal = data.layout === 'horizontal';
  if (feedWrapper) feedWrapper.classList.toggle('horizontal-mode', isHorizontal || !data.videos.length);

  if (state.intersectionObserver) {
    state.intersectionObserver.disconnect();
    state.intersectionObserver = null;
  }

  // Activar vista ANTES de renderizar para que IntersectionObserver mida dimensiones reales
  homeView.classList.remove('active');
  feedView.classList.add('active');

  if (!data.videos.length) {
    const msgs = { es: 'Próximamente', en: 'Coming soon', fr: 'Bientôt disponible' };
    feedContainer.innerHTML = `<div class="feed-empty-state"><span>${msgs[state.lang] || msgs.es}</span></div>`;
    updateSoundIconUI();
    return;
  }

  if (isHorizontal) {
    renderHorizontalPlayer(data, feedContainer);
    updateSoundIconUI();
    return;
  }

  feedContainer.innerHTML = data.videos.map((vid, idx) => `
    <div class="video-slide" data-index="${idx}">
      <video
        class="tiktok-video"
        src="${vid.url}"
        ${vid.fallbackUrl ? `data-fallback="${vid.fallbackUrl}"` : ''}
        loop
        playsinline
        webkit-playsinline
        preload="${idx <= 1 ? 'auto' : 'metadata'}"
        ${state.isMuted ? 'muted' : ''}
      ></video>
      <div class="video-progress-bar-container">
        <div class="video-progress-bar-fill"></div>
      </div>
    </div>
  `).join('');

  // Si una fuente falla o carga sin pista de video decodificable, conmuta al respaldo
  feedContainer.querySelectorAll('video.tiktok-video').forEach(v => {
    const switchToFallback = () => {
      const fb = v.dataset.fallback;
      const cur = v.getAttribute('src') || '';
      if (fb && cur !== fb && !v.dataset.switchedFb) {
        v.dataset.switchedFb = '1';
        v.src = fb;
        v.load();
        v.play().catch(() => {});
      }
    };
    v.addEventListener('error', switchToFallback);
    v.addEventListener('loadedmetadata', () => {
      if (v.videoWidth === 0) switchToFallback();
    });
  });

  feedContainer.scrollTop = 0;

  initFeedIntersectionObserver();
  setupVideoTapAndProgress();
  updateSoundIconUI();
}

function renderHorizontalPlayer(data, container) {
  const videos = data.videos;
  let idx = 0;
  const multi = videos.length > 1;

  container.innerHTML = `
    <div class="hplayer">
      <div class="hplayer-stage">
        ${multi ? '<button class="hplayer-arrow hplayer-prev" aria-label="Anterior">‹</button>' : ''}
        <div class="hplayer-media-slot" style="width:100%;height:100%;"></div>
        ${multi ? '<button class="hplayer-arrow hplayer-next" aria-label="Siguiente">›</button>' : ''}
      </div>
      ${multi ? '<div class="hplayer-meta"><span class="hplayer-counter"></span></div>' : ''}
    </div>
  `;

  const slot = container.querySelector('.hplayer-media-slot');
  const counter = container.querySelector('.hplayer-counter');

  const load = (i) => {
    idx = (i + videos.length) % videos.length;
    const item = videos[idx];
    const ytEmbed = getYouTubeEmbedUrl(item.url);

    if (ytEmbed) {
      slot.innerHTML = `<iframe class="hplayer-iframe" src="${ytEmbed}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%;height:100%;border:0;"></iframe>`;
    } else {
      slot.innerHTML = `<video class="hplayer-video" src="${item.url}" controls autoplay playsinline webkit-playsinline preload="auto" ${state.isMuted ? 'muted' : ''}></video>`;
      const video = slot.querySelector('video');
      if (video) {
        video.play().catch(() => {
          video.muted = true;
          state.isMuted = true;
          updateSoundIconUI();
          video.play().catch(() => {});
        });
        if (item.fallbackUrl) {
          video.addEventListener('error', () => {
            if (video.getAttribute('src') !== item.fallbackUrl) {
              video.src = item.fallbackUrl;
              video.load();
              video.play().catch(() => {});
            }
          }, { once: true });
        }
      }
    }
    if (counter) counter.textContent = `${idx + 1}/${videos.length}`;
  };
  load(0);

  const prev = container.querySelector('.hplayer-prev');
  const next = container.querySelector('.hplayer-next');
  if (prev) prev.addEventListener('click', () => load(idx - 1));
  if (next) next.addEventListener('click', () => load(idx + 1));
}

function closeCategoryVideoFeed() {
  const homeView = document.getElementById('home-view');
  const feedView = document.getElementById('feed-view');
  const feedContainer = document.getElementById('feed-scroll-container');

  const videos = feedContainer.querySelectorAll('video');
  videos.forEach(v => {
    v.pause();
    v.currentTime = 0;
  });

  if (state.intersectionObserver) {
    state.intersectionObserver.disconnect();
    state.intersectionObserver = null;
  }

  feedView.classList.remove('active');
  homeView.classList.add('active');
}

function setupVideoFeedListeners() {
  const backBtn = document.getElementById('back-to-home-btn');
  if (backBtn) backBtn.addEventListener('click', closeCategoryVideoFeed);

  const soundBtn = document.getElementById('sound-toggle-btn');
  if (soundBtn) soundBtn.addEventListener('click', toggleSound);

  const feedContainer = document.getElementById('feed-scroll-container');
  if (feedContainer) {
    feedContainer.addEventListener('scroll', () => {
      const hint = document.getElementById('swipe-hint');
      if (hint && !state.hasScrolledFeed && feedContainer.scrollTop > 40) {
        state.hasScrolledFeed = true;
        hint.style.opacity = '0';
        setTimeout(() => { if (hint) hint.remove(); }, 600);
      }
    }, { passive: true });
  }
}

function initFeedIntersectionObserver() {
  const container = document.getElementById('feed-scroll-container');
  const slides = container.querySelectorAll('.video-slide');

  if (state.intersectionObserver) {
    state.intersectionObserver.disconnect();
  }

  const options = {
    root: container,
    threshold: 0.65
  };

  state.intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const slide = entry.target;
      const video = slide.querySelector('video');
      const idx = parseInt(slide.dataset.index, 10);

      if (entry.isIntersecting) {
        state.activeVideoIndex = idx;
        if (video) {
          if (video.readyState >= 1 && video.currentTime > 0.5) {
            try { video.currentTime = 0; } catch (e) {}
          }
          video.muted = state.isMuted;
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              video.muted = true;
              state.isMuted = true;
              updateSoundIconUI();
              video.play().catch(() => {});
            });
          }
        }
        // Precargar el siguiente video de la nube para que el próximo swipe sea instantáneo
        const nextSlide = slides[idx + 1];
        if (nextSlide) {
          const nextVid = nextSlide.querySelector('video');
          if (nextVid && nextVid.preload !== 'auto') nextVid.preload = 'auto';
        }
      } else {
        if (video) video.pause();
      }
    });
  }, options);

  slides.forEach(s => state.intersectionObserver.observe(s));
}

function setupVideoTapAndProgress() {
  const container = document.getElementById('feed-scroll-container');
  const slides = container.querySelectorAll('.video-slide');

  slides.forEach(slide => {
    const video = slide.querySelector('video');
    const fill = slide.querySelector('.video-progress-bar-fill');

    if (video) {
      slide.addEventListener('click', (e) => {
        if (e.target.closest('.feed-top-bar') || e.target.closest('.feed-nav-btn')) return;

        if (video.paused) {
          video.play();
          showPlayPauseAnimation('play');
        } else {
          video.pause();
          showPlayPauseAnimation('pause');
        }
      });

      video.addEventListener('timeupdate', () => {
        if (!video.duration || !fill) return;
        const pct = (video.currentTime / video.duration) * 100;
        fill.style.width = `${pct}%`;
      });
    }
  });
}

function showPlayPauseAnimation(type) {
  const indicator = document.getElementById('play-pause-indicator');
  const icon = document.getElementById('indicator-icon-box');
  if (!indicator || !icon) return;

  icon.textContent = (type === 'play') ? '▶' : '❚❚';
  indicator.classList.remove('animate');
  void indicator.offsetWidth;
  indicator.classList.add('animate');
}

function toggleSound() {
  state.isMuted = !state.isMuted;
  const feedContainer = document.getElementById('feed-scroll-container');
  const videos = feedContainer.querySelectorAll('video');
  videos.forEach(v => { v.muted = state.isMuted; });
  updateSoundIconUI();
}

function updateSoundIconUI() {
  const icon = document.getElementById('sound-icon-box');
  const label = document.getElementById('sound-label');
  if (!icon || !label) return;

  if (state.isMuted) {
    icon.textContent = '🔇';
    label.textContent = 'Muted';
  } else {
    icon.textContent = '🔊';
    label.textContent = 'Sound ON';
  }
}


/* ==========================================================================
   PRICING PANEL RENDERING (UNIVERSAL TIER SELECTOR & SMART CURRENCY)
   - Tiers present for: video, contenido, moda
   - Excluded for: tarot
   - Smart currencies: ES (Tarot in ARS, others USD), EN (all USD), FR (all EUR)
   - Zero emojis in editorial banners
   ========================================================================== */
function isArgentinaUser() {
  try {
    const override = new URLSearchParams(window.location.search).get('country');
    if (override) return override.toUpperCase() === 'AR';
  } catch (e) { /* ignore */ }
  let tz = '';
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) { /* ignore */ }
  if (tz) return tz.indexOf('America/Argentina') === 0 || tz === 'America/Buenos_Aires';
  return /-AR$/i.test(navigator.language || '');
}

// Tarot: ARS only for Argentina (Spanish UI). Everyone else sees USD / EUR.
function resolveTarotData(lang) {
  const base = CONSOLIDATED_PRICING[lang] || CONSOLIDATED_PRICING.es;
  if (lang !== 'es' || isArgentinaUser()) return base.tarot;
  const usd = CONSOLIDATED_PRICING.en.tarot.cards.map(c => c.precio);
  return Object.assign({}, base.tarot, {
    currencyNoticeTitle: 'TARIFAS (USD)',
    currencyNotice: 'Valores expresados en Dólares (USD). Medios de pago internacionales: PayPal / Wise / Stripe.',
    cards: base.tarot.cards.map((c, i) => Object.assign({}, c, { precio: usd[i] }))
  });
}

function renderPricingPanel() {
  const container = document.getElementById('pricing-panel');
  if (!container) return;

  const currentLang = state.lang || 'es';
  const langPricing = CONSOLIDATED_PRICING[currentLang] || CONSOLIDATED_PRICING.es;
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.es;

  let activeTabKey = state.activePricingTab || 'video';
  if (activeTabKey === 'esoterico') activeTabKey = 'tarot';

  const catData = activeTabKey === 'tarot' ? resolveTarotData(currentLang) : langPricing[activeTabKey];
  if (!catData) return;

  let html = `<div class="pricing-tab-content">`;

  // 1. Categories with Universal Tier Selector (video, contenido, moda)
  if (catData.hasTiers) {
    const activeTierKey = state.activeVideoTier || 'particulares';
    const tierData = catData.tiers[activeTierKey] || catData.tiers.particulares;
    const tierLabels = t.pricingTiers || { particulares: "Particulares", pymes: "PyMEs", empresas: "Empresas" };

    html += `
      <div class="pricing-tier-wrapper">
        <div class="pricing-tier-toggle" role="tablist" aria-label="Nivel de cliente">
          <button class="pricing-tier-btn ${activeTierKey === 'particulares' ? 'active' : ''}" data-pricing-tier="particulares">${tierLabels.particulares}</button>
          <button class="pricing-tier-btn ${activeTierKey === 'pymes' ? 'active' : ''}" data-pricing-tier="pymes">${tierLabels.pymes}</button>
          <button class="pricing-tier-btn ${activeTierKey === 'empresas' ? 'active' : ''}" data-pricing-tier="empresas">${tierLabels.empresas}</button>
        </div>
      </div>

      <div class="pricing-info-banner base-style">
        <div class="banner-title">
          <span>${catData.baseStyleTitle || "ESTILO BASE"}</span>
        </div>
        <p class="banner-text">${catData.baseStyle || catData.baseScope}</p>
      </div>

      ${tierData.upsellNotice ? `
        <div class="pricing-info-banner upsell">
          <div class="banner-title">
            <span>${tierData.upsellTitle || "EXTRAS PREMIUM"} (${tierData.name})</span>
          </div>
          <p class="banner-text">${tierData.upsellNotice}</p>
        </div>
      ` : ''}

      <div class="pricing-cards-grid">
        ${tierData.cards.map(card => renderPricingCardHTML(card, `${catData.title} · ${tierData.name}`)).join('')}
      </div>
    `;
  } else {
    // 2. Tarot (No tier selector - direct cards)
    html += `
      ${catData.currencyNotice ? `
        <div class="pricing-info-banner currency-notice">
          <div class="banner-title">
            <span>${catData.currencyNoticeTitle || "TARIFAS & MEDIOS DE PAGO"}</span>
          </div>
          <p class="banner-text">${catData.currencyNotice}</p>
        </div>
      ` : ''}

      <div class="pricing-info-banner base-style">
        <div class="banner-title">
          <span>${catData.baseScopeTitle || "ENFOQUE ARQUETÍPICO"}</span>
        </div>
        <p class="banner-text">${catData.baseScope}</p>
      </div>

      <div class="pricing-cards-grid">
        ${catData.cards.map(card => renderPricingCardHTML(card, catData.title)).join('')}
      </div>
    `;
  }

  html += `</div>`;
  container.innerHTML = html;

  // Update tabs active state
  const tabs = document.querySelectorAll('.pricing-tab');
  tabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.pricingTab === activeTabKey);
  });

  // Enable scroll and drag on any newly rendered tier selector
  const tierToggle = container.querySelector('.pricing-tier-toggle');
  if (tierToggle) enableScrollAndDrag(tierToggle);

  // Update main WhatsApp CTA
  updateMainWhatsAppCTA();
}

function renderPricingCardHTML(card, categoryContext) {
  const currentLang = state.lang || 'es';
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.es;
  const ctaText = t.pricingCardCta || "Consultar este servicio";

  let waGreeting = "¡Hola Sofia! Me gustaría consultar por el servicio:";
  if (currentLang === 'en') {
    waGreeting = "Hi Sofia! I'd like to inquire about the service:";
  } else if (currentLang === 'fr') {
    waGreeting = "Bonjour Sofia ! J'aimerais me renseigner sur la prestation :";
  }

  const waMsg = encodeURIComponent(`${waGreeting} "${card.nombre}" (${card.precio}) [${categoryContext}].`);
  const waUrl = `https://wa.me/5491132327560?text=${waMsg}`;

  return `
    <div class="pricing-card-item ${card.destacado ? 'featured' : ''}">
      ${card.badge ? `<span class="featured-pill">${card.badge}</span>` : ''}

      <div class="card-item-header">
        <h3 class="plan-name">${card.nombre}</h3>
        <div class="price-box">
          <span class="plan-price">${card.precio}</span>
          ${card.periodo ? `<span class="plan-period">${card.periodo}</span>` : ''}
        </div>
      </div>

      <p class="plan-ideal">${card.idealPara}</p>

      <ul class="plan-features-list">
        ${card.items.map(item => `
          <li>
            <span class="feature-check">✓</span>
            <span>${item}</span>
          </li>
        `).join('')}
      </ul>

      <a class="plan-card-action-btn" href="${waUrl}" target="_blank" rel="noopener noreferrer">
        <span>${ctaText}</span>
        <span>→</span>
      </a>
    </div>
  `;
}

function updateMainWhatsAppCTA() {
  const currentLang = state.lang || 'es';
  const langPricing = CONSOLIDATED_PRICING[currentLang] || CONSOLIDATED_PRICING.es;
  let activeTabKey = state.activePricingTab || 'video';
  if (activeTabKey === 'esoterico') activeTabKey = 'tarot';

  const data = langPricing[activeTabKey];
  const catTitle = data ? data.title : "servicios";

  let msg = `¡Hola Sofia! Estuve viendo tu portafolio y me gustaría consultar por servicios de ${catTitle}.`;
  if (currentLang === 'en') {
    msg = `Hi Sofia! I was checking your portfolio and would like to inquire about ${catTitle} services.`;
  } else if (currentLang === 'fr') {
    msg = `Bonjour Sofia ! J'ai regardé ton portfolio et j'aimerais échanger au sujet de prestations en ${catTitle}.`;
  }

  const waUrl = `https://wa.me/5491132327560?text=${encodeURIComponent(msg)}`;

  const waModalBtn = document.getElementById('whatsapp-cta-btn');
  if (waModalBtn) waModalBtn.href = waUrl;

  const waSocialBtn = document.getElementById('link-wa');
  if (waSocialBtn) waSocialBtn.href = waUrl;
}

function setupPricingTabs() {
  const nav = document.getElementById('pricing-tabs-nav');
  if (nav) {
    nav.addEventListener('click', (e) => {
      const tabBtn = e.target.closest('.pricing-tab');
      if (!tabBtn) return;
      const tabKey = tabBtn.dataset.pricingTab;
      if (tabKey === state.activePricingTab) return;

      state.activePricingTab = tabKey;
      renderPricingPanel();
    });
  }

  // Delegated listener for sub-tier buttons
  const panel = document.getElementById('pricing-panel');
  if (panel) {
    panel.addEventListener('click', (e) => {
      const tierBtn = e.target.closest('.pricing-tier-btn');
      if (!tierBtn) return;
      const tierKey = tierBtn.dataset.pricingTier;
      if (tierKey === state.activeVideoTier) return;

      state.activeVideoTier = tierKey;
      renderPricingPanel();
    });
  }
}

// Backward compatibility alias
function renderPricingCards() {
  renderPricingPanel();
}

window.openPricingModal = function(tabKey) {
  if (typeof tabKey === 'string' && ['video', 'contenido', 'moda', 'tarot'].includes(tabKey)) {
    state.activePricingTab = tabKey;
    renderPricingPanel();
    const activeTab = document.querySelector('.pricing-tab.active');
    if (activeTab && activeTab.scrollIntoView) {
      activeTab.scrollIntoView({ block: 'nearest', inline: 'center' });
    }
  }
  const activeSlide = document.querySelector(`.video-slide[data-index="${state.activeVideoIndex}"]`);
  if (activeSlide) {
    const video = activeSlide.querySelector('video');
    if (video) video.pause();
  }

  const backdrop = document.getElementById('pricing-sheet-backdrop');
  if (backdrop) {
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.closePricingModal = function() {
  const backdrop = document.getElementById('pricing-sheet-backdrop');
  if (backdrop) {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (document.getElementById('feed-view') && document.getElementById('feed-view').classList.contains('active')) {
    const activeSlide = document.querySelector(`.video-slide[data-index="${state.activeVideoIndex}"]`);
    if (activeSlide) {
      const video = activeSlide.querySelector('video');
      if (video) video.play();
    }
  }
};


/* ==========================================================================
   INICIALIZACIÓN GENERAL EN DOMContentLoaded
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  setupThemeToggle();
  setupJellyKeyboard();
  setupAuroraParallax();
  renderLanguageContent();
  setupPricingTabs();
  setupRoleModal();
  setupLanguageSwitcher();
  setupNestedMenuListeners();
  setupCarouselListeners();
  preloadCarouselImages();
  setupVideoFeedListeners();
  initAllScrollAndDrag();

  // Pricing button listeners
  const pricingBubbleBtn = document.getElementById('open-pricing-bubble-btn');
  if (pricingBubbleBtn) {
    pricingBubbleBtn.addEventListener('click', () => openPricingModal());
  }

  const closePricingBtn = document.getElementById('close-pricing-btn');
  if (closePricingBtn) {
    closePricingBtn.addEventListener('click', closePricingModal);
  }

  const backdrop = document.getElementById('pricing-sheet-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closePricingModal();
    });
  }
});
