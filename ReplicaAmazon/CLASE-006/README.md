# CLASE-006 — Replica layout estilo Amazon Prime/Prime Video (solo UI)

Este proyecto reproduce el diseño general (layout) de la página principal de un servicio estilo Prime/Prime Video únicamente con HTML + CSS, sin frameworks ni JavaScript.

## ¿Qué se replicó?

- Navbar oscura y sticky con marca ficticia, menú, buscador (UI), usuario y botones.
- Hero principal con fondo oscuro/gradiente y llamado a la acción.
- Filas tipo carrusel con posters (placeholders) y hover suave.
- Sección opcional en grid (“Top 10”).
- Footer con links en columnas, estilo oscuro.

## Dónde se usó Grid y Flexbox

- CSS Grid: layout principal (`.app`), sección Top 10 (`.top-grid`) y columnas del footer (`.footer-cols`).
- Flexbox: navbar, menú, acciones del hero, y carruseles (`.cards.scroller`).

## Responsive

- Breakpoints: Desktop (>=1024px), Tablet (<=1024px y >=768px), Mobile (<=480px).
- En mobile: menú colapsado (icono “hamburger” solo visual), carruseles con scroll horizontal y `scroll-snap`.

## Cómo ejecutar

- Abrir el archivo `index.html` en un navegador.

## Notas

- Imágenes y textos son placeholders (p. ej. via.placeholder.com); no se usan logos ni marcas reales.
