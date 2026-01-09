# WSC Timeline Block - Dokumentation

## Übersicht

Der **WSC Timeline Block** ist ein animierter Zeitstrahl-Block für Sulu CMS, der Ereignisse und Meilensteine in einer visuell ansprechenden Timeline darstellt. Im Gegensatz zu jQuery-basierten Lösungen nutzt dieser Block **modernes Vanilla JavaScript** mit der Intersection Observer API für bessere Performance.

## Features

### 🎨 Flexible Darstellung
- **Vertikale Timeline**: Links, rechts oder alternierend positioniert
- **Horizontale Timeline**: Scrollbare horizontale Darstellung
- **Auto-Responsive**: Horizontal auf Desktop, vertikal auf mobilen Geräten

### ✨ Animationen
- Smooth fadeIn-Animationen beim Scrollen
- Stufenweise Animation der Timeline-Einträge
- Optional ein-/ausschaltbar
- Progressive Enhancement (funktioniert auch ohne JavaScript)

### 🎯 Timeline-Einträge
Jeder Timeline-Eintrag kann folgende Elemente enthalten:
- **Titel** (Pflichtfeld)
- **Datum/Zeitraum** (z.B. "2024" oder "Januar 2024")
- **Beschreibung** mit HTML-Editor
- **Icon** (FontAwesome)
- **Bild** (optional)
- **Badge/Label** (optional)
- **Icon-Farbe** (8 Bootstrap-Farben)
- **Individuelle CSS-Klasse**
- **Individuelle HTML-ID**

### 🎨 Styling-Optionen
- **Timeline-Linien-Farbe**: 8 Farbvarianten (Primary, Secondary, Success, Danger, Warning, Info, Dark, Light)
- **Karten-Stil**: Mit Rahmen, mit Schatten, kleiner Schatten oder ohne
- **Margin & Padding**: Vollständige Kontrolle über alle Seiten
- **Individuelle CSS-Klasse** für den Haupt-Block
- **Individuelle HTML-ID** für den Haupt-Block

### 🚀 Technologie
- **Vanilla JavaScript** (kein jQuery erforderlich)
- **Intersection Observer API** für performante Scroll-Detection
- **CSS3-Animationen** für flüssige Übergänge
- **Bootstrap 5** kompatibel
- **Responsive Design**
- **Print-optimiert**

## Installation

### 1. Dateien

Der Timeline-Block besteht aus folgenden Dateien:

```
config/templates/blocks/
└── wsc-timeline.xml                # Block-Konfiguration

templates/wsc/blocks/
└── wsc-timeline.html.twig          # Template

assets/
├── css/
│   └── wsc-timeline.css            # Styling
└── js/
    └── wsc-timeline.js             # Animationen
```

### 2. Assets einbinden

Binde die CSS- und JavaScript-Dateien in dein Haupt-Template ein:

```twig
{# In deinem base.html.twig oder Layout-Template #}

{# CSS im <head> #}
<link rel="stylesheet" href="{{ asset('assets/css/wsc-timeline.css') }}">

{# JavaScript vor </body> #}
<script src="{{ asset('assets/js/wsc-timeline.js') }}"></script>
```

### 3. Cache leeren

Nach der Installation den Sulu-Cache leeren:

```bash
bin/console cache:clear
```

Der Block sollte nun im Sulu-Backend unter "Timeline / Zeitstrahl" verfügbar sein.

## Verwendung

### Block hinzufügen

1. Im Sulu-Backend eine Seite öffnen
2. Auf "Block hinzufügen" klicken
3. "Timeline / Zeitstrahl" auswählen
4. Timeline-Einträge hinzufügen und konfigurieren

### Timeline-Eintrag erstellen

Für jeden Eintrag kannst du folgende Felder ausfüllen:

| Feld | Typ | Beschreibung | Pflicht |
|------|-----|--------------|---------|
| Titel | Text | Überschrift des Eintrags | Ja |
| Datum/Zeitraum | Text | z.B. "2024", "Januar 2024", "Q1 2024" | Nein |
| Badge/Label | Text | Kleines Label/Tag über dem Titel | Nein |
| Icon | Text | FontAwesome-Icon, z.B. "fa-calendar" | Nein |
| Icon-Farbe | Select | Bootstrap-Farbe für das Icon | Nein |
| Beschreibung | HTML-Editor | Ausführliche Beschreibung | Nein |
| Bild | Media | Optionales Bild | Nein |
| CSS-Klasse | Text | Individuelle CSS-Klasse für diesen Eintrag | Nein |
| HTML-ID | Text | Individuelle HTML-ID für diesen Eintrag | Nein |

