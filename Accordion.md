# WSC Accordion Block - Dokumentation

## Übersicht

Der **WSC Accordion Block** ist ein **Meta-Accordion** für Sulu CMS - ein universeller Container-Block, der **alle anderen Blöcke** in sich aufnehmen kann. Im Gegensatz zu einem normalen Accordion mit nur Text-Content, kannst du hier komplette Block-Strukturen in jedem Accordion-Item platzieren: Timelines, Tabellen, CTAs, Cards, sogar weitere Spalten-Layouts!

**Das macht diesen Block einzigartig:**
- 🎯 Jeder Accordion-Eintrag ist ein **Container für beliebige andere Blöcke**
- 📦 **Alle deine WSC-Blöcke** sind verfügbar (Timeline, Table, CTA, Columns, etc.)
- 🔄 Zwei Modi: **Accordion** (nur eines offen) vs. **Collapse** (mehrere offen)
- 🎨 Icon & Badge Support im Header
- 🆔 **Automatische ID-Generierung** (optional eigene IDs)

## Das Konzept: Meta-Accordion

### Normales Accordion (Text-Only)
```
┌─ Frage 1 ────────────┐
│ Antwort als Text...  │
└──────────────────────┘
```

### WSC Meta-Accordion (Block-Container)
```
┌─ Sektion 1 ──────────────────────┐
│ ┌─ Timeline Block ──────────┐   │
│ │ • Event 1                  │   │
│ │ • Event 2                  │   │
│ └────────────────────────────┘   │
│                                   │
│ ┌─ CTA Block ───────────────┐   │
│ │ [Jetzt kaufen]             │   │
│ └────────────────────────────┘   │
└───────────────────────────────────┘
```

## Features

### 📋 Accordion-Items (Repeater)
**Pro Item:**
- **Titel** (mandatory) - Header-Text
- **Icon** (optional) - FontAwesome Icon vor dem Titel
- **Badge** (optional) - "NEU", "HOT", etc. mit 7 Farben
- **Content** - **Alle deine Blöcke!**
  - Timeline, Table, CTA, Columns
  - Text-Image, List-Group, Smart-Content
  - Image-Gallery, Headline
  - Sogar verschachtelte Columns!
- **CSS-Klasse** - Individuelle Klasse pro Item
- **HTML-ID** - Optional eigene ID (sonst automatisch)

### ⚙️ Accordion-Einstellungen
- **Erstes Element geöffnet** - Initial state
- **Mehrere gleichzeitig öffnen** - Accordion vs. Collapse Modus
- **Flush** - Ohne Außenrahmen (minimalistisch)

### 🎨 Styling
- **Accordion-Stil**: Standard, Bordered (mit Rahmen), Shadow (mit Schatten)
- **Header Hintergrund-Farbe**: Standard, Primary, Secondary, Light, Dark

### 📏 Spacing & Advanced
- **Margin & Padding**: Alle 4 Seiten (0-5, Auto)
- **CSS-Klasse**: Für das gesamte Accordion
- **HTML-ID**: Für das gesamte Accordion (optional, sonst automatisch)

## Installation

### 1. Dateien

```
config/templates/blocks/
└── wsc-accordion.xml               # Block-Konfiguration

templates/wsc/blocks/
└── wsc-accordion.html.twig         # Template

assets/css/
└── wsc-accordion.css               # Styling & Enhancements
```

### 2. Assets einbinden

```twig
{# In deinem base.html.twig oder Layout-Template #}

{# CSS im <head> #}
<link rel="stylesheet" href="{{ asset('assets/css/wsc-accordion.css') }}">
```

**Wichtig:** Bootstrap 5 JavaScript muss eingebunden sein für die Accordion-Funktionalität!

### 3. Cache leeren

```bash
bin/console cache:clear
```

Der Block sollte nun im Sulu-Backend unter "Accordion (mit verschachtelten Blöcken)" verfügbar sein.

## Verwendung

### Block hinzufügen

1. Im Sulu-Backend eine Seite öffnen
2. Auf "Block hinzufügen" klicken
3. "Accordion (mit verschachtelten Blöcken)" auswählen
4. Accordion-Einträge hinzufügen
5. Pro Eintrag: Titel + beliebige andere Blöcke einfügen

### Accordion-Item erstellen

