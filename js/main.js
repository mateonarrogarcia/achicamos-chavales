/* ============================================
   ACHICAMOS, CHAVALES - JavaScript principal
   ============================================ */

// Datos de ejemplo de artículos
const ARTICLES = [
  {
    id: 1,
    title: "Real Madrid tropieza en el Bernabéu: Ancelotti ya tiene las alarmas encendidas",
    excerpt: "Una derrota inesperada deja al equipo blanco con dudas de cara al Clásico. Vinicius no estuvo y el equipo lo notó.",
    category: "laliga",
    categoryLabel: "LaLiga",
    date: "31 Ago 2026",
    author: "Redacción Achicamos",
    thumbClass: "laliga"
  },
  {
    id: 2,
    title: "Haaland marca un triplete y el City sigue volando en Premier",
    excerpt: "El noruego no tiene techo. Guardiola celebra y ya piensa en el título de liga como casi asegurado.",
    category: "europa",
    categoryLabel: "Europa",
    date: "31 Ago 2026",
    author: "Carlos M.",
    thumbClass: "europa"
  },
  {
    id: 3,
    title: "El Barça cierra el fichaje bomba del verano: llega el 9 que todos querían",
    excerpt: "Después de semanas de especulación, el delantero firmó esta mañana. Flick ya sonríe.",
    category: "fichajes",
    categoryLabel: "Fichajes",
    date: "30 Ago 2026",
    author: "Laura R.",
    thumbClass: "fichajes"
  },
  {
    id: 4,
    title: "¿Está sobrevalorado el actual Ballon d'Or? La opinión que nadie quiere oír",
    excerpt: "Números, impacto y narrativa. Desgranamos por qué el premio este año genera más debate que nunca.",
    category: "opinion",
    categoryLabel: "Opinión",
    date: "30 Ago 2026",
    author: "Javi S.",
    thumbClass: "opinion"
  },
  {
    id: 5,
    title: "La noche en la que Messi casi se retira: la historia nunca contada",
    excerpt: "Un antiguo compañero revela detalles de aquella final de 2021 que casi cambia el destino del fútbol.",
    category: "historias",
    categoryLabel: "Historias",
    date: "29 Ago 2026",
    author: "Redacción Achicamos",
    thumbClass: "historias"
  },
  {
    id: 6,
    title: "Lakers se imponen a Celtics en un duelo de leyendas modernas",
    excerpt: "LeBron y Doncic brillaron. Boston no encontró respuesta en el último cuarto.",
    category: "nba",
    categoryLabel: "NBA",
    date: "31 Ago 2026",
    author: "Álex P.",
    thumbClass: "nba"
  },
  {
    id: 7,
    title: "Yankees siguen imparables: otro jonrón de Judge y más liderato",
    excerpt: "Nueva York no da respiro. El resto de la División Este mira de reojo.",
    category: "mlb",
    categoryLabel: "MLB",
    date: "30 Ago 2026",
    author: "Marta G.",
    thumbClass: "mlb"
  },
  {
    id: 8,
    title: "Atlético de Madrid sufre pero saca los tres puntos en el Metropolitano",
    excerpt: "Simeone vuelve a demostrar que este equipo no se rinde nunca. Griezmann fue el héroe.",
    category: "laliga",
    categoryLabel: "LaLiga",
    date: "29 Ago 2026",
    author: "Redacción Achicamos",
    thumbClass: "laliga"
  },
  {
    id: 9,
    title: "PSG no encuentra el camino: Luis Enrique pide paciencia",
    excerpt: "Otra jornada sin victoria convincente. El proyecto francés sigue buscando identidad.",
    category: "europa",
    categoryLabel: "Europa",
    date: "28 Ago 2026",
    author: "Carlos M.",
    thumbClass: "europa"
  },
  {
    id: 10,
    title: "El mercado de invierno se calienta: estos son los nombres que suenan",
    excerpt: "Desde la Premier hasta LaLiga, repasamos los movimientos más calientes que se cocinan.",
    category: "fichajes",
    categoryLabel: "Fichajes",
    date: "28 Ago 2026",
    author: "Laura R.",
    thumbClass: "fichajes"
  },
  {
    id: 11,
    title: "Por qué el fútbol español necesita más protagonismo en Europa",
    excerpt: "Análisis: la diferencia de nivel con Premier y cómo se puede recuperar terreno.",
    category: "opinion",
    categoryLabel: "Opinión",
    date: "27 Ago 2026",
    author: "Javi S.",
    thumbClass: "opinion"
  },
  {
    id: 12,
    title: "El día que Zidane decidió ser entrenador: una conversación en el vestuario",
    excerpt: "La historia íntima de cómo el francés pasó de genio en el campo a maestro en el banquillo.",
    category: "historias",
    categoryLabel: "Historias",
    date: "26 Ago 2026",
    author: "Redacción Achicamos",
    thumbClass: "historias"
  },
  {
    id: 13,
    title: "Warriors vuelven a la pelea: Curry sigue siendo Curry",
    excerpt: "Golden State gana de forma convincente y se mete de lleno en la pelea por el playoff.",
    category: "nba",
    categoryLabel: "NBA",
    date: "29 Ago 2026",
    author: "Álex P.",
    thumbClass: "nba"
  },
  {
    id: 14,
    title: "Dodgers consolidan su dominio en la Liga Nacional",
    excerpt: "Ohtani y el resto de estrellas no dan opción. Los Ángeles mira hacia octubre.",
    category: "mlb",
    categoryLabel: "MLB",
    date: "28 Ago 2026",
    author: "Marta G.",
    thumbClass: "mlb"
  },
  {
    id: 15,
    title: "Sevilla y Betis preparan el derbi con dos estilos muy distintos",
    excerpt: "Uno busca estabilidad, el otro ilusión. El derbi sevillano promete emoción.",
    category: "laliga",
    categoryLabel: "LaLiga",
    date: "27 Ago 2026",
    author: "Redacción Achicamos",
    thumbClass: "laliga"
  },
  {
    id: 16,
    title: "Inter y Milan: el derbi de Italia que nadie se quiere perder",
    excerpt: "Dos equipos en forma. Una ciudad dividida. El Calcio en estado puro.",
    category: "europa",
    categoryLabel: "Europa",
    date: "26 Ago 2026",
    author: "Carlos M.",
    thumbClass: "europa"
  }
];

