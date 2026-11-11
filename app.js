/* ==========================================================================
   PORTAFOLIO VERTICAL MINIMALISTA // ESTILO TIKTOK
   Configuración de datos y motor interactivo
   ========================================================================== */

/**
 * DATOS CONFIGURABLES DEL PORTAFOLIO
 * Modificá estos datos fácilmente para adaptar tu nombre, enlaces, videos y precios.
 */
const PORTFOLIO_DATA = {
  creator: {
    name: "THOMAS // VISUALS",
    tagline: "Video Editor & Content Strategist",
    bio: "Especializado en reels de alto ritmo, retención y estética comercial moderna.",
    
    // Tu enlace a Framer (donde tenés tu portafolio largo y detallado)
    extendedPortfolioUrl: "https://framer.com/@tu-usuario",
    
    // Tu WhatsApp (Código de país + número, sin espacios ni signos +)
    // Ej: 5491122334455 para Argentina
    whatsappNumber: "5491100000000",
    defaultWhatsappMessage: "¡Hola Thomas! Estuve viendo tu portafolio interactivo y me gustaría consultar por la edición de videos para mi proyecto.",
    
    // Email y redes
    email: "contacto@tudominio.com",
    instagram: "@thomasvisuals"
  },

  // Paquetes de Tarifas para el botón de Pricing (1-Tap)
  pricing: [
    {
      id: "single",
      name: "Clip Individual / Reel",
      price: "$75",
      period: "USD por video",
      idealFor: "Ideal para creadores o marcas que necesitan un reel o anuncio puntual.",
      featured: false,
      features: [
        "Edición de ritmo acelerado y retención",
        "Subtítulos dinámicos estilizados",
        "Diseño sonoro (SFX) + Color grading",
        "Formato vertical 9:16 optimizado",
        "Entrega en 48hs hábiles (2 revisiones)"
      ]
    },
    {
      id: "monthly-growth",
      name: "Pack Crecimiento Mensual",
      price: "$450",
      period: "USD / 8 videos al mes",
      idealFor: "Para marcas o influencers con publicaciones semanales constantes.",
      featured: true, // Destacado con badge
      features: [
        "8 Reels / Shorts editados al mes",
        "Optimización de los primeros 3 segundos (Hooks)",
        "Motion Graphics y efectos visuales",
        "Plantilla de subtítulos con tu identidad de marca",
        "Canal directo y prioritario por WhatsApp"
      ]
    },
    {
      id: "custom-production",
      name: "Producción & Campañas",
      price: "A medida",
      period: "Presupuesto personalizado",
      idealFor: "Comerciales, videoclips o adaptación de podcasts a piezas virales.",
      featured: false,
      features: [
        "Estrategia de contenido completa",
        "Edición multiformato (9:16, 16:9, 1:1)",
        "Sound design avanzado con licencias comerciales",
        "Asesoría de guion y storytelling"
      ]
    }
  ],

  // Proyectos agrupados (Cada uno con sus videos estilo TikTok)
  projects: [
    {
      id: "reels-virales",
      index: "01",
      title: "Reels & Contenido Viral",
      description: "Edición dinámica con hooks agresivos, subtítulos cinemáticos y retención superior al 70%.",
      cardPreview: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      videos: [
        {
          id: "rv-1",
          title: "Streetwear Drop 2026 // Teaser",
          client: "AURA Apparel Co.",
          roles: ["Edición", "Color Grading", "Sound Design"],
          scope: "Ritmo rápido sincrónico al beat para lanzamiento de colección en Instagram y TikTok.",
          url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        },
        {
          id: "rv-2",
          title: "Rutina Matutina de Alto Rendimiento",
          client: "Creator Fitness / Santiago G.",
          roles: ["Storytelling", "Subtítulos Dinámicos", "SFX"],
          scope: "Formato vlog vertical con zoom dinámico y micro-animaciones.",
          url: "https://vjs.zencdn.net/v/oceans.mp4"
        },
        {
          id: "rv-3",
          title: "Café de Especialidad // Proceso & Macro",
          client: "Roastery Labs",
          roles: ["Macro Shots", "Color Grading", "Edición"],
          scope: "Video sensorial ASMR centrado en la textura y el sonido de molienda.",
          url: "https://www.w3schools.com/html/mov_bbb.mp4"
        }
      ]
    },
    {
      id: "comerciales-ads",
      index: "02",
      title: "Comerciales & Publicidad",
      description: "Spots publicitarios diseñados para conversión directa en Meta Ads y TikTok Ads.",
      cardPreview: "https://media.w3.org/2010/05/sintel/trailer.mp4",
      videos: [
        {
          id: "ad-1",
          title: "App Fintech // Lanzamiento Oficial",
          client: "Koin Global",
          roles: ["Motion Graphics", "Edición de Producto", "Voiceover Sync"],
          scope: "Explicación de características clave en menos de 20 segundos.",
          url: "https://media.w3.org/2010/05/sintel/trailer.mp4"
        },
        {
          id: "ad-2",
          title: "Línea Minimalista de Joyería",
          client: "Silver & Co.",
          roles: ["Dirección Visual", "Color Grading", "Postproducción"],
          scope: "Pieza estética de lujo para campañas de remarketing.",
          url: "https://media.w3.org/2010/05/bunny/trailer.mp4"
        }
      ]
    },
    {
      id: "eventos-aftermovies",
      index: "03",
      title: "Aftermovies & Música",
      description: "Recaps de fiestas electrónicas, conferencias y festivales con máxima energía visual.",
      cardPreview: "https://vjs.zencdn.net/v/oceans.mp4",
      videos: [
        {
          id: "ev-1",
          title: "Underground Club Night // Electronic Session",
          client: "NOXI Art Session",
          roles: ["Sincronización Musical", "Glitches", "Color Grading"],
          scope: "Aftermovie inmersivo con ritmo acelerado y transiciones orgánicas.",
          url: "https://vjs.zencdn.net/v/oceans.mp4"
        },
        {
          id: "ev-2",
          title: "Festival Nocturno // Recap de Luces",
          client: "Pulse Festival",
          roles: ["Edición", "Sound Design"],
          scope: "Highlights del evento grabados para historias y reels.",
          url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        }
      ]
    },
    {
      id: "podcast-youtube",
      index: "04",
      title: "Podcasts & Long-Form Slices",
      description: "Transformación de episodios largos de 1 hora en cápsulas de 45 segundos de altísimo valor.",
      cardPreview: "https://www.w3schools.com/html/mov_bbb.mp4",
      videos: [
        {
          id: "pod-1",
          title: "Cómo Escalar una Startup en 2026",
          client: "Founders Talks Podcast",
          roles: ["Extracción de Hook", "Subtítulos B-Roll", "Edición de Audio"],
          scope: "Recorte del momento más polémico del episodio con animaciones explicativas.",
          url: "https://www.w3schools.com/html/mov_bbb.mp4"
        },
        {
          id: "pod-2",
          title: "El Secreto del Diseño Minimalista",
          client: "Creative Minds Podcast",
          roles: ["B-Roll Insertion", "Subtítulos Dinámicos"],
          scope: "Cápsula educativa diseñada para generar comentarios y debate.",
          url: "https://media.w3.org/2010/05/bunny/trailer.mp4"
        }
      ]
    }
  ]
};


