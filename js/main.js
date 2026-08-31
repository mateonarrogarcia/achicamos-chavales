/* ==========================================
   ACHICAMOS, CHAVALES - Carga Dinámica CMS
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  fetchNews();
});

async function fetchNews() {
  const container = document.getElementById('news-grid');
  if (!container) return;

  try {
    // Busca las noticias subidas desde el CMS
    const response = await fetch('https://api.github.com/repos/mateonavarrogarcia/achicamos-chavales/contents/content/noticias');
    
    if (!response.ok) {
      container.innerHTML = '<p>No hay noticias publicadas todavía.</p>';
      return;
    }

    const files = await response.json();
    container.innerHTML = '';

    // Filtra solo archivos .md o .json de la carpeta
    for (const file of files) {
      if (file.name.endsWith('.md') || file.name.endsWith('.json')) {
        const resContent = await fetch(file.download_url);
        const text = await resContent.text();
        
        // Renderiza cada tarjeta de noticia
        const articleCard = document.createElement('article');
        articleCard.className = 'news-card';
        articleCard.innerHTML = `
          <div class="content">
            <h3>${file.name.replace(/-/g, ' ').replace('.md', '').toUpperCase()}</h3>
            <p>Haz clic para leer la noticia completa.</p>
            <a href="${file.html_url}" target="_blank">Leer más</a>
          </div>
        `;
        container.appendChild(articleCard);
      }
    }
  } catch (error) {
    console.error('Error cargando noticias:', error);
    container.innerHTML = '<p>Error al cargar las noticias.</p>';
  }
}
