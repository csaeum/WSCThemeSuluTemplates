# WSC Table Block - Dokumentation

## Übersicht

Der **WSC Table Block** ist ein flexibler HTML-Tabellen-Block für Sulu CMS mit intelligenter Spalten-Normalisierung. Der Block stellt sicher, dass deine Tabellen immer eine konsistente Struktur haben, auch wenn du nachträglich Spalten hinzufügst oder entfernst.

## Das Besondere: "Header ist Master"

**Die Spaltenanzahl der Header-Zeile bestimmt die gesamte Tabellenstruktur.**

- Header hat 5 Spalten → **Alle Zeilen werden mit 5 Spalten gerendert**
- Du fügst eine 6. Header-Spalte hinzu → **Alle Zeilen haben automatisch eine 6. (leere) Spalte**
- Du löschst eine Header-Spalte → **Die entsprechende Spalte verschwindet aus allen Zeilen**

**Deine Tabelle ist niemals "kaputt"** - das Template normalisiert automatisch!

## Features

### 🎯 Intelligente Spalten-Verwaltung
- **Header definiert Struktur**: Spaltenanzahl im Header ist führend
- **Automatische Normalisierung**: Fehlende Zellen werden leer gerendert
- **Überschüssige Zellen ignoriert**: Zu viele Zellen werden abgeschnitten
- **Flexible Anpassung**: Spalten können jederzeit hinzugefügt/entfernt werden
- **Nie kaputt**: Template garantiert konsistente Tabellenstruktur

### 📝 Zellen-Content
- **text_area** für mehrzeiligen Content
- **Optional HTML-Unterstützung**: Aktivierbar per Checkbox
- **Ausrichtung pro Zelle**: Links, zentriert, rechts
- **Zeilenumbrüche**: Automatisch mit `nl2br` (wenn HTML deaktiviert)

### 🎨 Bootstrap 5 Table Styles
**Mehrfachauswahl möglich:**
- Striped (Zebra-Muster)
- Bordered (mit Rahmen)
- Borderless (ohne Rahmen)
- Hover (Zeilen-Highlight)
- Small (kompakt)

### 🌈 Styling-Optionen
- **Tabellen-Farbe**: 8 Bootstrap-Farben (Primary, Secondary, Success, etc.)
- **Zeilen-Farbe**: 10 Farben pro Zeile individuell
- **Dunkler Header**: Header mit dunklem Hintergrund
- **Caption**: Optionale Tabellen-Beschriftung
- **Responsive**: Horizontaler Scroll auf Mobile
- **CSS-Klasse & HTML-ID**: Für Tabelle und einzelne Zeilen

### 📱 Responsive & Accessibility
- **Table-Responsive Wrapper**: Horizontaler Scroll auf kleinen Geräten
- **Semantisches HTML**: `<table>`, `<thead>`, `<tbody>`
- **Screen-Reader freundlich**: Proper table markup
- **Print-optimiert**: Spezielle Styles für Druck
- **Keyboard-Navigation**: Vollständig tastaturzugänglich

## Installation

### 1. Dateien

Der Tabellen-Block besteht aus folgenden Dateien:

```
config/templates/blocks/
└── wsc-table.xml                   # Block-Konfiguration

templates/wsc/blocks/
└── wsc-table.html.twig             # Template mit Normalisierungs-Logik

assets/css/
└── wsc-table.css                   # Optional: Zusätzliche Enhancements
```

### 2. Assets einbinden (optional)

Die CSS-Datei ist optional - Bootstrap 5 Tabellen funktionieren auch ohne sie:

```twig
{# In deinem base.html.twig oder Layout-Template #}

{# CSS im <head> - OPTIONAL #}
<link rel="stylesheet" href="{{ asset('assets/css/wsc-table.css') }}">
```

### 3. Cache leeren

Nach der Installation den Sulu-Cache leeren:

```bash
bin/console cache:clear
```

Der Block sollte nun im Sulu-Backend unter "Tabelle" verfügbar sein.

## Verwendung

### Tabelle erstellen