/* ==========================================================================
   ESTADO GLOBAL DE LA APLICACIÓN
   ========================================================================== */
const state = {
  currentProjectId: null,
  isMuted: true, // Inicia silenciado para compatibilidad con navegadores móviles
  activeVideoIndex: 0,
  intersectionObserver: null,
  hasScrolledFeed: false
};


/* ==========================================================================
   INICIALIZACIÓN AL CARGAR LA PÁGINA
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderCreatorInfo();
  renderProjectsGrid();
  renderPricingCards();
  setupEventListeners();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});


/**
 * 1. RENDERIZA INFORMACIÓN DEL CREADOR
 */
function renderCreatorInfo() {
  const { creator, projects } = PORTFOLIO_DATA;

  document.getElementById('creator-name').textContent = creator.name;
  document.getElementById('creator-tagline').textContent = creator.tagline;
  document.getElementById('projects-count').textContent = `${projects.length} PROYECTOS`;

  const extendedLink = document.getElementById('extended-portfolio-link');
  if (extendedLink) {
    extendedLink.href = creator.extendedPortfolioUrl;
  }

  // Configura enlace directo de WhatsApp en el modal
  const encodedMsg = encodeURIComponent(creator.defaultWhatsappMessage);
  const whatsappUrl = `https://wa.me/${creator.whatsappNumber}?text=${encodedMsg}`;
  
  const whatsappCta = document.getElementById('whatsapp-cta-btn');
  if (whatsappCta) {
    whatsappCta.href = whatsappUrl;
  }

  const customQuote = document.getElementById('custom-quote-link');
  if (customQuote) {
    customQuote.href = `mailto:${creator.email}?subject=Cotización%20Proyecto%20de%20Video`;
  }
}


