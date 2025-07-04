---
layout: default
title: Home
---

*Der digitale Wald, in dem Kreativität und Technologie aufeinander treffen.*

# Willkommen auf meiner Website, die meine Leidenschaft für IT-Projekte zeigt.

Diese Website wird mit [Jekyll](https://jekyllrb.com/), einem modernen Static-Site-Generator, erstellt und auf **GitHub Pages** gehostet, um eine moderne und interaktive Benutzererfahrung zu bieten. Der vollständige Quellcode ist in meinem [GitHub](https://github.com/rubin-hood/blog)-Repository verfügbar.

Viele Menschen finden IT schwer verständlich, da ein Großteil des Wissens komplex oder schwer zugänglich ist. So wie Robin Hood sein Wissen mit allen teilte, möchte Rubin Hood IT-Wissen auf einfache Weise vermitteln, sodass es jeder verstehen kann. Ich möchte Menschen dabei helfen, IT zu lernen, indem ich es klar und kostenlos zugänglich mache – wie ein moderner Robin Hood, aber für technisches Wissen.

<div class="blog-teaser-grid">
  {% for post in paginator.posts %}
<a class="blog-card" href="{{ post.url | relative_url }}">
  <div class="card-img">
    {% if post.image %}
      <img src="{{ post.image }}" alt="{{ post.title }}" loading="lazy">
    {% else %}
      Bild
    {% endif %}
  </div>
  <div class="card-content">
    <div class="card-title">{{ post.title }}</div>
    <div class="card-desc">{{ post.excerpt | strip_html | truncate: 140 }}</div>
  </div>
</a>
  {% endfor %}
</div>

<ul>
  {% for post in site.posts %}
    <li>{{ post.title }} - {{ post.date }}</li>
  {% endfor %}
</ul>


<div class="pagination">
  {% if paginator.previous_page %}
    <a class="prev" href="{{ paginator.previous_page_path | prepend: site.baseurl }}">« Zurück</a>
  {% endif %}
  <span>Seite {{ paginator.page }} von {{ paginator.total_pages }}</span>
  {% if paginator.next_page %}
    <a class="next" href="{{ paginator.next_page_path | prepend: site.baseurl }}">Weiter »</a>
  {% endif %}
</div>