// Toggle menú móvil
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });

    // Cerrar al hacer click en un link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.textContent = '☰';
      });
    });
  }
}

// Buscador
function initSearch() {
  const input = document.querySelector('#search-input');
  const resultsContainer = document.querySelector('#search-results');
  const mainContent = document.querySelector('#main-content');

  if (!input) return;

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();

    if (query.length < 2) {
      if (resultsContainer) resultsContainer.classList.remove('active');
      if (mainContent) mainContent.classList.remove('hidden');
      return;
    }

    const matches = ARTICLES.filter(article => 
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.categoryLabel.toLowerCase().includes(query)
    );

    if (resultsContainer) {
      resultsContainer.classList.add('active');
      if (mainContent) mainContent.classList.add('hidden');

      if (matches.length === 0) {
        resultsContainer.innerHTML = `
          <div class="no-results">
            <h2>No hay resultados para "${e.target.value}"</h2>
            <p>Prueba con otras palabras o categorías.</p>
          </div>
        `;
      } else {
        resultsContainer.innerHTML = `
          <h2>Resultados para "${e.target.value}" (${matches.length})</h2>
          <div class="news-grid">
            ${matches.map(article => createCardHTML(article)).join('')}
          </div>
        `;
      }
    }
  });
}

// Generar HTML de tarjeta
function createCardHTML(article) {
  return `
    <article class="news-card" data-category="${article.category}">
      <div class="thumb ${article.thumbClass}"></div>
      <div class="content">
        <span class="badge">${article.categoryLabel}</span>
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
        <div class="meta">
          <time>${article.date}</time>
          <span>${article.author}</span>
        </div>
      </div>
    </article>
  `;
}

// Renderizar grid de noticias según categoría
function renderNewsGrid(containerSelector, category = null, limit = null) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  let articles = category 
    ? ARTICLES.filter(a => a.category === category)
    : ARTICLES;

  if (limit) articles = articles.slice(0, limit);

  container.innerHTML = articles.map(createCardHTML).join('');
}

// Marcar link activo en el nav
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initSearch();
  setActiveNav();

  // Si hay un grid genérico en la página
  const grid = document.querySelector('#news-grid');
  if (grid) {
    const category = grid.dataset.category || null;
    const limit = grid.dataset.limit ? parseInt(grid.dataset.limit) : null;
    renderNewsGrid('#news-grid', category, limit);
  }
});