**Schritt 1: Eintrag hinzufügen**
- Titel eingeben (z.B. "Produktdetails")
- Optional: Icon (z.B. `fa-info-circle`)
- Optional: Badge ("NEU")

**Schritt 2: Blöcke hinzufügen**
- Im "Inhalt"-Bereich: "Block hinzufügen" klicken
- Beliebige Blöcke auswählen (Timeline, CTA, Table, etc.)
- Mehrere Blöcke pro Item möglich!

**Schritt 3: Optional CSS/ID**
- Eigene CSS-Klasse für dieses Item
- Eigene HTML-ID (wenn nicht gesetzt → automatisch generiert)

## Die zwei Modi

### 🎯 Accordion-Modus (Standard)
**"Nur ein Item offen"**

```
Einstellung: "Mehrere gleichzeitig öffnen" = AUS (deaktiviert)
```

**Verhalten:**
- ✅ Nur ein Item kann offen sein
- ✅ Beim Öffnen eines Items schließt sich das vorherige
- ✅ Klassisches Accordion-Verhalten
- ✅ Spart Platz, übersichtlich

**Ideal für:**
- FAQs (nur eine Antwort sichtbar)
- Produkt-Features (fokussierte Darstellung)
- Lange Listen (weniger Scrollen)

---

### 🔄 Collapse-Modus
**"Mehrere Items offen"**

```
Einstellung: "Mehrere gleichzeitig öffnen" = AN (aktiviert)
```

**Verhalten:**
- ✅ Mehrere Items können gleichzeitig offen sein
- ✅ Jedes Item funktioniert unabhängig
- ✅ Verhält sich wie mehrere Collapse-Elemente
- ✅ Mehr Inhalt gleichzeitig sichtbar

**Ideal für:**
- Vergleiche (mehrere Sektionen nebeneinander)
- Umfangreiche Inhalte
- Wenn User mehrere Bereiche gleichzeitig sehen sollen

---

**Technischer Unterschied:**
```html
<!-- Accordion-Modus (nur eines offen) -->
<div class="accordion-collapse" data-bs-parent="#accordion-123">

<!-- Collapse-Modus (mehrere offen) -->
<div class="accordion-collapse">  <!-- KEIN data-bs-parent -->
```

## Automatische ID-Generierung

### Warum IDs wichtig sind

Bootstrap Accordion benötigt **eindeutige IDs** für:
- Das Accordion selbst (`data-bs-parent`)
- Jeden Header (`id` für `aria-labelledby`)
- Jeden Collapse-Bereich (`id` für `data-bs-target`)

### Wie es funktioniert

**Haupt-Accordion:**
```
User gibt HTML-ID: "mein-accordion"
→ Template nutzt: "mein-accordion"

User gibt KEINE HTML-ID:
→ Template generiert: "accordion-1234567890"
```

**Pro Item:**
```
User gibt HTML-ID: "item-produkte"
→ Template nutzt: "item-produkte"
→ Collapse-ID: "item-produkte-collapse"
→ Header-ID: "item-produkte-header"

User gibt KEINE HTML-ID:
→ Template generiert: "accordion-1234567890-item-1"
→ Collapse-ID: "accordion-1234567890-item-1-collapse"
→ Header-ID: "accordion-1234567890-item-1-header"
```

**Vorteil:**
- ✅ Du musst keine IDs eingeben (automatisch)
- ✅ Du kannst aber eigene IDs setzen (z.B. für Anker-Links)
- ✅ Keine ID-Konflikte möglich

## Beispiele

### Beispiel 1: FAQ Accordion

**Konfiguration:**
```
Accordion-Einstellungen:
  - Erstes Element geöffnet: Ja
  - Mehrere gleichzeitig öffnen: Nein (Accordion-Modus)
  - Accordion-Stil: Standard
```

**Items:**

**Item 1: "Wie registriere ich mich?"**
```
Icon: fa-user-plus
Inhalt:
  - Text-Image Block (Screenshot mit Anleitung)
  - CTA Block (Button "Zur Registrierung")
```

**Item 2: "Was kostet der Service?"**
```
Icon: fa-euro-sign
Badge: "NEU"
Inhalt:
  - Table Block (Preistabelle mit 3 Paketen)
  - CTA Block (Button "Jetzt kaufen")
```

**Item 3: "Gibt es Support?"**
```
Icon: fa-headset
Inhalt:
  - List-Group Block (Kontaktmöglichkeiten)
  - CTA Block (Button-Gruppe: "Email" + "Telefon")
```

