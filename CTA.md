# WSC CTA Block - Dokumentation

## Übersicht

Der **WSC CTA Block** (Call-to-Action) ist ein universeller, extrem flexibler Block für Sulu CMS, der **7 verschiedene CTA-Typen** in einem einzigen Block vereint. Von einfachen Text-Links über Buttons und Button-Gruppen bis hin zu komplexen Hero-Bannern - dieser Block ist dein "Swiss Army Knife" für alle Link- und CTA-Anforderungen.

## Die 7 CTA-Typen

### 1. 🔗 Text-Link
Einfacher Text-Link mit optionalem Icon und Badge.
```
Ideal für: Inline-Links, "Mehr erfahren →", Footer-Links
```

### 2. 🎯 Button
Bootstrap Button mit umfangreichen Styling-Optionen.
```
Ideal für: Primary Actions, Downloads, Formulare
```

### 3. 🎯🎯 Button-Gruppe
Mehrere Buttons nebeneinander (z.B. Primary + Secondary Action).
```
Ideal für: "Jetzt kaufen" + "Mehr erfahren", Multiple CTAs
```

### 4. 🖼️ Bild-Link
Vollständig klickbares Bild mit optionalem Badge.
```
Ideal für: Promo-Banner, Produktbilder, Teaser-Bilder
```

### 5. 🖼️➕🎯 Bild + Button
Bild mit Titel, Beschreibung und Button darunter.
```
Ideal für: Produkt-Teaser, Feature-Highlights
```

### 6. 🃏 Card mit CTA
Komplette Bootstrap Card mit Bild, Titel, Text und Button.
```
Ideal für: Produkt-Cards, Service-Cards, Team-Member-Cards
```

### 7. 🦸 Hero / Banner
Großes Banner mit Hintergrund-Bild, Overlay, Titel, Text und Button.
```
Ideal für: Landingpages, Header-Bereiche, Kampagnen
```

## Features

### 📝 Content
- **Titel** (optional) - Für Card, Hero, Bild+Button
- **Beschreibung** (text_area, optional) - Mehrzeiliger Text
- **Bild** (Media, optional) - Für alle Typen außer Text-Link/Button
- **Link-URL** (mandatory) - Wohin der Link führt
- **Link-Text / Button-Text** (mandatory) - Der angezeigte Text
- **Neues Fenster öffnen** (checkbox) - target="_blank"

### 🎨 Icon & Badge
- **Icon** (FontAwesome) - z.B. fa-download, fa-arrow-right
- **Icon-Position** - Vor oder nach dem Text
- **Badge-Text** - z.B. "NEU", "SALE", "HOT"
- **Badge-Farbe** - 7 Bootstrap-Farben

### 🎯 Button-Styling
**Für Typ: Button und Bild+Button**
- **Button-Farbe**: 12 Optionen
  - 8 Solid: Primary, Secondary, Success, Danger, Warning, Info, Dark, Light
  - 4 Outline: Outline-Primary, Outline-Secondary, Outline-Success, Outline-Danger
- **Button-Größe**: Klein, Normal, Groß
- **Volle Breite**: Block-Button (100% Breite)
- **Button CSS-Klasse**: Individuelle Klasse nur für den Button

### 👥 Button-Gruppe
**Für Typ: Button-Gruppe**
- Repeater für mehrere Buttons
- Pro Button:
  - Text, URL, Target
  - Farbe (10 Optionen + Outline)
  - Größe
  - Icon
  - CSS-Klasse

### 🎨 Layout
- **Bild-Position**: Oben, Links, Rechts, Hintergrund
- **Text-Ausrichtung**: Links, Zentriert, Rechts
- **Container-Breite**: Auto, Container, Container-Fluid, Full-Width

### 🃏 Card-Styling
**Für Typ: Card**
- **Card-Stil**: Border, Shadow, Shadow-SM, None
- **Card Hintergrund**: Standard, Primary, Secondary, Light, Dark