1. Im Sulu-Backend eine Seite öffnen
2. Auf "Block hinzufügen" klicken
3. "Tabelle" auswählen
4. Erst **Header-Zellen** erstellen (definiert Spaltenanzahl!)
5. Dann **Zeilen** mit Zellen hinzufügen

### Header erstellen (WICHTIG!)

Der Header definiert die Spaltenanzahl für die gesamte Tabelle:

| Feld | Typ | Beschreibung | Pflicht |
|------|-----|--------------|---------|
| Inhalt | Text Area | Spalten-Überschrift | Ja |
| Ausrichtung | Select | Links / Zentriert / Rechts | Nein |

**Beispiel:**
```
Spalte 1: "Name"        (Ausrichtung: Links)
Spalte 2: "Email"       (Ausrichtung: Links)
Spalte 3: "Alter"       (Ausrichtung: Zentriert)
Spalte 4: "Status"      (Ausrichtung: Zentriert)
Spalte 5: "Aktionen"    (Ausrichtung: Rechts)
```
→ Deine Tabelle hat jetzt **5 Spalten**

### Zeilen hinzufügen

Für jede Zeile:

| Feld | Typ | Beschreibung | Pflicht |
|------|-----|--------------|---------|
| Zellen | Repeater | Zellen-Inhalte | Nein |
| Zeilen-Farbe | Select | Bootstrap-Farbe für diese Zeile | Nein |
| CSS-Klasse | Text | Individuelle CSS-Klasse | Nein |

**Pro Zelle:**
- **Inhalt**: Text oder HTML (je nach Einstellung)
- **Ausrichtung**: Links / Zentriert / Rechts

## Die "Header ist Master"-Logik

### Szenario 1: Zeile hat weniger Zellen als Header

```
Header:    ["Name", "Email", "Alter", "Status", "Aktionen"]  → 5 Spalten
Zeile 1:   ["Max Mustermann", "max@test.de", "30"]           → 3 Zellen

Template rendert:
┌──────────────┬──────────────┬───────┬────────┬───────────┐
│ Name         │ Email        │ Alter │ Status │ Aktionen  │
├──────────────┼──────────────┼───────┼────────┼───────────┤
│ Max Muster.. │ max@test.de  │ 30    │ (leer) │ (leer)    │
└──────────────┴──────────────┴───────┴────────┴───────────┘
```

**Ergebnis:** Fehlende Zellen werden als leere `<td>` gerendert. Die Tabelle ist nicht kaputt!

### Szenario 2: Zeile hat mehr Zellen als Header

```
Header:    ["Name", "Email", "Alter"]                        → 3 Spalten
Zeile 1:   ["Max", "max@test.de", "30", "Aktiv", "Berlin"]  → 5 Zellen

Template rendert:
┌──────┬──────────────┬───────┐
│ Name │ Email        │ Alter │
├──────┼──────────────┼───────┤
│ Max  │ max@test.de  │ 30    │
└──────┴──────────────┴───────┘
```

**Ergebnis:** Überschüssige Zellen 4+5 ("Aktiv", "Berlin") werden ignoriert. Die Tabelle ist nicht kaputt!

### Szenario 3: Header-Spalte hinzufügen

```
Vorher:
Header:    ["Name", "Email", "Alter"]     → 3 Spalten
Zeile 1:   ["Max", "max@test.de", "30"]

Du fügst hinzu:
Header:    ["Name", "Email", "Alter", "Status"]  → 4 Spalten
Zeile 1:   Bleibt unverändert mit 3 Zellen

Template rendert:
┌──────┬──────────────┬───────┬────────┐
│ Name │ Email        │ Alter │ Status │
├──────┼──────────────┼───────┼────────┤
│ Max  │ max@test.de  │ 30    │ (leer) │
└──────┴──────────────┴───────┴────────┘
```

**Ergebnis:** Die neue Spalte ist erstmal leer. Du kannst später in die Zeilen gehen und die 4. Zelle manuell hinzufügen und befüllen.

### Szenario 4: Header-Spalte löschen

