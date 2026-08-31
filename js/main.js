document.addEventListener('DOMContentLoaded', () => {
  fetchNews();
});

async function fetchNews() {
  const container = document.getElementById('news-grid');
  if (!container) return;

  try {
    const response = await fetch('https://api.github.com/repos/mateonavarrogarcia/achicamos-chavales/contents/content/noticias');
    if (!response.ok) return;

    const files = await response.json();
    container.innerHTML = '';

    for (const file of files) {
      if (file.name.endsWith('.json')) {
        const resContent = await fetch(file.download_url);
        const data = await resContent.json();
        
        const articleCard = document.createElement('article');
        articleCard.className = 'news-card';
        
        articleCard.innerHTML = `
          <div class="content" style="padding: 20px; background: #1a1a1a; border-radius: 8px; margin-bottom: 15px;">
            <span style="color: #ff3333; font-weight: bold; font-size: 0.8rem; text-transform: uppercase;">${data.category || 'Noticia'}</span>
            <h3 style="color: #fff; margin: 10px 0;">${data.title}</h3>
            <p style="color: #ccc; font-size: 0.9rem;">Publicado el: ${new Date(data.date).toLocaleDateString()}</p>
          </div>
        `;
        container.appendChild(articleCard);
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