### 🦸 Hero-Styling
**Für Typ: Hero/Banner**
- **Minimale Höhe**: 300px, 400px, 500px, 600px, 100vh (volle Bildschirmhöhe)
- **Overlay**: Keine, Dunkel, Hell, Primary-Farbe
- **Overlay-Deckkraft**: 20% - 80%
- **Text-Farbe**: Weiß, Dunkel, Primary

### 📏 Spacing & Advanced
- **Margin & Padding**: Alle 4 Seiten individuell (0-5, Auto)
- **CSS-Klasse**: Für den gesamten Block
- **HTML-ID**: Für Anker-Links
- **Button CSS-Klasse**: Separat nur für den Button

## Installation

### 1. Dateien

```
config/templates/blocks/
└── wsc-cta.xml                     # Block-Konfiguration

templates/wsc/blocks/
└── wsc-cta.html.twig               # Template

assets/css/
└── wsc-cta.css                     # Styling & Animationen
```

### 2. Assets einbinden

```twig
{# In deinem base.html.twig oder Layout-Template #}

{# CSS im <head> #}
<link rel="stylesheet" href="{{ asset('assets/css/wsc-cta.css') }}">
```

### 3. Cache leeren

```bash
bin/console cache:clear
```

Der Block sollte nun im Sulu-Backend unter "Call-to-Action / Link / Button" verfügbar sein.

## Verwendung

### Block hinzufügen

1. Im Sulu-Backend eine Seite öffnen
2. Auf "Block hinzufügen" klicken
3. "Call-to-Action / Link / Button" auswählen
4. **Wichtig:** Zuerst den **CTA-Typ** wählen!
5. Je nach Typ die relevanten Felder ausfüllen

### CTA-Typ wählen

Der CTA-Typ bestimmt, wie der Block gerendert wird. Wähle den passenden Typ für deinen Use-Case:

| Typ | Wann verwenden? |
|-----|-----------------|
| Text-Link | Einfache Links im Fließtext, Footer-Links |
| Button | Standard Call-to-Actions, Downloads, Formulare |
| Button-Gruppe | Mehrere Aktionen (Primary + Secondary) |
| Bild-Link | Klickbare Banner, Promo-Bilder |
| Bild + Button | Produkt-Teaser, Feature-Highlights |
| Card mit CTA | Strukturierte Inhalte mit CTA |
| Hero / Banner | Große Header-Bereiche, Landingpages |

## Detaillierte Beispiele

### Beispiel 1: Text-Link mit Icon und Badge

**Konfiguration:**
```
CTA-Typ: Text-Link
Link-Text: "Mehr erfahren"
Link-URL: /info
Icon: fa-arrow-right
Icon-Position: Nach Text
Badge-Text: "NEU"
Badge-Farbe: Danger (Rot)
```

**Ergebnis:**
```
Mehr erfahren → [NEU]
```

**Verwendung:** Im Fließtext, Footer, Sidebar

---

### Beispiel 2: Primary Button mit Icon

**Konfiguration:**
```
CTA-Typ: Button
Link-Text: "Jetzt herunterladen"
Link-URL: /download.pdf
Icon: fa-download
Icon-Position: Vor Text
Button-Farbe: Primary
Button-Größe: Groß
Neues Fenster: Ja
```

**Ergebnis:**
```
[⬇ Jetzt herunterladen] (großer blauer Button)
```

**Verwendung:** Downloads, wichtige Actions

---

### Beispiel 3: Button-Gruppe (Primary + Secondary)

**Konfiguration:**
```
CTA-Typ: Button-Gruppe

Button 1:
  Text: "Jetzt kaufen"
  URL: /checkout
  Farbe: Primary
  Größe: Normal
  Icon: fa-shopping-cart

Button 2:
  Text: "Mehr Infos"
  URL: /product-details
  Farbe: Outline-Secondary
  Größe: Normal
```

**Ergebnis:**
```
[🛒 Jetzt kaufen] [Mehr Infos]
```