```
Vorher:
Header:    ["Name", "Email", "Alter", "Status"]  → 4 Spalten
Zeile 1:   ["Max", "max@test.de", "30", "Aktiv"]

Du löschst "Email":
Header:    ["Name", "Alter", "Status"]           → 3 Spalten
Zeile 1:   Hat noch alle 4 Zellen im Backend

Template rendert:
┌──────┬───────┬────────┐
│ Name │ Alter │ Status │
├──────┼───────┼────────┤
│ Max  │ 30    │ Aktiv  │
└──────┴───────┴────────┘
```

**Wichtig:** Die Email-Daten sind **nicht wirklich gelöscht** im Backend - sie werden nur nicht mehr gerendert! Wenn du "Email" wieder als Header hinzufügst, erscheinen die Daten wieder.

**Aber Achtung:** Die Zellen werden einfach der Reihe nach verwendet. Wenn du die 2. Spalte löschst, wird aus der 3. Zelle die neue 2. Spalte!

## Konfiguration

### Layout-Optionen

#### Tabellen-Stil (Mehrfachauswahl)
Kombiniere mehrere Styles:
- **Striped**: Zebra-Muster (abwechselnd helle/dunkle Zeilen)
- **Bordered**: Mit Rahmen um alle Zellen
- **Borderless**: Ohne Rahmen
- **Hover**: Zeilen-Highlight beim Darüberfahren
- **Small**: Kompakte Tabelle mit reduzierten Abständen

**Beispiel-Kombinationen:**
```
Striped + Hover           → Gestreifte Tabelle mit Hover-Effekt
Bordered + Small          → Kompakte Tabelle mit Rahmen
Borderless + Hover        → Rahmenlose Tabelle mit Hover
```

#### Tabellen-Farbe
Gesamte Tabelle einfärben (8 Bootstrap-Farben):
- Primary, Secondary, Success, Danger, Warning, Info, Dark

#### Weitere Optionen
- **Responsive**: Horizontaler Scroll auf Mobile (Standard: aktiviert)
- **HTML in Zellen erlauben**: Ermöglicht HTML-Code in Zellen (Standard: deaktiviert)
- **Dunkler Header**: Header mit dunklem Hintergrund
- **Tabellen-Beschriftung**: Optionale Caption über der Tabelle

### Zeilen-Optionen

Für jede Zeile individuell:
- **Zeilen-Farbe**: 10 Farben (Primary, Secondary, Success, Danger, Warning, Info, Light, Dark, Active)
- **CSS-Klasse**: Eigene CSS-Klasse für diese Zeile

### HTML in Zellen

Wenn "HTML in Zellen erlauben" aktiviert ist, kannst du HTML-Code verwenden:

```html
<!-- In einer Zelle -->
<strong>Fetter Text</strong>

<a href="/kontakt">Link</a>

<span class="badge bg-success">Aktiv</span>

<ul>
  <li>Punkt 1</li>
  <li>Punkt 2</li>
</ul>
```

**Sicherheitshinweis:** Nur vertrauenswürdigen Redakteuren HTML-Zugriff geben!

### Margin & Padding

Wie bei allen WSC-Blöcken:
- **Margin** (Außenabstand): Oben, Unten, Links, Rechts (0-5, Auto)
- **Padding** (Innenabstand): Oben, Unten, Links, Rechts (0-5)

### Erweiterte Optionen

- **CSS-Klasse**: Zusätzliche CSS-Klasse für den Wrapper
- **HTML-ID**: ID-Attribut für den Wrapper (z.B. für Anker-Links)

## Beispiele

### Beispiel 1: Einfache Mitarbeiter-Liste

**Konfiguration:**
- Tabellen-Stil: Striped + Hover
- Responsive: Ja
- HTML in Zellen: Nein

**Header:**
```
Name | Abteilung | Email | Telefon
```

**Zeilen:**
```
Max Mustermann    | IT           | max@firma.de      | 0123-456789
Anna Schmidt      | Marketing    | anna@firma.de     | 0123-456790
Tom Weber         | Vertrieb     | tom@firma.de      | 0123-456791
```

### Beispiel 2: Produkt-Vergleichstabelle

**Konfiguration:**
- Tabellen-Stil: Bordered + Small
- Dunkler Header: Ja
- HTML in Zellen: Ja

**Header:**
```
Feature | Basic | Professional | Enterprise
```

