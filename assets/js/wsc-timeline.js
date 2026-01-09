/**
 * WSC Timeline - Vanilla JavaScript Animation Controller
 *
 * Verwendet die moderne Intersection Observer API für performante
 * Scroll-Animationen ohne jQuery-Abhängigkeit.
 *
 * Features:
 * - FadeIn-Animationen beim Scrollen
 * - Progressive Enhancement (funktioniert auch ohne JS)
 * - Unterstützt mehrere Timeline-Instanzen pro Seite
 * - Performant durch Intersection Observer
 * - Konfigurierbar über data-attributes
 */

(function() {
    'use strict';

    /**
     * Timeline Animation Controller
     */
    class TimelineAnimationController {
        /**
         * @param {HTMLElement} wrapper - Timeline Wrapper Element
         */
        constructor(wrapper) {
            this.wrapper = wrapper;
            this.animationEnabled = wrapper.dataset.animation === 'true';
            this.items = Array.from(wrapper.querySelectorAll('.wsc-timeline-animate'));
            this.observer = null;

            // Nur initialisieren wenn Animation aktiviert ist
            if (this.animationEnabled && this.items.length > 0) {
                this.init();
            } else {
                // Wenn Animation deaktiviert, alle Items direkt sichtbar machen
                this.items.forEach(item => {
                    item.classList.add('wsc-timeline-visible');
                });
            }
        }

        /**
         * Initialisiert den Intersection Observer
         */
        init() {
            // Prüfe ob Intersection Observer verfügbar ist (Browser-Support)
            if (!('IntersectionObserver' in window)) {
                // Fallback: Alle Items sofort anzeigen
                this.showAllItems();
                return;
            }

            // Observer Optionen
            const options = {
                root: null, // viewport
                rootMargin: '0px 0px -100px 0px', // Trigger etwas früher
                threshold: 0.1 // 10% des Elements muss sichtbar sein
            };

            // Observer erstellen
            this.observer = new IntersectionObserver((entries) => {
                this.handleIntersection(entries);
            }, options);

            // Alle Timeline-Items beobachten
            this.items.forEach(item => {
                this.observer.observe(item);
            });
        }

        /**
         * Handler für Intersection Observer Callbacks
         * @param {IntersectionObserverEntry[]} entries
         */
        handleIntersection(entries) {
            entries.forEach(entry => {
                // Wenn Element ins Viewport kommt
                if (entry.isIntersecting) {
                    // Verzögerung für stufenweise Animation
                    const delay = this.calculateDelay(entry.target);

                    setTimeout(() => {
                        entry.target.classList.add('wsc-timeline-visible');
                    }, delay);

                    // Item nicht mehr beobachten (Animation nur einmal)
                    this.observer.unobserve(entry.target);
                }
            });
        }

        /**
         * Berechnet die Verzögerung für stufenweise Animationen
         * @param {HTMLElement} item
         * @returns {number} Verzögerung in Millisekunden
         */
        calculateDelay(item) {
            const index = this.items.indexOf(item);
            // Jedes Item 100ms versetzt animieren (max 500ms)
            return Math.min(index * 100, 500);
        }

        /**
         * Zeigt alle Items ohne Animation (Fallback)
         */
        showAllItems() {
            this.items.forEach(item => {
                item.classList.add('wsc-timeline-visible');
            });
        }

        /**
         * Cleanup: Observer disconnecten
         */
        destroy() {
            if (this.observer) {
                this.observer.disconnect();
                this.observer = null;
            }
        }
    }

    /**
     * Initialisiert alle Timeline-Instanzen auf der Seite
     */
    function initTimelineAnimations() {
        const wrappers = document.querySelectorAll('.wsc-timeline-wrapper');
        const controllers = [];

        wrappers.forEach(wrapper => {
            const controller = new TimelineAnimationController(wrapper);
            controllers.push(controller);
        });

        // Controllers im globalen Scope speichern für manuelles Cleanup (optional)
        window.wscTimelineControllers = controllers;
    }

    /**
     * Auto-Initialize bei DOM Ready
     */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTimelineAnimations);
    } else {
        // DOM ist bereits geladen
        initTimelineAnimations();
    }

    /**
     * Re-Initialize Funktion für dynamisch geladene Inhalte
     * Kann von außen aufgerufen werden: window.wscTimelineReinit()
     */
    window.wscTimelineReinit = function() {
        // Alte Controller cleanupen
        if (window.wscTimelineControllers) {
            window.wscTimelineControllers.forEach(ctrl => ctrl.destroy());
        }
        // Neu initialisieren
        initTimelineAnimations();
    };

})();