**Verwendung:** E-Commerce, Landingpages mit mehreren Actions

---

### Beispiel 4: Bild-Link mit Badge

**Konfiguration:**
```
CTA-Typ: Bild-Link
Bild: promo-banner.jpg
Link-URL: /sale
Badge-Text: "SALE"
Badge-Farbe: Danger
```

**Ergebnis:**
```
[Klickbares Bild mit "SALE" Badge oben rechts]
```

**Verwendung:** Promo-Banner, Kampagnen, Teaser

---

### Beispiel 5: Product Card

**Konfiguration:**
```
CTA-Typ: Card mit CTA
Titel: "Premium Paket"
Beschreibung: "Alle Features inklusive\n100 GB Speicher\n24/7 Support"
Bild: product-premium.jpg
Bild-Position: Oben
Link-Text: "Jetzt bestellen"
Link-URL: /checkout?plan=premium
Button-Farbe: Success
Card-Stil: Shadow
Badge-Text: "BESTSELLER"
Badge-Farbe: Warning
```

**Ergebnis:**
```
┌──────────────────┐
│  [Produktbild]   │
├──────────────────┤
│ [BESTSELLER]     │
│ Premium Paket    │
│                  │
│ Alle Features... │
│                  │
│ [Jetzt bestellen]│
└──────────────────┘
```

**Verwendung:** Pricing-Tabellen, Produkt-Übersichten, Service-Cards

---

### Beispiel 6: Hero Banner für Landingpage

**Konfiguration:**
```
CTA-Typ: Hero / Banner
Titel: "Willkommen bei unserem Service"
Beschreibung: "Die beste Lösung für dein Business. Starte noch heute!"
Bild: hero-background.jpg
Link-Text: "Jetzt kostenlos testen"
Link-URL: /signup
Button-Farbe: Primary
Button-Größe: Groß
Icon: fa-rocket
Icon-Position: Vor Text

Hero-Einstellungen:
  Minimale Höhe: 500px
  Overlay: Dunkel
  Overlay-Deckkraft: 50%
  Text-Farbe: Weiß
  Text-Ausrichtung: Zentriert
```

**Ergebnis:**
```
╔════════════════════════════════════╗
║   [Hintergrund-Bild mit Overlay]   ║
║                                    ║
║  Willkommen bei unserem Service    ║
║  Die beste Lösung für dein         ║
║  Business. Starte noch heute!      ║
║                                    ║
║   [🚀 Jetzt kostenlos testen]      ║
║                                    ║
╚════════════════════════════════════╝
```

**Verwendung:** Landingpage-Header, Kampagnen, Website-Startseite

---

### Beispiel 7: Bild + Button Teaser

**Konfiguration:**
```
CTA-Typ: Bild + Button
Titel: "Neue Kollektion 2024"
Beschreibung: "Entdecke die neuesten Trends der Saison"
Bild: collection-2024.jpg
Link-Text: "Kollektion ansehen"
Link-URL: /collection/2024
Button-Farbe: Dark
Icon: fa-arrow-right
Icon-Position: Nach Text
Text-Ausrichtung: Zentriert
```

**Ergebnis:**
```
      [Bild der Kollektion]

   Neue Kollektion 2024

   Entdecke die neuesten
   Trends der Saison

   [Kollektion ansehen →]
```

**Verwendung:** Blog-Teaser, Produkt-Highlights, Content-Teaser

## Icon-Nutzung

### Verfügbare Icon-Bibliothek
Der Block unterstützt **FontAwesome Icons**. Stelle sicher, dass FontAwesome in deinem Projekt eingebunden ist.

### Icon-Beispiele

**Häufig verwendete Icons:**
```
fa-arrow-right      → Pfeil rechts (für "Mehr erfahren")
fa-download         ↓ Download
fa-shopping-cart    🛒 Warenkorb
fa-rocket           🚀 Start / Launch
fa-check            ✓ Bestätigung
fa-heart            ♥ Favorit / Like
fa-star             ★ Bewertung
fa-envelope         ✉ E-Mail / Kontakt
fa-phone            ☎ Telefon
fa-play             ▶ Video abspielen
fa-external-link    ↗ Externer Link
```