/**
 * 2. RENDERIZA LA GRILLA DE PROYECTOS EN HOME
 */
function renderProjectsGrid() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.projects.map((proj) => `
    <article class="project-card" data-project-id="${proj.id}">
      <video class="card-media-bg" src="${proj.cardPreview}" muted loop playsinline autoplay preload="metadata"></video>
      <div class="card-gradient-overlay"></div>
      
      <div class="card-content">
        <div class="card-top-meta">
          <span class="card-index">${proj.index}</span>
          <span class="card-count-pill">
            <i data-lucide="play-circle" class="w-3.5 h-3.5"></i>
            <span>${proj.videos.length} clips</span>
          </span>
        </div>

        <h3 class="card-title">${proj.title}</h3>
        <p class="card-desc">${proj.description}</p>
        
        <div class="card-cta-row">
          <span class="card-cta-text">
            <span>Ver videos</span>
            <i data-lucide="arrow-right" class="card-cta-arrow"></i>
          </span>
        </div>
      </div>
    </article>
  `).join('');
}


/**
 * 3. RENDERIZA LAS TARJETAS DE PRECIOS EN EL SHEET
 */
function renderPricingCards() {
  const container = document.getElementById('pricing-cards-container');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.pricing.map(plan => `
    <div class="pricing-card-item ${plan.featured ? 'featured' : ''}">
      ${plan.featured ? '<span class="featured-pill">MÁS POPULAR</span>' : ''}
      
      <div class="card-item-header">
        <h3 class="plan-name">${plan.name}</h3>
        <div class="plan-price">
          ${plan.price} <span class="plan-period">${plan.period}</span>
        </div>
      </div>
      
      <p class="plan-ideal">${plan.idealFor}</p>

      <ul class="plan-features-list">
        ${plan.features.map(feat => `
          <li>
            <i data-lucide="check" class="feature-check"></i>
            <span>${feat}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}


/**
 * 4. CONFIGURACIÓN DE EVENT LISTENERS
 */
function setupEventListeners() {
  // Click en una tarjeta de proyecto -> Abrir feed estilo TikTok
  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) {
    projectsGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.project-card');
      if (card) {
        const projectId = card.dataset.projectId;
        openProjectFeed(projectId);
      }
    });
  }

  // Volver a Home desde el Feed
  const backBtn = document.getElementById('back-to-home-btn');
  if (backBtn) {
    backBtn.addEventListener('click', closeProjectFeed);
  }

  // Botones para abrir Pricing Sheet
  const openPricingBtn = document.getElementById('open-pricing-btn');
  if (openPricingBtn) {
    openPricingBtn.addEventListener('click', openPricingModal);
  }

  // Botón para cerrar Pricing Sheet
  const closePricingBtn = document.getElementById('close-pricing-btn');
  if (closePricingBtn) {
    closePricingBtn.addEventListener('click', closePricingModal);
  }

  // Click fuera del sheet para cerrar
  const backdrop = document.getElementById('pricing-sheet-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closePricingModal();
      }
    });
  }

  // Toggle de Sonido Global
  const soundBtn = document.getElementById('sound-toggle-btn');
  if (soundBtn) {
    soundBtn.addEventListener('click', toggleSound);
  }

  // Ocultar hint de swipe al scrollear por primera vez
  const feedScrollContainer = document.getElementById('feed-scroll-container');
  if (feedScrollContainer) {
    feedScrollContainer.addEventListener('scroll', () => {
      if (!state.hasScrolledFeed) {
        state.hasScrolledFeed = true;
        const hint = document.getElementById('swipe-hint');
        if (hint) {
          hint.style.opacity = '0';
          setTimeout(() => hint.remove(), 500);
        }
      }
    }, { passive: true });
  }

  // Escape para cerrar modal o volver a home
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const backdrop = document.getElementById('pricing-sheet-backdrop');
      if (backdrop && backdrop.classList.contains('active')) {
        closePricingModal();
      } else if (document.getElementById('feed-view').classList.contains('active')) {
        closeProjectFeed();
      }
    }
  });
}