**Zeilen:**
```
Benutzer                | 5          | 25                        | Unbegrenzt
Speicher                | 10 GB      | 100 GB                    | 1 TB
Support                 | Email      | Email + Telefon           | 24/7 Premium
Preis                   | 9€/Monat   | 29€/Monat                 | 99€/Monat
```

Mit HTML in der Preis-Zeile:
```
Zeile "Preis":
  Zelle 2: <strong>9€</strong>/Monat
  Zelle 3: <strong>29€</strong>/Monat
  Zelle 4: <span class="badge bg-primary">99€/Monat</span>
```

### Beispiel 3: Status-Tabelle mit Farben

**Konfiguration:**
- Tabellen-Stil: Hover
- HTML in Zellen: Ja

**Header:**
```
Projekt | Status | Fortschritt | Deadline
```

**Zeilen mit Farben:**
```
Zeile 1 (Zeilen-Farbe: Success):
  Website Relaunch | Abgeschlossen | 100% | 01.01.2024

Zeile 2 (Zeilen-Farbe: Warning):
  Mobile App | In Arbeit | 75% | 15.02.2024

Zeile 3 (Zeilen-Farbe: Danger):
  API Integration | Verzögert | 30% | 31.01.2024
```

### Beispiel 4: Responsive Tabelle mit vielen Spalten

**Konfiguration:**
- Responsive: Ja (wichtig!)
- Tabellen-Stil: Bordered + Small

**Header:**
```
ID | Name | Email | Telefon | Adresse | PLZ | Stadt | Land | Status
```

Auf Desktop: Normale Darstellung
Auf Mobile: Horizontaler Scrollbalken erscheint automatisch

## Best Practices

### ✅ Empfehlungen

1. **Header zuerst planen**
   - Überlege dir die Spaltenstruktur vor dem Anlegen
   - Header-Änderungen betreffen die gesamte Tabelle

2. **Konsistente Zellenzahl**
   - Füge für jede Zeile die gleiche Anzahl Zellen hinzu wie im Header
   - Nutze die Auto-Normalisierung als Sicherheitsnetz, nicht als Standard

3. **HTML sparsam einsetzen**
   - Aktiviere HTML nur wenn wirklich nötig
   - Verwende HTML nur für Formatierungen, nicht für Layout

4. **Responsive bei vielen Spalten**
   - Ab 6+ Spalten: Responsive immer aktivieren
   - Teste die Tabelle auf Mobile-Geräten

5. **Ausrichtung nutzen**
   - Zahlen: Rechts ausrichten
   - Text: Links ausrichten
   - Status/Badges: Zentriert

6. **Zeilen-Farben gezielt einsetzen**
   - Nicht jede Zeile einfärben (wird unübersichtlich)
   - Nur für wichtige Zeilen (Summen, Warnungen, Hervorhebungen)

### ❌ Vermeiden

1. **Zu viele Spalten**
   - Maximum: 10 Spalten (auf Desktop)
   - Lieber Daten aufteilen oder anders darstellen

2. **Zu lange Zellen-Inhalte**
   - Halte Texte kurz und prägnant
   - Lange Texte brechen das Layout

3. **Gemischte Zellenzahlen**
   - Vermeide bewusst unterschiedliche Zellenzahlen pro Zeile
   - Nutze Colspan nur über Custom CSS (nicht im Backend möglich)

4. **Nested Tables**
   - Keine Tabellen in Tabellen
   - Führt zu Accessibility-Problemen

## CSS-Anpassungen

### Sticky Header

Für lange Tabellen mit festem Header:

```css
.table-sticky-header thead th {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: white;
    box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.1);
}
```

Im Block-Einstellung: CSS-Klasse = `table-sticky-header`

### Fixed First Column

Erste Spalte fixieren beim horizontalen Scrollen:

```css
.table-fixed-first-col th:first-child,
.table-fixed-first-col td:first-child {
    position: sticky;
    left: 0;
    background-color: white;
    z-index: 5;
}
```

Im Block-Einstellung: CSS-Klasse = `table-fixed-first-col`

### Eigene Tabellen-Variante