### Icon-Position

**Vor Text:**
```
[Icon] Text
⬇ Jetzt herunterladen
```

**Nach Text:**
```
Text [Icon]
Mehr erfahren →
```

## Badge-Nutzung

### Wann Badge verwenden?

Badges sind perfekt für:
- ✅ Neu-Markierungen ("NEU", "NEW")
- ✅ Sales & Rabatte ("SALE", "-20%")
- ✅ Highlights ("HOT", "BESTSELLER")
- ✅ Status ("BETA", "COMING SOON")
- ✅ Dringlichkeit ("LIMITIERT", "LAST CHANCE")

### Badge-Farben und Bedeutung

| Farbe | Verwendung | Beispiel |
|-------|------------|----------|
| Primary (Blau) | Neutral, Info | "INFO" |
| Secondary (Grau) | Dezent | "UPDATED" |
| Success (Grün) | Positiv, Verfügbar | "VERFÜGBAR" |
| Danger (Rot) | Dringlich, Sale | "SALE", "NEU" |
| Warning (Gelb) | Warnung, Limitiert | "LIMITIERT" |
| Info (Cyan) | Information | "TIPP" |
| Dark (Dunkel) | Premium, Exklusiv | "PREMIUM" |

### Badge-Animation

Badges haben standardmäßig eine subtile **Pulse-Animation**, die beim Hover stoppt. Das zieht Aufmerksamkeit auf den CTA.

## Button-Gruppe Best Practices

### Empfohlene Kombinationen

**1. Primary + Secondary:**
```
Button 1: "Jetzt kaufen" (btn-primary)
Button 2: "Mehr erfahren" (btn-outline-secondary)
```
→ Klare Hierarchie: Primary Action + Alternative

**2. Action + Abbruch:**
```
Button 1: "Speichern" (btn-success)
Button 2: "Abbrechen" (btn-outline-secondary)
```
→ Für Formulare und Dialoge

**3. Mehrere gleichwertige Actions:**
```
Button 1: "Option A" (btn-outline-primary)
Button 2: "Option B" (btn-outline-primary)
Button 3: "Option C" (btn-outline-primary)
```
→ Wenn keine Action bevorzugt werden soll

### Responsive Verhalten

Auf **Mobile** (< 576px) stapeln sich die Buttons automatisch vertikal:
```
Desktop:  [Button 1] [Button 2] [Button 3]
Mobile:   [Button 1]
          [Button 2]
          [Button 3]
```

## CSS-Anpassungen & Spezialeffekte

### Standard-Animationen (immer aktiv)

Alle Animationen sind bereits eingebaut:
- ✅ Smooth Hover-Effekte
- ✅ Button: Lift + Shadow
- ✅ Card: Image-Zoom beim Hover
- ✅ Hero: FadeInUp-Animation
- ✅ Badge: Pulse-Animation
- ✅ Icon: Individuelle Bewegungen (Pfeile, Downloads)

### Optionale Spezialeffekte

Aktiviere diese per **CSS-Klasse** im Block oder Button:

#### 1. Ripple-Effekt
```
Button CSS-Klasse: btn-ripple
```
**Effekt:** Ripple-Welle beim Klicken (wie Material Design)

#### 2. Glassmorphism
```
CSS-Klasse: glass-effect
```
**Effekt:** Durchsichtiger Blur-Effekt (modern, elegant)

#### 3. Gradient Button
```
Button CSS-Klasse: btn-gradient
```
**Effekt:** Farbverlauf mit Shine-Animation beim Hover

#### 4. Neon Button
```
Button CSS-Klasse: btn-neon
```
**Effekt:** Neon-Glow-Effekt (futuristisch, Gaming-Style)