---

### Beispiel 2: Produkt-Features Accordion

**Konfiguration:**
```
Accordion-Einstellungen:
  - Erstes Element geöffnet: Ja
  - Mehrere gleichzeitig öffnen: Ja (Collapse-Modus)
  - Accordion-Stil: Shadow
  - Header Hintergrund: Primary
```

**Items:**

**Item 1: "Feature Timeline"**
```
Icon: fa-timeline
Inhalt:
  - Timeline Block (vertikal, alternierend)
    • 2020: Erste Version
    • 2022: Großes Update
    • 2024: KI-Integration
```

**Item 2: "Technische Details"**
```
Icon: fa-cog
Inhalt:
  - Columns Block (2 Spalten)
    Spalte 1:
      - Headline "Server"
      - List-Group (Specs)
    Spalte 2:
      - Headline "Client"
      - List-Group (Requirements)
```

**Item 3: "Preise & Pakete"**
```
Icon: fa-tag
Badge: "SALE" (Danger)
Inhalt:
  - Smart-Content Block (Cards, 3 Spalten)
    → Zeigt Produkt-Pages als Cards
  - CTA Block (Hero mit Rabatt-Banner)
```

---

### Beispiel 3: Landingpage Sections

**Konfiguration:**
```
Accordion-Einstellungen:
  - Erstes Element geöffnet: Nein (alle geschlossen)
  - Mehrere gleichzeitig öffnen: Ja
  - Accordion-Stil: Bordered
  - Flush: Ja
```

**Items:**

**Item 1: "Über uns"**
```
Icon: fa-building
Inhalt:
  - Text-Image Block (Bild links, Text rechts)
  - CTA Block (Button "Mehr erfahren")
```

**Item 2: "Unsere Services"**
```
Icon: fa-briefcase
Inhalt:
  - Columns Block (3 Spalten)
    Jede Spalte:
      - Image-Gallery Block
      - CTA Block (Button)
```

**Item 3: "Portfolio"**
```
Icon: fa-images
Inhalt:
  - Smart-Content Block (Grid, 4 Spalten)
    → Zeigt Portfolio-Einträge
```

**Item 4: "Kontakt"**
```
Icon: fa-envelope
Inhalt:
  - Columns Block (2 Spalten)
    Spalte 1: CTA Block (Kontaktformular-Link)
    Spalte 2: Text-Image (Adresse + Karte)
```

---

### Beispiel 4: Verschachteltes Layout

**Item: "Komplexe Sektion"**
```
Icon: fa-layer-group
Inhalt:
  1. Headline Block ("Unsere Lösungen")

  2. Columns Block (2 Spalten)
     Spalte 1:
       - Timeline Block
       - CTA Block
     Spalte 2:
       - Table Block
       - Image-Gallery Block

  3. CTA Block (Hero-Banner)

  4. Smart-Content Block (Slider)
```

→ Ein einzelnes Accordion-Item kann ein komplettes Layout enthalten!

## Best Practices

### ✅ Empfehlungen

**1. Struktur planen**
- Überlege dir die Accordion-Struktur vor dem Anlegen
- Gruppiere zusammengehörige Inhalte in Items
- Nicht zu viele Items (max. 10-15)

**2. Titel aussagekräftig wählen**
- ✅ "Produktdetails & Spezifikationen"
- ✅ "Häufig gestellte Fragen"
- ❌ "Sektion 1"
- ❌ "Info"

**3. Icons gezielt einsetzen**
- Unterstützen die Bedeutung
- Konsistente Icon-Familie (alle solid oder alle regular)
- Nicht bei jedem Item ein Icon (kann überladen wirken)

**4. Badge sparsam nutzen**
- Nur für wirklich wichtige Highlights
- Zeitlich begrenzt ("NEU" nach 2 Wochen entfernen)
- Max. 1-2 Badges pro Accordion

**5. Verschachtelte Blöcke organisieren**
- Pro Item nicht mehr als 5-6 Blöcke
- Logische Reihenfolge (z.B. erst Text, dann CTA)
- Spacing beachten (verschachtelte Blöcke haben eigene Margins)

**6. Modi richtig wählen**
- **FAQ:** Accordion-Modus (nur eines offen)
- **Feature-Vergleich:** Collapse-Modus (mehrere offen)
- **Lange Seiten:** Accordion-Modus (weniger Scrollen)