/**
 * 5. ABRIR EL FEED VERTICAL TIKTOK DE UN PROYECTO
 */
function openProjectFeed(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  state.currentProjectId = projectId;
  state.activeVideoIndex = 0;

  // Actualizar título del proyecto en barra superior
  const titleBadge = document.getElementById('feed-current-project-title');
  if (titleBadge) {
    titleBadge.textContent = project.title;
  }

  // Inyectar slides de videos
  const feedContainer = document.getElementById('feed-scroll-container');
  feedContainer.innerHTML = project.videos.map((vid, idx) => `
    <div class="video-slide" data-index="${idx}" data-video-id="${vid.id}">
      <video 
        class="video-element" 
        src="${vid.url}" 
        playsinline 
        webkit-playsinline
        loop 
        ${state.isMuted ? 'muted' : ''}
        preload="${idx < 2 ? 'auto' : 'metadata'}"
      ></video>
      
      <div class="video-overlay-gradient"></div>

      <!-- Información del clip en la esquina inferior -->
      <div class="video-info-box">
        <div class="video-tags-row">
          <span class="tag-pill tag-counter">CLIP ${idx + 1}/${project.videos.length}</span>
          ${vid.roles.map(r => `<span class="tag-pill">${r}</span>`).join('')}
        </div>

        <h3 class="video-title">${vid.title}</h3>
        <p class="video-client">Cliente: ${vid.client}</p>
        <p class="video-scope-desc">${vid.scope}</p>
      </div>

      <!-- Barra de progreso de reproducción del video -->
      <div class="video-progress-bar-container">
        <div class="video-progress-bar-fill" id="progress-${idx}"></div>
      </div>
    </div>
  `).join('');

  // Cambiar vista de Home a Feed
  document.getElementById('home-view').classList.remove('active');
  const feedView = document.getElementById('feed-view');
  feedView.classList.add('active');

  // Inicializar observador de scroll para autoplay dinámico
  initFeedIntersectionObserver();

  // Configurar eventos de tap para Play/Pause y progreso
  setupVideoTapAndProgress();

  // Scroll al inicio
  feedContainer.scrollTop = 0;

  // Actualizar iconos
  if (window.lucide) {
    window.lucide.createIcons();
  }
}


/**
 * 6. CERRAR EL FEED Y VOLVER A HOME
 */
function closeProjectFeed() {
  // Pausar todos los videos
  const videos = document.querySelectorAll('#feed-scroll-container video');
  videos.forEach(v => {
    v.pause();
    v.currentTime = 0;
  });

  // Desconectar observer
  if (state.intersectionObserver) {
    state.intersectionObserver.disconnect();
    state.intersectionObserver = null;
  }

  document.getElementById('feed-view').classList.remove('active');
  document.getElementById('home-view').classList.add('active');
  state.currentProjectId = null;
}