#### 5. 3D Button
```
Button CSS-Klasse: btn-3d
```
**Effekt:** 3D-Schatten, Button drückt sich beim Klicken ein

#### 6. Arrow Animation
```
CSS-Klasse: cta-arrow
```
**Effekt:** Pfeil bewegt sich beim Hover nach rechts

### Kombinierte Effekte

Du kannst mehrere Effekte kombinieren:
```
Button CSS-Klasse: btn-gradient btn-ripple btn-3d
```

### Custom Styling

Eigene CSS-Variablen überschreiben:
```css
/* In deinem Custom CSS */
.wsc-cta-wrapper.my-custom-cta .btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
}
```

## Best Practices

### ✅ Empfehlungen

**1. CTA-Hierarchie beachten**
- Ein Primary CTA pro Seite/Section
- Secondary CTAs dezenter gestalten (Outline-Buttons)
- Nicht zu viele CTAs auf einmal (max. 2-3)

**2. Klare Button-Texte**
- ✅ "Jetzt kaufen" statt "Klicken Sie hier"
- ✅ "Kostenlos testen" statt "Mehr"
- ✅ "Download starten" statt "Herunterladen"
- Aktionsverben verwenden

**3. Icons gezielt einsetzen**
- Unterstützen die Bedeutung (Download-Icon bei Downloads)
- Nicht übertreiben (nicht bei jedem Link ein Icon)
- Konsistenz wahren (immer gleiche Icons für gleiche Actions)

**4. Badges sparsam nutzen**
- Nur für wirklich wichtige Highlights
- Zu viele Badges = keine Aufmerksamkeit mehr
- Zeitlich begrenzte Badges ("SALE", "NEU") regelmäßig entfernen

**5. Responsive testen**
- Hero-Banner auf Mobile überprüfen (Höhe, Lesbarkeit)
- Button-Gruppen auf kleinen Bildschirmen testen
- Text-Längen auf Mobile beachten

**6. Accessibility**
- Aussagekräftige Link-Texte (kein "Hier klicken")
- Kontraste beachten (besonders bei Hero mit Overlay)
- Externen Links mit target="_blank" nutzen

### ❌ Vermeiden

1. **Zu viele CTAs**
   - Nicht 5 Buttons auf einer Seite
   - Verwirrt den User, mindert Conversion

2. **Unklare Button-Texte**
   - ❌ "Klick mich"
   - ❌ "Hier"
   - ❌ "Mehr"

3. **Badge-Inflation**
   - Nicht jeder Button braucht ein "NEU" Badge
   - Badges verlieren Wirkung wenn überall

4. **Zu viele Animationen**
   - Nicht alle Spezialeffekte gleichzeitig
   - Kann ablenkend wirken

5. **Ignorieren von Kontrasten**
   - Hero mit hellem Overlay + heller Text = unleserlich
   - Button mit zu wenig Kontrast

## Häufige Anwendungsfälle

### E-Commerce

**Produktseite:**
```
- Button: "In den Warenkorb" (Primary, mit fa-shopping-cart)
- Button: "Auf Wunschliste" (Outline-Secondary, mit fa-heart)
```

**Kategorie-Übersicht:**
```
- Card mit CTA für jedes Produkt
- Badge "SALE" für Rabatte
- Badge "NEU" für neue Produkte
```

### Landingpage

**Hero-Bereich:**
```
- Hero mit großem Hintergrund
- Titel + kurzer Text
- Primary Button: "Jetzt starten"
```

**Feature-Section:**
```
- 3x Card mit CTA
- Jede Card erklärt ein Feature
- Button: "Mehr erfahren"
```

### Corporate Website

**Header:**
```
- Button-Gruppe:
  - "Kontakt aufnehmen" (Primary)
  - "Referenzen" (Outline-Secondary)
```

**Content-Bereiche:**
```
- Text-Links für "Mehr lesen →"
- Bild + Button für Produkt-Teaser
```

### Blog