**7. Performance beachten**
- Nicht zu viele schwere Blöcke pro Item (z.B. 10 Image-Galleries)
- Smart-Content mit Pagination nutzen bei vielen Items
- Bilder optimieren

**8. Accessibility**
- Aussagekräftige Titel (Screen-Reader)
- Logische Reihenfolge der Items
- Testen mit Tastatur-Navigation (Tab, Enter, Space)

### ❌ Vermeiden

1. **Zu viele Items**
   - Nicht 50 Accordion-Items auf einer Seite
   - Besser aufteilen oder anders darstellen

2. **Leere Items**
   - Jedes Item sollte mindestens einen Block enthalten
   - Leere Items verwirren User

3. **Zu verschachtelt**
   - Accordion → Columns → Accordion → Columns = zu komplex
   - Max. 2-3 Ebenen tief

4. **Inkonsistente Struktur**
   - Nicht: Item 1 hat CTA, Item 2 hat Timeline, Item 3 hat Text
   - Besser: Alle Items haben ähnliche Struktur

5. **Titel als Content**
   - Nicht den kompletten Text in den Titel
   - Titel = Überschrift, Content = Details

## Styling-Optionen

### Standard-Styles

**Standard (Default):**
```
Normales Bootstrap Accordion
Weiße Header, graue Borders
```

**Bordered:**
```
CSS-Klasse wird automatisch gesetzt
Zusätzlicher äußerer Rahmen
Abgerundete Ecken
```

**Shadow:**
```
CSS-Klasse wird automatisch gesetzt
Schatten um das gesamte Accordion
Kein äußerer Border
```

**Flush:**
```
Bootstrap-Klasse: accordion-flush
Kein äußerer Rahmen
Items schließen direkt an
Minimalistischer Look
```

### Header-Farben

**Primary (Blau):**
```
Blauer Header, weißer Text
Automatisch weißes Pfeil-Icon
```

**Secondary (Grau):**
```
Grauer Header, weißer Text
```

**Light (Hell):**
```
Heller Header, dunkler Text
```

**Dark (Dunkel):**
```
Dunkler Header, weißer Text
```

### Optional: Custom Styles (per CSS-Klasse)

**Gradient Header:**
```
CSS-Klasse (im Haupt-Accordion): wsc-accordion-gradient
Effekt: Gradient von Primary zu Info
```

**Minimal Style:**
```
CSS-Klasse (im Haupt-Accordion): wsc-accordion-minimal
Effekt: Minimalistisch ohne Borders
```

## Verschachtelte Blöcke: Spacing

### Automatisches Spacing

Das Accordion-Template entfernt automatisch das `margin-top` vom ersten verschachtelten Block:

```css
.accordion-body .mt-3:first-child { margin-top: 0 !important; }
```

**Warum?** Sonst hätte der erste Block unnötigen Abstand nach oben.

### Empfohlene Spacing-Einstellungen

**Für Blöcke im Accordion:**
```
Margin-Top: 0 (wird eh überschrieben)
Margin-Bottom: 3 (1rem Abstand zum nächsten Block)
```

**Für den letzten Block:**
```
Das Template setzt automatisch margin-bottom: 0 für den letzten Block
```

## Anker-Links zu Accordion-Items

Du kannst direkt zu einem bestimmten Accordion-Item verlinken und es automatisch öffnen:

### Schritt 1: Item-ID setzen
```
Im Backend:
  Item HTML-ID: "preise"
```

### Schritt 2: Link erstellen
```html
<a href="#preise" data-bs-toggle="collapse" data-bs-target="#preise-collapse">
  Zu den Preisen
</a>
```

### Schritt 3: Mit JavaScript auto-öffnen (optional)
```javascript
// URL: seite#preise
if (window.location.hash) {
  const target = document.querySelector(window.location.hash + '-collapse');
  if (target) {
    const collapse = new bootstrap.Collapse(target, { show: true });
  }
}
```

## Troubleshooting

### Accordion öffnet/schließt nicht
- Bootstrap 5 JavaScript eingebunden?
- Browser-Konsole auf Fehler prüfen
- IDs eindeutig? (normalerweise automatisch)

### Erstes Item nicht geöffnet
- "Erstes Element geöffnet" aktiviert?
- Cache geleert?
- Browser-Cache cleared?