## Konfiguration

### Layout-Optionen

#### Ausrichtung
- **Vertikal**: Klassische vertikale Timeline
- **Horizontal**: Horizontale, scrollbare Timeline
- **Auto**: Responsive - horizontal auf Desktop (≥992px), vertikal auf Mobile

#### Position (nur bei vertikaler Timeline)
- **Links**: Alle Einträge links von der Timeline-Linie
- **Rechts**: Alle Einträge rechts von der Timeline-Linie
- **Alternierend**: Einträge wechseln links/rechts (ab Tablet-Größe)

#### Anzeige-Optionen
- **Scroll-Animation aktivieren**: FadeIn-Effekt beim Scrollen
- **Daten anzeigen**: Datum-Badges ein-/ausblenden
- **Bilder anzeigen**: Bilder in Einträgen ein-/ausblenden
- **Icons anzeigen**: Icons in Markern ein-/ausblenden

### Styling

#### Timeline-Linie Farbe
Wähle aus 8 Bootstrap-Farben:
- Primary (Standard-Blau)
- Secondary (Grau)
- Success (Grün)
- Danger (Rot)
- Warning (Gelb)
- Info (Cyan)
- Dark (Dunkel)
- Light (Hell)

#### Karten-Stil
- **Mit Rahmen**: Border um die Karte
- **Mit Schatten**: Dezenter Schatten (Standard)
- **Mit kleinem Schatten**: Subtilerer Schatten
- **Kein Rahmen/Schatten**: Minimalistischer Look

### Margin & Padding

Wie bei allen WSC-Blöcken kannst du für jede Seite (oben, unten, links, rechts) individuell Abstände definieren:
- **Margin** (Außenabstand): 0-5 und Auto
- **Padding** (Innenabstand): 0-5

### Erweiterte Optionen

- **CSS-Klasse**: Zusätzliche CSS-Klasse für den Haupt-Container
- **HTML-ID**: ID-Attribut für den Haupt-Container (z.B. für Anker-Links)

## Beispiele

### Beispiel 1: Unternehmensgeschichte (Vertikal, Alternierend)

**Konfiguration:**
- Ausrichtung: Vertikal
- Position: Alternierend
- Animation: Aktiviert
- Timeline-Farbe: Primary

**Timeline-Einträge:**
```
1. Gründung (2010) - Icon: fa-rocket
2. Erstes Produkt (2012) - Icon: fa-box
3. Expansion (2015) - Icon: fa-globe
4. 100 Mitarbeiter (2020) - Icon: fa-users
5. Heute (2024) - Icon: fa-star
```

### Beispiel 2: Projekt-Roadmap (Horizontal)

**Konfiguration:**
- Ausrichtung: Horizontal
- Animation: Aktiviert
- Timeline-Farbe: Info
- Karten-Stil: Mit Schatten

**Timeline-Einträge:**
```
Q1 2024 - Planung - Icon: fa-clipboard
Q2 2024 - Entwicklung - Icon: fa-code
Q3 2024 - Testing - Icon: fa-flask
Q4 2024 - Launch - Icon: fa-rocket
```

### Beispiel 3: Responsive Timeline (Auto)

**Konfiguration:**
- Ausrichtung: Auto
- Animation: Aktiviert
- Timeline-Farbe: Success

Wird automatisch horizontal auf Desktop und vertikal auf Mobile dargestellt.

## JavaScript API

### Auto-Initialisierung

Das Skript initialisiert sich automatisch beim Laden der Seite. Alle `.wsc-timeline-wrapper` Elemente werden automatisch erkannt.

### Manuelle Re-Initialisierung

Wenn du Timelines dynamisch nachladest (z.B. via AJAX), kannst du die Initialisierung manuell triggern:

```javascript
// Nach dem Laden von dynamischem Inhalt
window.wscTimelineReinit();
```

### Controller-Zugriff

Die Timeline-Controller sind global verfügbar:

```javascript
// Zugriff auf alle aktiven Controller
console.log(window.wscTimelineControllers);

// Manuelles Cleanup
window.wscTimelineControllers.forEach(ctrl => ctrl.destroy());
```

## CSS-Anpassungen

### Eigene Farben definieren

Du kannst eigene Farben für die Timeline-Linie über CSS-Variablen definieren:

```css
/* Eigene Primary-Farbe */
:root {
    --bs-primary: #your-color;
}

/* Oder spezifisch für Timeline */
.wsc-timeline-primary::before {
    background-color: #your-color;
}
```

### Animationen anpassen

Die Animation-Geschwindigkeit und -Art kann über CSS überschrieben werden:

```css
.wsc-timeline-item.wsc-timeline-visible {
    transition: opacity 1s ease-out, transform 1s ease-out; /* Langsamer */
}

/* Andere Animation-Art */
.wsc-timeline-item.wsc-timeline-animate {
    transform: scale(0.8) translateY(30px); /* Scale + Translate */
}
```

### Abstände anpassen

```css
/* Größerer Abstand zwischen Einträgen */
.wsc-timeline-item {
    margin-bottom: 4rem;
}

/* Timeline-Linie dicker */
.wsc-timeline-vertical::before {
    width: 5px;
}
```

## Browser-Kompatibilität

### Unterstützte Browser
- Chrome/Edge (88+)
- Firefox (55+)
- Safari (12.1+)
- Opera (75+)

### Fallback für ältere Browser
Bei Browsern ohne Intersection Observer Support werden alle Items sofort ohne Animation angezeigt (Progressive Enhancement).

## Performance

### Optimierungen
- ✅ Intersection Observer API (keine Scroll-Events)
- ✅ CSS3-Animationen (GPU-beschleunigt)
- ✅ Vanilla JavaScript (keine jQuery-Abhängigkeit)
- ✅ Lazy Animation (Items werden nur beobachtet, bis sie animiert wurden)

### Best Practices
- Verwende nicht mehr als 20-30 Timeline-Einträge pro Block
- Bei sehr vielen Einträgen: Horizontale Timeline mit Scrolling
- Optimiere Bilder vor dem Upload (WebP, komprimiert)

## Accessibility

### Barrierefreiheit
- ✅ Semantisches HTML
- ✅ Funktioniert ohne JavaScript
- ✅ Keyboard-Navigation möglich
- ✅ Screen-Reader freundlich
- ✅ Print-optimiert

### Empfehlungen
- Verwende aussagekräftige Titel
- Füge Alt-Texte für Bilder hinzu
- Nutze HTML-IDs für Anker-Links
- Teste mit deaktiviertem JavaScript

## Fehlerbehebung

### Timeline wird nicht angezeigt
- Cache geleert? `bin/console cache:clear`
- CSS/JS korrekt eingebunden?
- Block im Backend hinzugefügt?
- Mindestens ein Timeline-Eintrag vorhanden?

### Animationen funktionieren nicht
- JavaScript-Datei geladen? (Browser-Konsole prüfen)
- Animation im Backend aktiviert?
- Browser unterstützt Intersection Observer?

### Styling-Probleme
- Bootstrap 5 vorhanden?
- CSS-Datei nach Bootstrap eingebunden?
- Browser-Cache geleert?
- CSS-Spezifität prüfen (ggf. `!important` verwenden)

## Changelog

### Version 1.0.0 (2024)
- ✨ Initial Release
- ✅ Vertikale, horizontale und responsive Timeline
- ✅ Scroll-Animationen mit Intersection Observer
- ✅ 8 Farbvarianten
- ✅ Volle Margin/Padding-Kontrolle
- ✅ CSS-Klassen und IDs auf beiden Ebenen
- ✅ FontAwesome Icon-Support
- ✅ Media-Support für Bilder
- ✅ Responsive Design
- ✅ Print-Styles

## Credits

Entwickelt für Sulu CMS mit Inspiration vom Contao Animated Timeline Bundle.

**Technologie-Stack:**
- Sulu CMS
- Bootstrap 5
- FontAwesome Icons
- Vanilla JavaScript (ES6+)
- Intersection Observer API

## Lizenz

Dieses Projekt ist Teil der WSC Theme Sulu Templates.

---

**Fragen oder Probleme?** Erstelle ein Issue im Repository oder kontaktiere den Support.