**Artikel-Teaser:**
```
- Bild + Button
- Titel + Excerpt
- Button: "Weiterlesen →"
```

**Call-to-Subscribe:**
```
- Card mit CTA
- Titel: "Newsletter abonnieren"
- Button: "Jetzt anmelden"
- Badge: "Gratis" (Success)
```

## Troubleshooting

### Button wird nicht angezeigt
- Cache geleert? `bin/console cache:clear`
- Link-URL ausgefüllt?
- Link-Text ausgefüllt?
- CTA-Typ korrekt gewählt?

### Icon erscheint nicht
- FontAwesome eingebunden?
- Icon-Name korrekt? (mit `fa-` Präfix)
- Browser-Cache geleert?

### Badge wird nicht angezeigt
- Badge-Text ausgefüllt?
- Nur bei kompatiblen CTA-Typen verfügbar

### Hero-Bild wird nicht angezeigt
- Bild hochgeladen und ausgewählt?
- Bild-URL korrekt?
- Browser-Cache geleert?
- Bild-Position auf "Hintergrund" gesetzt?

### Button-Gruppe stapelt nicht auf Mobile
- CSS-Datei eingebunden?
- Browser-Cache geleert?
- Responsive-Breakpoint überprüfen (< 576px)

### Animationen funktionieren nicht
- CSS-Datei eingebunden?
- CSS nach Bootstrap eingebunden?
- Browser unterstützt Animationen?

### Spezialeffekte (Gradient, Neon, etc.) funktionieren nicht
- CSS-Klasse korrekt geschrieben?
- CSS-Datei eingebunden?
- Browser-Kompatibilität prüfen

## Browser-Kompatibilität

### Unterstützte Browser
- Chrome/Edge (88+)
- Firefox (78+)
- Safari (14+)
- Opera (75+)

### CSS-Effekte
- **Glassmorphism** (backdrop-filter): Safari 14+, Chrome 76+
- **Gradient**: Alle modernen Browser
- **Animationen**: Alle modernen Browser

### Fallback
Wenn Browser bestimmte Effekte nicht unterstützen, funktioniert der Block weiterhin - nur ohne den Spezialeffekt.

## Performance

### Optimierungen
- ✅ Reine CSS-Animationen (GPU-beschleunigt)
- ✅ Kein JavaScript erforderlich
- ✅ Lazy Loading für Bilder (per Browser)
- ✅ Responsive Images unterstützt

### Best Practices
- Bilder optimieren (WebP, komprimiert)
- Hero-Bilder: Max. 1920px Breite
- Nicht zu viele Spezialeffekte kombinieren

## Changelog

### Version 1.0.0 (2024)
- ✨ Initial Release
- ✅ 7 CTA-Typen (Text-Link, Button, Button-Gruppe, Bild-Link, Bild+Button, Card, Hero)
- ✅ Icon-Support (FontAwesome)
- ✅ Badge-Feature mit 7 Farben
- ✅ Button-Gruppe mit Repeater
- ✅ 12 Button-Farben (8 Solid + 4 Outline)
- ✅ Hero mit Overlay und Höhen-Optionen
- ✅ Card mit 3 Bild-Positionen
- ✅ 6 optionale Spezialeffekte (Ripple, Glass, Gradient, Neon, 3D, Arrow)
- ✅ Margin/Padding Kontrolle
- ✅ CSS-Klassen auf Block- und Button-Ebene
- ✅ Responsive Design
- ✅ Accessibility Features
- ✅ Print Styles

## Credits

Entwickelt für Sulu CMS mit Bootstrap 5 und FontAwesome Icons.

**Technologie-Stack:**
- Sulu CMS
- Bootstrap 5
- FontAwesome Icons
- Twig Templating
- CSS3 Animations

## Lizenz

Dieses Projekt ist Teil der WSC Theme Sulu Templates.

---

**Fragen oder Probleme?** Erstelle ein Issue im Repository oder kontaktiere den Support.