/**
 * 7. INTERSECTION OBSERVER: REPRODUCCIÓN AUTOMÁTICA AL DESLIZAR
 */
function initFeedIntersectionObserver() {
  if (state.intersectionObserver) {
    state.intersectionObserver.disconnect();
  }

  const options = {
    root: document.getElementById('feed-scroll-container'),
    threshold: 0.65 // Debe ser visible al menos un 65% para activarse
  };

  state.intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const slide = entry.target;
      const video = slide.querySelector('video');
      if (!video) return;

      if (entry.isIntersecting) {
        state.activeVideoIndex = parseInt(slide.dataset.index, 10);
        
        // Sincronizar estado de audio
        video.muted = state.isMuted;
        
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Si el navegador bloquea el autoplay con sonido, fuerza mute y reproduce
            video.muted = true;
            state.isMuted = true;
            updateSoundIconUI();
            video.play();
          });
        }
      } else {
        video.pause();
      }
    });
  }, options);

  const slides = document.querySelectorAll('.video-slide');
  slides.forEach(slide => state.intersectionObserver.observe(slide));
}


/**
 * 8. GESTOS: TAP PARA PAUSA/PLAY & BARRA DE PROGRESO
 */
function setupVideoTapAndProgress() {
  const slides = document.querySelectorAll('.video-slide');

  slides.forEach((slide, idx) => {
    const video = slide.querySelector('video');
    const progressBar = slide.querySelector(`#progress-${idx}`);

    if (!video) return;

    // Actualizar barra de progreso
    video.addEventListener('timeupdate', () => {
      if (progressBar && video.duration) {
        const pct = (video.currentTime / video.duration) * 100;
        progressBar.style.width = `${pct}%`;
      }
    });

    // Tap en video para pausar / reanudar
    video.addEventListener('click', (e) => {
      e.stopPropagation();
      if (video.paused) {
        video.play();
        showPlayPauseAnimation('play');
      } else {
        video.pause();
        showPlayPauseAnimation('pause');
      }
    });
  });
}


/**
 * Animación central sutil de Play / Pause al hacer tap
 */
function showPlayPauseAnimation(type) {
  const indicator = document.getElementById('play-pause-indicator');
  const icon = document.getElementById('indicator-icon');
  if (!indicator || !icon) return;

  if (type === 'play') {
    icon.setAttribute('data-lucide', 'play');
  } else {
    icon.setAttribute('data-lucide', 'pause');
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }

  indicator.classList.add('show');
  clearTimeout(indicator._timer);
  indicator._timer = setTimeout(() => {
    indicator.classList.remove('show');
  }, 450);
}


/**
 * 9. CONTROL DE SONIDO (MUTE / UNMUTE)
 */
function toggleSound() {
  state.isMuted = !state.isMuted;

  // Actualizar todos los videos activos
  const videos = document.querySelectorAll('#feed-scroll-container video');
  videos.forEach(v => {
    v.muted = state.isMuted;
  });

  updateSoundIconUI();
}

function updateSoundIconUI() {
  const icon = document.getElementById('sound-icon');
  const label = document.getElementById('sound-label');

  if (state.isMuted) {
    if (icon) icon.setAttribute('data-lucide', 'volume-x');
    if (label) label.textContent = 'Muted';
  } else {
    if (icon) icon.setAttribute('data-lucide', 'volume-2');
    if (label) label.textContent = 'Audio ON';
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}


/**
 * 10. MODAL / BOTTOM SHEET DE TARIFAS (1-TAP)
 */
window.openPricingModal = function() {
  // Pausar video activo si estamos en el feed
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

  // Reanudar video si estamos en el feed
  if (document.getElementById('feed-view').classList.contains('active')) {
    const activeSlide = document.querySelector(`.video-slide[data-index="${state.activeVideoIndex}"]`);
    if (activeSlide) {
      const video = activeSlide.querySelector('video');
      if (video) video.play();
    }
  }
};