```css
/* Eigene Farb-Variante */
.table-custom {
    background-color: #f8f9fa;
}

.table-custom thead {
    background-color: #343a40;
    color: white;
}

.table-custom tbody tr:hover {
    background-color: #e9ecef;
}
```

Im Block-Einstellung: CSS-Klasse = `table-custom`

## Browser-Kompatibilität

### Unterstützte Browser
- Chrome/Edge (alle aktuellen Versionen)
- Firefox (alle aktuellen Versionen)
- Safari (alle aktuellen Versionen)
- Opera (alle aktuellen Versionen)

### Bootstrap 5 Voraussetzung
Die Tabellen-Styles basieren auf Bootstrap 5. Stelle sicher, dass Bootstrap 5 in deinem Projekt eingebunden ist.

## Accessibility

### Barrierefreiheit
- ✅ Semantische HTML-Tabelle (`<table>`, `<thead>`, `<tbody>`)
- ✅ Screen-Reader können Tabellenstruktur erkennen
- ✅ Keyboard-Navigation durch Zellen
- ✅ Optional: Caption für Tabellenbeschreibung

### Empfehlungen
- Verwende Caption für komplexe Tabellen
- Erste Zeile sollte immer Header sein (keine Daten-Zeile als erste)
- Halte die Tabellenstruktur einfach und logisch
- Bei sehr großen Tabellen: Alternative Darstellung für Screen-Reader erwägen

## Fehlerbehebung

### Tabelle wird nicht angezeigt
- Cache geleert? `bin/console cache:clear`
- Mindestens eine Header-Zelle vorhanden?
- Block im Backend hinzugefügt?

### Spaltenanzahl stimmt nicht
- **Prüfe den Header**: Der Header definiert die Spaltenanzahl
- Zähle die Header-Zellen: Das ist die Anzahl der Spalten
- Body-Zeilen werden auf diese Anzahl normalisiert

### HTML wird nicht gerendert
- "HTML in Zellen erlauben" aktiviert?
- Überprüfe die HTML-Syntax (muss valide sein)

### Responsive Scrollbar fehlt
- "Responsive" in den Einstellungen aktiviert?
- Browser-Cache geleert?

### Styling funktioniert nicht
- Bootstrap 5 eingebunden?
- Optional: wsc-table.css eingebunden?
- CSS-Spezifität prüfen

### Zeile hat zu viele/zu wenige Spalten

**Das ist kein Fehler - das ist ein Feature!**

Das Template normalisiert automatisch:
- Zu wenig Zellen → Rest wird leer angezeigt
- Zu viele Zellen → Überschüssige werden ignoriert

Wenn du das nicht möchtest:
1. Gehe in die Zeile im Backend
2. Passe die Zellenzahl an die Header-Anzahl an

## Performance

### Optimierungen
- ✅ Reine HTML/CSS (kein JavaScript erforderlich)
- ✅ Keine externe Dependencies (außer Bootstrap 5)
- ✅ Schlankes Markup
- ✅ Responsive Images möglich (bei Bildern in Zellen)

### Best Practices
- Nicht mehr als 100 Zeilen pro Tabelle
- Bei großen Datenmengen: Pagination erwägen
- Bilder in Zellen: Komprimiert und optimiert hochladen

## Changelog

### Version 1.0.0 (2024)
- ✨ Initial Release
- ✅ Flexible Header/Body Struktur
- ✅ "Header ist Master"-Normalisierung
- ✅ Bootstrap 5 Tabellen-Styles
- ✅ HTML in Zellen (optional)
- ✅ Responsive Wrapper
- ✅ Zeilen-Farben
- ✅ Dunkler Header
- ✅ Caption Support
- ✅ CSS-Klassen auf beiden Ebenen (Tabelle + Zeilen)
- ✅ Margin/Padding Kontrolle
- ✅ Print-Styles
- ✅ Accessibility-Features

## Credits

Entwickelt für Sulu CMS mit Bootstrap 5.

**Technologie-Stack:**
- Sulu CMS
- Bootstrap 5
- Twig Templating
- Moderne HTML5 Tables

## Lizenz

Dieses Projekt ist Teil der WSC Theme Sulu Templates.

---

**Fragen oder Probleme?** Erstelle ein Issue im Repository oder kontaktiere den Support.
