# Achicamos, chavales

Web deportiva moderna, 100% estática y lista para publicar gratis.

## Estructura

```
achicamos-chavales/
├── index.html          → Página de inicio
├── futbol.html
├── laliga.html
├── europa.html
├── fichajes.html
├── opinion.html
├── historias.html
├── nba.html
├── mlb.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── README.md
```

## Cómo publicarla gratis

### Opción 1: GitHub Pages (recomendada)

1. Crea una cuenta en [GitHub](https://github.com) si no tienes.
2. Crea un repositorio nuevo (público) llamado por ejemplo `achicamos-chavales`.
3. Sube todos los archivos de esta carpeta.
4. Ve a **Settings → Pages**.
5. En "Source" elige la rama `main` y la carpeta `/ (root)`.
6. Guarda. En 1-2 minutos tendrás la web en:
   `https://tu-usuario.github.io/achicamos-chavales`

### Opción 2: Cloudflare Pages

1. Entra en [Cloudflare Pages](https://pages.cloudflare.com).
2. Conecta tu GitHub o sube la carpeta directamente.
3. Deploy automático. Dominio gratis incluido.

### Opción 3: Netlify Drop

1. Ve a [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Arrastra la carpeta completa.
3. Listo. Te dan una URL instantánea.

## Características incluidas

- Diseño negro + blanco + naranja potente
- Menú responsive con versión móvil
- Buscador funcional que filtra noticias
- 16 noticias de ejemplo
- Secciones: Inicio, Fútbol, LaLiga, Europa, Fichajes, Opinión, Historias, NBA, MLB
- Totalmente estático (no necesita servidor ni base de datos)

## Personalización rápida

- Cambia el color de acento en `css/styles.css` → variable `--accent`
- Añade más noticias en `js/main.js` → array `ARTICLES`
- Cambia los enlaces de redes sociales en el footer de cada página

---

Hecho con ⚽ para Achicamos, chavales.  
Versión 1 – Agosto 2026
