// ================================
// Alles erst nach Laden der Seite!
document.addEventListener('DOMContentLoaded', function() {

  // ================================
  // 1. Burger-Menü: Öffnen & Schließen
  // ================================
  var burger = document.getElementById('burger-btn');
  var menu = document.getElementById('mobile-menu');

  if (burger && menu) {
    burger.addEventListener('click', function() {
      menu.classList.toggle('open');
      burger.classList.toggle('open');
      document.body.classList.toggle('noscroll');
    });

    window.addEventListener('resize', function() {
      if (window.innerWidth > 900) {
        menu.classList.remove('open');
        burger.classList.remove('open');
        document.body.classList.remove('noscroll');
      }
    });
  }

  // ================================
  // 2. Lazy Animation für Blog-Cards
  // ================================
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      // Nur die sichtbaren Elemente animieren (Staffelung!)
      const visible = entries.filter(entry => entry.isIntersecting);
      visible.forEach((entry, i) => {
        setTimeout(() => {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target); // Nur 1x animieren
        }, i * 100); // 100ms Staffelung
      });
    }, {
      threshold: 0,
      rootMargin: '0px'
    });

    document.querySelectorAll('.blog-card').forEach(card => {
      observer.observe(card);
    });
  } else {
    // Fallback für alte Browser: Sofort anzeigen
    document.querySelectorAll('.blog-card').forEach(card => {
      card.classList.add('appear');
    });
  }

  // ================================
  // 3. Progressive Sticky Header Animation
  // ================================
  (function() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    const logoImg = header.querySelector('.logo img');
    if (!logoImg) return;

    // Parameter für das Animation-Intervall
    const maxScroll = 20;
    const maxHeight = 110;
    const minHeight = 0;
    const maxLogo = 100;
    const minLogo = 0;
    const maxPadding = 2;
    const minPadding = 0;

    window.addEventListener('scroll', function() {
      let scroll = window.scrollY;
      if (scroll < 0) scroll = 0;
      if (scroll > maxScroll) scroll = maxScroll;

      const t = scroll / maxScroll;

      // Dynamische Werte berechnen und setzen
      const newHeight = maxHeight - (maxHeight - minHeight) * t;
      const newLogo = maxLogo - (maxLogo - minLogo) * t;
      const newPadding = maxPadding - (maxPadding - minPadding) * t;
      const newOpacity = 1 - t;

      header.style.setProperty('--header-height', `${newHeight}px`);
      header.style.setProperty('--header-padding', `${newPadding}rem`);
      header.style.setProperty('--header-opacity', newOpacity);
      logoImg.style.setProperty('--logo-height', `${newLogo}px`);
    });
  })();

  // ================================
  // 4. Lazy-Loading für Bilder
  // ================================
  document.querySelectorAll('img:not([loading])').forEach(img => {
    img.setAttribute('loading', 'lazy');
  });

});



let posts = [];
let searchJsonLoaded = false;

function animateBlogCards(parentSelector) {
  const cards = document.querySelectorAll(parentSelector + ' .blog-card');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      const visible = entries.filter(entry => entry.isIntersecting);
      visible.forEach((entry, i) => {
        setTimeout(() => {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }, i * 100);
      });
    }, {
      threshold: 0,
      rootMargin: '0px'
    });
    cards.forEach(card => {
      observer.observe(card);
    });
  } else {
    cards.forEach(card => card.classList.add('appear'));
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const searchbox = document.getElementById('searchbox');
  const searchbtn = document.getElementById('search-btn');
  const searchresults = document.getElementById('searchresults');
  const searchinfo = document.getElementById('searchinfo');
  const allposts = document.getElementById('all-posts');
  const pagination = document.querySelector('.pagination');

  // Initiale Blog-Cards animieren
  animateBlogCards('#all-posts');

  function loadAndSearch() {
    if (!searchJsonLoaded) {
      fetch('{{ "/search.json" | relative_url }}')
        .then(response => response.json())
        .then(function(json){
          posts = json;
          searchJsonLoaded = true;
          performSearch();
        });
    } else {
      performSearch();
    }
  }

  function performSearch() {
    let query = searchbox.value.trim();
    if (query.length < 3) {
      searchresults.innerHTML = '';
      searchinfo.innerHTML = '';
      allposts.style.display = '';
      if(pagination) pagination.style.display = '';
      return;
    }
    let results = posts.filter(post =>
      post.content.toLowerCase().includes(query.toLowerCase()) ||
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    let out = '';
    let info = '';
    if (results.length) {
      info = `<div class="search-info">${results.length} Treffer gefunden</div>`;
      out = results.map(post => {
        // Datum
        let date = '';
        if (post.date) {
          const d = new Date(post.date);
          date = `<time class="card-date">${d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}</time>`;
        }
        // Highlight
        let re = new RegExp('('+query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')+')','gi');
        let title = post.title.replace(re, '<b style="color:#AA0600;font-weight:bold;">$1</b>');
        let snippet = post.content;
        let idx = snippet.toLowerCase().indexOf(query.toLowerCase());
        if (idx > -1) {
          snippet = snippet.substring(Math.max(0, idx-60), idx+80);
        } else {
          snippet = snippet.substring(0, 140);
        }
        let excerpt = snippet.replace(re, '<b style="color:#AA0600;font-weight:bold;">$1</b>');
        return `
        <a class="blog-card" href="${post.url}">
          <div class="card-img">
            ${post.image ? `<img src="${post.image}" alt="${post.title}" loading="lazy">` : 'Bild'}
          </div>
          <div class="card-content">
            <div class="card-title">${title}</div>
            ${date}
            <div class="card-desc">${excerpt}</div>
          </div>
        </a>
        `;
      }).join('');
    } else {
      info = `<div class="search-info notfound">Keine Treffer gefunden.</div>`;
      out = '';
    }
    allposts.style.display = 'none';
    if(pagination) pagination.style.display = 'none';
    searchinfo.innerHTML = info;
    searchresults.innerHTML = out;

    // NEU: Such-Karten animieren
    animateBlogCards('#searchresults');
  }

  searchbtn.addEventListener('click', loadAndSearch);
  searchbox.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') loadAndSearch();
  });
});
