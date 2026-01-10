# WSC Theme - CSS Struktur

## Übersicht

Die CSS-Dateien sind modular aufgebaut und nach Funktion organisiert.

## Verzeichnisstruktur

```
public/css/
├── variables.css          # CSS-Variablen (Farben, Abstände, etc.)
├── main.css              # Globale Styles
├── header.css            # Top Bar + Main Header
├── footer.css            # Footer Styles
└── blocks/               # Block-spezifische CSS
    ├── wsc-accordion.css
    ├── wsc-container.css
    ├── wsc-cta.css
    ├── wsc-divider.css
    ├── wsc-faq.css
    ├── wsc-headline.css
    ├── wsc-image-gallery.css
    ├── wsc-list-group.css
    ├── wsc-quote.css
    ├── wsc-smart-content.css
    ├── wsc-table.css
    ├── wsc-text.css
    ├── wsc-text-image.css
    ├── wsc-timeline.css
    └── wsc-video.css
```

## Lade-Reihenfolge

Alle CSS-Dateien werden in `templates/base.html.twig` in dieser Reihenfolge geladen:

1. Bootstrap CSS
2. FontAwesome CSS
3. `variables.css` (Variablen zuerst!)
4. `main.css` (Globale Styles)
5. `header.css`
6. `footer.css`
7. Alle Block-CSS-Dateien

## CSS-Variablen

Alle Farben, Abstände und andere Werte sind als CSS-Variablen in `variables.css` definiert:

```css
--color-primary: #d4a574;
--color-dark: #1a1a1a;
--spacing-md: 20px;
--font-size-base: 16px;
```

## Neuen Block hinzufügen

1. Erstelle eine neue CSS-Datei in `public/css/blocks/wsc-[block-name].css`
2. Füge die Datei in `templates/base.html.twig` im `style`-Block hinzu
3. Nutze CSS-Variablen aus `variables.css` für Konsistenz

## JavaScript

JavaScript-Dateien werden in `public/js/` gespeichert (noch nicht implementiert).

## Wartung

- **Farben ändern:** Nur in `variables.css` anpassen
- **Block-Styles:** In der entsprechenden Block-CSS-Datei
- **Globale Styles:** In `main.css`