### Mehrere Items schließen sich nicht gegenseitig
- "Mehrere gleichzeitig öffnen" deaktiviert?
- Wenn aktiviert = gewolltes Verhalten (Collapse-Modus)

### Verschachtelte Blöcke werden nicht angezeigt
- Mindestens ein Block im Item hinzugefügt?
- Block-Template existiert?
- Cache geleert?
- Twig-Fehler in Browser-Konsole?

### Icon wird nicht angezeigt
- FontAwesome eingebunden?
- Icon-Name korrekt? (mit `fa-` Präfix)
- Icon in FontAwesome Version verfügbar?

### Badge wird nicht angezeigt
- Badge-Text ausgefüllt?
- Nur Badge-Farbe ohne Text → wird nicht angezeigt

### Styling funktioniert nicht
- CSS-Datei eingebunden?
- Nach Bootstrap eingebunden?
- Browser-Cache geleert?

### Items haben zu viel/wenig Abstand
- Margin/Padding-Einstellungen prüfen
- Verschachtelte Blöcke haben eigene Margins
- CSS-Klasse für Custom-Spacing nutzen

## Performance-Tipps

### Optimierungen

**1. Lazy Loading für Bilder**
```
In Image-Blocks: loading="lazy" Attribut nutzen
→ Bilder in geschlossenen Items werden erst bei Bedarf geladen
```

**2. Smart-Content mit Pagination**
```
Nicht 100 Items auf einmal laden
→ Pagination aktivieren (12 Items pro Seite)
```

**3. Videos erst bei Bedarf laden**
```
YouTube-Videos nicht direkt einbetten
→ CTA-Block mit Vorschaubild + Link nutzen
```

**4. Nicht zu viele Items**
```
Max. 15-20 Accordion-Items
Bei mehr → Pagination oder anders strukturieren
```

### Best Practices
- Bilder komprimieren (WebP)
- Nicht 10 Timelines in einem Accordion
- Smart-Content statt manuelle Block-Wiederholungen
- Testen mit DevTools (Performance-Tab)

## Browser-Kompatibilität

### Unterstützte Browser
- Chrome/Edge (alle aktuellen Versionen)
- Firefox (alle aktuellen Versionen)
- Safari (alle aktuellen Versionen)
- Opera (alle aktuellen Versionen)

### Voraussetzung
- **Bootstrap 5** (Accordion-Funktionalität)
- **Bootstrap 5 JavaScript** (Collapse-Plugin)

## Accessibility

### Barrierefreiheit

- ✅ Semantisches HTML (`<h2>`, `button`, ARIA-Attribute)
- ✅ Keyboard-Navigation (Tab, Enter, Space)
- ✅ Screen-Reader freundlich (aria-expanded, aria-controls)
- ✅ Focus-States für Keyboard-User
- ✅ Reduced Motion Support (für motion-sensitive User)

### Empfehlungen

- Aussagekräftige Titel (Screen-Reader lesen diese vor)
- Logische Reihenfolge der Items
- Keine rein dekorativen Icons (außer aria-hidden)
- Kontraste beachten (besonders bei farbigen Headern)

## Changelog

### Version 1.0.0 (2024)
- ✨ Initial Release
- ✅ Meta-Accordion mit verschachtelten Blöcken
- ✅ Alle WSC-Blöcke verfügbar (Timeline, Table, CTA, Columns, etc.)
- ✅ Zwei Modi: Accordion vs. Collapse
- ✅ Icon & Badge Support im Header
- ✅ Automatische ID-Generierung
- ✅ 3 Styling-Varianten (Standard, Bordered, Shadow)
- ✅ 5 Header-Farben
- ✅ CSS-Klassen auf beiden Ebenen (Accordion + Items)
- ✅ Margin/Padding Kontrolle
- ✅ Responsive Design
- ✅ Accessibility Features
- ✅ Print Styles
- ✅ Optional: Gradient & Minimal Styles

## Credits

Entwickelt für Sulu CMS mit Bootstrap 5.

**Technologie-Stack:**
- Sulu CMS
- Bootstrap 5 (Accordion Component)
- FontAwesome Icons
- Twig Templating
- Verschachtelte Block-Struktur

## Lizenz

Dieses Projekt ist Teil der WSC Theme Sulu Templates.

---

**Fragen oder Probleme?** Erstelle ein Issue im Repository oder kontaktiere den Support.
