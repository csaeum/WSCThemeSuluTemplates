# WSC Theme - JavaScript Struktur

## Übersicht

JavaScript-Dateien für interaktive Block-Funktionen.

## Verzeichnisstruktur

```
public/js/
├── main.js               # Globale JS-Funktionen
└── blocks/               # Block-spezifische JS
    ├── wsc-accordion.js  # Accordion-Funktionalität (falls benötigt)
    ├── wsc-gallery.js    # Galerie-Lightbox, Slider
    ├── wsc-slider.js     # Slider/Carousel
    └── ...
```

## Verwendung

JavaScript-Dateien werden in `templates/base.html.twig` im `javascripts`-Block geladen:

```twig
{% block javascripts %}
    <!-- Bootstrap JS -->
    <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Custom JS -->
    <script src="/js/main.js"></script>
    <script src="/js/blocks/wsc-gallery.js"></script>
{% endblock %}
```

## Beispiel: Gallery Lightbox

```javascript
// public/js/blocks/wsc-gallery.js
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-image');

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            // Lightbox-Logik
        });
    });
});
```

## Best Practices

1. **Vanilla JS bevorzugen** (kein jQuery nötig mit Bootstrap 5)
2. **Event-Delegation** für dynamische Inhalte nutzen
3. **DOMContentLoaded** Event für Initialisierung verwenden
4. **Namespacing** für Block-spezifische Funktionen

## Neuen Block-JS hinzufügen

1. Erstelle `public/js/blocks/wsc-[block-name].js`
2. Füge das Script in `base.html.twig` hinzu
3. Nutze Event-Listener für Interaktivität
